pragma solidity ^0.4.24;

import "../ContractRegistry.sol";
import "../PolicyTemplateContract.sol";
import "../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract RentersPolicy {
    using SafeMath for uint;

    enum PeriodUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }

    enum LimitType { 
        PERSONAL_LIABILITY,
        PERSONAL_PROPERTY,
        LOSS_OF_USE,
        MEDICAL_OTHERS
    }

    struct RentersParams {
        address claimTokenAddress;
        address premiumTokenAddress;
        uint[4] limits; // denominated in claim tokens
        uint policyStartUnixTimestamp;
        uint policyEndUnixTimestamp;
        PeriodUnitType periodUnitType; // ex. MONTHS
        uint period; // ex. 12
        uint deductible; // ex. 250
        uint premium; // ex. 10
    }

    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;
    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;
    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;
    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;
    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;

    mapping (bytes32 => uint) public valuePaid;

    ContractRegistry public contractRegistry;

    event LogRentersPolicyStart(
        bytes32 indexed policyId,
        address indexed claimToken,
        uint indexed periodUnitType,
        uint[4] limits,
        uint premium,
        uint period
    );

    event LogRegisterPremiumPayment(
        bytes32 policyId,
        address payer,
        address beneficiary,
        uint256 unitsOfPayment,
        address tokenAddress
    );

    modifier onlyRouter() {
        require(msg.sender == address(contractRegistry.premiumRouter()));
        _;
    }

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
        returns (bool _success)
    {
        address policyTemplate = contractRegistry.policyRegistry().getPolicyTemplate(policyId);

        RentersParams memory params = unpackParametersForPolicyId(policyId);

        if (policyTemplate == address(this)) {
            emit LogRentersPolicyStart(
                policyId,
                params.claimTokenAddress,
                uint(params.periodUnitType),
                params.limits,
                params.premium,
                params.period
            );

            return true;
        }

        return false;
    }

    function registerPremiumPayment(
        bytes32 policyId,
        address payer,
        address beneficiary,
        uint256 unitsOfPayment,
        address tokenAddress
    )
        public
        onlyRouter
        returns (bool _success)
    {
        RentersParams memory params = unpackParametersForPolicyId(policyId);

        if (tokenAddress == params.premiumTokenAddress) {
            valuePaid[policyId] = valuePaid[policyId].add(unitsOfPayment);

            LogRegisterPremiumPayment(
                policyId,
                payer,
                beneficiary,
                unitsOfPayment,
                tokenAddress
            );

            return true;
        }

        return false;
    }

    function getExpectedPremiumPaid(
        bytes32 policyId,
        uint256 timestamp
    )
        public
        view
        returns (uint _expectedPremiumValue)
    {
        RentersParams memory params = unpackParametersForPolicyId(policyId);
        uint totalPremium = calculateTotalPremium(params);

        if (timestamp <= params.policyStartUnixTimestamp) {
            return 0;
        } else if (timestamp >= params.policyEndUnixTimestamp) {
            return totalPremium;
        } else {
            uint numUnits = numPeriodUnitsForTimestamp(timestamp, params);
            return totalPremium.mul(numUnits).div(params.period);
        }
    }

    function getPremiumPaidToDate(bytes32 policyId)
        public
        view
        returns (uint _valuePaid)
    {
        return valuePaid[policyId];
    }

    function unpackParametersForPolicyId(
        bytes32 policyId
    )
        internal
        returns (RentersParams)
    {
        bytes32[3] memory parameters = contractRegistry.policyRegistry().getPolicyTemplateParameters(policyId);

        // To avoid stack too deep, use uint[]
        // uintParams[0] - claimTokenIndex;
        // uintParams[1] - premiumTokenIndex;
        // uintParams[2] -  premium;
        // uintParams[3] - deductible;
        // uintParams[4] - rawPeriodUnitType;
        // uintParams[5] - period;
        uint[6] memory uintParams = unpackParametersFromBytes(parameters);

        // TODO lookup token address
        address claimTokenAddr = contractRegistry.tokenRegistry().getTokenAddressByIndex(uintParams[0]);
        address premiumTokenAddr = contractRegistry.tokenRegistry().getTokenAddressByIndex(uintParams[1]);

        uint[4] memory limits = unpackLimitsFromBytes(parameters);
        
        PeriodUnitType periodUnitType = PeriodUnitType(uintParams[4]);

        uint bindingBlockTimestamp = contractRegistry.policyRegistry().getBindingBlockTimestamp(policyId);
        uint policyLengthInSeconds = uintParams[5].mul(getPeriodUnitLengthInSeconds(periodUnitType));
        uint policyEndUnixTimestamp = policyLengthInSeconds.add(bindingBlockTimestamp);

        RentersParams memory policyParams = RentersParams({
            claimTokenAddress: claimTokenAddr,
            premiumTokenAddress: premiumTokenAddr,
            limits: limits,
            policyStartUnixTimestamp: bindingBlockTimestamp,
            policyEndUnixTimestamp: policyEndUnixTimestamp,
            periodUnitType: periodUnitType,
            period: uintParams[5],
            premium: uintParams[2],
            deductible: uintParams[3]
        });

        return policyParams;
    }

    function unpackParametersFromBytes(bytes32[3] parameters)
        public
        pure
        returns (uint[6])
    {
        // The first byte of the parameters encodes the claim token's index in the
        // token registry.
        bytes32 claimTokenIndexShifted =
            parameters[0] & 0xff00000000000000000000000000000000000000000000000000000000000000;
        // The subsequent byte encodes the premium token's index in the token registry
        bytes32 premiumTokenIndexShifted =
            parameters[0] & 0x00ff000000000000000000000000000000000000000000000000000000000000;
        // The subsequent 12 bytes of the parameters encode the premium.
        bytes32 premiumShifted =
            parameters[0] & 0x0000ffffffffffffffffffffffff000000000000000000000000000000000000;
        // The subsequent 12 bytes of the parameters encode the deductible.
        bytes32 deductibleShifted =
            parameters[0] & 0x0000000000000000000000000000ffffffffffffffffffffffff000000000000;
        // The subsequent 4 bits (half byte) encode the period unit type code.
        bytes32 periodUnitTypeShifted =
            parameters[0] & 0x0000000000000000000000000000000000000000000000000000f00000000000;
        // The subsequent 2 bytes encode the period, as denominated in
        // the encoded period units.
        bytes32 periodShifted =
            parameters[0] & 0x00000000000000000000000000000000000000000000000000000ffff0000000;

        // Note that the remaining 28 bits are free for future usage

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
        premium	                        18                  144
        deductible                       6                   48
        periodUnitType                   5.5                 44
        period                           3.5                 28
        */

        return ([
            bitShiftRight(claimTokenIndexShifted, 248),
            bitShiftRight(premiumTokenIndexShifted, 240),
            bitShiftRight(premiumShifted, 144),
            bitShiftRight(deductibleShifted, 48),
            bitShiftRight(periodUnitTypeShifted, 44),
            bitShiftRight(periodShifted, 28)
        ]);
    }

    function unpackLimitsFromBytes(bytes32[3] parameters)
        public
        pure
        returns (uint[4] limits)
    {
        // The limits are currently encoded in parameters[1] and [2]

        // The first 12 bytes of parameters[1] encode the personal liability limit
        bytes32 personalLiabilityLimitShifted =
            parameters[1] & 0xffffffffffffffffffffffff0000000000000000000000000000000000000000;
        // The subsequent 12 bytes of parameters[1] encode the personal property limit
        bytes32 personalPropertyLimitShifted =
            parameters[1] & 0x000000000000000000000000ffffffffffffffffffffffff0000000000000000;
        
        // the first 12 bytes of parameters[2] encode the loss of use limit
        bytes32 lossOfUseShifted =
            parameters[2] & 0xffffffffffffffffffffffff0000000000000000000000000000000000000000;
        // the subsequent 12 bytes of parameter[2] encode the medical costs for others limit
        bytes32 medicalOthersLimitShifted =
            parameters[1] & 0x000000000000000000000000ffffffffffffffffffffffff0000000000000000;

        // parameters[1] and [2] both contain an extra 160 bits (8 bytes), 
        // this will likely continue to evolve

        /*
        Bit shift left each of these values to that the 32 byte uint correctly
        represents the value that was originally packed.

        Sanity helper: Location (bytes) = Location (bits) / 8

                                        Location (bytes)	Location (bits)
                                        32                  256
        personalLiabilityLimit	        20	                160
        personalPropertyLimit            8                   64

        lossOfUseLimit	                20	                160
        medicalOthersLimit               8                   64
        */
        
        return ([
            bitShiftRight(personalLiabilityLimitShifted, 160),
            bitShiftRight(personalPropertyLimitShifted, 64),
            bitShiftRight(lossOfUseShifted, 160),
            bitShiftRight(medicalOthersLimitShifted, 64)
        ]);
    }

    function bitShiftRight(bytes32 value, uint amount)
        internal
        pure
        returns (uint)
    {
        return uint(value) / 2 ** amount;
    }

    function numPeriodUnitsForTimestamp(
        uint timestamp,
        RentersParams params
    )
        internal
        returns (uint units)
    {
        uint delta = timestamp.sub(params.policyStartUnixTimestamp);
        uint premiumUnitLengthInSeconds = getPeriodUnitLengthInSeconds(params.periodUnitType);
        return delta.div(premiumUnitLengthInSeconds);
    }

    // Premium * Period = Total Premium
    function calculateTotalPremium(
        RentersParams params
    )
        internal
        returns (uint _totalPremium)
    {
        return params.premium.mul(params.period);
    }

    function getPolicyEndTimestamp(
        bytes32 _policyId
    )
        public
        view
        returns (uint)
    {
        RentersParams memory params = unpackParametersForPolicyId(_policyId);
        return params.policyEndUnixTimestamp;
    }

    function getPeriodUnitLengthInSeconds(PeriodUnitType periodUnitType)
        internal
        pure
        returns (uint _periodUnitLengthInSeconds)
    {
        if (periodUnitType == PeriodUnitType.HOURS) {
            return HOUR_LENGTH_IN_SECONDS;
        } else if (periodUnitType == PeriodUnitType.DAYS) {
            return DAY_LENGTH_IN_SECONDS;
        } else if (periodUnitType == PeriodUnitType.WEEKS) {
            return WEEK_LENGTH_IN_SECONDS;
        } else if (periodUnitType == PeriodUnitType.MONTHS) {
            return MONTH_LENGTH_IN_SECONDS;
        } else if (periodUnitType == PeriodUnitType.YEARS) {
            return (YEAR_LENGTH_IN_SECONDS);
        } else {
            revert();
        }
    }
    
}