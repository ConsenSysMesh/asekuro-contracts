const AsekuroHub = artifacts.require('./AsekuroHub.sol');

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

contract('AsekuroHub', function(accounts) {
    let asekuroHub;

    beforeEach(async function() {
        asekuroHub = await AsekuroHub.new();
    });

    it('should create AsekuroHub', async function() {
        assert.notEqual(NULL_ADDRESS, asekuroHub.address);
    });
})