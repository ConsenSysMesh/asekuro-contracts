pragma solidity ^0.4.18;

import "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract PolicyRegistry is Pausable {
    using SafeMath for uint;

    struct Entry {
        address version;
        address carrier;
        address resolver;
        address underwriter;
        uint underwriterRiskRating;
        address policyContract;
        bytes32 policyContractParameters;
        uint issuanceBlockTimestamp;
    }

    mapping (bytes32 => Entry) internal registry;

    event LogInsertEntry(
        bytes32 indexed policyId,
        address indexed carrier,
        address resolver,
        address indexed underwriter,
        uint underwriterRiskRating,
        address policyContract,
        bytes32 policyContractParameters
    );

    function insert(
        address _version,
        address _carrier,
        address _insured,
        address _resolver,
        address _underwriter,
        uint _underwriterRiskRating,
        address _policyContract,
        bytes32 _policyContractParameters,
        uint _salt
    )
        public
        whenNotPaused
        returns (bytes32 _policyId)
    {
        Entry memory entry = Entry(
            _version,
            _carrier,
            _resolver,
            _underwriter,
            _underwriterRiskRating,
            _policyContract,
            _policyContractParameters,
            block.timestamp
        );

        bytes32 policyId = _getPolicyId(entry, _insured, _salt);

        registry[policyId] = entry;

        emit LogInsertEntry(
            policyId,
            entry.carrier,
            entry.resolver,
            entry.underwriter,
            entry.underwriterRiskRating,
            entry.policyContract,
            entry.policyContractParameters
        );

        return policyId;
    }

    // TODO call stack too deep to return 'version'
    function get(bytes32 policyId)
        public
        view
        returns (address, address, address, uint, address, bytes32, uint)
    {
        return (
            registry[policyId].carrier,
            registry[policyId].resolver,
            registry[policyId].underwriter,
            registry[policyId].underwriterRiskRating,
            registry[policyId].policyContract,
            registry[policyId].policyContractParameters,
            registry[policyId].issuanceBlockTimestamp
        );
    }

    function getPolicyTerms(
        bytes32 policyId
    )
        public
        view
        returns (address, bytes32)
    {
        return (
            registry[policyId].policyContract,
            registry[policyId].policyContractParameters
        );
    }

    function getBindingBlockTimestamp(bytes32 policyId)
        public
        view
        returns (uint timestamp)
    {
        return registry[policyId].issuanceBlockTimestamp;
    }

    function getPolicyContract(
        bytes32 policyId
    )
        public
        view
        returns (address)
    {
        return registry[policyId].policyContract;
    }

    function getPolicyContractParameters(
        bytes32 policyId
    )
        public
        view
        returns (bytes32)
    {
        return registry[policyId].policyContractParameters;
    }

    function getCarrier(
        bytes32 policyId
    )
        public
        view
        returns (address)
    {
        return registry[policyId].carrier;
    }

    function _getPolicyId(Entry _entry, address _insured, uint _salt)
        internal
        pure
        returns (bytes32)
    {
        return keccak256(
            abi.encodePacked(
                _entry.version, 
                _insured,
                _entry.resolver,
                _entry.underwriter,
                _entry.underwriterRiskRating,
                _entry.policyContract,
                _entry.policyContractParameters,
                _salt
            )
        );
    }
}