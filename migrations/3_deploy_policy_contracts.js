module.exports = (deployer, network, accounts) => {
    const ContractRegistry = artifacts.require("ContractRegistry");
    const RentersPolicy = artifacts.require("RentersPolicy");

    deployer.deploy(RentersPolicy, ContractRegistry.address);
}