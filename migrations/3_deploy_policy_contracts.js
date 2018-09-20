module.exports = (deployer, network, accounts) => {
    const ContractRegistry = artifacts.require("ContractRegistry");
    const SingleCoverageExamplePolicy = artifacts.require("./SingleCoverageExamplePolicy.sol");

    deployer.deploy(SingleCoverageExamplePolicy, ContractRegistry.address);
}