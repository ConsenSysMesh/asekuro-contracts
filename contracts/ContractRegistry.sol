pragma solidity ^0.4.18;

import "./AsekuroHub.sol";
import "./PolicyRegistry.sol";
import "./PolicyToken.sol";
import "./PremiumRouter.sol";

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ContractRegistry is Ownable {

    AsekuroHub public asekuroHub;
    PolicyRegistry public policyRegistry;
    PolicyToken public policyToken;
    PremiumRouter public premiumRouter;
    
    constructor(
        address _asekuroHub,
        address _policyRegistry,
        address _policyToken,
        address _premiumRouter
    )
        public
    {
        asekuroHub = AsekuroHub(_asekuroHub);
        policyRegistry = PolicyRegistry(_policyRegistry);
        policyToken = PolicyToken(_policyToken);
        premiumRouter = PremiumRouter(_premiumRouter);
    }
}