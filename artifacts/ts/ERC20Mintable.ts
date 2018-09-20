export const ERC20Mintable = 
{
  "contractName": "ERC20Mintable",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isMinter",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintingFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526000600460006101000a81548160ff021916908315150217905550610040336003610045640100000000026114ac179091906401000000009004565b6100df565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561008157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6116a0806100ee6000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100d5578063095ea7b31461010457806318160ddd1461016957806323b872dd14610194578063395093511461021957806340c10f191461027e57806370a08231146102e35780637d64bcb41461033a578063983b2d561461036957806398650275146103ac578063a457c2d7146103c3578063a9059cbb14610428578063aa271e1a1461048d578063dd62ed3e146104e8575b600080fd5b3480156100e157600080fd5b506100ea61055f565b604051808215151515815260200191505060405180910390f35b34801561011057600080fd5b5061014f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610576565b604051808215151515815260200191505060405180910390f35b34801561017557600080fd5b5061017e6106a3565b6040518082815260200191505060405180910390f35b3480156101a057600080fd5b506101ff600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106ad565b604051808215151515815260200191505060405180910390f35b34801561022557600080fd5b50610264600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a68565b604051808215151515815260200191505060405180910390f35b34801561028a57600080fd5b506102c9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c9f565b604051808215151515815260200191505060405180910390f35b3480156102ef57600080fd5b50610324600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ce5565b6040518082815260200191505060405180910390f35b34801561034657600080fd5b5061034f610d2d565b604051808215151515815260200191505060405180910390f35b34801561037557600080fd5b506103aa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dad565b005b3480156103b857600080fd5b506103c1610e1b565b005b3480156103cf57600080fd5b5061040e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e31565b604051808215151515815260200191505060405180910390f35b34801561043457600080fd5b50610473600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611068565b604051808215151515815260200191505060405180910390f35b34801561049957600080fd5b506104ce600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611288565b604051808215151515815260200191505060405180910390f35b3480156104f457600080fd5b50610549600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112a5565b6040518082815260200191505060405180910390f35b6000600460009054906101000a900460ff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156105b357600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600254905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156106fc57600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561078757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156107c357600080fd5b610814826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461132c90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108a7826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061097882600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461132c90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610aa557600080fd5b610b3482600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134d90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000610caa33611288565b1515610cb557600080fd5b600460009054906101000a900460ff16151515610cd157600080fd5b610cdb838361136e565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610d3833611288565b1515610d4357600080fd5b600460009054906101000a900460ff16151515610d5f57600080fd5b6001600460006101000a81548160ff0219169083151502179055507fb828d9b5c78095deeeeff2eca2e5d4fe046ce3feb4c99702624a3fd384ad2dbc60405160405180910390a16001905090565b610db633611288565b1515610dc157600080fd5b610dd58160036114ac90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b610e2f33600361154690919063ffffffff16565b565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e6e57600080fd5b610efd82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461132c90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156110b757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156110f357600080fd5b611144826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461132c90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506111d7826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061129e8260036115e090919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008083831115151561133e57600080fd5b82840390508091505092915050565b600080828401905083811015151561136457600080fd5b8091505092915050565b60008273ffffffffffffffffffffffffffffffffffffffff161415151561139457600080fd5b6113a98160025461134d90919063ffffffff16565b600281905550611400816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134d90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156114e857600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561158257600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561161d57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050929150505600a165627a7a72305820f8746c3703d5bfd417210b678bb11ff7e7ebeaeb7ee1301d7b24272141f8a2160029",
  "deployedBytecode": "0x6080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100d5578063095ea7b31461010457806318160ddd1461016957806323b872dd14610194578063395093511461021957806340c10f191461027e57806370a08231146102e35780637d64bcb41461033a578063983b2d561461036957806398650275146103ac578063a457c2d7146103c3578063a9059cbb14610428578063aa271e1a1461048d578063dd62ed3e146104e8575b600080fd5b3480156100e157600080fd5b506100ea61055f565b604051808215151515815260200191505060405180910390f35b34801561011057600080fd5b5061014f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610576565b604051808215151515815260200191505060405180910390f35b34801561017557600080fd5b5061017e6106a3565b6040518082815260200191505060405180910390f35b3480156101a057600080fd5b506101ff600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106ad565b604051808215151515815260200191505060405180910390f35b34801561022557600080fd5b50610264600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a68565b604051808215151515815260200191505060405180910390f35b34801561028a57600080fd5b506102c9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c9f565b604051808215151515815260200191505060405180910390f35b3480156102ef57600080fd5b50610324600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ce5565b6040518082815260200191505060405180910390f35b34801561034657600080fd5b5061034f610d2d565b604051808215151515815260200191505060405180910390f35b34801561037557600080fd5b506103aa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dad565b005b3480156103b857600080fd5b506103c1610e1b565b005b3480156103cf57600080fd5b5061040e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e31565b604051808215151515815260200191505060405180910390f35b34801561043457600080fd5b50610473600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611068565b604051808215151515815260200191505060405180910390f35b34801561049957600080fd5b506104ce600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611288565b604051808215151515815260200191505060405180910390f35b3480156104f457600080fd5b50610549600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112a5565b6040518082815260200191505060405180910390f35b6000600460009054906101000a900460ff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156105b357600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600254905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156106fc57600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561078757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156107c357600080fd5b610814826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461132c90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108a7826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061097882600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461132c90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610aa557600080fd5b610b3482600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134d90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000610caa33611288565b1515610cb557600080fd5b600460009054906101000a900460ff16151515610cd157600080fd5b610cdb838361136e565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610d3833611288565b1515610d4357600080fd5b600460009054906101000a900460ff16151515610d5f57600080fd5b6001600460006101000a81548160ff0219169083151502179055507fb828d9b5c78095deeeeff2eca2e5d4fe046ce3feb4c99702624a3fd384ad2dbc60405160405180910390a16001905090565b610db633611288565b1515610dc157600080fd5b610dd58160036114ac90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b610e2f33600361154690919063ffffffff16565b565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e6e57600080fd5b610efd82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461132c90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156110b757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156110f357600080fd5b611144826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461132c90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506111d7826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061129e8260036115e090919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008083831115151561133e57600080fd5b82840390508091505092915050565b600080828401905083811015151561136457600080fd5b8091505092915050565b60008273ffffffffffffffffffffffffffffffffffffffff161415151561139457600080fd5b6113a98160025461134d90919063ffffffff16565b600281905550611400816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461134d90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156114e857600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561158257600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561161d57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050929150505600a165627a7a72305820f8746c3703d5bfd417210b678bb11ff7e7ebeaeb7ee1301d7b24272141f8a2160029",
  "sourceMap": "154:1055:18:-;;;262:5;230:37;;;;;;;;;;;;;;;;;;;;259:23:10;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;154:1055:18;;245:132:9;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;154:1055:18:-;;;;;;;",
  "deployedSourceMap": "154:1055:18:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;415:87;;8:9:-1;5:2;;;30:1;27;20:12;5:2;415:87:18;;;;;;;;;;;;;;;;;;;;;;;;;;;2574:220:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2574:220:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;641:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;641:83:17;;;;;;;;;;;;;;;;;;;;;;;3066:458;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3066:458:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3975:330;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3975:330:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:176:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;736:176:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;925:98:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;925:98:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1026:181:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1026:181:18;;;;;;;;;;;;;;;;;;;;;;;;;;;468:116:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:10;;;;;;4761:340:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4761:340:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1642:316;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1642:316:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:100:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1340:150:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1340:150:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;415:87:18;462:4;481:16;;;;;;;;;;;474:23;;415:87;:::o;2574:220:17:-;2639:4;2678:1;2659:21;;:7;:21;;;;2651:30;;;;;;;;2720:5;2688:8;:20;2697:10;2688:20;;;;;;;;;;;;;;;:29;2709:7;2688:29;;;;;;;;;;;;;;;:37;;;;2757:7;2736:36;;2745:10;2736:36;;;2766:5;2736:36;;;;;;;;;;;;;;;;;;2785:4;2778:11;;2574:220;;;;:::o;641:83::-;685:7;707:12;;700:19;;641:83;:::o;3066:458::-;3169:4;3200:9;:15;3210:4;3200:15;;;;;;;;;;;;;;;;3191:5;:24;;3183:33;;;;;;;;3239:8;:14;3248:4;3239:14;;;;;;;;;;;;;;;:26;3254:10;3239:26;;;;;;;;;;;;;;;;3230:5;:35;;3222:44;;;;;;;;3294:1;3280:16;;:2;:16;;;;3272:25;;;;;;;;3322:26;3342:5;3322:9;:15;3332:4;3322:15;;;;;;;;;;;;;;;;:19;;:26;;;;:::i;:::-;3304:9;:15;3314:4;3304:15;;;;;;;;;;;;;;;:44;;;;3370:24;3388:5;3370:9;:13;3380:2;3370:13;;;;;;;;;;;;;;;;:17;;:24;;;;:::i;:::-;3354:9;:13;3364:2;3354:13;;;;;;;;;;;;;;;:40;;;;3429:37;3460:5;3429:8;:14;3438:4;3429:14;;;;;;;;;;;;;;;:26;3444:10;3429:26;;;;;;;;;;;;;;;;:30;;:37;;;;:::i;:::-;3400:8;:14;3409:4;3400:14;;;;;;;;;;;;;;;:26;3415:10;3400:26;;;;;;;;;;;;;;;:66;;;;3492:2;3477:25;;3486:4;3477:25;;;3496:5;3477:25;;;;;;;;;;;;;;;;;;3515:4;3508:11;;3066:458;;;;;:::o;3975:330::-;4075:4;4116:1;4097:21;;:7;:21;;;;4089:30;;;;;;;;4166:45;4200:10;4166:8;:20;4175:10;4166:20;;;;;;;;;;;;;;;:29;4187:7;4166:29;;;;;;;;;;;;;;;;:33;;:45;;;;:::i;:::-;4126:8;:20;4135:10;4126:20;;;;;;;;;;;;;;;:29;4147:7;4126:29;;;;;;;;;;;;;;;:86;;;;4244:7;4223:60;;4232:10;4223:60;;;4253:8;:20;4262:10;4253:20;;;;;;;;;;;;;;;:29;4274:7;4253:29;;;;;;;;;;;;;;;;4223:60;;;;;;;;;;;;;;;;;;4296:4;4289:11;;3975:330;;;;:::o;736:176:18:-;859:4;327:20:10;336:10;327:8;:20::i;:::-;319:29;;;;;;;;324:16:18;;;;;;;;;;;323:17;315:26;;;;;;;;873:17;879:2;883:6;873:5;:17::i;:::-;903:4;896:11;;736:176;;;;:::o;925:98:17:-;980:7;1002:9;:16;1012:5;1002:16;;;;;;;;;;;;;;;;995:23;;925:98;;;:::o;1026:181:18:-;1120:4;327:20:10;336:10;327:8;:20::i;:::-;319:29;;;;;;;;324:16:18;;;;;;;;;;;323:17;315:26;;;;;;;;1153:4;1134:16;;:23;;;;;;;;;;;;;;;;;;1168:17;;;;;;;;;;1198:4;1191:11;;1026:181;:::o;468:116:10:-;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;588:70::-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;4761:340:17:-;4866:4;4907:1;4888:21;;:7;:21;;;;4880:30;;;;;;;;4957:50;4991:15;4957:8;:20;4966:10;4957:20;;;;;;;;;;;;;;;:29;4978:7;4957:29;;;;;;;;;;;;;;;;:33;;:50;;;;:::i;:::-;4917:8;:20;4926:10;4917:20;;;;;;;;;;;;;;;:29;4938:7;4917:29;;;;;;;;;;;;;;;:91;;;;5040:7;5019:60;;5028:10;5019:60;;;5049:8;:20;5058:10;5049:20;;;;;;;;;;;;;;;:29;5070:7;5049:29;;;;;;;;;;;;;;;;5019:60;;;;;;;;;;;;;;;;;;5092:4;5085:11;;4761:340;;;;:::o;1642:316::-;1703:4;1732:9;:21;1742:10;1732:21;;;;;;;;;;;;;;;;1723:5;:30;;1715:39;;;;;;;;1782:1;1768:16;;:2;:16;;;;1760:25;;;;;;;;1816:32;1842:5;1816:9;:21;1826:10;1816:21;;;;;;;;;;;;;;;;:25;;:32;;;;:::i;:::-;1792:9;:21;1802:10;1792:21;;;;;;;;;;;;;;;:56;;;;1870:24;1888:5;1870:9;:13;1880:2;1870:13;;;;;;;;;;;;;;;;:17;;:24;;;;:::i;:::-;1854:9;:13;1864:2;1854:13;;;;;;;;;;;;;;;:40;;;;1926:2;1905:31;;1914:10;1905:31;;;1930:5;1905:31;;;;;;;;;;;;;;;;;;1949:4;1942:11;;1642:316;;;;:::o;364:100:10:-;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;1340:150:17:-;1437:7;1461:8;:15;1470:5;1461:15;;;;;;;;;;;;;;;:24;1477:7;1461:24;;;;;;;;;;;;;;;;1454:31;;1340:150;;;;:::o;1079:131:15:-;1137:7;1173:9;1165:1;1160;:6;;1152:15;;;;;;;;1189:1;1185;:5;1173:17;;1204:1;1197:8;;1079:131;;;;;:::o;1273:::-;1331:7;1346:9;1362:1;1358;:5;1346:17;;1382:1;1377;:6;;1369:15;;;;;;;;1398:1;1391:8;;1273:131;;;;;:::o;5429:239:17:-;5511:1;5500:7;:12;;;;5492:21;;;;;;;;5534:24;5551:6;5534:12;;:16;;:24;;;;:::i;:::-;5519:12;:39;;;;5585:30;5608:6;5585:9;:18;5595:7;5585:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;5564:9;:18;5574:7;5564:18;;;;;;;;;;;;;;;:51;;;;5647:7;5626:37;;5643:1;5626:37;;;5656:6;5626:37;;;;;;;;;;;;;;;;;;5429:239;;:::o;245:132:9:-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;657:166::-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./ERC20.sol\";\nimport \"../../access/roles/MinterRole.sol\";\n\n\n/**\n * @title ERC20Mintable\n * @dev ERC20 minting logic\n */\ncontract ERC20Mintable is ERC20, MinterRole {\n  event MintingFinished();\n\n  bool private _mintingFinished = false;\n\n  modifier onlyBeforeMintingFinished() {\n    require(!_mintingFinished);\n    _;\n  }\n\n  /**\n   * @return true if the minting is finished.\n   */\n  function mintingFinished() public view returns(bool) {\n    return _mintingFinished;\n  }\n\n  /**\n   * @dev Function to mint tokens\n   * @param to The address that will receive the minted tokens.\n   * @param amount The amount of tokens to mint.\n   * @return A boolean that indicates if the operation was successful.\n   */\n  function mint(\n    address to,\n    uint256 amount\n  )\n    public\n    onlyMinter\n    onlyBeforeMintingFinished\n    returns (bool)\n  {\n    _mint(to, amount);\n    return true;\n  }\n\n  /**\n   * @dev Function to stop minting new tokens.\n   * @return True if the operation was successful.\n   */\n  function finishMinting()\n    public\n    onlyMinter\n    onlyBeforeMintingFinished\n    returns (bool)\n  {\n    _mintingFinished = true;\n    emit MintingFinished();\n    return true;\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
    "exportedSymbols": {
      "ERC20Mintable": [
        2763
      ]
    },
    "id": 2764,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2694,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:18"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 2695,
        "nodeType": "ImportDirective",
        "scope": 2764,
        "sourceUnit": 2693,
        "src": "26:21:18",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/MinterRole.sol",
        "file": "../../access/roles/MinterRole.sol",
        "id": 2696,
        "nodeType": "ImportDirective",
        "scope": 2764,
        "sourceUnit": 1767,
        "src": "48:43:18",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2697,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2692,
              "src": "180:5:18",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$2692",
                "typeString": "contract ERC20"
              }
            },
            "id": 2698,
            "nodeType": "InheritanceSpecifier",
            "src": "180:5:18"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2699,
              "name": "MinterRole",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1766,
              "src": "187:10:18",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MinterRole_$1766",
                "typeString": "contract MinterRole"
              }
            },
            "id": 2700,
            "nodeType": "InheritanceSpecifier",
            "src": "187:10:18"
          }
        ],
        "contractDependencies": [
          1766,
          2692,
          2832
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20Mintable\n@dev ERC20 minting logic",
        "fullyImplemented": true,
        "id": 2763,
        "linearizedBaseContracts": [
          2763,
          1766,
          2692,
          2832
        ],
        "name": "ERC20Mintable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 2702,
            "name": "MintingFinished",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2701,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "223:2:18"
            },
            "src": "202:24:18"
          },
          {
            "constant": false,
            "id": 2705,
            "name": "_mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 2763,
            "src": "230:37:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 2703,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "230:4:18",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 2704,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "262:5:18",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 2713,
              "nodeType": "Block",
              "src": "309:44:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2709,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "323:17:18",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 2708,
                          "name": "_mintingFinished",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2705,
                          "src": "324:16:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2707,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "315:7:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2710,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "315:26:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2711,
                  "nodeType": "ExpressionStatement",
                  "src": "315:26:18"
                },
                {
                  "id": 2712,
                  "nodeType": "PlaceholderStatement",
                  "src": "347:1:18"
                }
              ]
            },
            "documentation": null,
            "id": 2714,
            "name": "onlyBeforeMintingFinished",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2706,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "306:2:18"
            },
            "src": "272:81:18",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2721,
              "nodeType": "Block",
              "src": "468:34:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2719,
                    "name": "_mintingFinished",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2705,
                    "src": "481:16:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2718,
                  "id": 2720,
                  "nodeType": "Return",
                  "src": "474:23:18"
                }
              ]
            },
            "documentation": "@return true if the minting is finished.",
            "id": 2722,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "mintingFinished",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2715,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "439:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2718,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2717,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2722,
                  "src": "462:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2716,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:6:18"
            },
            "scope": 2763,
            "src": "415:87:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2742,
              "nodeType": "Block",
              "src": "867:45:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2736,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2724,
                        "src": "879:2:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2737,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2726,
                        "src": "883:6:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2735,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2602,
                      "src": "873:5:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2738,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "873:17:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2739,
                  "nodeType": "ExpressionStatement",
                  "src": "873:17:18"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "903:4:18",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2734,
                  "id": 2741,
                  "nodeType": "Return",
                  "src": "896:11:18"
                }
              ]
            },
            "documentation": "@dev Function to mint tokens\n@param to The address that will receive the minted tokens.\n@param amount The amount of tokens to mint.\n@return A boolean that indicates if the operation was successful.",
            "id": 2743,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2729,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2728,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1707,
                  "src": "805:10:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "805:10:18"
              },
              {
                "arguments": null,
                "id": 2731,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2730,
                  "name": "onlyBeforeMintingFinished",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2714,
                  "src": "820:25:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "820:25:18"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2724,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2743,
                  "src": "755:10:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2723,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2726,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2743,
                  "src": "771:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "771:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "749:40:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2733,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2743,
                  "src": "859:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2732,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:6:18"
            },
            "scope": 2763,
            "src": "736:176:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2761,
              "nodeType": "Block",
              "src": "1128:79:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2752,
                      "name": "_mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2705,
                      "src": "1134:16:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 2753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1153:4:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1134:23:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2755,
                  "nodeType": "ExpressionStatement",
                  "src": "1134:23:18"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 2756,
                      "name": "MintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2702,
                      "src": "1168:15:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 2757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1168:17:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2758,
                  "nodeType": "EmitStatement",
                  "src": "1163:22:18"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1198:4:18",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2751,
                  "id": 2760,
                  "nodeType": "Return",
                  "src": "1191:11:18"
                }
              ]
            },
            "documentation": "@dev Function to stop minting new tokens.\n@return True if the operation was successful.",
            "id": 2762,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2746,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2745,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1707,
                  "src": "1066:10:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1066:10:18"
              },
              {
                "arguments": null,
                "id": 2748,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2747,
                  "name": "onlyBeforeMintingFinished",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2714,
                  "src": "1081:25:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1081:25:18"
              }
            ],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2744,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1048:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2750,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2762,
                  "src": "1120:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2749,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1119:6:18"
            },
            "scope": 2763,
            "src": "1026:181:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2764,
        "src": "154:1055:18"
      }
    ],
    "src": "0:1210:18"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
    "exportedSymbols": {
      "ERC20Mintable": [
        2763
      ]
    },
    "id": 2764,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2694,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:18"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 2695,
        "nodeType": "ImportDirective",
        "scope": 2764,
        "sourceUnit": 2693,
        "src": "26:21:18",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/MinterRole.sol",
        "file": "../../access/roles/MinterRole.sol",
        "id": 2696,
        "nodeType": "ImportDirective",
        "scope": 2764,
        "sourceUnit": 1767,
        "src": "48:43:18",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2697,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2692,
              "src": "180:5:18",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$2692",
                "typeString": "contract ERC20"
              }
            },
            "id": 2698,
            "nodeType": "InheritanceSpecifier",
            "src": "180:5:18"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2699,
              "name": "MinterRole",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1766,
              "src": "187:10:18",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MinterRole_$1766",
                "typeString": "contract MinterRole"
              }
            },
            "id": 2700,
            "nodeType": "InheritanceSpecifier",
            "src": "187:10:18"
          }
        ],
        "contractDependencies": [
          1766,
          2692,
          2832
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20Mintable\n@dev ERC20 minting logic",
        "fullyImplemented": true,
        "id": 2763,
        "linearizedBaseContracts": [
          2763,
          1766,
          2692,
          2832
        ],
        "name": "ERC20Mintable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 2702,
            "name": "MintingFinished",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2701,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "223:2:18"
            },
            "src": "202:24:18"
          },
          {
            "constant": false,
            "id": 2705,
            "name": "_mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 2763,
            "src": "230:37:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 2703,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "230:4:18",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 2704,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "262:5:18",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 2713,
              "nodeType": "Block",
              "src": "309:44:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2709,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "323:17:18",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 2708,
                          "name": "_mintingFinished",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2705,
                          "src": "324:16:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2707,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "315:7:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2710,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "315:26:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2711,
                  "nodeType": "ExpressionStatement",
                  "src": "315:26:18"
                },
                {
                  "id": 2712,
                  "nodeType": "PlaceholderStatement",
                  "src": "347:1:18"
                }
              ]
            },
            "documentation": null,
            "id": 2714,
            "name": "onlyBeforeMintingFinished",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2706,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "306:2:18"
            },
            "src": "272:81:18",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2721,
              "nodeType": "Block",
              "src": "468:34:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2719,
                    "name": "_mintingFinished",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2705,
                    "src": "481:16:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2718,
                  "id": 2720,
                  "nodeType": "Return",
                  "src": "474:23:18"
                }
              ]
            },
            "documentation": "@return true if the minting is finished.",
            "id": 2722,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "mintingFinished",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2715,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "439:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2718,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2717,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2722,
                  "src": "462:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2716,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:6:18"
            },
            "scope": 2763,
            "src": "415:87:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2742,
              "nodeType": "Block",
              "src": "867:45:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2736,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2724,
                        "src": "879:2:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2737,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2726,
                        "src": "883:6:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2735,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2602,
                      "src": "873:5:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2738,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "873:17:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2739,
                  "nodeType": "ExpressionStatement",
                  "src": "873:17:18"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "903:4:18",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2734,
                  "id": 2741,
                  "nodeType": "Return",
                  "src": "896:11:18"
                }
              ]
            },
            "documentation": "@dev Function to mint tokens\n@param to The address that will receive the minted tokens.\n@param amount The amount of tokens to mint.\n@return A boolean that indicates if the operation was successful.",
            "id": 2743,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2729,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2728,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1707,
                  "src": "805:10:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "805:10:18"
              },
              {
                "arguments": null,
                "id": 2731,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2730,
                  "name": "onlyBeforeMintingFinished",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2714,
                  "src": "820:25:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "820:25:18"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2724,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2743,
                  "src": "755:10:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2723,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2726,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2743,
                  "src": "771:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "771:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "749:40:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2733,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2743,
                  "src": "859:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2732,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:6:18"
            },
            "scope": 2763,
            "src": "736:176:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2761,
              "nodeType": "Block",
              "src": "1128:79:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2752,
                      "name": "_mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2705,
                      "src": "1134:16:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 2753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1153:4:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1134:23:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2755,
                  "nodeType": "ExpressionStatement",
                  "src": "1134:23:18"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 2756,
                      "name": "MintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2702,
                      "src": "1168:15:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 2757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1168:17:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2758,
                  "nodeType": "EmitStatement",
                  "src": "1163:22:18"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1198:4:18",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2751,
                  "id": 2760,
                  "nodeType": "Return",
                  "src": "1191:11:18"
                }
              ]
            },
            "documentation": "@dev Function to stop minting new tokens.\n@return True if the operation was successful.",
            "id": 2762,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2746,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2745,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1707,
                  "src": "1066:10:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1066:10:18"
              },
              {
                "arguments": null,
                "id": 2748,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2747,
                  "name": "onlyBeforeMintingFinished",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2714,
                  "src": "1081:25:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1081:25:18"
              }
            ],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2744,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1048:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 2751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2750,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2762,
                  "src": "1120:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2749,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1119:6:18"
            },
            "scope": 2763,
            "src": "1026:181:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 2764,
        "src": "154:1055:18"
      }
    ],
    "src": "0:1210:18"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.562Z"
}