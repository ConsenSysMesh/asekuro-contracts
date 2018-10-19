// import { BigNumber } from 'bignumber.js';
const { BigNumber } = require('bignumber.js');

const DUMMY_TOKEN_SUPPLY = new BigNumber(1000 * 10 ** 18);
const NUM_INITIAL_BALANCE_HOLDERS = 10;

const tokenList = [
    {
        "address": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
        "name": "Dai Stablecoin",
        "symbol": "DAI",
        "decimals": 18
    },
    {
        "address": "0xe94327d07fc17907b4db788e5adf2ed424addff6",
        "name": "Augur REP",
        "symbol": "REP",
        "decimals": 18
    },
    {
        "address": "0xe41d2489571d322189246dafa5ebde1f4699f498",
        "name": "ZRX",
        "symbol": "ZRX",
        "decimals": 18
    },
    {
        "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
        "name": "Maker Dao",
        "symbol": "MKR",
        "decimals": 18
    },
    {
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "name": "Canonical Wrapped Ether",
        "symbol": "WETH",
        "decimals": 18
    }
];

async function generateDummyTokens(network, DummyToken, initialTokenHolders) {
    return Promise.all(
        tokenList.map(async (token) => {
            const { name, symbol, decimals } = token;

            let address;

            const dummyToken = await DummyToken.new(
                name,
                symbol,
                decimals,
                DUMMY_TOKEN_SUPPLY,
                initialTokenHolders
            );

            address = dummyToken.address;
            console.log('   > created token: ' + name + ' ' + address);

            return {
                name,
                symbol,
                address,
                decimals
            }
        })
    );
}

async function configureTokenRegistry(network, accounts, TokenRegistry, DummyToken) {
    const OWNER = accounts[0];

    const tokenRegistry = await TokenRegistry.deployed();
    let tokens;

    switch (network) {
        // todo add more
        default:
            const initialTokenHodlers = accounts.slice(0, NUM_INITIAL_BALANCE_HOLDERS);
            tokens = await generateDummyTokens(network, DummyToken, initialTokenHodlers);
    }

    await Promise.all(
        tokens.map(async (token) => {
            const { symbol, address, decimals, name } = token;

            return tokenRegistry.setTokenAttributes(symbol, address, name, decimals, {
                from: OWNER
            });
        })
    );
}

module.exports = {
    configureTokenRegistry
};