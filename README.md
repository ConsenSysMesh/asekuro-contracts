## Asekuro - insurance reimagined
Asekuro is a protocol for facilitating coordination of participants involved in the distribution of blockchain-based insurance products.
---
> :warning: WIP
Development of Asekuro is currently on-going and changes of the protocol are to be expected.

Based on [0x](https://0xproject.com/) and [Dharma](https://dharma.io/), Asekuro utilizes a similar order-relay model for signaling intent and brokering insurance products. "PolicyTypes" offer developers a flexible interface to model virtually any type of smart-contract based insurance product (trustless and otherwise).

A messaging specification defines the two main order types used within Asekuro: Applications (ApplicationOrders), and Quotes (PolicyOrders). Applications include information about an insurance applicant that can be reviewed by an insurance provider. Additionally these Applications can be posted to "Relayers" which effectively host "order books" of insurance applications. Quotes created by providers include exact terms for an insurance policy and can be instantly "bound" by an applicant, kicking off a series of internal contract calls resulting in a new entry made in the public policy registry contract, the minting of a NFT Policy token, and ultimately the activation of the policy.

Asekuro utilizes truffle for testing and deployment. In addition this repo contains generated Typescript contract artifacts for use with web3 and other js based applications.

---
# Contract Overview
## Asekuro Broker
Main interface for interacting with Asekuro protocol. Bind new policies by sending signed Policy Orders to the fillPolicyOrder function.

## Policy Registry
Maintains a registry of policies bound through Asekuro. Registry contains policy term data meant to be used with corresponding policyTemplate contract

## Policy Token
ERC721 NFT token minted for each unique policy bound through Asekuro. The bearer of this token receives all premium payments for the represented policy.

## Premium Router
Contract responsible for routing premium payments to the current Policy Token owner. Insureds can simply make a payment to this contract with their policyId and the payment is routed to the correct address.

## Claims Registry
TODO: Maintain a registry of all claim submissions for policies bound with Asekuro

---
# Supported Policy Types
## Renters
A renters insurance policy based on [Lemonade](https://www.lemonade.com/) insurance. The policy allows for specifying 4 different coverage limits (Personal liability, Personal property, Loss of use, Others medical) denominated in a `claimToken`. Policy also specifies the premium, and deductible amounts denominated in `premiumToken`. The lenth of the policy is configured by specifying the number of periods, denominated in period unit types. For example a policy with a period of `12` and a periodUnitType of `MONTHS` would reflect a 12 month policy lifespan. 

## Term Life
Coming soon

## Parametric
Coming soon

# NPM package
Contract artifacts are available in an npm package for convenience and use within the askeuro-js library
```
npm i @asekuro/contracts
```
---
# Development
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
