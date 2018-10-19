## Asekuro - insurance reimagined
Asekuro is a protocol for facilitating coordination of participants involved in the distribution of blockchain-based insurance products.

Based on 0x and Dharma, Asekuro utilizes a similar order-relay model for signaling intent and brokering insurance products. "PolicyTypes" offer developers a flexible interface to model virtually any type of smart-contract based insurance product (trustless and otherwise).

A messaging specification defines the two main order types used within Asekuro: Applications (ApplicationOrders), and Quotes (PolicyOrders). Applications include information about an insurance applicant that can be reviewed by an insurance provider. Additionally these Applications can be posted to "Relayers" which effectively host "order books" of insurance applications. Quotes created by providers include exact terms for an insurance policy and can be instantly "bound" by an applicant, kicking off a series of internal contract calls resulting in a new entry made in the public policy registry contract, the minting of a NFT Policy token, and ultimately the activation of the policy.

Asekuro utilizes truffle for testing and deployment. In addition this repo contains generated Typescript contract artifacts for use with web3 and other js based applications.

---

Development of Asekuro is currently on-going and changes of the protocol are to be expected.


## Get started
Install dependencies
```
yarn install
```

Deploy contracts
```
truffle migrate
```

## Testing
```
truffle test
```
