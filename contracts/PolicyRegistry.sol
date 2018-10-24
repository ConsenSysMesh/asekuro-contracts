pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * Based on Dharma's DebtRegistry (https://github.com/dharmaprotocol/charta/blob/master/contracts/DebtRegistry.sol)
 * The PolicyRegistry maintains the recorded terms of a policy bound through Asekuro.
 * Inserting a new Entry should only be called by AsekuroBroker.
 */
contract PolicyRegistry is Pausable {
    using SafeMath for uint;

    struct Entry {
        address version;
        address carrier;
        address resolver;
        address underwriter;
        uint underwriterRiskRating;
        address policyTemplate;
        bytes32[3] policyTemplateParameters;
        uint bindingBlockTimestamp;
    }

    // map policyIds to entries
    mapping (bytes32 => Entry) internal registry;

    // maps insured address to list of policies
    mapping (address => bytes32[]) internal insuredToPolicies;

    event LogInsertEntry(
        bytes32 indexed policyId,
        address indexed insured,
        address indexed carrier,
        address resolver,
        address underwriter,
        uint underwriterRiskRating,
        address policyTemplate,
        bytes32[3] policyTemplateParameters
    );

    function insert(
        address _version,
        address _carrier,
        address _insured,
        address _resolver,
        address _underwriter,
        uint _underwriterRiskRating,
        address _policyTemplate,
        bytes32[3] _policyTemplateParameters,
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
            _policyTemplate,
            _policyTemplateParameters,
            block.timestamp
        );

        bytes32 policyId = _getPolicyId(entry, _insured, _salt);

        // Ensure this entry is new
        require(registry[policyId].carrier == address(0));

        registry[policyId] = entry;

        emit LogInsertEntry(
            policyId,
            _insured,
            entry.carrier,
            entry.resolver,
            entry.underwriter,
            entry.underwriterRiskRating,
            entry.policyTemplate,
            entry.policyTemplateParameters
        );

        return policyId;
    }

    function get(bytes32 policyId)
        public
        view
        returns (address, address, address, address, uint, address, bytes32[3], uint)
    {
        // Tip: instantiate struct in memory to reduce call stack depth issues
        Entry memory entry = registry[policyId];
        return (
            entry.version,
            entry.carrier,
            entry.resolver,
            entry.underwriter,
            entry.underwriterRiskRating,
            entry.policyTemplate,
            entry.policyTemplateParameters,
            entry.bindingBlockTimestamp
        );
    }

    function getPolicyDetails(
        bytes32 policyId
    )
        public
        view
        returns (address, bytes32[3])
    {
        return (
            registry[policyId].policyTemplate,
            registry[policyId].policyTemplateParameters
        );
    }

    function getPolicyTemplate(
        bytes32 policyId
    )
        public
        view
        returns (address)
    {
        return registry[policyId].policyTemplate;
    }

    function getPolicyTemplateParameters(
        bytes32 policyId
    )
        public
        view
        returns (bytes32[3])
    {
        return registry[policyId].policyTemplateParameters;
    }

    function getBindingBlockTimestamp(
        bytes32 policyId
    )
        public
        view
        returns (uint timestamp)
    {
        return registry[policyId].bindingBlockTimestamp;
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
                _entry.policyTemplate,
                _entry.policyTemplateParameters,
                _salt
            )
        );
    }

}