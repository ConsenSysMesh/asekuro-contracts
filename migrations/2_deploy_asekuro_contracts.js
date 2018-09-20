const AsekuroHub = artifacts.require('./AsekuroHub.sol');
const PolicyRegistry = artifacts.require('./PolicyRegistry.sol');
const PolicyToken = artifacts.require('./PolicyToken.sol');
const PremiumRouter = artifacts.require('./PremiumRouter.sol');
const ContractRegistry = artifacts.require('./ContractRegistry.sol');

module.exports = function(deployer) {
    return deployer.deploy(PolicyRegistry).then(async () => {
        await deployer.deploy(PolicyToken, PolicyRegistry.address);
        await deployer.deploy(PremiumRouter, PolicyRegistry.address);
        await deployer.deploy(AsekuroHub);
        await deployer.deploy(
            ContractRegistry,
            AsekuroHub.address,
            PolicyRegistry.address,
            PolicyToken.address,
            PremiumRouter.address
        );
    });
}