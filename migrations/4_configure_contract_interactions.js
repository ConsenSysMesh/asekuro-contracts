module.exports = (deployer, network, accounts) => {
    const PolicyRegistry = artifacts.require("PolicyRegistry");
    const PolicyToken = artifacts.require("PolicyToken");
    const AsekuroHub = artifacts.require("AsekuroHub");

    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    return deployer.then(async () => {
        const registry = await PolicyRegistry.deployed();
        const token = await PolicyToken.deployed();
        const asekuro = await AsekuroHub.deployed();

        // set PolicyToken in AsekuroHub
        await asekuro.setPolicyToken(token.address);
    });
}