export const PolicyRegistry = 
{
  "contractName": "PolicyRegistry",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3f4ba83a"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isPauser",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x46fbf68e"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5c975abb"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renouncePauser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x6ef8d66d"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addPauser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x82dc1ec4"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8456cb59"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "policyId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "carrier",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "resolver",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "underwriter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "underwriterRiskRating",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "policyContract",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "policyContractParameters",
          "type": "bytes32"
        }
      ],
      "name": "LogInsertEntry",
      "type": "event",
      "signature": "0xb6454d3b717d8f194bca19da3760de84291b52d8d308efcd3e20dc3f8d235b61"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Paused",
      "type": "event",
      "signature": "0x9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e752"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpaused",
      "type": "event",
      "signature": "0xa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d16933"
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
      "name": "PauserAdded",
      "type": "event",
      "signature": "0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"
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
      "name": "PauserRemoved",
      "type": "event",
      "signature": "0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_version",
          "type": "address"
        },
        {
          "name": "_carrier",
          "type": "address"
        },
        {
          "name": "_insured",
          "type": "address"
        },
        {
          "name": "_resolver",
          "type": "address"
        },
        {
          "name": "_underwriter",
          "type": "address"
        },
        {
          "name": "_underwriterRiskRating",
          "type": "uint256"
        },
        {
          "name": "_policyContract",
          "type": "address"
        },
        {
          "name": "_policyContractParameters",
          "type": "bytes32"
        },
        {
          "name": "_salt",
          "type": "uint256"
        }
      ],
      "name": "insert",
      "outputs": [
        {
          "name": "_policyId",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x1b78f3ee"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        }
      ],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8eaa6ac0"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        }
      ],
      "name": "getPolicyTerms",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xb47fa7bf"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        }
      ],
      "name": "getBindingBlockTimestamp",
      "outputs": [
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x42447594"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        }
      ],
      "name": "getPolicyContract",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9f89e7a0"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        }
      ],
      "name": "getPolicyContractParameters",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x45bd346e"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        }
      ],
      "name": "getCarrier",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf5f8231a"
    }
  ],
  "bytecode": "0x60806040526000600160006101000a81548160ff02191690831515021790555061004033600061004564010000000002611157179091906401000000009004565b6100df565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561008157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6112d4806100ee6000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631b78f3ee146100ca5780633f4ba83a146101eb578063424475941461020257806345bd346e1461024757806346fbf68e146102945780635c975abb146102ef5780636ef8d66d1461031e57806382dc1ec4146103355780638456cb59146103785780638eaa6ac01461038f5780639f89e7a0146104b6578063b47fa7bf14610527578063f5f8231a146105a7575b600080fd5b3480156100d657600080fd5b506101cd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080359060200190929190505050610618565b60405180826000191660001916815260200191505060405180910390f35b3480156101f757600080fd5b506102006109ae565b005b34801561020e57600080fd5b506102316004803603810190808035600019169060200190929190505050610a26565b6040518082815260200191505060405180910390f35b34801561025357600080fd5b506102766004803603810190808035600019169060200190929190505050610a4e565b60405180826000191660001916815260200191505060405180910390f35b3480156102a057600080fd5b506102d5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a76565b604051808215151515815260200191505060405180910390f35b3480156102fb57600080fd5b50610304610a93565b604051808215151515815260200191505060405180910390f35b34801561032a57600080fd5b50610333610aaa565b005b34801561034157600080fd5b50610376600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ac0565b005b34801561038457600080fd5b5061038d610b2e565b005b34801561039b57600080fd5b506103be6004803603810190808035600019169060200190929190505050610ba6565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b3480156104c257600080fd5b506104e56004803603810190808035600019169060200190929190505050610d23565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561053357600080fd5b506105566004803603810190808035600019169060200190929190505050610d6b565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b3480156105b357600080fd5b506105d66004803603810190808035600019169060200190929190505050610dd5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006106226111f1565b6000600160009054906101000a900460ff1615151561064057600080fd5b610100604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018773ffffffffffffffffffffffffffffffffffffffff168152602001866000191681526020014281525091506106fa828b86610e1d565b90508160026000836000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c0820151816006019060001916905560e08201518160070155905050816060015173ffffffffffffffffffffffffffffffffffffffff16826020015173ffffffffffffffffffffffffffffffffffffffff1682600019167fb6454d3b717d8f194bca19da3760de84291b52d8d308efcd3e20dc3f8d235b61856040015186608001518760a001518860c00151604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001826000191660001916815260200194505050505060405180910390a480925050509998505050505050505050565b6109b733610a76565b15156109c257600080fd5b600160009054906101000a900460ff1615156109dd57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b6000600260008360001916600019168152602001908152602001600020600701549050919050565b6000600260008360001916600019168152602001908152602001600020600601549050919050565b6000610a8c82600061102990919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b610abe3360006110bd90919063ffffffff16565b565b610ac933610a76565b1515610ad457600080fd5b610ae881600061115790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b610b3733610a76565b1515610b4257600080fd5b600160009054906101000a900460ff16151515610b5e57600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b600080600080600080600060026000896000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008a6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008b6000191660001916815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008c6000191660001916815260200190815260200160002060040154600260008d6000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008e6000191660001916815260200190815260200160002060060154600260008f60001916600019168152602001908152602001600020600701549650965096509650965096509650919395979092949650565b600060026000836000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008060026000846000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166002600085600019166000191681526020019081526020016000206006015491509150915091565b600060026000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008360000151838560400151866060015187608001518860a001518960c0015188604051602001808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001985050505050505050506040516020818303038152906040526040518082805190602001908083835b602083101515610ff35780518252602082019150602081019050602083039250610fce565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902090509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561106657600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156110f957600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561119357600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61010060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600080191681526020016000815250905600a165627a7a723058203511713247382ec14b7ade2aba34f2c5346af85ba7be3072ff71706db7c2a6180029",
  "deployedBytecode": "0x6080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631b78f3ee146100ca5780633f4ba83a146101eb578063424475941461020257806345bd346e1461024757806346fbf68e146102945780635c975abb146102ef5780636ef8d66d1461031e57806382dc1ec4146103355780638456cb59146103785780638eaa6ac01461038f5780639f89e7a0146104b6578063b47fa7bf14610527578063f5f8231a146105a7575b600080fd5b3480156100d657600080fd5b506101cd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080359060200190929190505050610618565b60405180826000191660001916815260200191505060405180910390f35b3480156101f757600080fd5b506102006109ae565b005b34801561020e57600080fd5b506102316004803603810190808035600019169060200190929190505050610a26565b6040518082815260200191505060405180910390f35b34801561025357600080fd5b506102766004803603810190808035600019169060200190929190505050610a4e565b60405180826000191660001916815260200191505060405180910390f35b3480156102a057600080fd5b506102d5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a76565b604051808215151515815260200191505060405180910390f35b3480156102fb57600080fd5b50610304610a93565b604051808215151515815260200191505060405180910390f35b34801561032a57600080fd5b50610333610aaa565b005b34801561034157600080fd5b50610376600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ac0565b005b34801561038457600080fd5b5061038d610b2e565b005b34801561039b57600080fd5b506103be6004803603810190808035600019169060200190929190505050610ba6565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b3480156104c257600080fd5b506104e56004803603810190808035600019169060200190929190505050610d23565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561053357600080fd5b506105566004803603810190808035600019169060200190929190505050610d6b565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b3480156105b357600080fd5b506105d66004803603810190808035600019169060200190929190505050610dd5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006106226111f1565b6000600160009054906101000a900460ff1615151561064057600080fd5b610100604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018773ffffffffffffffffffffffffffffffffffffffff168152602001866000191681526020014281525091506106fa828b86610e1d565b90508160026000836000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c0820151816006019060001916905560e08201518160070155905050816060015173ffffffffffffffffffffffffffffffffffffffff16826020015173ffffffffffffffffffffffffffffffffffffffff1682600019167fb6454d3b717d8f194bca19da3760de84291b52d8d308efcd3e20dc3f8d235b61856040015186608001518760a001518860c00151604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001826000191660001916815260200194505050505060405180910390a480925050509998505050505050505050565b6109b733610a76565b15156109c257600080fd5b600160009054906101000a900460ff1615156109dd57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b6000600260008360001916600019168152602001908152602001600020600701549050919050565b6000600260008360001916600019168152602001908152602001600020600601549050919050565b6000610a8c82600061102990919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b610abe3360006110bd90919063ffffffff16565b565b610ac933610a76565b1515610ad457600080fd5b610ae881600061115790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b610b3733610a76565b1515610b4257600080fd5b600160009054906101000a900460ff16151515610b5e57600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b600080600080600080600060026000896000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008a6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008b6000191660001916815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008c6000191660001916815260200190815260200160002060040154600260008d6000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008e6000191660001916815260200190815260200160002060060154600260008f60001916600019168152602001908152602001600020600701549650965096509650965096509650919395979092949650565b600060026000836000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008060026000846000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166002600085600019166000191681526020019081526020016000206006015491509150915091565b600060026000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008360000151838560400151866060015187608001518860a001518960c0015188604051602001808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001985050505050505050506040516020818303038152906040526040518082805190602001908083835b602083101515610ff35780518252602082019150602081019050602083039250610fce565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902090509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561106657600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156110f957600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561119357600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61010060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600080191681526020016000815250905600a165627a7a723058203511713247382ec14b7ade2aba34f2c5346af85ba7be3072ff71706db7c2a6180029",
  "sourceMap": "184:3790:4:-;;;280:5:14;257:28;;;;;;;;;;;;;;;;;;;;259:23:11;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;184:3790:4;;245:132:9;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;184:3790:4:-;;;;;;;",
  "deployedSourceMap": "184:3790:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;858:1042;;8:9:-1;5:2;;;30:1;27;20:12;5:2;858:1042:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:95:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1002:95:14;;;;;;2740:182:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2740:182:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3108:194;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3108:194:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:100:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;365:69:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;365:69:14;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:11;;;;;;468:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:93:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:93:14;;;;;;1958:509:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1958:509:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2928:174;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2928:174:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2473:261;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2473:261:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3308:160;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3308:160:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;858:1042;1202:17;1235:18;;:::i;:::-;1508:16;575:7:14;;;;;;;;;;;574:8;566:17;;;;;;;;1256:241:4;;;;;;;;;1275:8;1256:241;;;;;;1297:8;1256:241;;;;;;1319:9;1256:241;;;;;;1342:12;1256:241;;;;;;1368:22;1256:241;;;;1404:15;1256:241;;;;;;1433:25;1256:241;;;;;;;1472:15;1256:241;;;1235:262;;1527:36;1540:5;1547:8;1557:5;1527:12;:36::i;:::-;1508:55;;1595:5;1574:8;:18;1583:8;1574:18;;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1721:5;:17;;;1616:251;;1666:5;:13;;;1616:251;;1644:8;1616:251;;;;1693:5;:14;;;1752:5;:27;;;1793:5;:20;;;1827:5;:30;;;1616:251;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1885:8;1878:15;;858:1042;;;;;;;;;;;;;:::o;1002:95:14:-;327:20:11;336:10;327:8;:20::i;:::-;319:29;;;;;;;;728:7:14;;;;;;;;;;;720:16;;;;;;;;1066:5;1056:7;;:15;;;;;;;;;;;;;;;;;;1082:10;;;;;;;;;;1002:95::o;2740:182:4:-;2837:14;2874:8;:18;2883:8;2874:18;;;;;;;;;;;;;;;;;:41;;;2867:48;;2740:182;;;:::o;3108:194::-;3222:7;3252:8;:18;3261:8;3252:18;;;;;;;;;;;;;;;;;:43;;;3245:50;;3108:194;;;:::o;364:100:11:-;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;365:69:14:-;403:4;422:7;;;;;;;;;;;415:14;;365:69;:::o;588:70:11:-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;468:116::-;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;827:93:14:-;327:20:11;336:10;327:8;:20::i;:::-;319:29;;;;;;;;575:7:14;;;;;;;;;;;574:8;566:17;;;;;;;;892:4;882:7;;:14;;;;;;;;;;;;;;;;;;907:8;;;;;;;;;;827:93::o;1958:509:4:-;2034:7;2043;2052;2061:4;2067:7;2076;2085:4;2126:8;:18;2135:8;2126:18;;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;2166:8;:18;2175:8;2166:18;;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;2207:8;:18;2216:8;2207:18;;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;2251:8;:18;2260:8;2251:18;;;;;;;;;;;;;;;;;:40;;;2305:8;:18;2314:8;2305:18;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;2352:8;:18;2361:8;2352:18;;;;;;;;;;;;;;;;;:43;;;2409:8;:18;2418:8;2409:18;;;;;;;;;;;;;;;;;:41;;;2105:355;;;;;;;;;;;;;;1958:509;;;;;;;;;:::o;2928:174::-;3032:7;3062:8;:18;3071:8;3062:18;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;3055:40;;2928:174;;;:::o;2473:261::-;2574:7;2583;2627:8;:18;2636:8;2627:18;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;2674:8;:18;2683:8;2674:18;;;;;;;;;;;;;;;;;:43;;;2606:121;;;;2473:261;;;:::o;3308:160::-;3405:7;3435:8;:18;3444:8;3435:18;;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;3428:33;;3308:160;;;:::o;3474:498::-;3587:7;3674:6;:14;;;3707:8;3733:6;:15;;;3766:6;:18;;;3802:6;:28;;;3848:6;:21;;;3887:6;:31;;;3936:5;3640:315;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3640:315:4;;;3617:348;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;3617:348:4;;;;;;;;;;;;;;;;3610:355;;3474:498;;;;;:::o;657:166:9:-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;245:132::-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;184:3790:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\ncontract PolicyRegistry is Pausable {\n    using SafeMath for uint;\n\n    struct Entry {\n        address version;\n        address carrier;\n        address resolver;\n        address underwriter;\n        uint underwriterRiskRating;\n        address policyContract;\n        bytes32 policyContractParameters;\n        uint issuanceBlockTimestamp;\n    }\n\n    mapping (bytes32 => Entry) internal registry;\n\n    event LogInsertEntry(\n        bytes32 indexed policyId,\n        address indexed carrier,\n        address resolver,\n        address indexed underwriter,\n        uint underwriterRiskRating,\n        address policyContract,\n        bytes32 policyContractParameters\n    );\n\n    function insert(\n        address _version,\n        address _carrier,\n        address _insured,\n        address _resolver,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _policyContract,\n        bytes32 _policyContractParameters,\n        uint _salt\n    )\n        public\n        whenNotPaused\n        returns (bytes32 _policyId)\n    {\n        Entry memory entry = Entry(\n            _version,\n            _carrier,\n            _resolver,\n            _underwriter,\n            _underwriterRiskRating,\n            _policyContract,\n            _policyContractParameters,\n            block.timestamp\n        );\n\n        bytes32 policyId = _getPolicyId(entry, _insured, _salt);\n\n        registry[policyId] = entry;\n\n        emit LogInsertEntry(\n            policyId,\n            entry.carrier,\n            entry.resolver,\n            entry.underwriter,\n            entry.underwriterRiskRating,\n            entry.policyContract,\n            entry.policyContractParameters\n        );\n\n        return policyId;\n    }\n\n    // TODO call stack too deep to return 'version'\n    function get(bytes32 policyId)\n        public\n        view\n        returns (address, address, address, uint, address, bytes32, uint)\n    {\n        return (\n            registry[policyId].carrier,\n            registry[policyId].resolver,\n            registry[policyId].underwriter,\n            registry[policyId].underwriterRiskRating,\n            registry[policyId].policyContract,\n            registry[policyId].policyContractParameters,\n            registry[policyId].issuanceBlockTimestamp\n        );\n    }\n\n    function getPolicyTerms(\n        bytes32 policyId\n    )\n        public\n        view\n        returns (address, bytes32)\n    {\n        return (\n            registry[policyId].policyContract,\n            registry[policyId].policyContractParameters\n        );\n    }\n\n    function getBindingBlockTimestamp(bytes32 policyId)\n        public\n        view\n        returns (uint timestamp)\n    {\n        return registry[policyId].issuanceBlockTimestamp;\n    }\n\n    function getPolicyContract(\n        bytes32 policyId\n    )\n        public\n        view\n        returns (address)\n    {\n        return registry[policyId].policyContract;\n    }\n\n    function getPolicyContractParameters(\n        bytes32 policyId\n    )\n        public\n        view\n        returns (bytes32)\n    {\n        return registry[policyId].policyContractParameters;\n    }\n\n    function getCarrier(\n        bytes32 policyId\n    )\n        public\n        view\n        returns (address)\n    {\n        return registry[policyId].carrier;\n    }\n\n    function _getPolicyId(Entry _entry, address _insured, uint _salt)\n        internal\n        pure\n        returns (bytes32)\n    {\n        return keccak256(\n            abi.encodePacked(\n                _entry.version, \n                _insured,\n                _entry.resolver,\n                _entry.underwriter,\n                _entry.underwriterRiskRating,\n                _entry.policyContract,\n                _entry.policyContractParameters,\n                _salt\n            )\n        );\n    }\n}",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
    "exportedSymbols": {
      "PolicyRegistry": [
        893
      ]
    },
    "id": 894,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 622,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:4"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 623,
        "nodeType": "ImportDirective",
        "scope": 894,
        "sourceUnit": 1993,
        "src": "26:80:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 624,
        "nodeType": "ImportDirective",
        "scope": 894,
        "sourceUnit": 2121,
        "src": "107:75:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 625,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1992,
              "src": "211:8:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$1992",
                "typeString": "contract Pausable"
              }
            },
            "id": 626,
            "nodeType": "InheritanceSpecifier",
            "src": "211:8:4"
          }
        ],
        "contractDependencies": [
          1863,
          1992
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 893,
        "linearizedBaseContracts": [
          893,
          1992,
          1863
        ],
        "name": "PolicyRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 629,
            "libraryName": {
              "contractScope": null,
              "id": 627,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2120,
              "src": "232:8:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2120",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "226:24:4",
            "typeName": {
              "id": 628,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "245:4:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "PolicyRegistry.Entry",
            "id": 646,
            "members": [
              {
                "constant": false,
                "id": 631,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "279:15:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 630,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "279:7:4",
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
                "id": 633,
                "name": "carrier",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "304:15:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 632,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "304:7:4",
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
                "id": 635,
                "name": "resolver",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "329:16:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 634,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "329:7:4",
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
                "id": 637,
                "name": "underwriter",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "355:19:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 636,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "355:7:4",
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
                "id": 639,
                "name": "underwriterRiskRating",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "384:26:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 638,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "384:4:4",
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
                "id": 641,
                "name": "policyContract",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "420:22:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 640,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "420:7:4",
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
                "id": 643,
                "name": "policyContractParameters",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "452:32:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 642,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "452:7:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 645,
                "name": "issuanceBlockTimestamp",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "494:27:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 644,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "494:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Entry",
            "nodeType": "StructDefinition",
            "scope": 893,
            "src": "256:272:4",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 650,
            "name": "registry",
            "nodeType": "VariableDeclaration",
            "scope": 893,
            "src": "534:44:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry)"
            },
            "typeName": {
              "id": 649,
              "keyType": {
                "id": 647,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "543:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "534:26:4",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry)"
              },
              "valueType": {
                "contractScope": null,
                "id": 648,
                "name": "Entry",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 646,
                "src": "554:5:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Entry_$646_storage_ptr",
                  "typeString": "struct PolicyRegistry.Entry"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 666,
            "name": "LogInsertEntry",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 652,
                  "indexed": true,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "615:24:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 651,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "615:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 654,
                  "indexed": true,
                  "name": "carrier",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "649:23:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 653,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "649:7:4",
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
                  "id": 656,
                  "indexed": false,
                  "name": "resolver",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "682:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 655,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:4",
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
                  "id": 658,
                  "indexed": true,
                  "name": "underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "708:27:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:7:4",
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
                  "id": 660,
                  "indexed": false,
                  "name": "underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "745:26:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "745:4:4",
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
                  "id": 662,
                  "indexed": false,
                  "name": "policyContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "781:22:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:7:4",
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
                  "id": 664,
                  "indexed": false,
                  "name": "policyContractParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "813:32:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 663,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "605:246:4"
            },
            "src": "585:267:4"
          },
          {
            "body": {
              "id": 737,
              "nodeType": "Block",
              "src": "1225:675:4",
              "statements": [
                {
                  "assignments": [
                    692
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 692,
                      "name": "entry",
                      "nodeType": "VariableDeclaration",
                      "scope": 738,
                      "src": "1235:18:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 691,
                        "name": "Entry",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 646,
                        "src": "1235:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$646_storage_ptr",
                          "typeString": "struct PolicyRegistry.Entry"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 704,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 694,
                        "name": "_version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 668,
                        "src": "1275:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 695,
                        "name": "_carrier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 670,
                        "src": "1297:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 696,
                        "name": "_resolver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 674,
                        "src": "1319:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 697,
                        "name": "_underwriter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 676,
                        "src": "1342:12:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 698,
                        "name": "_underwriterRiskRating",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 678,
                        "src": "1368:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 699,
                        "name": "_policyContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 680,
                        "src": "1404:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 700,
                        "name": "_policyContractParameters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 682,
                        "src": "1433:25:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 701,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4004,
                          "src": "1472:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 702,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1472:15:4",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 693,
                      "name": "Entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 646,
                      "src": "1256:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Entry_$646_storage_ptr_$",
                        "typeString": "type(struct PolicyRegistry.Entry storage pointer)"
                      }
                    },
                    "id": 703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1256:241:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$646_memory",
                      "typeString": "struct PolicyRegistry.Entry memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1235:262:4"
                },
                {
                  "assignments": [
                    706
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 706,
                      "name": "policyId",
                      "nodeType": "VariableDeclaration",
                      "scope": 738,
                      "src": "1508:16:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 705,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1508:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 712,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 708,
                        "name": "entry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 692,
                        "src": "1540:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                          "typeString": "struct PolicyRegistry.Entry memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 709,
                        "name": "_insured",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 672,
                        "src": "1547:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 710,
                        "name": "_salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 684,
                        "src": "1557:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                          "typeString": "struct PolicyRegistry.Entry memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 707,
                      "name": "_getPolicyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 892,
                      "src": "1527:12:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_Entry_$646_memory_ptr_$_t_address_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (struct PolicyRegistry.Entry memory,address,uint256) pure returns (bytes32)"
                      }
                    },
                    "id": 711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1527:36:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1508:55:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 717,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 713,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "1574:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 715,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 714,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 706,
                        "src": "1583:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1574:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 716,
                      "name": "entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 692,
                      "src": "1595:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry memory"
                      }
                    },
                    "src": "1574:26:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$646_storage",
                      "typeString": "struct PolicyRegistry.Entry storage ref"
                    }
                  },
                  "id": 718,
                  "nodeType": "ExpressionStatement",
                  "src": "1574:26:4"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 720,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 706,
                        "src": "1644:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 721,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1666:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 722,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "carrier",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 633,
                        "src": "1666:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 723,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1693:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 724,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "resolver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 635,
                        "src": "1693:14:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 725,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1721:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 726,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 637,
                        "src": "1721:17:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 727,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1752:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 728,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriterRiskRating",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 639,
                        "src": "1752:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 729,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1793:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 730,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 641,
                        "src": "1793:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 731,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1827:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 732,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContractParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 643,
                        "src": "1827:30:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 719,
                      "name": "LogInsertEntry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 666,
                      "src": "1616:14:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32,address,address,address,uint256,address,bytes32)"
                      }
                    },
                    "id": 733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1616:251:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 734,
                  "nodeType": "EmitStatement",
                  "src": "1611:256:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 735,
                    "name": "policyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 706,
                    "src": "1885:8:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 690,
                  "id": 736,
                  "nodeType": "Return",
                  "src": "1878:15:4"
                }
              ]
            },
            "documentation": null,
            "id": 738,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 687,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 686,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1953,
                  "src": "1171:13:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1171:13:4"
              }
            ],
            "name": "insert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 685,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 668,
                  "name": "_version",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "883:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 667,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "883:7:4",
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
                  "id": 670,
                  "name": "_carrier",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "909:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 669,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "909:7:4",
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
                  "id": 672,
                  "name": "_insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "935:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 671,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "935:7:4",
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
                  "id": 674,
                  "name": "_resolver",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "961:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 673,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:4",
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
                  "id": 676,
                  "name": "_underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "988:20:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 675,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "988:7:4",
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
                  "id": 678,
                  "name": "_underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1018:27:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 677,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1018:4:4",
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
                  "id": 680,
                  "name": "_policyContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1055:23:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 679,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1055:7:4",
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
                  "id": 682,
                  "name": "_policyContractParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1088:33:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 681,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1088:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 684,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1131:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 683,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1131:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "873:274:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 689,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1202:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 688,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1202:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1201:19:4"
            },
            "scope": 893,
            "src": "858:1042:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 787,
              "nodeType": "Block",
              "src": "2095:372:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 757,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2126:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 759,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 758,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2135:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2126:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 760,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "carrier",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 633,
                        "src": "2126:26:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 761,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2166:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 763,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 762,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2175:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2166:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 764,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "resolver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 635,
                        "src": "2166:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 765,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2207:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 767,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 766,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2216:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2207:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 768,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 637,
                        "src": "2207:30:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 769,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2251:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 771,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 770,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2260:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2251:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 772,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriterRiskRating",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 639,
                        "src": "2251:40:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 773,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2305:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 775,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 774,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2314:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2305:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 776,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 641,
                        "src": "2305:33:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 777,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2352:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 779,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 778,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2361:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2352:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 780,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContractParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 643,
                        "src": "2352:43:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 781,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2409:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 783,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 782,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2418:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2409:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 784,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "issuanceBlockTimestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 645,
                        "src": "2409:41:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 785,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2112:348:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$_t_uint256_$",
                      "typeString": "tuple(address,address,address,uint256,address,bytes32,uint256)"
                    }
                  },
                  "functionReturnParameters": 756,
                  "id": 786,
                  "nodeType": "Return",
                  "src": "2105:355:4"
                }
              ]
            },
            "documentation": null,
            "id": 788,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "get",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 740,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "1971:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1971:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1970:18:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 743,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2034:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 742,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2034:7:4",
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
                  "id": 745,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2043:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 744,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2043:7:4",
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
                  "id": 747,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2052:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 746,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2052:7:4",
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
                  "id": 749,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2061:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 748,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2061:4:4",
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
                  "id": 751,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2067:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 750,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2067:7:4",
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
                  "id": 753,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2076:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 752,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2076:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 755,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2085:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 754,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2085:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2033:57:4"
            },
            "scope": 893,
            "src": "1958:509:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 807,
              "nodeType": "Block",
              "src": "2596:138:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 797,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2627:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 799,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 798,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 790,
                            "src": "2636:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2627:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 800,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 641,
                        "src": "2627:33:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 801,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2674:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 803,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 802,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 790,
                            "src": "2683:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2674:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 804,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContractParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 643,
                        "src": "2674:43:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "id": 805,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2613:114:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_bytes32_$",
                      "typeString": "tuple(address,bytes32)"
                    }
                  },
                  "functionReturnParameters": 796,
                  "id": 806,
                  "nodeType": "Return",
                  "src": "2606:121:4"
                }
              ]
            },
            "documentation": null,
            "id": 808,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyTerms",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 790,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 808,
                  "src": "2506:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 789,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2506:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2496:32:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 793,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 808,
                  "src": "2574:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 792,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2574:7:4",
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
                  "id": 795,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 808,
                  "src": "2583:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 794,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2583:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2573:18:4"
            },
            "scope": 893,
            "src": "2473:261:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 820,
              "nodeType": "Block",
              "src": "2857:65:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 815,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "2874:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 817,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 816,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 810,
                        "src": "2883:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2874:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 818,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "issuanceBlockTimestamp",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 645,
                    "src": "2874:41:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 814,
                  "id": 819,
                  "nodeType": "Return",
                  "src": "2867:48:4"
                }
              ]
            },
            "documentation": null,
            "id": 821,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBindingBlockTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 810,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 821,
                  "src": "2774:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 809,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2774:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2773:18:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 813,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 821,
                  "src": "2837:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 812,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2837:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2836:16:4"
            },
            "scope": 893,
            "src": "2740:182:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 833,
              "nodeType": "Block",
              "src": "3045:57:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 828,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "3062:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 830,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 829,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 823,
                        "src": "3071:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3062:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 831,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyContract",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 641,
                    "src": "3062:33:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 827,
                  "id": 832,
                  "nodeType": "Return",
                  "src": "3055:40:4"
                }
              ]
            },
            "documentation": null,
            "id": 834,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 823,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 834,
                  "src": "2964:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 822,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2964:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2954:32:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 826,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 834,
                  "src": "3032:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 825,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3032:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3031:9:4"
            },
            "scope": 893,
            "src": "2928:174:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 846,
              "nodeType": "Block",
              "src": "3235:67:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 841,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "3252:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 843,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 842,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 836,
                        "src": "3261:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3252:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 844,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyContractParameters",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 643,
                    "src": "3252:43:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 840,
                  "id": 845,
                  "nodeType": "Return",
                  "src": "3245:50:4"
                }
              ]
            },
            "documentation": null,
            "id": 847,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyContractParameters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 836,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "3154:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 835,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3154:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3144:32:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 839,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "3222:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 838,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3222:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3221:9:4"
            },
            "scope": 893,
            "src": "3108:194:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 859,
              "nodeType": "Block",
              "src": "3418:50:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 854,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "3435:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 856,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 855,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 849,
                        "src": "3444:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3435:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 857,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "carrier",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 633,
                    "src": "3435:26:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 853,
                  "id": 858,
                  "nodeType": "Return",
                  "src": "3428:33:4"
                }
              ]
            },
            "documentation": null,
            "id": 860,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCarrier",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 849,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 860,
                  "src": "3337:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 848,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3337:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3327:32:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 852,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 860,
                  "src": "3405:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 851,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3405:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3404:9:4"
            },
            "scope": 893,
            "src": "3308:160:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 891,
              "nodeType": "Block",
              "src": "3600:372:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 874,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3674:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 875,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "version",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 631,
                            "src": "3674:14:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 876,
                            "name": "_insured",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 864,
                            "src": "3707:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 877,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3733:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 878,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "resolver",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 635,
                            "src": "3733:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 879,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3766:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 880,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "underwriter",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 637,
                            "src": "3766:18:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 881,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3802:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 882,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "underwriterRiskRating",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 639,
                            "src": "3802:28:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 883,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3848:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 884,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyContract",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 641,
                            "src": "3848:21:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 885,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3887:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 886,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyContractParameters",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 643,
                            "src": "3887:31:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 887,
                            "name": "_salt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 866,
                            "src": "3936:5:4",
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 872,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4001,
                            "src": "3640:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 873,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3640:16:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 888,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3640:315:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 871,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4008,
                      "src": "3617:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 889,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3617:348:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 870,
                  "id": 890,
                  "nodeType": "Return",
                  "src": "3610:355:4"
                }
              ]
            },
            "documentation": null,
            "id": 892,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_getPolicyId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 862,
                  "name": "_entry",
                  "nodeType": "VariableDeclaration",
                  "scope": 892,
                  "src": "3496:12:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                    "typeString": "struct PolicyRegistry.Entry"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 861,
                    "name": "Entry",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 646,
                    "src": "3496:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$646_storage_ptr",
                      "typeString": "struct PolicyRegistry.Entry"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 864,
                  "name": "_insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 892,
                  "src": "3510:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 863,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3510:7:4",
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
                  "id": 866,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 892,
                  "src": "3528:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 865,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3528:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3495:44:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 869,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 892,
                  "src": "3587:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 868,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3587:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3586:9:4"
            },
            "scope": 893,
            "src": "3474:498:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 894,
        "src": "184:3790:4"
      }
    ],
    "src": "0:3974:4"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
    "exportedSymbols": {
      "PolicyRegistry": [
        893
      ]
    },
    "id": 894,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 622,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:4"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 623,
        "nodeType": "ImportDirective",
        "scope": 894,
        "sourceUnit": 1993,
        "src": "26:80:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 624,
        "nodeType": "ImportDirective",
        "scope": 894,
        "sourceUnit": 2121,
        "src": "107:75:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 625,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1992,
              "src": "211:8:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$1992",
                "typeString": "contract Pausable"
              }
            },
            "id": 626,
            "nodeType": "InheritanceSpecifier",
            "src": "211:8:4"
          }
        ],
        "contractDependencies": [
          1863,
          1992
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 893,
        "linearizedBaseContracts": [
          893,
          1992,
          1863
        ],
        "name": "PolicyRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 629,
            "libraryName": {
              "contractScope": null,
              "id": 627,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2120,
              "src": "232:8:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2120",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "226:24:4",
            "typeName": {
              "id": 628,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "245:4:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "PolicyRegistry.Entry",
            "id": 646,
            "members": [
              {
                "constant": false,
                "id": 631,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "279:15:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 630,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "279:7:4",
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
                "id": 633,
                "name": "carrier",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "304:15:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 632,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "304:7:4",
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
                "id": 635,
                "name": "resolver",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "329:16:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 634,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "329:7:4",
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
                "id": 637,
                "name": "underwriter",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "355:19:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 636,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "355:7:4",
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
                "id": 639,
                "name": "underwriterRiskRating",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "384:26:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 638,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "384:4:4",
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
                "id": 641,
                "name": "policyContract",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "420:22:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 640,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "420:7:4",
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
                "id": 643,
                "name": "policyContractParameters",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "452:32:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 642,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "452:7:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 645,
                "name": "issuanceBlockTimestamp",
                "nodeType": "VariableDeclaration",
                "scope": 646,
                "src": "494:27:4",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 644,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "494:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Entry",
            "nodeType": "StructDefinition",
            "scope": 893,
            "src": "256:272:4",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 650,
            "name": "registry",
            "nodeType": "VariableDeclaration",
            "scope": 893,
            "src": "534:44:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry)"
            },
            "typeName": {
              "id": 649,
              "keyType": {
                "id": 647,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "543:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "534:26:4",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry)"
              },
              "valueType": {
                "contractScope": null,
                "id": 648,
                "name": "Entry",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 646,
                "src": "554:5:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Entry_$646_storage_ptr",
                  "typeString": "struct PolicyRegistry.Entry"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 666,
            "name": "LogInsertEntry",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 652,
                  "indexed": true,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "615:24:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 651,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "615:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 654,
                  "indexed": true,
                  "name": "carrier",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "649:23:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 653,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "649:7:4",
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
                  "id": 656,
                  "indexed": false,
                  "name": "resolver",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "682:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 655,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:4",
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
                  "id": 658,
                  "indexed": true,
                  "name": "underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "708:27:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:7:4",
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
                  "id": 660,
                  "indexed": false,
                  "name": "underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "745:26:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "745:4:4",
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
                  "id": 662,
                  "indexed": false,
                  "name": "policyContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "781:22:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:7:4",
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
                  "id": 664,
                  "indexed": false,
                  "name": "policyContractParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 666,
                  "src": "813:32:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 663,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "605:246:4"
            },
            "src": "585:267:4"
          },
          {
            "body": {
              "id": 737,
              "nodeType": "Block",
              "src": "1225:675:4",
              "statements": [
                {
                  "assignments": [
                    692
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 692,
                      "name": "entry",
                      "nodeType": "VariableDeclaration",
                      "scope": 738,
                      "src": "1235:18:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 691,
                        "name": "Entry",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 646,
                        "src": "1235:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$646_storage_ptr",
                          "typeString": "struct PolicyRegistry.Entry"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 704,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 694,
                        "name": "_version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 668,
                        "src": "1275:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 695,
                        "name": "_carrier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 670,
                        "src": "1297:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 696,
                        "name": "_resolver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 674,
                        "src": "1319:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 697,
                        "name": "_underwriter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 676,
                        "src": "1342:12:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 698,
                        "name": "_underwriterRiskRating",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 678,
                        "src": "1368:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 699,
                        "name": "_policyContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 680,
                        "src": "1404:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 700,
                        "name": "_policyContractParameters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 682,
                        "src": "1433:25:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 701,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4004,
                          "src": "1472:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 702,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1472:15:4",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 693,
                      "name": "Entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 646,
                      "src": "1256:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Entry_$646_storage_ptr_$",
                        "typeString": "type(struct PolicyRegistry.Entry storage pointer)"
                      }
                    },
                    "id": 703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1256:241:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$646_memory",
                      "typeString": "struct PolicyRegistry.Entry memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1235:262:4"
                },
                {
                  "assignments": [
                    706
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 706,
                      "name": "policyId",
                      "nodeType": "VariableDeclaration",
                      "scope": 738,
                      "src": "1508:16:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 705,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1508:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 712,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 708,
                        "name": "entry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 692,
                        "src": "1540:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                          "typeString": "struct PolicyRegistry.Entry memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 709,
                        "name": "_insured",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 672,
                        "src": "1547:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 710,
                        "name": "_salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 684,
                        "src": "1557:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                          "typeString": "struct PolicyRegistry.Entry memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 707,
                      "name": "_getPolicyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 892,
                      "src": "1527:12:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_Entry_$646_memory_ptr_$_t_address_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (struct PolicyRegistry.Entry memory,address,uint256) pure returns (bytes32)"
                      }
                    },
                    "id": 711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1527:36:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1508:55:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 717,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 713,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "1574:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 715,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 714,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 706,
                        "src": "1583:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1574:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 716,
                      "name": "entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 692,
                      "src": "1595:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry memory"
                      }
                    },
                    "src": "1574:26:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$646_storage",
                      "typeString": "struct PolicyRegistry.Entry storage ref"
                    }
                  },
                  "id": 718,
                  "nodeType": "ExpressionStatement",
                  "src": "1574:26:4"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 720,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 706,
                        "src": "1644:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 721,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1666:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 722,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "carrier",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 633,
                        "src": "1666:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 723,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1693:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 724,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "resolver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 635,
                        "src": "1693:14:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 725,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1721:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 726,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 637,
                        "src": "1721:17:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 727,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1752:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 728,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriterRiskRating",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 639,
                        "src": "1752:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 729,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1793:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 730,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 641,
                        "src": "1793:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 731,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 692,
                          "src": "1827:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 732,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContractParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 643,
                        "src": "1827:30:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 719,
                      "name": "LogInsertEntry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 666,
                      "src": "1616:14:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32,address,address,address,uint256,address,bytes32)"
                      }
                    },
                    "id": 733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1616:251:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 734,
                  "nodeType": "EmitStatement",
                  "src": "1611:256:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 735,
                    "name": "policyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 706,
                    "src": "1885:8:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 690,
                  "id": 736,
                  "nodeType": "Return",
                  "src": "1878:15:4"
                }
              ]
            },
            "documentation": null,
            "id": 738,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 687,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 686,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1953,
                  "src": "1171:13:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1171:13:4"
              }
            ],
            "name": "insert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 685,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 668,
                  "name": "_version",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "883:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 667,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "883:7:4",
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
                  "id": 670,
                  "name": "_carrier",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "909:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 669,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "909:7:4",
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
                  "id": 672,
                  "name": "_insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "935:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 671,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "935:7:4",
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
                  "id": 674,
                  "name": "_resolver",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "961:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 673,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:4",
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
                  "id": 676,
                  "name": "_underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "988:20:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 675,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "988:7:4",
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
                  "id": 678,
                  "name": "_underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1018:27:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 677,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1018:4:4",
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
                  "id": 680,
                  "name": "_policyContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1055:23:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 679,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1055:7:4",
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
                  "id": 682,
                  "name": "_policyContractParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1088:33:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 681,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1088:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 684,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1131:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 683,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1131:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "873:274:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 689,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 738,
                  "src": "1202:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 688,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1202:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1201:19:4"
            },
            "scope": 893,
            "src": "858:1042:4",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 787,
              "nodeType": "Block",
              "src": "2095:372:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 757,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2126:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 759,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 758,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2135:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2126:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 760,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "carrier",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 633,
                        "src": "2126:26:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 761,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2166:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 763,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 762,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2175:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2166:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 764,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "resolver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 635,
                        "src": "2166:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 765,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2207:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 767,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 766,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2216:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2207:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 768,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 637,
                        "src": "2207:30:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 769,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2251:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 771,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 770,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2260:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2251:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 772,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriterRiskRating",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 639,
                        "src": "2251:40:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 773,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2305:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 775,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 774,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2314:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2305:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 776,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 641,
                        "src": "2305:33:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 777,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2352:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 779,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 778,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2361:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2352:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 780,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContractParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 643,
                        "src": "2352:43:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 781,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2409:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 783,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 782,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "2418:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2409:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 784,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "issuanceBlockTimestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 645,
                        "src": "2409:41:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 785,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2112:348:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$_t_uint256_$",
                      "typeString": "tuple(address,address,address,uint256,address,bytes32,uint256)"
                    }
                  },
                  "functionReturnParameters": 756,
                  "id": 786,
                  "nodeType": "Return",
                  "src": "2105:355:4"
                }
              ]
            },
            "documentation": null,
            "id": 788,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "get",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 740,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "1971:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1971:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1970:18:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 743,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2034:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 742,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2034:7:4",
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
                  "id": 745,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2043:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 744,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2043:7:4",
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
                  "id": 747,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2052:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 746,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2052:7:4",
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
                  "id": 749,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2061:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 748,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2061:4:4",
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
                  "id": 751,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2067:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 750,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2067:7:4",
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
                  "id": 753,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2076:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 752,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2076:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 755,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "2085:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 754,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2085:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2033:57:4"
            },
            "scope": 893,
            "src": "1958:509:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 807,
              "nodeType": "Block",
              "src": "2596:138:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 797,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2627:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 799,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 798,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 790,
                            "src": "2636:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2627:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 800,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 641,
                        "src": "2627:33:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 801,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 650,
                            "src": "2674:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 803,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 802,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 790,
                            "src": "2683:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2674:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$646_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 804,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyContractParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 643,
                        "src": "2674:43:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "id": 805,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2613:114:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_bytes32_$",
                      "typeString": "tuple(address,bytes32)"
                    }
                  },
                  "functionReturnParameters": 796,
                  "id": 806,
                  "nodeType": "Return",
                  "src": "2606:121:4"
                }
              ]
            },
            "documentation": null,
            "id": 808,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyTerms",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 790,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 808,
                  "src": "2506:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 789,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2506:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2496:32:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 793,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 808,
                  "src": "2574:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 792,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2574:7:4",
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
                  "id": 795,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 808,
                  "src": "2583:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 794,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2583:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2573:18:4"
            },
            "scope": 893,
            "src": "2473:261:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 820,
              "nodeType": "Block",
              "src": "2857:65:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 815,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "2874:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 817,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 816,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 810,
                        "src": "2883:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2874:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 818,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "issuanceBlockTimestamp",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 645,
                    "src": "2874:41:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 814,
                  "id": 819,
                  "nodeType": "Return",
                  "src": "2867:48:4"
                }
              ]
            },
            "documentation": null,
            "id": 821,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBindingBlockTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 810,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 821,
                  "src": "2774:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 809,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2774:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2773:18:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 813,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 821,
                  "src": "2837:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 812,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2837:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2836:16:4"
            },
            "scope": 893,
            "src": "2740:182:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 833,
              "nodeType": "Block",
              "src": "3045:57:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 828,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "3062:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 830,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 829,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 823,
                        "src": "3071:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3062:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 831,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyContract",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 641,
                    "src": "3062:33:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 827,
                  "id": 832,
                  "nodeType": "Return",
                  "src": "3055:40:4"
                }
              ]
            },
            "documentation": null,
            "id": 834,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 823,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 834,
                  "src": "2964:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 822,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2964:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2954:32:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 826,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 834,
                  "src": "3032:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 825,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3032:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3031:9:4"
            },
            "scope": 893,
            "src": "2928:174:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 846,
              "nodeType": "Block",
              "src": "3235:67:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 841,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "3252:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 843,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 842,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 836,
                        "src": "3261:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3252:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 844,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyContractParameters",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 643,
                    "src": "3252:43:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 840,
                  "id": 845,
                  "nodeType": "Return",
                  "src": "3245:50:4"
                }
              ]
            },
            "documentation": null,
            "id": 847,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyContractParameters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 836,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "3154:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 835,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3154:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3144:32:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 839,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "3222:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 838,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3222:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3221:9:4"
            },
            "scope": 893,
            "src": "3108:194:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 859,
              "nodeType": "Block",
              "src": "3418:50:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 854,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 650,
                        "src": "3435:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$646_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 856,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 855,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 849,
                        "src": "3444:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3435:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$646_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 857,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "carrier",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 633,
                    "src": "3435:26:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 853,
                  "id": 858,
                  "nodeType": "Return",
                  "src": "3428:33:4"
                }
              ]
            },
            "documentation": null,
            "id": 860,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCarrier",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 849,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 860,
                  "src": "3337:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 848,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3337:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3327:32:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 852,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 860,
                  "src": "3405:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 851,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3405:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3404:9:4"
            },
            "scope": 893,
            "src": "3308:160:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 891,
              "nodeType": "Block",
              "src": "3600:372:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 874,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3674:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 875,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "version",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 631,
                            "src": "3674:14:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 876,
                            "name": "_insured",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 864,
                            "src": "3707:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 877,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3733:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 878,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "resolver",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 635,
                            "src": "3733:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 879,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3766:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 880,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "underwriter",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 637,
                            "src": "3766:18:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 881,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3802:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 882,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "underwriterRiskRating",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 639,
                            "src": "3802:28:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 883,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3848:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 884,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyContract",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 641,
                            "src": "3848:21:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 885,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 862,
                              "src": "3887:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 886,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyContractParameters",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 643,
                            "src": "3887:31:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 887,
                            "name": "_salt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 866,
                            "src": "3936:5:4",
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 872,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4001,
                            "src": "3640:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 873,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3640:16:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 888,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3640:315:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 871,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4008,
                      "src": "3617:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 889,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3617:348:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 870,
                  "id": 890,
                  "nodeType": "Return",
                  "src": "3610:355:4"
                }
              ]
            },
            "documentation": null,
            "id": 892,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_getPolicyId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 862,
                  "name": "_entry",
                  "nodeType": "VariableDeclaration",
                  "scope": 892,
                  "src": "3496:12:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Entry_$646_memory_ptr",
                    "typeString": "struct PolicyRegistry.Entry"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 861,
                    "name": "Entry",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 646,
                    "src": "3496:5:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$646_storage_ptr",
                      "typeString": "struct PolicyRegistry.Entry"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 864,
                  "name": "_insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 892,
                  "src": "3510:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 863,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3510:7:4",
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
                  "id": 866,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 892,
                  "src": "3528:10:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 865,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3528:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3495:44:4"
            },
            "payable": false,
            "returnParameters": {
              "id": 870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 869,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 892,
                  "src": "3587:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 868,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3587:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3586:9:4"
            },
            "scope": 893,
            "src": "3474:498:4",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 894,
        "src": "184:3790:4"
      }
    ],
    "src": "0:3974:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "1537413714450": {
      "events": {},
      "links": {},
      "address": "0x601E2819ab80E4bFAaA9e4E29281d90CdF8B8abd",
      "transactionHash": "0xa5ad441d6baa99c690a04756ea038dbd6176286b337a546d27d54fc7f7b3537c"
    }
  },
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:49.167Z"
}