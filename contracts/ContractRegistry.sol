pragma solidity ^0.4.18;

import "./AsekuroBroker.sol";
import "./PolicyRegistry.sol";
import "./PolicyToken.sol";
import "./PremiumRouter.sol";
import "./TokenRegistry.sol";

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ContractRegistry is Ownable {

    AsekuroBroker public asekuroBroker;
    PolicyRegistry public policyRegistry;
    PolicyToken public policyToken;
    PremiumRouter public premiumRouter;
    TokenRegistry public tokenRegistry;
    
    constructor(
        address _asekuroBroker,
        address _policyRegistry,
        address _policyToken,
        address _premiumRouter,
        address _tokenRegistry
    )
        public
    {
        asekuroBroker = AsekuroBroker(_asekuroBroker);
        policyRegistry = PolicyRegistry(_policyRegistry);
        policyToken = PolicyToken(_policyToken);
        premiumRouter = PremiumRouter(_premiumRouter);
        tokenRegistry = TokenRegistry(_tokenRegistry);
    }
}