const AsekuroBroker = artifacts.require('./AsekuroBroker.sol');
const PolicyToken = artifacts.require('./PolicyToken.sol');

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

contract('AsekuroBroker', function(accounts) {
    let asekuroBroker;

    beforeEach(async function() {
        asekuroBroker = await AsekuroBroker.new();
    });

    it('should create AsekuroBroker', async function() {
        assert.notEqual(NULL_ADDRESS, asekuroBroker.address);
    });

    it('should set Policy Token address', async function() {
        assert.equal(NULL_ADDRESS, await asekuroBroker.policyToken.call());

        let policyToken = await PolicyToken.new(NULL_ADDRESS); // create dummy policy token
        await asekuroBroker.setPolicyToken(policyToken.address);

        let updatedPolicyTokenAddr = await asekuroBroker.policyToken.call();

        assert.equal(policyToken.address, updatedPolicyTokenAddr);
    });

    it('should fill a valid policy order', async function() {
        // TODO
    });
})