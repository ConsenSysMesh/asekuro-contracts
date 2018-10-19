pragma solidity ^0.4.18;

import "./PolicyRegistry.sol";

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol";

contract PolicyToken is ERC721Full, Pausable {

    PolicyRegistry public registry;

    /**
     * Constructor sets the address of the policy registry
     */
    constructor(address _registry)
        public
        ERC721Full("PolicyToken", "PLCY")
    {
        registry = PolicyRegistry(_registry);
    }

    /**
     * Mints a unique policy token and inserts Declaration into 
     * the policy registry if authorized to do so
     */
    function create(
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
        returns (uint _tokenId)
    {
        bytes32 entryHash = registry.insert(
            _version,
            _carrier,
            _insured,
            _resolver,
            _underwriter,
            _underwriterRiskRating,
            _policyTemplate,
            _policyTemplateParameters,
            _salt
        );

        super._mint(_carrier, uint(entryHash));

        return uint(entryHash);
    }

}