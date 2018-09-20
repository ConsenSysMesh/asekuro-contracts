pragma solidity ^0.4.18;

// import "../PolicyContract.sol";
import "../ContractRegistry.sol";
import "../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract SingleCoverageExamplePolicy {
    using SafeMath for uint;

    enum PremiumUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }

    struct SingleCoverageExampleParams {
        address claimTokenAddress;
        address premiumTokenAddress;
        uint coverageAmount;
        uint policyStartUnixTimestamp;
        uint policyEndUnixTimestamp;
        PremiumUnitType premiumUnitType;
        uint policyLengthInPremiumUnits;
        uint premiumRate;
    }

    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;
    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;
    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;
    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;
    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;

    mapping (bytes32 => uint) public valuePaid;

    ContractRegistry public contractRegistry;

    event LogSingleCoveragePolicyStart(
        bytes32 indexed policyId,
        address indexed claimToken,
        uint coverageAmount,
        uint premiumRate,
        uint indexed premiumUnitType,
        uint policyLengthInPremiumUnits
    );

    event LogRegisterPayment(
        bytes32 policyId,
        address payer,
        address beneficiary,
        uint256 unitsOfPayment,
        address tokenAddress
    );

    constructor(
        address _contractRegistry
    )
        public
    {
        contractRegistry = ContractRegistry(_contractRegistry);
    }

    function registerPolicyStart(
        bytes32 policyId,
        address insured
    )
        public
        returns (bool _sucess)
    {
        address policyContract;
        bytes32 policyContractParameters;

        (policyContract, policyContractParameters) = contractRegistry.policyRegistry().getPolicyTerms(policyId);

        uint claimTokenIndex;
        uint premiumTokenIndex;
        uint coverageAmount;
        uint premiumRate;
        uint premiumUnitType;
        uint policyLengthInPremiumUnits;

        (claimTokenIndex, premiumTokenIndex, coverageAmount, premiumRate, premiumUnitType, policyLengthInPremiumUnits) =
            unpackParametersFromBytes(policyContractParameters);

        // TODO retrieve correct token address

        // TODO perform validation

        if (policyContract == address(this)) {
            emit LogSingleCoveragePolicyStart(
                policyId,
                address(0), // TODO replace with token addr
                coverageAmount,
                premiumRate,
                premiumUnitType,
                policyLengthInPremiumUnits
            );

            return true;
        }

        return false;
    }

    function unpackParametersFromBytes(bytes32 parameters)
        public
        pure
        returns (
            uint _claimTokenIndex,
            uint _premiumTokenIndex,
            uint _coverageAmount,
            uint _premiumRate,
            uint _premiumUnitType,
            uint _policyLengthInPremiumUnits
        )
    {
        // The first byte of the parameters encodes the claim token's index in the
        // token registry.
        bytes32 claimTokenIndexShifted =
            parameters & 0xff00000000000000000000000000000000000000000000000000000000000000;
        // The subsequent byte encodes the premium token's index in the token registry
        bytes32 premiumTokenIndexShifted =
            parameters & 0x00ff000000000000000000000000000000000000000000000000000000000000;
        // The subsequent 12 bytes of the parameters encode the coverage amount.
        bytes32 coverageAmountShifted =
            parameters & 0x0000ffffffffffffffffffffffff000000000000000000000000000000000000;
        // The subsequent 3 bytes of the parameters encode the premium rate.
        bytes32 premiumRateShifted =
            parameters & 0x0000000000000000000000000000ffffff000000000000000000000000000000;
        // The subsequent 4 bits (half byte) encode the premium unit type code.
        bytes32 premiumUnitTypeShifted =
            parameters & 0x0000000000000000000000000000000000f00000000000000000000000000000;
        // The subsequent 2 bytes encode the policy length, as denominated in
        // the encoded premium units.
        bytes32 policyLengthInPremiumUnitsShifted =
            parameters & 0x00000000000000000000000000000000000ffff0000000000000000000000000;

        // Note that the remaining 108 bits are reserved for any parameters relevant to a
        // collateralized terms contracts.

        /*
        Bit shift left each of these values so that the 32-byte uint
        correctly represents the value that was originally packed
        into the 32 byte string.

        The below chart summarizes where in the 32 byte string each value
        terminates -- which indicates the extent to which each value must be bit
        shifted left.

        Sanity helper: Location (bytes) = Location (bits) / 8

                                        Location (bytes)	Location (bits)
                                        32                  256
        claimTokenIndex	                31	                248
        premiumTokenIndex               30                  240
        coverageAmount	                18                  144
        premiumRate                     15                  120
        premiumUnitType                 14.5                116
        policyLengthInPremiumUnits      12.5                100
        */

        return (
            bitShiftRight(claimTokenIndexShifted, 248),
            bitShiftRight(premiumTokenIndexShifted, 240),
            bitShiftRight(coverageAmountShifted, 144),
            bitShiftRight(premiumRateShifted, 120),
            bitShiftRight(premiumUnitTypeShifted, 116),
            bitShiftRight(policyLengthInPremiumUnitsShifted, 100)
        );
    }

    function bitShiftRight(bytes32 value, uint amount)
        internal
        pure
        returns (uint)
    {
        return uint(value) / 2 ** amount;
    }

    function unpackParamsForPolicyId(
        bytes32 policyId
    )
        internal
        returns (SingleCoverageExampleParams)
    {
        bytes32 parameters = contractRegistry.policyRegistry().getPolicyContractParameters(policyId);

        uint claimTokenIndex;
        uint premiumTokenIndex;
        uint coverageAmount;
        uint premiumRate;
        uint rawPremiumUnitType;
        uint policyLengthInPremiumUnits;

        (claimTokenIndex, premiumTokenIndex, coverageAmount, premiumRate, rawPremiumUnitType, policyLengthInPremiumUnits) = 
            unpackParametersFromBytes(parameters);

        // TODO Lookup claim and premium token addresses
        // address claimTokenAddress = address(0); // DAI
        // address premiumTokenAddress = address(0); // DAI

        // Ensure raw value being stored is valid 
        require(rawPremiumUnitType <= uint(PremiumUnitType.YEARS));

        PremiumUnitType premiumUnitType = PremiumUnitType(rawPremiumUnitType);

        // uint premiumUnitLengthInSeconds = getPremiumUnitLengthInSeconds(premiumUnitType);
        // TODO fix issuance vs binding language
        uint issuanceBlockTimestamp = contractRegistry.policyRegistry().getBindingBlockTimestamp(policyId);
        uint policyLengthInSeconds = policyLengthInPremiumUnits.mul(getPremiumUnitLengthInSeconds(premiumUnitType));
        uint policyEndUnixTimestamp = policyLengthInSeconds.add(issuanceBlockTimestamp);

        return SingleCoverageExampleParams({
            claimTokenAddress: address(0),
            premiumTokenAddress: address(0),
            coverageAmount: coverageAmount,
            policyStartUnixTimestamp: issuanceBlockTimestamp,
            policyEndUnixTimestamp: policyEndUnixTimestamp,
            premiumUnitType: premiumUnitType,
            policyLengthInPremiumUnits: policyLengthInPremiumUnits,
            premiumRate: premiumRate
        });
    }

    function getPolicyEndTimestamp(
        bytes32 _policyId
    )
        public
        view
        returns (uint)
    {
        SingleCoverageExampleParams memory params = unpackParamsForPolicyId(_policyId);
        return params.policyEndUnixTimestamp;
    }

    function getPremiumUnitLengthInSeconds(PremiumUnitType premiumUnitType)
        internal
        pure
        returns (uint _premiumUnitLengthInSeconds)
    {
        if (premiumUnitType == PremiumUnitType.HOURS) {
            return HOUR_LENGTH_IN_SECONDS;
        } else if (premiumUnitType == PremiumUnitType.DAYS) {
            return DAY_LENGTH_IN_SECONDS;
        } else if (premiumUnitType == PremiumUnitType.WEEKS) {
            return WEEK_LENGTH_IN_SECONDS;
        } else if (premiumUnitType == PremiumUnitType.MONTHS) {
            return MONTH_LENGTH_IN_SECONDS;
        } else if (premiumUnitType == PremiumUnitType.YEARS) {
            return (YEAR_LENGTH_IN_SECONDS);
        } else {
            revert();
        }
    }


}