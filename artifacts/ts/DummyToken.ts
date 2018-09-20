export const DummyToken = 
{
  "contractName": "DummyToken",
  "abi": [
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
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
      "constant": true,
      "inputs": [],
      "name": "decimals",
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
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        },
        {
          "name": "_decimals",
          "type": "uint256"
        },
        {
          "name": "_totalSupply",
          "type": "uint256"
        },
        {
          "name": "_initialBalanceHolders",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
    }
  ],
  "bytecode": "0x60806040526000600460006101000a81548160ff0219169083151502179055503480156200002c57600080fd5b5060405162001b8938038062001b8983398101806040528101908080518201929190602001805182019291906020018051906020019092919080519060200190929190805182019291905050506200009d336003620000e1640100000000026200175a179091906401000000009004565b8460059080519060200190620000b59291906200017c565b508360069080519060200190620000ce9291906200017c565b508260078190555050505050506200022b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156200011e57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001bf57805160ff1916838001178555620001f0565b82800160010185558215620001f0579182015b82811115620001ef578251825591602001919060010190620001d2565b5b509050620001ff919062000203565b5090565b6200022891905b80821115620002245760008160009055506001016200020a565b5090565b90565b61194e806200023b6000396000f3006080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610125578063095ea7b3146101b557806318160ddd1461021a57806323b872dd14610245578063313ce567146102ca57806339509351146102f557806340c10f191461035a57806370a08231146103bf5780637d64bcb41461041657806395d89b4114610445578063983b2d56146104d55780639865027514610518578063a457c2d71461052f578063a9059cbb14610594578063aa271e1a146105f9578063dd62ed3e14610654575b600080fd5b34801561010257600080fd5b5061010b6106cb565b604051808215151515815260200191505060405180910390f35b34801561013157600080fd5b5061013a6106e2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017a57808201518184015260208101905061015f565b50505050905090810190601f1680156101a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101c157600080fd5b50610200600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610780565b604051808215151515815260200191505060405180910390f35b34801561022657600080fd5b5061022f6108ad565b6040518082815260200191505060405180910390f35b34801561025157600080fd5b506102b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108b7565b604051808215151515815260200191505060405180910390f35b3480156102d657600080fd5b506102df610c72565b6040518082815260200191505060405180910390f35b34801561030157600080fd5b50610340600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c78565b604051808215151515815260200191505060405180910390f35b34801561036657600080fd5b506103a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610eaf565b604051808215151515815260200191505060405180910390f35b3480156103cb57600080fd5b50610400600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef5565b6040518082815260200191505060405180910390f35b34801561042257600080fd5b5061042b610f3d565b604051808215151515815260200191505060405180910390f35b34801561045157600080fd5b5061045a610fbd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561049a57808201518184015260208101905061047f565b50505050905090810190601f1680156104c75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104e157600080fd5b50610516600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061105b565b005b34801561052457600080fd5b5061052d6110c9565b005b34801561053b57600080fd5b5061057a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110df565b604051808215151515815260200191505060405180910390f35b3480156105a057600080fd5b506105df600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611316565b604051808215151515815260200191505060405180910390f35b34801561060557600080fd5b5061063a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611536565b604051808215151515815260200191505060405180910390f35b34801561066057600080fd5b506106b5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611553565b6040518082815260200191505060405180910390f35b6000600460009054906101000a900460ff16905090565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107785780601f1061074d57610100808354040283529160200191610778565b820191906000526020600020905b81548152906001019060200180831161075b57829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156107bd57600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600254905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561090657600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561099157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156109cd57600080fd5b610a1e826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115da90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ab1826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115fb90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b8282600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115da90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60075481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610cb557600080fd5b610d4482600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115fb90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000610eba33611536565b1515610ec557600080fd5b600460009054906101000a900460ff16151515610ee157600080fd5b610eeb838361161c565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610f4833611536565b1515610f5357600080fd5b600460009054906101000a900460ff16151515610f6f57600080fd5b6001600460006101000a81548160ff0219169083151502179055507fb828d9b5c78095deeeeff2eca2e5d4fe046ce3feb4c99702624a3fd384ad2dbc60405160405180910390a16001905090565b60068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110535780601f1061102857610100808354040283529160200191611053565b820191906000526020600020905b81548152906001019060200180831161103657829003601f168201915b505050505081565b61106433611536565b151561106f57600080fd5b61108381600361175a90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6110dd3360036117f490919063ffffffff16565b565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561111c57600080fd5b6111ab82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115da90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561136557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156113a157600080fd5b6113f2826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115da90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611485826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115fb90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061154c82600361188e90919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000808383111515156115ec57600080fd5b82840390508091505092915050565b600080828401905083811015151561161257600080fd5b8091505092915050565b60008273ffffffffffffffffffffffffffffffffffffffff161415151561164257600080fd5b611657816002546115fb90919063ffffffff16565b6002819055506116ae816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115fb90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561179657600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561183057600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156118cb57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050929150505600a165627a7a72305820a8425c7db8f6d59b46c7891daeb65416018cab3b0498ac9d54c3040d9e87c1ad0029",
  "deployedBytecode": "0x6080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610125578063095ea7b3146101b557806318160ddd1461021a57806323b872dd14610245578063313ce567146102ca57806339509351146102f557806340c10f191461035a57806370a08231146103bf5780637d64bcb41461041657806395d89b4114610445578063983b2d56146104d55780639865027514610518578063a457c2d71461052f578063a9059cbb14610594578063aa271e1a146105f9578063dd62ed3e14610654575b600080fd5b34801561010257600080fd5b5061010b6106cb565b604051808215151515815260200191505060405180910390f35b34801561013157600080fd5b5061013a6106e2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017a57808201518184015260208101905061015f565b50505050905090810190601f1680156101a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101c157600080fd5b50610200600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610780565b604051808215151515815260200191505060405180910390f35b34801561022657600080fd5b5061022f6108ad565b6040518082815260200191505060405180910390f35b34801561025157600080fd5b506102b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108b7565b604051808215151515815260200191505060405180910390f35b3480156102d657600080fd5b506102df610c72565b6040518082815260200191505060405180910390f35b34801561030157600080fd5b50610340600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c78565b604051808215151515815260200191505060405180910390f35b34801561036657600080fd5b506103a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610eaf565b604051808215151515815260200191505060405180910390f35b3480156103cb57600080fd5b50610400600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef5565b6040518082815260200191505060405180910390f35b34801561042257600080fd5b5061042b610f3d565b604051808215151515815260200191505060405180910390f35b34801561045157600080fd5b5061045a610fbd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561049a57808201518184015260208101905061047f565b50505050905090810190601f1680156104c75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104e157600080fd5b50610516600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061105b565b005b34801561052457600080fd5b5061052d6110c9565b005b34801561053b57600080fd5b5061057a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110df565b604051808215151515815260200191505060405180910390f35b3480156105a057600080fd5b506105df600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611316565b604051808215151515815260200191505060405180910390f35b34801561060557600080fd5b5061063a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611536565b604051808215151515815260200191505060405180910390f35b34801561066057600080fd5b506106b5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611553565b6040518082815260200191505060405180910390f35b6000600460009054906101000a900460ff16905090565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107785780601f1061074d57610100808354040283529160200191610778565b820191906000526020600020905b81548152906001019060200180831161075b57829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156107bd57600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600254905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561090657600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561099157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156109cd57600080fd5b610a1e826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115da90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ab1826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115fb90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b8282600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115da90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60075481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610cb557600080fd5b610d4482600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115fb90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000610eba33611536565b1515610ec557600080fd5b600460009054906101000a900460ff16151515610ee157600080fd5b610eeb838361161c565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610f4833611536565b1515610f5357600080fd5b600460009054906101000a900460ff16151515610f6f57600080fd5b6001600460006101000a81548160ff0219169083151502179055507fb828d9b5c78095deeeeff2eca2e5d4fe046ce3feb4c99702624a3fd384ad2dbc60405160405180910390a16001905090565b60068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110535780601f1061102857610100808354040283529160200191611053565b820191906000526020600020905b81548152906001019060200180831161103657829003601f168201915b505050505081565b61106433611536565b151561106f57600080fd5b61108381600361175a90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6110dd3360036117f490919063ffffffff16565b565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561111c57600080fd5b6111ab82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115da90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561136557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156113a157600080fd5b6113f2826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115da90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611485826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115fb90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061154c82600361188e90919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000808383111515156115ec57600080fd5b82840390508091505092915050565b600080828401905083811015151561161257600080fd5b8091505092915050565b60008273ffffffffffffffffffffffffffffffffffffffff161415151561164257600080fd5b611657816002546115fb90919063ffffffff16565b6002819055506116ae816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115fb90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561179657600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561183057600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156118cb57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050929150505600a165627a7a72305820a8425c7db8f6d59b46c7891daeb65416018cab3b0498ac9d54c3040d9e87c1ad0029",
  "sourceMap": "198:416:8:-;;;262:5:18;230:37;;;;;;;;;;;;;;;;;;;;348:264:8;8:9:-1;5:2;;;30:1;27;20:12;5:2;348:264:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;259:23:10;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;544:5:8;537:4;:12;;;;;;;;;;;;:::i;:::-;;568:7;559:6;:16;;;;;;;;;;;;:::i;:::-;;596:9;585:8;:20;;;;348:264;;;;;198:416;;245:132:9;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;198:416:8:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "198:416:8:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;415:87:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;415:87:18;;;;;;;;;;;;;;;;;;;;;;;;;;;271:18:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;271:18:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;271:18:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2574:220:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2574:220:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;641:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;641:83:17;;;;;;;;;;;;;;;;;;;;;;;3066:458;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3066:458:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;321:20:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;321:20:8;;;;;;;;;;;;;;;;;;;;;;;3975:330:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3975:330:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:176:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;736:176:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;925:98:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;925:98:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1026:181:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1026:181:18;;;;;;;;;;;;;;;;;;;;;;;;;;;295:20:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;295:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;295:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;468:116:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:10;;;;;;4761:340:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4761:340:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1642:316;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1642:316:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:100:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1340:150:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1340:150:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;415:87:18;462:4;481:16;;;;;;;;;;;474:23;;415:87;:::o;271:18:8:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2574:220:17:-;2639:4;2678:1;2659:21;;:7;:21;;;;2651:30;;;;;;;;2720:5;2688:8;:20;2697:10;2688:20;;;;;;;;;;;;;;;:29;2709:7;2688:29;;;;;;;;;;;;;;;:37;;;;2757:7;2736:36;;2745:10;2736:36;;;2766:5;2736:36;;;;;;;;;;;;;;;;;;2785:4;2778:11;;2574:220;;;;:::o;641:83::-;685:7;707:12;;700:19;;641:83;:::o;3066:458::-;3169:4;3200:9;:15;3210:4;3200:15;;;;;;;;;;;;;;;;3191:5;:24;;3183:33;;;;;;;;3239:8;:14;3248:4;3239:14;;;;;;;;;;;;;;;:26;3254:10;3239:26;;;;;;;;;;;;;;;;3230:5;:35;;3222:44;;;;;;;;3294:1;3280:16;;:2;:16;;;;3272:25;;;;;;;;3322:26;3342:5;3322:9;:15;3332:4;3322:15;;;;;;;;;;;;;;;;:19;;:26;;;;:::i;:::-;3304:9;:15;3314:4;3304:15;;;;;;;;;;;;;;;:44;;;;3370:24;3388:5;3370:9;:13;3380:2;3370:13;;;;;;;;;;;;;;;;:17;;:24;;;;:::i;:::-;3354:9;:13;3364:2;3354:13;;;;;;;;;;;;;;;:40;;;;3429:37;3460:5;3429:8;:14;3438:4;3429:14;;;;;;;;;;;;;;;:26;3444:10;3429:26;;;;;;;;;;;;;;;;:30;;:37;;;;:::i;:::-;3400:8;:14;3409:4;3400:14;;;;;;;;;;;;;;;:26;3415:10;3400:26;;;;;;;;;;;;;;;:66;;;;3492:2;3477:25;;3486:4;3477:25;;;3496:5;3477:25;;;;;;;;;;;;;;;;;;3515:4;3508:11;;3066:458;;;;;:::o;321:20:8:-;;;;:::o;3975:330:17:-;4075:4;4116:1;4097:21;;:7;:21;;;;4089:30;;;;;;;;4166:45;4200:10;4166:8;:20;4175:10;4166:20;;;;;;;;;;;;;;;:29;4187:7;4166:29;;;;;;;;;;;;;;;;:33;;:45;;;;:::i;:::-;4126:8;:20;4135:10;4126:20;;;;;;;;;;;;;;;:29;4147:7;4126:29;;;;;;;;;;;;;;;:86;;;;4244:7;4223:60;;4232:10;4223:60;;;4253:8;:20;4262:10;4253:20;;;;;;;;;;;;;;;:29;4274:7;4253:29;;;;;;;;;;;;;;;;4223:60;;;;;;;;;;;;;;;;;;4296:4;4289:11;;3975:330;;;;:::o;736:176:18:-;859:4;327:20:10;336:10;327:8;:20::i;:::-;319:29;;;;;;;;324:16:18;;;;;;;;;;;323:17;315:26;;;;;;;;873:17;879:2;883:6;873:5;:17::i;:::-;903:4;896:11;;736:176;;;;:::o;925:98:17:-;980:7;1002:9;:16;1012:5;1002:16;;;;;;;;;;;;;;;;995:23;;925:98;;;:::o;1026:181:18:-;1120:4;327:20:10;336:10;327:8;:20::i;:::-;319:29;;;;;;;;324:16:18;;;;;;;;;;;323:17;315:26;;;;;;;;1153:4;1134:16;;:23;;;;;;;;;;;;;;;;;;1168:17;;;;;;;;;;1198:4;1191:11;;1026:181;:::o;295:20:8:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;468:116:10:-;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;588:70::-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;4761:340:17:-;4866:4;4907:1;4888:21;;:7;:21;;;;4880:30;;;;;;;;4957:50;4991:15;4957:8;:20;4966:10;4957:20;;;;;;;;;;;;;;;:29;4978:7;4957:29;;;;;;;;;;;;;;;;:33;;:50;;;;:::i;:::-;4917:8;:20;4926:10;4917:20;;;;;;;;;;;;;;;:29;4938:7;4917:29;;;;;;;;;;;;;;;:91;;;;5040:7;5019:60;;5028:10;5019:60;;;5049:8;:20;5058:10;5049:20;;;;;;;;;;;;;;;:29;5070:7;5049:29;;;;;;;;;;;;;;;;5019:60;;;;;;;;;;;;;;;;;;5092:4;5085:11;;4761:340;;;;:::o;1642:316::-;1703:4;1732:9;:21;1742:10;1732:21;;;;;;;;;;;;;;;;1723:5;:30;;1715:39;;;;;;;;1782:1;1768:16;;:2;:16;;;;1760:25;;;;;;;;1816:32;1842:5;1816:9;:21;1826:10;1816:21;;;;;;;;;;;;;;;;:25;;:32;;;;:::i;:::-;1792:9;:21;1802:10;1792:21;;;;;;;;;;;;;;;:56;;;;1870:24;1888:5;1870:9;:13;1880:2;1870:13;;;;;;;;;;;;;;;;:17;;:24;;;;:::i;:::-;1854:9;:13;1864:2;1854:13;;;;;;;;;;;;;;;:40;;;;1926:2;1905:31;;1914:10;1905:31;;;1930:5;1905:31;;;;;;;;;;;;;;;;;;1949:4;1942:11;;1642:316;;;;:::o;364:100:10:-;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;1340:150:17:-;1437:7;1461:8;:15;1470:5;1461:15;;;;;;;;;;;;;;;:24;1477:7;1461:24;;;;;;;;;;;;;;;;1454:31;;1340:150;;;;:::o;1079:131:15:-;1137:7;1173:9;1165:1;1160;:6;;1152:15;;;;;;;;1189:1;1185;:5;1173:17;;1204:1;1197:8;;1079:131;;;;;:::o;1273:::-;1331:7;1346:9;1362:1;1358;:5;1346:17;;1382:1;1377;:6;;1369:15;;;;;;;;1398:1;1391:8;;1273:131;;;;;:::o;5429:239:17:-;5511:1;5500:7;:12;;;;5492:21;;;;;;;;5534:24;5551:6;5534:12;;:16;;:24;;;;:::i;:::-;5519:12;:39;;;;5585:30;5608:6;5585:9;:18;5595:7;5585:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;5564:9;:18;5574:7;5564:18;;;;;;;;;;;;;;;:51;;;;5647:7;5626:37;;5643:1;5626:37;;;5656:6;5626:37;;;;;;;;;;;;;;;;;;5429:239;;:::o;245:132:9:-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;657:166::-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o",
  "source": "pragma solidity ^ 0.4.18;\n\nimport \"../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol\";\nimport \"../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\ncontract DummyToken is ERC20Mintable {\n    using SafeMath for uint;\n\n    string public name;\n    string public symbol;\n    uint public decimals;\n\n    function DummyToken(\n        string _name,\n        string _symbol,\n        uint _decimals,\n        uint _totalSupply,\n        address[] _initialBalanceHolders)\n        public\n    {\n        name = _name;\n        symbol = _symbol;\n        decimals = _decimals;\n    }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/test/DummyToken.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/test/DummyToken.sol",
    "exportedSymbols": {
      "DummyToken": [
        1590
      ]
    },
    "id": 1591,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1549,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:25:8"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "file": "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "id": 1550,
        "nodeType": "ImportDirective",
        "scope": 1591,
        "sourceUnit": 2764,
        "src": "27:90:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1551,
        "nodeType": "ImportDirective",
        "scope": 1591,
        "sourceUnit": 2121,
        "src": "118:78:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1552,
              "name": "ERC20Mintable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2763,
              "src": "221:13:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Mintable_$2763",
                "typeString": "contract ERC20Mintable"
              }
            },
            "id": 1553,
            "nodeType": "InheritanceSpecifier",
            "src": "221:13:8"
          }
        ],
        "contractDependencies": [
          1766,
          2692,
          2763,
          2832
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1590,
        "linearizedBaseContracts": [
          1590,
          2763,
          1766,
          2692,
          2832
        ],
        "name": "DummyToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1556,
            "libraryName": {
              "contractScope": null,
              "id": 1554,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2120,
              "src": "247:8:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2120",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "241:24:8",
            "typeName": {
              "id": 1555,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "260:4:8",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 1558,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 1590,
            "src": "271:18:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1557,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "271:6:8",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1560,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 1590,
            "src": "295:20:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1559,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "295:6:8",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1562,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 1590,
            "src": "321:20:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1561,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "321:4:8",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1588,
              "nodeType": "Block",
              "src": "527:85:8",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1578,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1576,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1558,
                      "src": "537:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1577,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1564,
                      "src": "544:5:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "537:12:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1579,
                  "nodeType": "ExpressionStatement",
                  "src": "537:12:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1580,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1560,
                      "src": "559:6:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1581,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1566,
                      "src": "568:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "559:16:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1583,
                  "nodeType": "ExpressionStatement",
                  "src": "559:16:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1584,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1562,
                      "src": "585:8:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1585,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1568,
                      "src": "596:9:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "585:20:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1587,
                  "nodeType": "ExpressionStatement",
                  "src": "585:20:8"
                }
              ]
            },
            "documentation": null,
            "id": 1589,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "DummyToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1564,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "377:12:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1563,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1566,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "399:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1565,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "399:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1568,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "423:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1567,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "423:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1570,
                  "name": "_totalSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "447:17:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1569,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1573,
                  "name": "_initialBalanceHolders",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "474:32:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 1571,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "474:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 1572,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "474:9:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "367:140:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 1575,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "527:0:8"
            },
            "scope": 1590,
            "src": "348:264:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1591,
        "src": "198:416:8"
      }
    ],
    "src": "0:615:8"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/test/DummyToken.sol",
    "exportedSymbols": {
      "DummyToken": [
        1590
      ]
    },
    "id": 1591,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1549,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:25:8"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "file": "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "id": 1550,
        "nodeType": "ImportDirective",
        "scope": 1591,
        "sourceUnit": 2764,
        "src": "27:90:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1551,
        "nodeType": "ImportDirective",
        "scope": 1591,
        "sourceUnit": 2121,
        "src": "118:78:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1552,
              "name": "ERC20Mintable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2763,
              "src": "221:13:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Mintable_$2763",
                "typeString": "contract ERC20Mintable"
              }
            },
            "id": 1553,
            "nodeType": "InheritanceSpecifier",
            "src": "221:13:8"
          }
        ],
        "contractDependencies": [
          1766,
          2692,
          2763,
          2832
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1590,
        "linearizedBaseContracts": [
          1590,
          2763,
          1766,
          2692,
          2832
        ],
        "name": "DummyToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1556,
            "libraryName": {
              "contractScope": null,
              "id": 1554,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2120,
              "src": "247:8:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2120",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "241:24:8",
            "typeName": {
              "id": 1555,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "260:4:8",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 1558,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 1590,
            "src": "271:18:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1557,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "271:6:8",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1560,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 1590,
            "src": "295:20:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1559,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "295:6:8",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1562,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 1590,
            "src": "321:20:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1561,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "321:4:8",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1588,
              "nodeType": "Block",
              "src": "527:85:8",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1578,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1576,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1558,
                      "src": "537:4:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1577,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1564,
                      "src": "544:5:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "537:12:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1579,
                  "nodeType": "ExpressionStatement",
                  "src": "537:12:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1580,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1560,
                      "src": "559:6:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1581,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1566,
                      "src": "568:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "559:16:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1583,
                  "nodeType": "ExpressionStatement",
                  "src": "559:16:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1584,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1562,
                      "src": "585:8:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1585,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1568,
                      "src": "596:9:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "585:20:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1587,
                  "nodeType": "ExpressionStatement",
                  "src": "585:20:8"
                }
              ]
            },
            "documentation": null,
            "id": 1589,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "DummyToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1564,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "377:12:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1563,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1566,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "399:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1565,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "399:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1568,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "423:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1567,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "423:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1570,
                  "name": "_totalSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "447:17:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1569,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1573,
                  "name": "_initialBalanceHolders",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "474:32:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 1571,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "474:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 1572,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "474:9:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "367:140:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 1575,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "527:0:8"
            },
            "scope": 1590,
            "src": "348:264:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1591,
        "src": "198:416:8"
      }
    ],
    "src": "0:615:8"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.546Z"
}