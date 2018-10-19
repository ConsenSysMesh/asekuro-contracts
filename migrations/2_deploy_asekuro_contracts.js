const { configureTokenRegistry } = require('./utils');

const AsekuroBroker = artifacts.require('./AsekuroBroker.sol');
const PolicyRegistry = artifacts.require('./PolicyRegistry.sol');
const PolicyToken = artifacts.require('./PolicyToken.sol');
const PremiumRouter = artifacts.require('./PremiumRouter.sol');
const ContractRegistry = artifacts.require('./ContractRegistry.sol');
const TokenRegistry = artifacts.require('./TokenRegistry.sol');
const DummyToken = artifacts.require("./DummyToken.sol");

module.exports = (deployer, network, accounts) => {
    return deployer.deploy(PolicyRegistry).then(async () => {
        await deployer.deploy(PolicyToken, PolicyRegistry.address);
        await deployer.deploy(PremiumRouter, PolicyRegistry.address);
        await deployer.deploy(AsekuroBroker);

        await deployer.deploy(TokenRegistry).then(async () => {
            await configureTokenRegistry(network, accounts, TokenRegistry, DummyToken);
        });

        await deployer.deploy(
            ContractRegistry,
            AsekuroBroker.address,
            PolicyRegistry.address,
            PolicyToken.address,
            PremiumRouter.address,
            TokenRegistry.address,
        );
    });
}