export const SingleCoverageExamplePolicy = 
{
  "contractName": "SingleCoverageExamplePolicy",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "DAY_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x07762982"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "MONTH_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x20863894"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "WEEK_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x40018a0d"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "valuePaid",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x42cd62af"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "HOUR_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6f69c96f"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "contractRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xabf410e5"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "YEAR_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xfd127a41"
    },
    {
      "inputs": [
        {
          "name": "_contractRegistry",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
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
          "name": "claimToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "coverageAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "premiumRate",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "premiumUnitType",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "policyLengthInPremiumUnits",
          "type": "uint256"
        }
      ],
      "name": "LogSingleCoveragePolicyStart",
      "type": "event",
      "signature": "0x42f5cdade69114b9e488727bd4c299e408c2621e53e4a971a79947ffc84c2237"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "policyId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "payer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "unitsOfPayment",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "LogRegisterPayment",
      "type": "event",
      "signature": "0xd8b5c5f954c3b5b364550a307232e5c97c1063daa913de040de8991b1a20ce82"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        },
        {
          "name": "insured",
          "type": "address"
        }
      ],
      "name": "registerPolicyStart",
      "outputs": [
        {
          "name": "_sucess",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x19c573cd"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "parameters",
          "type": "bytes32"
        }
      ],
      "name": "unpackParametersFromBytes",
      "outputs": [
        {
          "name": "_claimTokenIndex",
          "type": "uint256"
        },
        {
          "name": "_premiumTokenIndex",
          "type": "uint256"
        },
        {
          "name": "_coverageAmount",
          "type": "uint256"
        },
        {
          "name": "_premiumRate",
          "type": "uint256"
        },
        {
          "name": "_premiumUnitType",
          "type": "uint256"
        },
        {
          "name": "_policyLengthInPremiumUnits",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0xed8907d7"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_policyId",
          "type": "bytes32"
        }
      ],
      "name": "getPolicyEndTimestamp",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x14b8c0a7"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051602080610df18339810180604052810190808051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610d6d806100846000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806307762982146100a957806314b8c0a7146100d457806319c573cd14610119578063208638941461018257806340018a0d146101ad57806342cd62af146101d85780636f69c96f1461021d578063abf410e514610248578063ed8907d71461029f578063fd127a4114610307575b600080fd5b3480156100b557600080fd5b506100be610332565b6040518082815260200191505060405180910390f35b3480156100e057600080fd5b50610103600480360381019080803560001916906020019092919050505061033b565b6040518082815260200191505060405180910390f35b34801561012557600080fd5b506101686004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061035d565b604051808215151515815260200191505060405180910390f35b34801561018e57600080fd5b506101976105c4565b6040518082815260200191505060405180910390f35b3480156101b957600080fd5b506101c26105d0565b6040518082815260200191505060405180910390f35b3480156101e457600080fd5b5061020760048036038101908080356000191690602001909291905050506105dc565b6040518082815260200191505060405180910390f35b34801561022957600080fd5b506102326105f4565b6040518082815260200191505060405180910390f35b34801561025457600080fd5b5061025d6105fa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ab57600080fd5b506102ce6004803603810190808035600019169060200190929190505050610620565b60405180878152602001868152602001858152602001848152602001838152602001828152602001965050505050505060405180910390f35b34801561031357600080fd5b5061031c61074c565b6040518082815260200191505060405180910390f35b6018610e100281565b6000610345610cc4565b61034e83610759565b90508060800151915050919050565b6000806000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631c4dd7d06040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156103f157600080fd5b505af1158015610405573d6000803e3d6000fd5b505050506040513d602081101561041b57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663b47fa7bf8c6040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506040805180830381600087803b1580156104a157600080fd5b505af11580156104b5573d6000803e3d6000fd5b505050506040513d60408110156104cb57600080fd5b81019080805190602001909291908051906020019092919050505080985081995050506104f787610620565b809650819750829850839950849a50859b505050505050503073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614156105b15781600073ffffffffffffffffffffffffffffffffffffffff168c600019167f42f5cdade69114b9e488727bd4c299e408c2621e53e4a971a79947ffc84c223787878660405180848152602001838152602001828152602001935050505060405180910390a4600198506105b6565b600098505b505050505050505092915050565b601e6018610e10020281565b60076018610e10020281565b60006020528060005260406000206000915090505481565b610e1081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000806000807fff000000000000000000000000000000000000000000000000000000000000006001028d1695507eff0000000000000000000000000000000000000000000000000000000000006001028d1694507dffffffffffffffffffffffff0000000000000000000000000000000000006001028d16935071ffffff0000000000000000000000000000006001028d1692506ef000000000000000000000000000006001028d1691506e0ffff00000000000000000000000006001028d1690506106fa8660f8610b5b565b6107058660f0610b5b565b610710866090610b5b565b61071b866078610b5b565b610726866074610b5b565b610731866064610b5b565b9b509b509b509b509b509b5050505050505091939550919395565b61016d6018610e10020281565b610761610cc4565b6000806000806000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631c4dd7d06040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156107f857600080fd5b505af115801561080c573d6000803e3d6000fd5b505050506040513d602081101561082257600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166345bd346e8e6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156108a957600080fd5b505af11580156108bd573d6000803e3d6000fd5b505050506040513d60208110156108d357600080fd5b81019080805190602001909291905050509a506108ef8b610620565b809a50819b50829c50839d50849e50859f5050505050505060048081111561091357fe5b861115151561092157600080fd5b85600481111561092d57fe5b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631c4dd7d06040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156109b557600080fd5b505af11580156109c9573d6000803e3d6000fd5b505050506040513d60208110156109df57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663424475948e6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610a6657600080fd5b505af1158015610a7a573d6000803e3d6000fd5b505050506040513d6020811015610a9057600080fd5b81019080805190602001909291905050509250610abe610aaf85610b78565b86610c6590919063ffffffff16565b9150610ad38383610ca390919063ffffffff16565b905061010060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001898152602001848152602001828152602001856004811115610b3a57fe5b8152602001868152602001888152509b505050505050505050505050919050565b60008160020a8360019004811515610b6f57fe5b04905092915050565b6000806004811115610b8657fe5b826004811115610b9257fe5b1415610ba257610e109050610c60565b60016004811115610baf57fe5b826004811115610bbb57fe5b1415610bce576018610e10029050610c60565b60026004811115610bdb57fe5b826004811115610be757fe5b1415610bfd5760076018610e1002029050610c60565b60036004811115610c0a57fe5b826004811115610c1657fe5b1415610c2c57601e6018610e1002029050610c60565b600480811115610c3857fe5b826004811115610c4457fe5b1415610c5b5761016d6018610e1002029050610c60565b600080fd5b919050565b6000806000841415610c7a5760009150610c9c565b8284029050828482811515610c8b57fe5b04141515610c9857600080fd5b8091505b5092915050565b6000808284019050838110151515610cba57600080fd5b8091505092915050565b61010060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160006004811115610d2d57fe5b8152602001600081526020016000815250905600a165627a7a7230582084f83568ea710d75c390617c9b8a94f047a86f912b564d6c879cec338ec88bc30029",
  "deployedBytecode": "0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806307762982146100a957806314b8c0a7146100d457806319c573cd14610119578063208638941461018257806340018a0d146101ad57806342cd62af146101d85780636f69c96f1461021d578063abf410e514610248578063ed8907d71461029f578063fd127a4114610307575b600080fd5b3480156100b557600080fd5b506100be610332565b6040518082815260200191505060405180910390f35b3480156100e057600080fd5b50610103600480360381019080803560001916906020019092919050505061033b565b6040518082815260200191505060405180910390f35b34801561012557600080fd5b506101686004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061035d565b604051808215151515815260200191505060405180910390f35b34801561018e57600080fd5b506101976105c4565b6040518082815260200191505060405180910390f35b3480156101b957600080fd5b506101c26105d0565b6040518082815260200191505060405180910390f35b3480156101e457600080fd5b5061020760048036038101908080356000191690602001909291905050506105dc565b6040518082815260200191505060405180910390f35b34801561022957600080fd5b506102326105f4565b6040518082815260200191505060405180910390f35b34801561025457600080fd5b5061025d6105fa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ab57600080fd5b506102ce6004803603810190808035600019169060200190929190505050610620565b60405180878152602001868152602001858152602001848152602001838152602001828152602001965050505050505060405180910390f35b34801561031357600080fd5b5061031c61074c565b6040518082815260200191505060405180910390f35b6018610e100281565b6000610345610cc4565b61034e83610759565b90508060800151915050919050565b6000806000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631c4dd7d06040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156103f157600080fd5b505af1158015610405573d6000803e3d6000fd5b505050506040513d602081101561041b57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663b47fa7bf8c6040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506040805180830381600087803b1580156104a157600080fd5b505af11580156104b5573d6000803e3d6000fd5b505050506040513d60408110156104cb57600080fd5b81019080805190602001909291908051906020019092919050505080985081995050506104f787610620565b809650819750829850839950849a50859b505050505050503073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614156105b15781600073ffffffffffffffffffffffffffffffffffffffff168c600019167f42f5cdade69114b9e488727bd4c299e408c2621e53e4a971a79947ffc84c223787878660405180848152602001838152602001828152602001935050505060405180910390a4600198506105b6565b600098505b505050505050505092915050565b601e6018610e10020281565b60076018610e10020281565b60006020528060005260406000206000915090505481565b610e1081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000806000807fff000000000000000000000000000000000000000000000000000000000000006001028d1695507eff0000000000000000000000000000000000000000000000000000000000006001028d1694507dffffffffffffffffffffffff0000000000000000000000000000000000006001028d16935071ffffff0000000000000000000000000000006001028d1692506ef000000000000000000000000000006001028d1691506e0ffff00000000000000000000000006001028d1690506106fa8660f8610b5b565b6107058660f0610b5b565b610710866090610b5b565b61071b866078610b5b565b610726866074610b5b565b610731866064610b5b565b9b509b509b509b509b509b5050505050505091939550919395565b61016d6018610e10020281565b610761610cc4565b6000806000806000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631c4dd7d06040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156107f857600080fd5b505af115801561080c573d6000803e3d6000fd5b505050506040513d602081101561082257600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166345bd346e8e6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156108a957600080fd5b505af11580156108bd573d6000803e3d6000fd5b505050506040513d60208110156108d357600080fd5b81019080805190602001909291905050509a506108ef8b610620565b809a50819b50829c50839d50849e50859f5050505050505060048081111561091357fe5b861115151561092157600080fd5b85600481111561092d57fe5b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631c4dd7d06040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156109b557600080fd5b505af11580156109c9573d6000803e3d6000fd5b505050506040513d60208110156109df57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663424475948e6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610a6657600080fd5b505af1158015610a7a573d6000803e3d6000fd5b505050506040513d6020811015610a9057600080fd5b81019080805190602001909291905050509250610abe610aaf85610b78565b86610c6590919063ffffffff16565b9150610ad38383610ca390919063ffffffff16565b905061010060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001898152602001848152602001828152602001856004811115610b3a57fe5b8152602001868152602001888152509b505050505050505050505050919050565b60008160020a8360019004811515610b6f57fe5b04905092915050565b6000806004811115610b8657fe5b826004811115610b9257fe5b1415610ba257610e109050610c60565b60016004811115610baf57fe5b826004811115610bbb57fe5b1415610bce576018610e10029050610c60565b60026004811115610bdb57fe5b826004811115610be757fe5b1415610bfd5760076018610e1002029050610c60565b60036004811115610c0a57fe5b826004811115610c1657fe5b1415610c2c57601e6018610e1002029050610c60565b600480811115610c3857fe5b826004811115610c4457fe5b1415610c5b5761016d6018610e1002029050610c60565b600080fd5b919050565b6000806000841415610c7a5760009150610c9c565b8284029050828482811515610c8b57fe5b04141515610c9857600080fd5b8091505b5092915050565b6000808284019050838110151515610cba57600080fd5b8091505092915050565b61010060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160006004811115610d2d57fe5b8152602001600081526020016000815250905600a165627a7a7230582084f83568ea710d75c390617c9b8a94f047a86f912b564d6c879cec338ec88bc30029",
  "sourceMap": "175:8954:7:-;;;1542:143;8:9:-1;5:2;;;30:1;27;20:12;5:2;1542:143:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1660:17;1624:16;;:54;;;;;;;;;;;;;;;;;;1542:143;175:8954;;;;;;",
  "deployedSourceMap": "175:8954:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;704:72;;8:9:-1;5:2;;;30:1;27;20:12;5:2;704:72:7;;;;;;;;;;;;;;;;;;;;;;;8121:260;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8121:260:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1691:1183;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1691:1183:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;859:73;;8:9:-1;5:2;;;30:1;27;20:12;5:2;859:73:7;;;;;;;;;;;;;;;;;;;;;;;782:71;;8:9:-1;5:2;;;30:1;27;20:12;5:2;782:71:7;;;;;;;;;;;;;;;;;;;;;;;1018:42;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1018:42:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;645:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;645:53:7;;;;;;;;;;;;;;;;;;;;;;;1067:40;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1067:40:7;;;;;;;;;;;;;;;;;;;;;;;;;;;2880:3160;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2880:3160:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;938:73;;8:9:-1;5:2;;;30:1;27;20:12;5:2;938:73:7;;;;;;;;;;;;;;;;;;;;;;;704:72;774:2;691:7;749:27;704:72;:::o;8121:260::-;8230:4;8250:41;;:::i;:::-;8294:34;8318:9;8294:23;:34::i;:::-;8250:78;;8345:6;:29;;;8338:36;;8121:260;;;;:::o;1691:1183::-;1809:12;1837:22;1869:32;2026:20;2056:22;2088:19;2117:16;2143:20;2173:31;1957:16;;;;;;;;;;;:31;;;:33;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1957:33:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1957:33:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1957:33:7;;;;;;;;;;;;;;;;:48;;;2006:8;1957:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1957:58:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1957:58:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1957:58:7;;;;;;;;;;;;;;;;;;;;;;;;;1912:103;;;;;;;;2340:51;2366:24;2340:25;:51::i;:::-;2215:176;;;;;;;;;;;;;;;;;;;;;;;;2516:4;2490:31;;:14;:31;;;2486:359;;;2735:15;2622:1;2542:266;;2588:8;2542:266;;;;2674:14;2706:11;2768:26;2542:266;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2830:4;2823:11;;;;2486:359;2862:5;2855:12;;1691:1183;;;;;;;;;;;;;:::o;859:73::-;930:2;774;691:7;749:27;906:26;859:73;:::o;782:71::-;852:1;774:2;691:7;749:27;828:25;782:71;:::o;1018:42::-;;;;;;;;;;;;;;;;;:::o;645:53::-;691:7;645:53;:::o;1067:40::-;;;;;;;;;;;;;:::o;2880:3160::-;2993:21;3028:23;3065:20;3099:17;3130:21;3165:32;3332:30;3553:32;3770:29;3980:26;4190:30;4440:41;3390:66;3377:79;;:10;:79;3332:124;;3613:66;3600:79;;:10;:79;3553:126;;3827:66;3814:79;;:10;:79;3770:123;;4034:66;4021:79;;:10;:79;3980:120;;4248:66;4235:79;;:10;:79;4190:124;;4509:66;4496:79;;:10;:79;4440:135;;5693:42;5707:22;5731:3;5693:13;:42::i;:::-;5749:44;5763:24;5789:3;5749:13;:44::i;:::-;5807:41;5821:21;5844:3;5807:13;:41::i;:::-;5862:38;5876:18;5896:3;5862:13;:38::i;:::-;5914:42;5928:22;5952:3;5914:13;:42::i;:::-;5970:53;5984:33;6019:3;5970:13;:53::i;:::-;5672:361;;;;;;;;;;;;2880:3160;;;;;;;;;;;;;:::o;938:73::-;1008:3;774:2;691:7;749:27;984;938:73;:::o;6209:1906::-;6308:27;;:::i;:::-;6351:18;6454:20;6484:22;6516:19;6545:16;6571:23;6604:31;7119;7341:27;7449:26;7566:27;6372:16;;;;;;;;;;;:31;;;:33;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6372:33:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6372:33:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6372:33:7;;;;;;;;;;;;;;;;:61;;;6434:8;6372:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6372:71:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6372:71:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6372:71:7;;;;;;;;;;;;;;;;6351:92;;6775:37;6801:10;6775:25;:37::i;:::-;6646:166;;;;;;;;;;;;;;;;;;;;;;;;7085:21;7080:27;;;;;;;;7058:18;:49;;7050:58;;;;;;;;7169:18;7153:35;;;;;;;;7119:69;;7371:16;;;;;;;;;;;:31;;;:33;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7371:33:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7371:33:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7371:33:7;;;;;;;;;;;;;;;;:58;;;7430:8;7371:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7371:68:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7371:68:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7371:68:7;;;;;;;;;;;;;;;;7341:98;;7478:78;7509:46;7539:15;7509:29;:46::i;:::-;7478:26;:30;;:78;;;;:::i;:::-;7449:107;;7596:49;7622:22;7596:21;:25;;:49;;;;:::i;:::-;7566:79;;7663:445;;;;;;;;;7732:1;7663:445;;;;;;7777:1;7663:445;;;;;;7809:14;7663:445;;;;7863:22;7663:445;;;;7923:22;7663:445;;;;7976:15;7663:445;;;;;;;;;;;;8033:26;7663:445;;;;8086:11;7663:445;;;7656:452;;6209:1906;;;;;;;;;;;;;;:::o;6046:157::-;6144:4;6190:6;6185:1;:11;6176:5;6171:11;;;:25;;;;;;;;6164:32;;6046:157;;;;:::o;8387:738::-;8506:32;8577:21;8558:40;;;;;;;;:15;:40;;;;;;;;;8554:565;;;691:7;8614:29;;;;8554:565;8683:20;8664:39;;;;;;;;:15;:39;;;;;;;;;8660:459;;;774:2;691:7;749:27;8719:28;;;;8660:459;8787:21;8768:40;;;;;;;;:15;:40;;;;;;;;;8764:355;;;852:1;774:2;691:7;749:27;828:25;8824:29;;;;8764:355;8893:22;8874:41;;;;;;;;:15;:41;;;;;;;;;8870:249;;;930:2;774;691:7;749:27;906:26;8931:30;;;;8870:249;9001:21;8982:40;;;;;;;;:15;:40;;;;;;;;;8978:141;;;1008:3;774:2;691:7;749:27;984;9038:31;;;;8978:141;9100:8;;;8387:738;;;;:::o;205:381:15:-;263:7;524:9;492:1;487;:6;483:35;;;510:1;503:8;;;;483:35;540:1;536;:5;524:17;;564:1;559;555;:5;;;;;;;;:10;547:19;;;;;;;;580:1;573:8;;205:381;;;;;;:::o;1273:131::-;1331:7;1346:9;1362:1;1358;:5;1346:17;;1382:1;1377;:6;;1369:15;;;;;;;;1398:1;1391:8;;1273:131;;;;;:::o;175:8954:7:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\n// import \"../PolicyContract.sol\";\nimport \"../ContractRegistry.sol\";\nimport \"../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\ncontract SingleCoverageExamplePolicy {\n    using SafeMath for uint;\n\n    enum PremiumUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }\n\n    struct SingleCoverageExampleParams {\n        address claimTokenAddress;\n        address premiumTokenAddress;\n        uint coverageAmount;\n        uint policyStartUnixTimestamp;\n        uint policyEndUnixTimestamp;\n        PremiumUnitType premiumUnitType;\n        uint policyLengthInPremiumUnits;\n        uint premiumRate;\n    }\n\n    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;\n    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;\n    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;\n    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;\n    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;\n\n    mapping (bytes32 => uint) public valuePaid;\n\n    ContractRegistry public contractRegistry;\n\n    event LogSingleCoveragePolicyStart(\n        bytes32 indexed policyId,\n        address indexed claimToken,\n        uint coverageAmount,\n        uint premiumRate,\n        uint indexed premiumUnitType,\n        uint policyLengthInPremiumUnits\n    );\n\n    event LogRegisterPayment(\n        bytes32 policyId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfPayment,\n        address tokenAddress\n    );\n\n    constructor(\n        address _contractRegistry\n    )\n        public\n    {\n        contractRegistry = ContractRegistry(_contractRegistry);\n    }\n\n    function registerPolicyStart(\n        bytes32 policyId,\n        address insured\n    )\n        public\n        returns (bool _sucess)\n    {\n        address policyContract;\n        bytes32 policyContractParameters;\n\n        (policyContract, policyContractParameters) = contractRegistry.policyRegistry().getPolicyTerms(policyId);\n\n        uint claimTokenIndex;\n        uint premiumTokenIndex;\n        uint coverageAmount;\n        uint premiumRate;\n        uint premiumUnitType;\n        uint policyLengthInPremiumUnits;\n\n        (claimTokenIndex, premiumTokenIndex, coverageAmount, premiumRate, premiumUnitType, policyLengthInPremiumUnits) =\n            unpackParametersFromBytes(policyContractParameters);\n\n        // TODO retrieve correct token address\n\n        // TODO perform validation\n\n        if (policyContract == address(this)) {\n            emit LogSingleCoveragePolicyStart(\n                policyId,\n                address(0), // TODO replace with token addr\n                coverageAmount,\n                premiumRate,\n                premiumUnitType,\n                policyLengthInPremiumUnits\n            );\n\n            return true;\n        }\n\n        return false;\n    }\n\n    function unpackParametersFromBytes(bytes32 parameters)\n        public\n        pure\n        returns (\n            uint _claimTokenIndex,\n            uint _premiumTokenIndex,\n            uint _coverageAmount,\n            uint _premiumRate,\n            uint _premiumUnitType,\n            uint _policyLengthInPremiumUnits\n        )\n    {\n        // The first byte of the parameters encodes the claim token's index in the\n        // token registry.\n        bytes32 claimTokenIndexShifted =\n            parameters & 0xff00000000000000000000000000000000000000000000000000000000000000;\n        // The subsequent byte encodes the premium token's index in the token registry\n        bytes32 premiumTokenIndexShifted =\n            parameters & 0x00ff000000000000000000000000000000000000000000000000000000000000;\n        // The subsequent 12 bytes of the parameters encode the coverage amount.\n        bytes32 coverageAmountShifted =\n            parameters & 0x0000ffffffffffffffffffffffff000000000000000000000000000000000000;\n        // The subsequent 3 bytes of the parameters encode the premium rate.\n        bytes32 premiumRateShifted =\n            parameters & 0x0000000000000000000000000000ffffff000000000000000000000000000000;\n        // The subsequent 4 bits (half byte) encode the premium unit type code.\n        bytes32 premiumUnitTypeShifted =\n            parameters & 0x0000000000000000000000000000000000f00000000000000000000000000000;\n        // The subsequent 2 bytes encode the policy length, as denominated in\n        // the encoded premium units.\n        bytes32 policyLengthInPremiumUnitsShifted =\n            parameters & 0x00000000000000000000000000000000000ffff0000000000000000000000000;\n\n        // Note that the remaining 108 bits are reserved for any parameters relevant to a\n        // collateralized terms contracts.\n\n        /*\n        Bit shift left each of these values so that the 32-byte uint\n        correctly represents the value that was originally packed\n        into the 32 byte string.\n\n        The below chart summarizes where in the 32 byte string each value\n        terminates -- which indicates the extent to which each value must be bit\n        shifted left.\n\n        Sanity helper: Location (bytes) = Location (bits) / 8\n\n                                        Location (bytes)\tLocation (bits)\n                                        32                  256\n        claimTokenIndex\t                31\t                248\n        premiumTokenIndex               30                  240\n        coverageAmount\t                18                  144\n        premiumRate                     15                  120\n        premiumUnitType                 14.5                116\n        policyLengthInPremiumUnits      12.5                100\n        */\n\n        return (\n            bitShiftRight(claimTokenIndexShifted, 248),\n            bitShiftRight(premiumTokenIndexShifted, 240),\n            bitShiftRight(coverageAmountShifted, 144),\n            bitShiftRight(premiumRateShifted, 120),\n            bitShiftRight(premiumUnitTypeShifted, 116),\n            bitShiftRight(policyLengthInPremiumUnitsShifted, 100)\n        );\n    }\n\n    function bitShiftRight(bytes32 value, uint amount)\n        internal\n        pure\n        returns (uint)\n    {\n        return uint(value) / 2 ** amount;\n    }\n\n    function unpackParamsForPolicyId(\n        bytes32 policyId\n    )\n        internal\n        returns (SingleCoverageExampleParams)\n    {\n        bytes32 parameters = contractRegistry.policyRegistry().getPolicyContractParameters(policyId);\n\n        uint claimTokenIndex;\n        uint premiumTokenIndex;\n        uint coverageAmount;\n        uint premiumRate;\n        uint rawPremiumUnitType;\n        uint policyLengthInPremiumUnits;\n\n        (claimTokenIndex, premiumTokenIndex, coverageAmount, premiumRate, rawPremiumUnitType, policyLengthInPremiumUnits) = \n            unpackParametersFromBytes(parameters);\n\n        // TODO Lookup claim and premium token addresses\n        // address claimTokenAddress = address(0); // DAI\n        // address premiumTokenAddress = address(0); // DAI\n\n        // Ensure raw value being stored is valid \n        require(rawPremiumUnitType <= uint(PremiumUnitType.YEARS));\n\n        PremiumUnitType premiumUnitType = PremiumUnitType(rawPremiumUnitType);\n\n        // uint premiumUnitLengthInSeconds = getPremiumUnitLengthInSeconds(premiumUnitType);\n        // TODO fix issuance vs binding language\n        uint issuanceBlockTimestamp = contractRegistry.policyRegistry().getBindingBlockTimestamp(policyId);\n        uint policyLengthInSeconds = policyLengthInPremiumUnits.mul(getPremiumUnitLengthInSeconds(premiumUnitType));\n        uint policyEndUnixTimestamp = policyLengthInSeconds.add(issuanceBlockTimestamp);\n\n        return SingleCoverageExampleParams({\n            claimTokenAddress: address(0),\n            premiumTokenAddress: address(0),\n            coverageAmount: coverageAmount,\n            policyStartUnixTimestamp: issuanceBlockTimestamp,\n            policyEndUnixTimestamp: policyEndUnixTimestamp,\n            premiumUnitType: premiumUnitType,\n            policyLengthInPremiumUnits: policyLengthInPremiumUnits,\n            premiumRate: premiumRate\n        });\n    }\n\n    function getPolicyEndTimestamp(\n        bytes32 _policyId\n    )\n        public\n        view\n        returns (uint)\n    {\n        SingleCoverageExampleParams memory params = unpackParamsForPolicyId(_policyId);\n        return params.policyEndUnixTimestamp;\n    }\n\n    function getPremiumUnitLengthInSeconds(PremiumUnitType premiumUnitType)\n        internal\n        pure\n        returns (uint _premiumUnitLengthInSeconds)\n    {\n        if (premiumUnitType == PremiumUnitType.HOURS) {\n            return HOUR_LENGTH_IN_SECONDS;\n        } else if (premiumUnitType == PremiumUnitType.DAYS) {\n            return DAY_LENGTH_IN_SECONDS;\n        } else if (premiumUnitType == PremiumUnitType.WEEKS) {\n            return WEEK_LENGTH_IN_SECONDS;\n        } else if (premiumUnitType == PremiumUnitType.MONTHS) {\n            return MONTH_LENGTH_IN_SECONDS;\n        } else if (premiumUnitType == PremiumUnitType.YEARS) {\n            return (YEAR_LENGTH_IN_SECONDS);\n        } else {\n            revert();\n        }\n    }\n\n\n}",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/policies/SingleCoverageExamplePolicy.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/policies/SingleCoverageExamplePolicy.sol",
    "exportedSymbols": {
      "SingleCoverageExamplePolicy": [
        1547
      ]
    },
    "id": 1548,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1100,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:7"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/ContractRegistry.sol",
        "file": "../ContractRegistry.sol",
        "id": 1101,
        "nodeType": "ImportDirective",
        "scope": 1548,
        "sourceUnit": 494,
        "src": "61:33:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1102,
        "nodeType": "ImportDirective",
        "scope": 1548,
        "sourceUnit": 2121,
        "src": "95:78:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1547,
        "linearizedBaseContracts": [
          1547
        ],
        "name": "SingleCoverageExamplePolicy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1105,
            "libraryName": {
              "contractScope": null,
              "id": 1103,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2120,
              "src": "224:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2120",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "218:24:7",
            "typeName": {
              "id": 1104,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "237:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "SingleCoverageExamplePolicy.PremiumUnitType",
            "id": 1111,
            "members": [
              {
                "id": 1106,
                "name": "HOURS",
                "nodeType": "EnumValue",
                "src": "271:5:7"
              },
              {
                "id": 1107,
                "name": "DAYS",
                "nodeType": "EnumValue",
                "src": "278:4:7"
              },
              {
                "id": 1108,
                "name": "WEEKS",
                "nodeType": "EnumValue",
                "src": "284:5:7"
              },
              {
                "id": 1109,
                "name": "MONTHS",
                "nodeType": "EnumValue",
                "src": "291:6:7"
              },
              {
                "id": 1110,
                "name": "YEARS",
                "nodeType": "EnumValue",
                "src": "299:5:7"
              }
            ],
            "name": "PremiumUnitType",
            "nodeType": "EnumDefinition",
            "src": "248:58:7"
          },
          {
            "canonicalName": "SingleCoverageExamplePolicy.SingleCoverageExampleParams",
            "id": 1128,
            "members": [
              {
                "constant": false,
                "id": 1113,
                "name": "claimTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "357:25:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1112,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "357:7:7",
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
                "id": 1115,
                "name": "premiumTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "392:27:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1114,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "392:7:7",
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
                "id": 1117,
                "name": "coverageAmount",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "429:19:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1116,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "429:4:7",
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
                "id": 1119,
                "name": "policyStartUnixTimestamp",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "458:29:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1118,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "458:4:7",
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
                "id": 1121,
                "name": "policyEndUnixTimestamp",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "497:27:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1120,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "497:4:7",
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
                "id": 1123,
                "name": "premiumUnitType",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "534:31:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                  "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 1122,
                  "name": "PremiumUnitType",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1111,
                  "src": "534:15:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                    "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1125,
                "name": "policyLengthInPremiumUnits",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "575:31:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1124,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "575:4:7",
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
                "id": 1127,
                "name": "premiumRate",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "616:16:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1126,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "616:4:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SingleCoverageExampleParams",
            "nodeType": "StructDefinition",
            "scope": 1547,
            "src": "312:327:7",
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1133,
            "name": "HOUR_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "645:53:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1129,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "645:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_3600_by_1",
                "typeString": "int_const 3600"
              },
              "id": 1132,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3630",
                "id": 1130,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "691:2:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_60_by_1",
                  "typeString": "int_const 60"
                },
                "value": "60"
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "3630",
                "id": 1131,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "696:2:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_60_by_1",
                  "typeString": "int_const 60"
                },
                "value": "60"
              },
              "src": "691:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3600_by_1",
                "typeString": "int_const 3600"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1138,
            "name": "DAY_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "704:72:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1134,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "704:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 1137,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "id": 1135,
                "name": "HOUR_LENGTH_IN_SECONDS",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 1133,
                "src": "749:22:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "3234",
                "id": 1136,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "774:2:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_24_by_1",
                  "typeString": "int_const 24"
                },
                "value": "24"
              },
              "src": "749:27:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1143,
            "name": "WEEK_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "782:71:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1139,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "782:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 1142,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "id": 1140,
                "name": "DAY_LENGTH_IN_SECONDS",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 1138,
                "src": "828:21:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "37",
                "id": 1141,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "852:1:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_7_by_1",
                  "typeString": "int_const 7"
                },
                "value": "7"
              },
              "src": "828:25:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1148,
            "name": "MONTH_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "859:73:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1144,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "859:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 1147,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "id": 1145,
                "name": "DAY_LENGTH_IN_SECONDS",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 1138,
                "src": "906:21:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "3330",
                "id": 1146,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "930:2:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_30_by_1",
                  "typeString": "int_const 30"
                },
                "value": "30"
              },
              "src": "906:26:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1153,
            "name": "YEAR_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "938:73:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1149,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "938:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 1152,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "id": 1150,
                "name": "DAY_LENGTH_IN_SECONDS",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 1138,
                "src": "984:21:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "333635",
                "id": 1151,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1008:3:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_365_by_1",
                  "typeString": "int_const 365"
                },
                "value": "365"
              },
              "src": "984:27:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1157,
            "name": "valuePaid",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "1018:42:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
              "typeString": "mapping(bytes32 => uint256)"
            },
            "typeName": {
              "id": 1156,
              "keyType": {
                "id": 1154,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1027:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1018:25:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                "typeString": "mapping(bytes32 => uint256)"
              },
              "valueType": {
                "id": 1155,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1038:4:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1159,
            "name": "contractRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "1067:40:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ContractRegistry_$493",
              "typeString": "contract ContractRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 1158,
              "name": "ContractRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 493,
              "src": "1067:16:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ContractRegistry_$493",
                "typeString": "contract ContractRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1173,
            "name": "LogSingleCoveragePolicyStart",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1161,
                  "indexed": true,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1158:24:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1160,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:7:7",
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
                  "id": 1163,
                  "indexed": true,
                  "name": "claimToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1192:26:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1162,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1192:7:7",
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
                  "id": 1165,
                  "indexed": false,
                  "name": "coverageAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1228:19:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1164,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1228:4:7",
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
                  "id": 1167,
                  "indexed": false,
                  "name": "premiumRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1257:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1166,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1257:4:7",
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
                  "id": 1169,
                  "indexed": true,
                  "name": "premiumUnitType",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1283:28:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1168,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:4:7",
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
                  "id": 1171,
                  "indexed": false,
                  "name": "policyLengthInPremiumUnits",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1321:31:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1170,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1321:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1148:210:7"
            },
            "src": "1114:245:7"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1185,
            "name": "LogRegisterPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1175,
                  "indexed": false,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1399:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1174,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1399:7:7",
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
                  "id": 1177,
                  "indexed": false,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1425:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1176,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1425:7:7",
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
                  "id": 1179,
                  "indexed": false,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1448:19:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1178,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1448:7:7",
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
                  "id": 1181,
                  "indexed": false,
                  "name": "unitsOfPayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1477:22:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1180,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1477:7:7",
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
                  "id": 1183,
                  "indexed": false,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1509:20:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1182,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1509:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1389:146:7"
            },
            "src": "1365:171:7"
          },
          {
            "body": {
              "id": 1196,
              "nodeType": "Block",
              "src": "1614:71:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1190,
                      "name": "contractRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1159,
                      "src": "1624:16:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ContractRegistry_$493",
                        "typeString": "contract ContractRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1192,
                          "name": "_contractRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1187,
                          "src": "1660:17:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1191,
                        "name": "ContractRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 493,
                        "src": "1643:16:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ContractRegistry_$493_$",
                          "typeString": "type(contract ContractRegistry)"
                        }
                      },
                      "id": 1193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1643:35:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ContractRegistry_$493",
                        "typeString": "contract ContractRegistry"
                      }
                    },
                    "src": "1624:54:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ContractRegistry_$493",
                      "typeString": "contract ContractRegistry"
                    }
                  },
                  "id": 1195,
                  "nodeType": "ExpressionStatement",
                  "src": "1624:54:7"
                }
              ]
            },
            "documentation": null,
            "id": 1197,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1187,
                  "name": "_contractRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 1197,
                  "src": "1563:25:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1186,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1563:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1553:41:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1614:0:7"
            },
            "scope": 1547,
            "src": "1542:143:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1275,
              "nodeType": "Block",
              "src": "1827:1047:7",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1207,
                      "name": "policyContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "1837:22:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1206,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1837:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1208,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1837:22:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1210,
                      "name": "policyContractParameters",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "1869:32:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1209,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1869:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1211,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1869:32:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 1212,
                          "name": "policyContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1207,
                          "src": "1913:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1213,
                          "name": "policyContractParameters",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1210,
                          "src": "1929:24:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "id": 1214,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "1912:42:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_bytes32_$",
                        "typeString": "tuple(address,bytes32)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1219,
                          "name": "policyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1199,
                          "src": "2006:8:7",
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
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1215,
                              "name": "contractRegistry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1159,
                              "src": "1957:16:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ContractRegistry_$493",
                                "typeString": "contract ContractRegistry"
                              }
                            },
                            "id": 1216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyRegistry",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 452,
                            "src": "1957:31:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_PolicyRegistry_$893_$",
                              "typeString": "function () view external returns (contract PolicyRegistry)"
                            }
                          },
                          "id": 1217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1957:33:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                            "typeString": "contract PolicyRegistry"
                          }
                        },
                        "id": 1218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "getPolicyTerms",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 808,
                        "src": "1957:48:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$_t_bytes32_$",
                          "typeString": "function (bytes32) view external returns (address,bytes32)"
                        }
                      },
                      "id": 1220,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1957:58:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_bytes32_$",
                        "typeString": "tuple(address,bytes32)"
                      }
                    },
                    "src": "1912:103:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1222,
                  "nodeType": "ExpressionStatement",
                  "src": "1912:103:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1224,
                      "name": "claimTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2026:20:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1223,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2026:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1225,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2026:20:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1227,
                      "name": "premiumTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2056:22:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1226,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2056:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1228,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2056:22:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1230,
                      "name": "coverageAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2088:19:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1229,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2088:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1231,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2088:19:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1233,
                      "name": "premiumRate",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2117:16:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1232,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2117:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1234,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2117:16:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1236,
                      "name": "premiumUnitType",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2143:20:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1235,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2143:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1237,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2143:20:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1239,
                      "name": "policyLengthInPremiumUnits",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2173:31:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1238,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2173:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1240,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2173:31:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 1241,
                          "name": "claimTokenIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1224,
                          "src": "2216:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1242,
                          "name": "premiumTokenIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1227,
                          "src": "2233:17:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1243,
                          "name": "coverageAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "2252:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1244,
                          "name": "premiumRate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1233,
                          "src": "2268:11:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1245,
                          "name": "premiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1236,
                          "src": "2281:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1246,
                          "name": "policyLengthInPremiumUnits",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1239,
                          "src": "2298:26:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1247,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2215:110:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1249,
                          "name": "policyContractParameters",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1210,
                          "src": "2366:24:7",
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
                          }
                        ],
                        "id": 1248,
                        "name": "unpackParametersFromBytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1356,
                        "src": "2340:25:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (bytes32) pure returns (uint256,uint256,uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 1250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2340:51:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "2215:176:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1252,
                  "nodeType": "ExpressionStatement",
                  "src": "2215:176:7"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 1257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1253,
                      "name": "policyContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1207,
                      "src": "2490:14:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1255,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4077,
                          "src": "2516:4:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_SingleCoverageExamplePolicy_$1547",
                            "typeString": "contract SingleCoverageExamplePolicy"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_SingleCoverageExamplePolicy_$1547",
                            "typeString": "contract SingleCoverageExamplePolicy"
                          }
                        ],
                        "id": 1254,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2508:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 1256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2508:13:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2490:31:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1272,
                  "nodeType": "IfStatement",
                  "src": "2486:359:7",
                  "trueBody": {
                    "id": 1271,
                    "nodeType": "Block",
                    "src": "2523:322:7",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1259,
                              "name": "policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1199,
                              "src": "2588:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1261,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2622:1:7",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 1260,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2614:7:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 1262,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2614:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1263,
                              "name": "coverageAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1230,
                              "src": "2674:14:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1264,
                              "name": "premiumRate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1233,
                              "src": "2706:11:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1265,
                              "name": "premiumUnitType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1236,
                              "src": "2735:15:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1266,
                              "name": "policyLengthInPremiumUnits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1239,
                              "src": "2768:26:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 1258,
                            "name": "LogSingleCoveragePolicyStart",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1173,
                            "src": "2542:28:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (bytes32,address,uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 1267,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2542:266:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1268,
                        "nodeType": "EmitStatement",
                        "src": "2537:271:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1269,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2830:4:7",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 1205,
                        "id": 1270,
                        "nodeType": "Return",
                        "src": "2823:11:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 1273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2862:5:7",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 1205,
                  "id": 1274,
                  "nodeType": "Return",
                  "src": "2855:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 1276,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerPolicyStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1199,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1276,
                  "src": "1729:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1198,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1729:7:7",
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
                  "id": 1201,
                  "name": "insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 1276,
                  "src": "1755:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1200,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1755:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1719:57:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1204,
                  "name": "_sucess",
                  "nodeType": "VariableDeclaration",
                  "scope": 1276,
                  "src": "1809:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1203,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1809:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1808:14:7"
            },
            "scope": 1547,
            "src": "1691:1183:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1355,
              "nodeType": "Block",
              "src": "3212:2828:7",
              "statements": [
                {
                  "assignments": [
                    1294
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1294,
                      "name": "claimTokenIndexShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "3332:30:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1293,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3332:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1298,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1295,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "3377:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307866663030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030",
                      "id": 1296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3390:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_115339776388732929035197660848497720713218148788040405586178452820382218977280_by_1",
                        "typeString": "int_const 1153...(70 digits omitted)...7280"
                      },
                      "value": "0xff00000000000000000000000000000000000000000000000000000000000000"
                    },
                    "src": "3377:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3332:124:7"
                },
                {
                  "assignments": [
                    1300
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1300,
                      "name": "premiumTokenIndexShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "3553:32:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1299,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3553:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1304,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1303,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1301,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "3600:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830306666303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030",
                      "id": 1302,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3613:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_450546001518488004043740862689444221536008393703282834321009581329618042880_by_1",
                        "typeString": "int_const 4505...(67 digits omitted)...2880"
                      },
                      "value": "0x00ff000000000000000000000000000000000000000000000000000000000000"
                    },
                    "src": "3600:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3553:126:7"
                },
                {
                  "assignments": [
                    1306
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1306,
                      "name": "coverageAmountShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "3770:29:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1305,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3770:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1310,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1307,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "3814:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830303030666666666666666666666666666666666666666666666666303030303030303030303030303030303030303030303030303030303030303030303030",
                      "id": 1308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3827:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1766847064778384329583297500720617770628953273734083239848957839786639360_by_1",
                        "typeString": "int_const 1766...(65 digits omitted)...9360"
                      },
                      "value": "0x0000ffffffffffffffffffffffff000000000000000000000000000000000000"
                    },
                    "src": "3814:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3770:123:7"
                },
                {
                  "assignments": [
                    1312
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1312,
                      "name": "premiumRateShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "3980:26:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1311,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3980:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1316,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1313,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "4021:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830303030303030303030303030303030303030303030303030303030666666666666303030303030303030303030303030303030303030303030303030303030",
                      "id": 1314,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4034:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_22300743869302627356619845368841301225635840_by_1",
                        "typeString": "int_const 2230...(36 digits omitted)...5840"
                      },
                      "value": "0x0000000000000000000000000000ffffff000000000000000000000000000000"
                    },
                    "src": "4021:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3980:120:7"
                },
                {
                  "assignments": [
                    1318
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1318,
                      "name": "premiumUnitTypeShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "4190:30:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1317,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4190:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1322,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1321,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1319,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "4235:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830303030303030303030303030303030303030303030303030303030303030303030663030303030303030303030303030303030303030303030303030303030",
                      "id": 1320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4248:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1246151246048358630847319119012823040_by_1",
                        "typeString": "int_const 1246...(29 digits omitted)...3040"
                      },
                      "value": "0x0000000000000000000000000000000000f00000000000000000000000000000"
                    },
                    "src": "4235:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4190:124:7"
                },
                {
                  "assignments": [
                    1324
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1324,
                      "name": "policyLengthInPremiumUnitsShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "4440:41:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1323,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4440:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1328,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1327,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1325,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "4496:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830303030303030303030303030303030303030303030303030303030303030303030306666666630303030303030303030303030303030303030303030303030",
                      "id": 1326,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4509:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_83075482085957013827086444564316160_by_1",
                        "typeString": "int_const 8307...(27 digits omitted)...6160"
                      },
                      "value": "0x00000000000000000000000000000000000ffff0000000000000000000000000"
                    },
                    "src": "4496:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4440:135:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1330,
                            "name": "claimTokenIndexShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1294,
                            "src": "5707:22:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "323438",
                            "id": 1331,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5731:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_248_by_1",
                              "typeString": "int_const 248"
                            },
                            "value": "248"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_248_by_1",
                              "typeString": "int_const 248"
                            }
                          ],
                          "id": 1329,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5693:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1332,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5693:42:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1334,
                            "name": "premiumTokenIndexShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1300,
                            "src": "5763:24:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "323430",
                            "id": 1335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5789:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_240_by_1",
                              "typeString": "int_const 240"
                            },
                            "value": "240"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_240_by_1",
                              "typeString": "int_const 240"
                            }
                          ],
                          "id": 1333,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5749:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1336,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5749:44:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1338,
                            "name": "coverageAmountShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1306,
                            "src": "5821:21:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "313434",
                            "id": 1339,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5844:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_144_by_1",
                              "typeString": "int_const 144"
                            },
                            "value": "144"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_144_by_1",
                              "typeString": "int_const 144"
                            }
                          ],
                          "id": 1337,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5807:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5807:41:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1342,
                            "name": "premiumRateShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1312,
                            "src": "5876:18:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "313230",
                            "id": 1343,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5896:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_120_by_1",
                              "typeString": "int_const 120"
                            },
                            "value": "120"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_120_by_1",
                              "typeString": "int_const 120"
                            }
                          ],
                          "id": 1341,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5862:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5862:38:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1346,
                            "name": "premiumUnitTypeShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1318,
                            "src": "5928:22:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "313136",
                            "id": 1347,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5952:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_116_by_1",
                              "typeString": "int_const 116"
                            },
                            "value": "116"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_116_by_1",
                              "typeString": "int_const 116"
                            }
                          ],
                          "id": 1345,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5914:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5914:42:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1350,
                            "name": "policyLengthInPremiumUnitsShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1324,
                            "src": "5984:33:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "313030",
                            "id": 1351,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6019:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            }
                          ],
                          "id": 1349,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5970:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1352,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5970:53:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 1353,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5679:354:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 1292,
                  "id": 1354,
                  "nodeType": "Return",
                  "src": "5672:361:7"
                }
              ]
            },
            "documentation": null,
            "id": 1356,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "unpackParametersFromBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1278,
                  "name": "parameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "2915:18:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1277,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2915:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2914:20:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1281,
                  "name": "_claimTokenIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "2993:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1280,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2993:4:7",
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
                  "id": 1283,
                  "name": "_premiumTokenIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3028:23:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1282,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3028:4:7",
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
                  "id": 1285,
                  "name": "_coverageAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3065:20:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1284,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3065:4:7",
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
                  "id": 1287,
                  "name": "_premiumRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3099:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1286,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3099:4:7",
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
                  "id": 1289,
                  "name": "_premiumUnitType",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3130:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1288,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:4:7",
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
                  "id": 1291,
                  "name": "_policyLengthInPremiumUnits",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3165:32:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1290,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3165:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2979:228:7"
            },
            "scope": 1547,
            "src": "2880:3160:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1373,
              "nodeType": "Block",
              "src": "6154:49:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1366,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1358,
                          "src": "6176:5:7",
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
                          }
                        ],
                        "id": 1365,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6171:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 1367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6171:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1370,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 1368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6185:1:7",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "**",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 1369,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1360,
                        "src": "6190:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6185:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6171:25:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1364,
                  "id": 1372,
                  "nodeType": "Return",
                  "src": "6164:32:7"
                }
              ]
            },
            "documentation": null,
            "id": 1374,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bitShiftRight",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1361,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1358,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "6069:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1357,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6069:7:7",
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
                  "id": 1360,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "6084:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1359,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6084:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6068:28:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1364,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1363,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "6144:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1362,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6144:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6143:6:7"
            },
            "scope": 1547,
            "src": "6046:157:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1475,
              "nodeType": "Block",
              "src": "6341:1774:7",
              "statements": [
                {
                  "assignments": [
                    1382
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1382,
                      "name": "parameters",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6351:18:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1381,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "6351:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1389,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1387,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1376,
                        "src": "6434:8:7",
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
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1383,
                            "name": "contractRegistry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1159,
                            "src": "6372:16:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ContractRegistry_$493",
                              "typeString": "contract ContractRegistry"
                            }
                          },
                          "id": 1384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "policyRegistry",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 452,
                          "src": "6372:31:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_PolicyRegistry_$893_$",
                            "typeString": "function () view external returns (contract PolicyRegistry)"
                          }
                        },
                        "id": 1385,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6372:33:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getPolicyContractParameters",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 847,
                      "src": "6372:61:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 1388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6372:71:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6351:92:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1391,
                      "name": "claimTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6454:20:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1390,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6454:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1392,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6454:20:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1394,
                      "name": "premiumTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6484:22:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1393,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6484:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1395,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6484:22:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1397,
                      "name": "coverageAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6516:19:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1396,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6516:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1398,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6516:19:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1400,
                      "name": "premiumRate",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6545:16:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1399,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6545:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1401,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6545:16:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1403,
                      "name": "rawPremiumUnitType",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6571:23:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1402,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6571:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1404,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6571:23:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1406,
                      "name": "policyLengthInPremiumUnits",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6604:31:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1405,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6604:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1407,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6604:31:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 1408,
                          "name": "claimTokenIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1391,
                          "src": "6647:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1409,
                          "name": "premiumTokenIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1394,
                          "src": "6664:17:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1410,
                          "name": "coverageAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1397,
                          "src": "6683:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1411,
                          "name": "premiumRate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1400,
                          "src": "6699:11:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1412,
                          "name": "rawPremiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1403,
                          "src": "6712:18:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1413,
                          "name": "policyLengthInPremiumUnits",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1406,
                          "src": "6732:26:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1414,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "6646:113:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1416,
                          "name": "parameters",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1382,
                          "src": "6801:10:7",
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
                          }
                        ],
                        "id": 1415,
                        "name": "unpackParametersFromBytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1356,
                        "src": "6775:25:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (bytes32) pure returns (uint256,uint256,uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 1417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6775:37:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "6646:166:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1419,
                  "nodeType": "ExpressionStatement",
                  "src": "6646:166:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1426,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1421,
                          "name": "rawPremiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1403,
                          "src": "7058:18:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1423,
                                "name": "PremiumUnitType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1111,
                                "src": "7085:15:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                                  "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                                }
                              },
                              "id": 1424,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "YEARS",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "7085:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                                "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                                "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                              }
                            ],
                            "id": 1422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7080:4:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": "uint"
                          },
                          "id": 1425,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7080:27:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7058:49:7",
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
                      "id": 1420,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "7050:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7050:58:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1428,
                  "nodeType": "ExpressionStatement",
                  "src": "7050:58:7"
                },
                {
                  "assignments": [
                    1430
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1430,
                      "name": "premiumUnitType",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "7119:31:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                        "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1429,
                        "name": "PremiumUnitType",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1111,
                        "src": "7119:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1434,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1432,
                        "name": "rawPremiumUnitType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1403,
                        "src": "7169:18:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1431,
                      "name": "PremiumUnitType",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1111,
                      "src": "7153:15:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                        "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                      }
                    },
                    "id": 1433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7153:35:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                      "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7119:69:7"
                },
                {
                  "assignments": [
                    1436
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1436,
                      "name": "issuanceBlockTimestamp",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "7341:27:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1435,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "7341:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1443,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1441,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1376,
                        "src": "7430:8:7",
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
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1437,
                            "name": "contractRegistry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1159,
                            "src": "7371:16:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ContractRegistry_$493",
                              "typeString": "contract ContractRegistry"
                            }
                          },
                          "id": 1438,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "policyRegistry",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 452,
                          "src": "7371:31:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_PolicyRegistry_$893_$",
                            "typeString": "function () view external returns (contract PolicyRegistry)"
                          }
                        },
                        "id": 1439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7371:33:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getBindingBlockTimestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 821,
                      "src": "7371:58:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 1442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7371:68:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7341:98:7"
                },
                {
                  "assignments": [
                    1445
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1445,
                      "name": "policyLengthInSeconds",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "7449:26:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1444,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "7449:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1452,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1449,
                            "name": "premiumUnitType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1430,
                            "src": "7539:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            }
                          ],
                          "id": 1448,
                          "name": "getPremiumUnitLengthInSeconds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1546,
                          "src": "7509:29:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_enum$_PremiumUnitType_$1111_$returns$_t_uint256_$",
                            "typeString": "function (enum SingleCoverageExamplePolicy.PremiumUnitType) pure returns (uint256)"
                          }
                        },
                        "id": 1450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7509:46:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1446,
                        "name": "policyLengthInPremiumUnits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1406,
                        "src": "7478:26:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1447,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2027,
                      "src": "7478:30:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7478:78:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7449:107:7"
                },
                {
                  "assignments": [
                    1454
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1454,
                      "name": "policyEndUnixTimestamp",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "7566:27:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1453,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "7566:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1459,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1457,
                        "name": "issuanceBlockTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "7622:22:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1455,
                        "name": "policyLengthInSeconds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1445,
                        "src": "7596:21:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1456,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2099,
                      "src": "7596:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7596:49:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7566:79:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1462,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7732:1:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 1461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7724:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 1463,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7724:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1465,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7777:1:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 1464,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7769:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 1466,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7769:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1467,
                        "name": "coverageAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1397,
                        "src": "7809:14:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1468,
                        "name": "issuanceBlockTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "7863:22:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1469,
                        "name": "policyEndUnixTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1454,
                        "src": "7923:22:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1470,
                        "name": "premiumUnitType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1430,
                        "src": "7976:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1471,
                        "name": "policyLengthInPremiumUnits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1406,
                        "src": "8033:26:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1472,
                        "name": "premiumRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1400,
                        "src": "8086:11:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": null,
                      "id": 1460,
                      "name": "SingleCoverageExampleParams",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1128,
                      "src": "7663:27:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_SingleCoverageExampleParams_$1128_storage_ptr_$",
                        "typeString": "type(struct SingleCoverageExamplePolicy.SingleCoverageExampleParams storage pointer)"
                      }
                    },
                    "id": 1473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [
                      "claimTokenAddress",
                      "premiumTokenAddress",
                      "coverageAmount",
                      "policyStartUnixTimestamp",
                      "policyEndUnixTimestamp",
                      "premiumUnitType",
                      "policyLengthInPremiumUnits",
                      "premiumRate"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "7663:445:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory",
                      "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams memory"
                    }
                  },
                  "functionReturnParameters": 1380,
                  "id": 1474,
                  "nodeType": "Return",
                  "src": "7656:452:7"
                }
              ]
            },
            "documentation": null,
            "id": 1476,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unpackParamsForPolicyId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1376,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1476,
                  "src": "6251:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1375,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6251:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6241:32:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1379,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1476,
                  "src": "6308:27:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory_ptr",
                    "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1378,
                    "name": "SingleCoverageExampleParams",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1128,
                    "src": "6308:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_storage_ptr",
                      "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6307:29:7"
            },
            "scope": 1547,
            "src": "6209:1906:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1492,
              "nodeType": "Block",
              "src": "8240:141:7",
              "statements": [
                {
                  "assignments": [
                    1484
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1484,
                      "name": "params",
                      "nodeType": "VariableDeclaration",
                      "scope": 1493,
                      "src": "8250:41:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory_ptr",
                        "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1483,
                        "name": "SingleCoverageExampleParams",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1128,
                        "src": "8250:27:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_storage_ptr",
                          "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1488,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1486,
                        "name": "_policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1478,
                        "src": "8318:9:7",
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
                        }
                      ],
                      "id": 1485,
                      "name": "unpackParamsForPolicyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1476,
                      "src": "8294:23:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$_t_struct$_SingleCoverageExampleParams_$1128_memory_ptr_$",
                        "typeString": "function (bytes32) returns (struct SingleCoverageExamplePolicy.SingleCoverageExampleParams memory)"
                      }
                    },
                    "id": 1487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8294:34:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory_ptr",
                      "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8250:78:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 1489,
                      "name": "params",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1484,
                      "src": "8345:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory_ptr",
                        "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams memory"
                      }
                    },
                    "id": 1490,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyEndUnixTimestamp",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 1121,
                    "src": "8345:29:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1482,
                  "id": 1491,
                  "nodeType": "Return",
                  "src": "8338:36:7"
                }
              ]
            },
            "documentation": null,
            "id": 1493,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1478,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1493,
                  "src": "8161:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1477,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8161:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8151:33:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1481,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1493,
                  "src": "8230:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1480,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8230:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8229:6:7"
            },
            "scope": 1547,
            "src": "8121:260:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1545,
              "nodeType": "Block",
              "src": "8544:581:7",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                      "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                    },
                    "id": 1503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1500,
                      "name": "premiumUnitType",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1495,
                      "src": "8558:15:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                        "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1501,
                        "name": "PremiumUnitType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1111,
                        "src": "8577:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                          "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                        }
                      },
                      "id": 1502,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "HOURS",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "8577:21:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                        "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                      }
                    },
                    "src": "8558:40:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                        "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                      },
                      "id": 1510,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 1507,
                        "name": "premiumUnitType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1495,
                        "src": "8664:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1508,
                          "name": "PremiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1111,
                          "src": "8683:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                            "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                          }
                        },
                        "id": 1509,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberName": "DAYS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8683:20:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        }
                      },
                      "src": "8664:39:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        },
                        "id": 1517,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1514,
                          "name": "premiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1495,
                          "src": "8768:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                            "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1515,
                            "name": "PremiumUnitType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1111,
                            "src": "8787:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                              "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                            }
                          },
                          "id": 1516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "WEEKS",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "8787:21:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                            "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                          }
                        },
                        "src": "8768:40:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                            "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                          },
                          "id": 1524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1521,
                            "name": "premiumUnitType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1495,
                            "src": "8874:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1522,
                              "name": "PremiumUnitType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1111,
                              "src": "8893:15:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                                "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                              }
                            },
                            "id": 1523,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "MONTHS",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "8893:22:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            }
                          },
                          "src": "8874:41:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            },
                            "id": 1531,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1528,
                              "name": "premiumUnitType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1495,
                              "src": "8982:15:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                                "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1529,
                                "name": "PremiumUnitType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1111,
                                "src": "9001:15:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                                  "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                                }
                              },
                              "id": 1530,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "YEARS",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "9001:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                                "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                              }
                            },
                            "src": "8982:40:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "id": 1539,
                            "nodeType": "Block",
                            "src": "9086:33:7",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 1536,
                                    "name": "revert",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      4019,
                                      4020
                                    ],
                                    "referencedDeclaration": 4019,
                                    "src": "9100:6:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                                      "typeString": "function () pure"
                                    }
                                  },
                                  "id": 1537,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "9100:8:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 1538,
                                "nodeType": "ExpressionStatement",
                                "src": "9100:8:7"
                              }
                            ]
                          },
                          "id": 1540,
                          "nodeType": "IfStatement",
                          "src": "8978:141:7",
                          "trueBody": {
                            "id": 1535,
                            "nodeType": "Block",
                            "src": "9024:56:7",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "id": 1532,
                                      "name": "YEAR_LENGTH_IN_SECONDS",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1153,
                                      "src": "9046:22:7",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 1533,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "9045:24:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "functionReturnParameters": 1499,
                                "id": 1534,
                                "nodeType": "Return",
                                "src": "9038:31:7"
                              }
                            ]
                          }
                        },
                        "id": 1541,
                        "nodeType": "IfStatement",
                        "src": "8870:249:7",
                        "trueBody": {
                          "id": 1527,
                          "nodeType": "Block",
                          "src": "8917:55:7",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 1525,
                                "name": "MONTH_LENGTH_IN_SECONDS",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1148,
                                "src": "8938:23:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "functionReturnParameters": 1499,
                              "id": 1526,
                              "nodeType": "Return",
                              "src": "8931:30:7"
                            }
                          ]
                        }
                      },
                      "id": 1542,
                      "nodeType": "IfStatement",
                      "src": "8764:355:7",
                      "trueBody": {
                        "id": 1520,
                        "nodeType": "Block",
                        "src": "8810:54:7",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 1518,
                              "name": "WEEK_LENGTH_IN_SECONDS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1143,
                              "src": "8831:22:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "functionReturnParameters": 1499,
                            "id": 1519,
                            "nodeType": "Return",
                            "src": "8824:29:7"
                          }
                        ]
                      }
                    },
                    "id": 1543,
                    "nodeType": "IfStatement",
                    "src": "8660:459:7",
                    "trueBody": {
                      "id": 1513,
                      "nodeType": "Block",
                      "src": "8705:53:7",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 1511,
                            "name": "DAY_LENGTH_IN_SECONDS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1138,
                            "src": "8726:21:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "functionReturnParameters": 1499,
                          "id": 1512,
                          "nodeType": "Return",
                          "src": "8719:28:7"
                        }
                      ]
                    }
                  },
                  "id": 1544,
                  "nodeType": "IfStatement",
                  "src": "8554:565:7",
                  "trueBody": {
                    "id": 1506,
                    "nodeType": "Block",
                    "src": "8600:54:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1504,
                          "name": "HOUR_LENGTH_IN_SECONDS",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1133,
                          "src": "8621:22:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1499,
                        "id": 1505,
                        "nodeType": "Return",
                        "src": "8614:29:7"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1546,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPremiumUnitLengthInSeconds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1495,
                  "name": "premiumUnitType",
                  "nodeType": "VariableDeclaration",
                  "scope": 1546,
                  "src": "8426:31:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                    "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1494,
                    "name": "PremiumUnitType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1111,
                    "src": "8426:15:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                      "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8425:33:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1498,
                  "name": "_premiumUnitLengthInSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 1546,
                  "src": "8506:32:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1497,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8506:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8505:34:7"
            },
            "scope": 1547,
            "src": "8387:738:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1548,
        "src": "175:8954:7"
      }
    ],
    "src": "0:9129:7"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/policies/SingleCoverageExamplePolicy.sol",
    "exportedSymbols": {
      "SingleCoverageExamplePolicy": [
        1547
      ]
    },
    "id": 1548,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1100,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:7"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/ContractRegistry.sol",
        "file": "../ContractRegistry.sol",
        "id": 1101,
        "nodeType": "ImportDirective",
        "scope": 1548,
        "sourceUnit": 494,
        "src": "61:33:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1102,
        "nodeType": "ImportDirective",
        "scope": 1548,
        "sourceUnit": 2121,
        "src": "95:78:7",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1547,
        "linearizedBaseContracts": [
          1547
        ],
        "name": "SingleCoverageExamplePolicy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1105,
            "libraryName": {
              "contractScope": null,
              "id": 1103,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2120,
              "src": "224:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2120",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "218:24:7",
            "typeName": {
              "id": 1104,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "237:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "SingleCoverageExamplePolicy.PremiumUnitType",
            "id": 1111,
            "members": [
              {
                "id": 1106,
                "name": "HOURS",
                "nodeType": "EnumValue",
                "src": "271:5:7"
              },
              {
                "id": 1107,
                "name": "DAYS",
                "nodeType": "EnumValue",
                "src": "278:4:7"
              },
              {
                "id": 1108,
                "name": "WEEKS",
                "nodeType": "EnumValue",
                "src": "284:5:7"
              },
              {
                "id": 1109,
                "name": "MONTHS",
                "nodeType": "EnumValue",
                "src": "291:6:7"
              },
              {
                "id": 1110,
                "name": "YEARS",
                "nodeType": "EnumValue",
                "src": "299:5:7"
              }
            ],
            "name": "PremiumUnitType",
            "nodeType": "EnumDefinition",
            "src": "248:58:7"
          },
          {
            "canonicalName": "SingleCoverageExamplePolicy.SingleCoverageExampleParams",
            "id": 1128,
            "members": [
              {
                "constant": false,
                "id": 1113,
                "name": "claimTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "357:25:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1112,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "357:7:7",
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
                "id": 1115,
                "name": "premiumTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "392:27:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1114,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "392:7:7",
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
                "id": 1117,
                "name": "coverageAmount",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "429:19:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1116,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "429:4:7",
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
                "id": 1119,
                "name": "policyStartUnixTimestamp",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "458:29:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1118,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "458:4:7",
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
                "id": 1121,
                "name": "policyEndUnixTimestamp",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "497:27:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1120,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "497:4:7",
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
                "id": 1123,
                "name": "premiumUnitType",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "534:31:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                  "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 1122,
                  "name": "PremiumUnitType",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1111,
                  "src": "534:15:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                    "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1125,
                "name": "policyLengthInPremiumUnits",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "575:31:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1124,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "575:4:7",
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
                "id": 1127,
                "name": "premiumRate",
                "nodeType": "VariableDeclaration",
                "scope": 1128,
                "src": "616:16:7",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1126,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "616:4:7",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SingleCoverageExampleParams",
            "nodeType": "StructDefinition",
            "scope": 1547,
            "src": "312:327:7",
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1133,
            "name": "HOUR_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "645:53:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1129,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "645:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_3600_by_1",
                "typeString": "int_const 3600"
              },
              "id": 1132,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3630",
                "id": 1130,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "691:2:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_60_by_1",
                  "typeString": "int_const 60"
                },
                "value": "60"
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "3630",
                "id": 1131,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "696:2:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_60_by_1",
                  "typeString": "int_const 60"
                },
                "value": "60"
              },
              "src": "691:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3600_by_1",
                "typeString": "int_const 3600"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1138,
            "name": "DAY_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "704:72:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1134,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "704:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 1137,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "id": 1135,
                "name": "HOUR_LENGTH_IN_SECONDS",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 1133,
                "src": "749:22:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "3234",
                "id": 1136,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "774:2:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_24_by_1",
                  "typeString": "int_const 24"
                },
                "value": "24"
              },
              "src": "749:27:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1143,
            "name": "WEEK_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "782:71:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1139,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "782:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 1142,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "id": 1140,
                "name": "DAY_LENGTH_IN_SECONDS",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 1138,
                "src": "828:21:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "37",
                "id": 1141,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "852:1:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_7_by_1",
                  "typeString": "int_const 7"
                },
                "value": "7"
              },
              "src": "828:25:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1148,
            "name": "MONTH_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "859:73:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1144,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "859:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 1147,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "id": 1145,
                "name": "DAY_LENGTH_IN_SECONDS",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 1138,
                "src": "906:21:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "3330",
                "id": 1146,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "930:2:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_30_by_1",
                  "typeString": "int_const 30"
                },
                "value": "30"
              },
              "src": "906:26:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 1153,
            "name": "YEAR_LENGTH_IN_SECONDS",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "938:73:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1149,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "938:4:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 1152,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "id": 1150,
                "name": "DAY_LENGTH_IN_SECONDS",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 1138,
                "src": "984:21:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "333635",
                "id": 1151,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1008:3:7",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_365_by_1",
                  "typeString": "int_const 365"
                },
                "value": "365"
              },
              "src": "984:27:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1157,
            "name": "valuePaid",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "1018:42:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
              "typeString": "mapping(bytes32 => uint256)"
            },
            "typeName": {
              "id": 1156,
              "keyType": {
                "id": 1154,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "1027:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "1018:25:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_uint256_$",
                "typeString": "mapping(bytes32 => uint256)"
              },
              "valueType": {
                "id": 1155,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1038:4:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1159,
            "name": "contractRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 1547,
            "src": "1067:40:7",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ContractRegistry_$493",
              "typeString": "contract ContractRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 1158,
              "name": "ContractRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 493,
              "src": "1067:16:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ContractRegistry_$493",
                "typeString": "contract ContractRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1173,
            "name": "LogSingleCoveragePolicyStart",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1161,
                  "indexed": true,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1158:24:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1160,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:7:7",
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
                  "id": 1163,
                  "indexed": true,
                  "name": "claimToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1192:26:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1162,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1192:7:7",
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
                  "id": 1165,
                  "indexed": false,
                  "name": "coverageAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1228:19:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1164,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1228:4:7",
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
                  "id": 1167,
                  "indexed": false,
                  "name": "premiumRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1257:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1166,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1257:4:7",
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
                  "id": 1169,
                  "indexed": true,
                  "name": "premiumUnitType",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1283:28:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1168,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:4:7",
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
                  "id": 1171,
                  "indexed": false,
                  "name": "policyLengthInPremiumUnits",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "1321:31:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1170,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1321:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1148:210:7"
            },
            "src": "1114:245:7"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1185,
            "name": "LogRegisterPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1175,
                  "indexed": false,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1399:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1174,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1399:7:7",
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
                  "id": 1177,
                  "indexed": false,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1425:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1176,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1425:7:7",
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
                  "id": 1179,
                  "indexed": false,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1448:19:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1178,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1448:7:7",
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
                  "id": 1181,
                  "indexed": false,
                  "name": "unitsOfPayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1477:22:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1180,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1477:7:7",
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
                  "id": 1183,
                  "indexed": false,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 1185,
                  "src": "1509:20:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1182,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1509:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1389:146:7"
            },
            "src": "1365:171:7"
          },
          {
            "body": {
              "id": 1196,
              "nodeType": "Block",
              "src": "1614:71:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1190,
                      "name": "contractRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1159,
                      "src": "1624:16:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ContractRegistry_$493",
                        "typeString": "contract ContractRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1192,
                          "name": "_contractRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1187,
                          "src": "1660:17:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1191,
                        "name": "ContractRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 493,
                        "src": "1643:16:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ContractRegistry_$493_$",
                          "typeString": "type(contract ContractRegistry)"
                        }
                      },
                      "id": 1193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1643:35:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ContractRegistry_$493",
                        "typeString": "contract ContractRegistry"
                      }
                    },
                    "src": "1624:54:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ContractRegistry_$493",
                      "typeString": "contract ContractRegistry"
                    }
                  },
                  "id": 1195,
                  "nodeType": "ExpressionStatement",
                  "src": "1624:54:7"
                }
              ]
            },
            "documentation": null,
            "id": 1197,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1187,
                  "name": "_contractRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 1197,
                  "src": "1563:25:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1186,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1563:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1553:41:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1614:0:7"
            },
            "scope": 1547,
            "src": "1542:143:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1275,
              "nodeType": "Block",
              "src": "1827:1047:7",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1207,
                      "name": "policyContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "1837:22:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1206,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1837:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1208,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1837:22:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1210,
                      "name": "policyContractParameters",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "1869:32:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1209,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1869:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1211,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1869:32:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 1212,
                          "name": "policyContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1207,
                          "src": "1913:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1213,
                          "name": "policyContractParameters",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1210,
                          "src": "1929:24:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "id": 1214,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "1912:42:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_bytes32_$",
                        "typeString": "tuple(address,bytes32)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1219,
                          "name": "policyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1199,
                          "src": "2006:8:7",
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
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1215,
                              "name": "contractRegistry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1159,
                              "src": "1957:16:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ContractRegistry_$493",
                                "typeString": "contract ContractRegistry"
                              }
                            },
                            "id": 1216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyRegistry",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 452,
                            "src": "1957:31:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_PolicyRegistry_$893_$",
                              "typeString": "function () view external returns (contract PolicyRegistry)"
                            }
                          },
                          "id": 1217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1957:33:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                            "typeString": "contract PolicyRegistry"
                          }
                        },
                        "id": 1218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "getPolicyTerms",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 808,
                        "src": "1957:48:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$_t_bytes32_$",
                          "typeString": "function (bytes32) view external returns (address,bytes32)"
                        }
                      },
                      "id": 1220,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1957:58:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_$_t_bytes32_$",
                        "typeString": "tuple(address,bytes32)"
                      }
                    },
                    "src": "1912:103:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1222,
                  "nodeType": "ExpressionStatement",
                  "src": "1912:103:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1224,
                      "name": "claimTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2026:20:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1223,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2026:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1225,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2026:20:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1227,
                      "name": "premiumTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2056:22:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1226,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2056:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1228,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2056:22:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1230,
                      "name": "coverageAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2088:19:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1229,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2088:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1231,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2088:19:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1233,
                      "name": "premiumRate",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2117:16:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1232,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2117:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1234,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2117:16:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1236,
                      "name": "premiumUnitType",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2143:20:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1235,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2143:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1237,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2143:20:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1239,
                      "name": "policyLengthInPremiumUnits",
                      "nodeType": "VariableDeclaration",
                      "scope": 1276,
                      "src": "2173:31:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1238,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2173:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1240,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2173:31:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 1241,
                          "name": "claimTokenIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1224,
                          "src": "2216:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1242,
                          "name": "premiumTokenIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1227,
                          "src": "2233:17:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1243,
                          "name": "coverageAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1230,
                          "src": "2252:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1244,
                          "name": "premiumRate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1233,
                          "src": "2268:11:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1245,
                          "name": "premiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1236,
                          "src": "2281:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1246,
                          "name": "policyLengthInPremiumUnits",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1239,
                          "src": "2298:26:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1247,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2215:110:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1249,
                          "name": "policyContractParameters",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1210,
                          "src": "2366:24:7",
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
                          }
                        ],
                        "id": 1248,
                        "name": "unpackParametersFromBytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1356,
                        "src": "2340:25:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (bytes32) pure returns (uint256,uint256,uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 1250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2340:51:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "2215:176:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1252,
                  "nodeType": "ExpressionStatement",
                  "src": "2215:176:7"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 1257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1253,
                      "name": "policyContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1207,
                      "src": "2490:14:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1255,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4077,
                          "src": "2516:4:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_SingleCoverageExamplePolicy_$1547",
                            "typeString": "contract SingleCoverageExamplePolicy"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_SingleCoverageExamplePolicy_$1547",
                            "typeString": "contract SingleCoverageExamplePolicy"
                          }
                        ],
                        "id": 1254,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2508:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 1256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2508:13:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2490:31:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1272,
                  "nodeType": "IfStatement",
                  "src": "2486:359:7",
                  "trueBody": {
                    "id": 1271,
                    "nodeType": "Block",
                    "src": "2523:322:7",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1259,
                              "name": "policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1199,
                              "src": "2588:8:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1261,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2622:1:7",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 1260,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2614:7:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 1262,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2614:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1263,
                              "name": "coverageAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1230,
                              "src": "2674:14:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1264,
                              "name": "premiumRate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1233,
                              "src": "2706:11:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1265,
                              "name": "premiumUnitType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1236,
                              "src": "2735:15:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1266,
                              "name": "policyLengthInPremiumUnits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1239,
                              "src": "2768:26:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 1258,
                            "name": "LogSingleCoveragePolicyStart",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1173,
                            "src": "2542:28:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (bytes32,address,uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 1267,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2542:266:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1268,
                        "nodeType": "EmitStatement",
                        "src": "2537:271:7"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 1269,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2830:4:7",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 1205,
                        "id": 1270,
                        "nodeType": "Return",
                        "src": "2823:11:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 1273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2862:5:7",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 1205,
                  "id": 1274,
                  "nodeType": "Return",
                  "src": "2855:12:7"
                }
              ]
            },
            "documentation": null,
            "id": 1276,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerPolicyStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1199,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1276,
                  "src": "1729:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1198,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1729:7:7",
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
                  "id": 1201,
                  "name": "insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 1276,
                  "src": "1755:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1200,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1755:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1719:57:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1204,
                  "name": "_sucess",
                  "nodeType": "VariableDeclaration",
                  "scope": 1276,
                  "src": "1809:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1203,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1809:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1808:14:7"
            },
            "scope": 1547,
            "src": "1691:1183:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1355,
              "nodeType": "Block",
              "src": "3212:2828:7",
              "statements": [
                {
                  "assignments": [
                    1294
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1294,
                      "name": "claimTokenIndexShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "3332:30:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1293,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3332:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1298,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1295,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "3377:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307866663030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030",
                      "id": 1296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3390:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_115339776388732929035197660848497720713218148788040405586178452820382218977280_by_1",
                        "typeString": "int_const 1153...(70 digits omitted)...7280"
                      },
                      "value": "0xff00000000000000000000000000000000000000000000000000000000000000"
                    },
                    "src": "3377:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3332:124:7"
                },
                {
                  "assignments": [
                    1300
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1300,
                      "name": "premiumTokenIndexShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "3553:32:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1299,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3553:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1304,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1303,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1301,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "3600:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830306666303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030",
                      "id": 1302,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3613:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_450546001518488004043740862689444221536008393703282834321009581329618042880_by_1",
                        "typeString": "int_const 4505...(67 digits omitted)...2880"
                      },
                      "value": "0x00ff000000000000000000000000000000000000000000000000000000000000"
                    },
                    "src": "3600:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3553:126:7"
                },
                {
                  "assignments": [
                    1306
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1306,
                      "name": "coverageAmountShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "3770:29:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1305,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3770:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1310,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1307,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "3814:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830303030666666666666666666666666666666666666666666666666303030303030303030303030303030303030303030303030303030303030303030303030",
                      "id": 1308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3827:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1766847064778384329583297500720617770628953273734083239848957839786639360_by_1",
                        "typeString": "int_const 1766...(65 digits omitted)...9360"
                      },
                      "value": "0x0000ffffffffffffffffffffffff000000000000000000000000000000000000"
                    },
                    "src": "3814:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3770:123:7"
                },
                {
                  "assignments": [
                    1312
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1312,
                      "name": "premiumRateShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "3980:26:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1311,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3980:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1316,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1313,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "4021:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830303030303030303030303030303030303030303030303030303030666666666666303030303030303030303030303030303030303030303030303030303030",
                      "id": 1314,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4034:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_22300743869302627356619845368841301225635840_by_1",
                        "typeString": "int_const 2230...(36 digits omitted)...5840"
                      },
                      "value": "0x0000000000000000000000000000ffffff000000000000000000000000000000"
                    },
                    "src": "4021:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3980:120:7"
                },
                {
                  "assignments": [
                    1318
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1318,
                      "name": "premiumUnitTypeShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "4190:30:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1317,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4190:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1322,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1321,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1319,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "4235:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830303030303030303030303030303030303030303030303030303030303030303030663030303030303030303030303030303030303030303030303030303030",
                      "id": 1320,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4248:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1246151246048358630847319119012823040_by_1",
                        "typeString": "int_const 1246...(29 digits omitted)...3040"
                      },
                      "value": "0x0000000000000000000000000000000000f00000000000000000000000000000"
                    },
                    "src": "4235:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4190:124:7"
                },
                {
                  "assignments": [
                    1324
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1324,
                      "name": "policyLengthInPremiumUnitsShifted",
                      "nodeType": "VariableDeclaration",
                      "scope": 1356,
                      "src": "4440:41:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1323,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4440:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1328,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 1327,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1325,
                      "name": "parameters",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1278,
                      "src": "4496:10:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "307830303030303030303030303030303030303030303030303030303030303030303030306666666630303030303030303030303030303030303030303030303030",
                      "id": 1326,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4509:66:7",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_83075482085957013827086444564316160_by_1",
                        "typeString": "int_const 8307...(27 digits omitted)...6160"
                      },
                      "value": "0x00000000000000000000000000000000000ffff0000000000000000000000000"
                    },
                    "src": "4496:79:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4440:135:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1330,
                            "name": "claimTokenIndexShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1294,
                            "src": "5707:22:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "323438",
                            "id": 1331,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5731:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_248_by_1",
                              "typeString": "int_const 248"
                            },
                            "value": "248"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_248_by_1",
                              "typeString": "int_const 248"
                            }
                          ],
                          "id": 1329,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5693:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1332,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5693:42:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1334,
                            "name": "premiumTokenIndexShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1300,
                            "src": "5763:24:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "323430",
                            "id": 1335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5789:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_240_by_1",
                              "typeString": "int_const 240"
                            },
                            "value": "240"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_240_by_1",
                              "typeString": "int_const 240"
                            }
                          ],
                          "id": 1333,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5749:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1336,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5749:44:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1338,
                            "name": "coverageAmountShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1306,
                            "src": "5821:21:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "313434",
                            "id": 1339,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5844:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_144_by_1",
                              "typeString": "int_const 144"
                            },
                            "value": "144"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_144_by_1",
                              "typeString": "int_const 144"
                            }
                          ],
                          "id": 1337,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5807:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5807:41:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1342,
                            "name": "premiumRateShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1312,
                            "src": "5876:18:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "313230",
                            "id": 1343,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5896:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_120_by_1",
                              "typeString": "int_const 120"
                            },
                            "value": "120"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_120_by_1",
                              "typeString": "int_const 120"
                            }
                          ],
                          "id": 1341,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5862:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5862:38:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1346,
                            "name": "premiumUnitTypeShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1318,
                            "src": "5928:22:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "313136",
                            "id": 1347,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5952:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_116_by_1",
                              "typeString": "int_const 116"
                            },
                            "value": "116"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_116_by_1",
                              "typeString": "int_const 116"
                            }
                          ],
                          "id": 1345,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5914:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5914:42:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1350,
                            "name": "policyLengthInPremiumUnitsShifted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1324,
                            "src": "5984:33:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "313030",
                            "id": 1351,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6019:3:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            }
                          ],
                          "id": 1349,
                          "name": "bitShiftRight",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1374,
                          "src": "5970:13:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (bytes32,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1352,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5970:53:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 1353,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5679:354:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 1292,
                  "id": 1354,
                  "nodeType": "Return",
                  "src": "5672:361:7"
                }
              ]
            },
            "documentation": null,
            "id": 1356,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "unpackParametersFromBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1278,
                  "name": "parameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "2915:18:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1277,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2915:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2914:20:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1281,
                  "name": "_claimTokenIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "2993:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1280,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2993:4:7",
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
                  "id": 1283,
                  "name": "_premiumTokenIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3028:23:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1282,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3028:4:7",
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
                  "id": 1285,
                  "name": "_coverageAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3065:20:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1284,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3065:4:7",
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
                  "id": 1287,
                  "name": "_premiumRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3099:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1286,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3099:4:7",
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
                  "id": 1289,
                  "name": "_premiumUnitType",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3130:21:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1288,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:4:7",
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
                  "id": 1291,
                  "name": "_policyLengthInPremiumUnits",
                  "nodeType": "VariableDeclaration",
                  "scope": 1356,
                  "src": "3165:32:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1290,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3165:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2979:228:7"
            },
            "scope": 1547,
            "src": "2880:3160:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1373,
              "nodeType": "Block",
              "src": "6154:49:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1366,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1358,
                          "src": "6176:5:7",
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
                          }
                        ],
                        "id": 1365,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6171:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 1367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6171:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1370,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 1368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6185:1:7",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "**",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 1369,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1360,
                        "src": "6190:6:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6185:11:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6171:25:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1364,
                  "id": 1372,
                  "nodeType": "Return",
                  "src": "6164:32:7"
                }
              ]
            },
            "documentation": null,
            "id": 1374,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bitShiftRight",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1361,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1358,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "6069:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1357,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6069:7:7",
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
                  "id": 1360,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "6084:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1359,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6084:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6068:28:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1364,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1363,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1374,
                  "src": "6144:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1362,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6144:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6143:6:7"
            },
            "scope": 1547,
            "src": "6046:157:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1475,
              "nodeType": "Block",
              "src": "6341:1774:7",
              "statements": [
                {
                  "assignments": [
                    1382
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1382,
                      "name": "parameters",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6351:18:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 1381,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "6351:7:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1389,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1387,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1376,
                        "src": "6434:8:7",
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
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1383,
                            "name": "contractRegistry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1159,
                            "src": "6372:16:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ContractRegistry_$493",
                              "typeString": "contract ContractRegistry"
                            }
                          },
                          "id": 1384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "policyRegistry",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 452,
                          "src": "6372:31:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_PolicyRegistry_$893_$",
                            "typeString": "function () view external returns (contract PolicyRegistry)"
                          }
                        },
                        "id": 1385,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6372:33:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getPolicyContractParameters",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 847,
                      "src": "6372:61:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 1388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6372:71:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6351:92:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1391,
                      "name": "claimTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6454:20:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1390,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6454:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1392,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6454:20:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1394,
                      "name": "premiumTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6484:22:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1393,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6484:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1395,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6484:22:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1397,
                      "name": "coverageAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6516:19:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1396,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6516:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1398,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6516:19:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1400,
                      "name": "premiumRate",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6545:16:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1399,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6545:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1401,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6545:16:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1403,
                      "name": "rawPremiumUnitType",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6571:23:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1402,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6571:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1404,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6571:23:7"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1406,
                      "name": "policyLengthInPremiumUnits",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "6604:31:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1405,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6604:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1407,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6604:31:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 1408,
                          "name": "claimTokenIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1391,
                          "src": "6647:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1409,
                          "name": "premiumTokenIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1394,
                          "src": "6664:17:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1410,
                          "name": "coverageAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1397,
                          "src": "6683:14:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1411,
                          "name": "premiumRate",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1400,
                          "src": "6699:11:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1412,
                          "name": "rawPremiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1403,
                          "src": "6712:18:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1413,
                          "name": "policyLengthInPremiumUnits",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1406,
                          "src": "6732:26:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1414,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "6646:113:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1416,
                          "name": "parameters",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1382,
                          "src": "6801:10:7",
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
                          }
                        ],
                        "id": 1415,
                        "name": "unpackParametersFromBytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1356,
                        "src": "6775:25:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (bytes32) pure returns (uint256,uint256,uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 1417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6775:37:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "6646:166:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1419,
                  "nodeType": "ExpressionStatement",
                  "src": "6646:166:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1426,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1421,
                          "name": "rawPremiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1403,
                          "src": "7058:18:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1423,
                                "name": "PremiumUnitType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1111,
                                "src": "7085:15:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                                  "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                                }
                              },
                              "id": 1424,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "YEARS",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "7085:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                                "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                                "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                              }
                            ],
                            "id": 1422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7080:4:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": "uint"
                          },
                          "id": 1425,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7080:27:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7058:49:7",
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
                      "id": 1420,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "7050:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7050:58:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1428,
                  "nodeType": "ExpressionStatement",
                  "src": "7050:58:7"
                },
                {
                  "assignments": [
                    1430
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1430,
                      "name": "premiumUnitType",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "7119:31:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                        "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1429,
                        "name": "PremiumUnitType",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1111,
                        "src": "7119:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1434,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1432,
                        "name": "rawPremiumUnitType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1403,
                        "src": "7169:18:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1431,
                      "name": "PremiumUnitType",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1111,
                      "src": "7153:15:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                        "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                      }
                    },
                    "id": 1433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7153:35:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                      "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7119:69:7"
                },
                {
                  "assignments": [
                    1436
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1436,
                      "name": "issuanceBlockTimestamp",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "7341:27:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1435,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "7341:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1443,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1441,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1376,
                        "src": "7430:8:7",
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
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1437,
                            "name": "contractRegistry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1159,
                            "src": "7371:16:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ContractRegistry_$493",
                              "typeString": "contract ContractRegistry"
                            }
                          },
                          "id": 1438,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "policyRegistry",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 452,
                          "src": "7371:31:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_PolicyRegistry_$893_$",
                            "typeString": "function () view external returns (contract PolicyRegistry)"
                          }
                        },
                        "id": 1439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7371:33:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getBindingBlockTimestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 821,
                      "src": "7371:58:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 1442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7371:68:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7341:98:7"
                },
                {
                  "assignments": [
                    1445
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1445,
                      "name": "policyLengthInSeconds",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "7449:26:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1444,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "7449:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1452,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1449,
                            "name": "premiumUnitType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1430,
                            "src": "7539:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            }
                          ],
                          "id": 1448,
                          "name": "getPremiumUnitLengthInSeconds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1546,
                          "src": "7509:29:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_enum$_PremiumUnitType_$1111_$returns$_t_uint256_$",
                            "typeString": "function (enum SingleCoverageExamplePolicy.PremiumUnitType) pure returns (uint256)"
                          }
                        },
                        "id": 1450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7509:46:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1446,
                        "name": "policyLengthInPremiumUnits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1406,
                        "src": "7478:26:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1447,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2027,
                      "src": "7478:30:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7478:78:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7449:107:7"
                },
                {
                  "assignments": [
                    1454
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1454,
                      "name": "policyEndUnixTimestamp",
                      "nodeType": "VariableDeclaration",
                      "scope": 1476,
                      "src": "7566:27:7",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1453,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "7566:4:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1459,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1457,
                        "name": "issuanceBlockTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "7622:22:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1455,
                        "name": "policyLengthInSeconds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1445,
                        "src": "7596:21:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1456,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2099,
                      "src": "7596:25:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7596:49:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7566:79:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1462,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7732:1:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 1461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7724:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 1463,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7724:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1465,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7777:1:7",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 1464,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7769:7:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 1466,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7769:10:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1467,
                        "name": "coverageAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1397,
                        "src": "7809:14:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1468,
                        "name": "issuanceBlockTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1436,
                        "src": "7863:22:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1469,
                        "name": "policyEndUnixTimestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1454,
                        "src": "7923:22:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1470,
                        "name": "premiumUnitType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1430,
                        "src": "7976:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1471,
                        "name": "policyLengthInPremiumUnits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1406,
                        "src": "8033:26:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1472,
                        "name": "premiumRate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1400,
                        "src": "8086:11:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": null,
                      "id": 1460,
                      "name": "SingleCoverageExampleParams",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1128,
                      "src": "7663:27:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_SingleCoverageExampleParams_$1128_storage_ptr_$",
                        "typeString": "type(struct SingleCoverageExamplePolicy.SingleCoverageExampleParams storage pointer)"
                      }
                    },
                    "id": 1473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [
                      "claimTokenAddress",
                      "premiumTokenAddress",
                      "coverageAmount",
                      "policyStartUnixTimestamp",
                      "policyEndUnixTimestamp",
                      "premiumUnitType",
                      "policyLengthInPremiumUnits",
                      "premiumRate"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "7663:445:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory",
                      "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams memory"
                    }
                  },
                  "functionReturnParameters": 1380,
                  "id": 1474,
                  "nodeType": "Return",
                  "src": "7656:452:7"
                }
              ]
            },
            "documentation": null,
            "id": 1476,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unpackParamsForPolicyId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1376,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1476,
                  "src": "6251:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1375,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6251:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6241:32:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1379,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1476,
                  "src": "6308:27:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory_ptr",
                    "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1378,
                    "name": "SingleCoverageExampleParams",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1128,
                    "src": "6308:27:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_storage_ptr",
                      "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6307:29:7"
            },
            "scope": 1547,
            "src": "6209:1906:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1492,
              "nodeType": "Block",
              "src": "8240:141:7",
              "statements": [
                {
                  "assignments": [
                    1484
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1484,
                      "name": "params",
                      "nodeType": "VariableDeclaration",
                      "scope": 1493,
                      "src": "8250:41:7",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory_ptr",
                        "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 1483,
                        "name": "SingleCoverageExampleParams",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1128,
                        "src": "8250:27:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_storage_ptr",
                          "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1488,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1486,
                        "name": "_policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1478,
                        "src": "8318:9:7",
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
                        }
                      ],
                      "id": 1485,
                      "name": "unpackParamsForPolicyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1476,
                      "src": "8294:23:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$_t_struct$_SingleCoverageExampleParams_$1128_memory_ptr_$",
                        "typeString": "function (bytes32) returns (struct SingleCoverageExamplePolicy.SingleCoverageExampleParams memory)"
                      }
                    },
                    "id": 1487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8294:34:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory_ptr",
                      "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8250:78:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 1489,
                      "name": "params",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1484,
                      "src": "8345:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SingleCoverageExampleParams_$1128_memory_ptr",
                        "typeString": "struct SingleCoverageExamplePolicy.SingleCoverageExampleParams memory"
                      }
                    },
                    "id": 1490,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyEndUnixTimestamp",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 1121,
                    "src": "8345:29:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1482,
                  "id": 1491,
                  "nodeType": "Return",
                  "src": "8338:36:7"
                }
              ]
            },
            "documentation": null,
            "id": 1493,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1478,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1493,
                  "src": "8161:17:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1477,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8161:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8151:33:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1481,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1493,
                  "src": "8230:4:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1480,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8230:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8229:6:7"
            },
            "scope": 1547,
            "src": "8121:260:7",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1545,
              "nodeType": "Block",
              "src": "8544:581:7",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                      "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                    },
                    "id": 1503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1500,
                      "name": "premiumUnitType",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1495,
                      "src": "8558:15:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                        "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1501,
                        "name": "PremiumUnitType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1111,
                        "src": "8577:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                          "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                        }
                      },
                      "id": 1502,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "HOURS",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "8577:21:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                        "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                      }
                    },
                    "src": "8558:40:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                        "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                      },
                      "id": 1510,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 1507,
                        "name": "premiumUnitType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1495,
                        "src": "8664:15:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1508,
                          "name": "PremiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1111,
                          "src": "8683:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                            "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                          }
                        },
                        "id": 1509,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberName": "DAYS",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8683:20:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        }
                      },
                      "src": "8664:39:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                          "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                        },
                        "id": 1517,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1514,
                          "name": "premiumUnitType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1495,
                          "src": "8768:15:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                            "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1515,
                            "name": "PremiumUnitType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1111,
                            "src": "8787:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                              "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                            }
                          },
                          "id": 1516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "WEEKS",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "8787:21:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                            "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                          }
                        },
                        "src": "8768:40:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                            "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                          },
                          "id": 1524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1521,
                            "name": "premiumUnitType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1495,
                            "src": "8874:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1522,
                              "name": "PremiumUnitType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1111,
                              "src": "8893:15:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                                "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                              }
                            },
                            "id": 1523,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "MONTHS",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "8893:22:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            }
                          },
                          "src": "8874:41:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                              "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                            },
                            "id": 1531,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1528,
                              "name": "premiumUnitType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1495,
                              "src": "8982:15:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                                "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1529,
                                "name": "PremiumUnitType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1111,
                                "src": "9001:15:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_PremiumUnitType_$1111_$",
                                  "typeString": "type(enum SingleCoverageExamplePolicy.PremiumUnitType)"
                                }
                              },
                              "id": 1530,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "YEARS",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "9001:21:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                                "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                              }
                            },
                            "src": "8982:40:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "id": 1539,
                            "nodeType": "Block",
                            "src": "9086:33:7",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 1536,
                                    "name": "revert",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [
                                      4019,
                                      4020
                                    ],
                                    "referencedDeclaration": 4019,
                                    "src": "9100:6:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                                      "typeString": "function () pure"
                                    }
                                  },
                                  "id": 1537,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "9100:8:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 1538,
                                "nodeType": "ExpressionStatement",
                                "src": "9100:8:7"
                              }
                            ]
                          },
                          "id": 1540,
                          "nodeType": "IfStatement",
                          "src": "8978:141:7",
                          "trueBody": {
                            "id": 1535,
                            "nodeType": "Block",
                            "src": "9024:56:7",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "id": 1532,
                                      "name": "YEAR_LENGTH_IN_SECONDS",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1153,
                                      "src": "9046:22:7",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 1533,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "9045:24:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "functionReturnParameters": 1499,
                                "id": 1534,
                                "nodeType": "Return",
                                "src": "9038:31:7"
                              }
                            ]
                          }
                        },
                        "id": 1541,
                        "nodeType": "IfStatement",
                        "src": "8870:249:7",
                        "trueBody": {
                          "id": 1527,
                          "nodeType": "Block",
                          "src": "8917:55:7",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 1525,
                                "name": "MONTH_LENGTH_IN_SECONDS",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1148,
                                "src": "8938:23:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "functionReturnParameters": 1499,
                              "id": 1526,
                              "nodeType": "Return",
                              "src": "8931:30:7"
                            }
                          ]
                        }
                      },
                      "id": 1542,
                      "nodeType": "IfStatement",
                      "src": "8764:355:7",
                      "trueBody": {
                        "id": 1520,
                        "nodeType": "Block",
                        "src": "8810:54:7",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 1518,
                              "name": "WEEK_LENGTH_IN_SECONDS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1143,
                              "src": "8831:22:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "functionReturnParameters": 1499,
                            "id": 1519,
                            "nodeType": "Return",
                            "src": "8824:29:7"
                          }
                        ]
                      }
                    },
                    "id": 1543,
                    "nodeType": "IfStatement",
                    "src": "8660:459:7",
                    "trueBody": {
                      "id": 1513,
                      "nodeType": "Block",
                      "src": "8705:53:7",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 1511,
                            "name": "DAY_LENGTH_IN_SECONDS",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1138,
                            "src": "8726:21:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "functionReturnParameters": 1499,
                          "id": 1512,
                          "nodeType": "Return",
                          "src": "8719:28:7"
                        }
                      ]
                    }
                  },
                  "id": 1544,
                  "nodeType": "IfStatement",
                  "src": "8554:565:7",
                  "trueBody": {
                    "id": 1506,
                    "nodeType": "Block",
                    "src": "8600:54:7",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1504,
                          "name": "HOUR_LENGTH_IN_SECONDS",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1133,
                          "src": "8621:22:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 1499,
                        "id": 1505,
                        "nodeType": "Return",
                        "src": "8614:29:7"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1546,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPremiumUnitLengthInSeconds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1495,
                  "name": "premiumUnitType",
                  "nodeType": "VariableDeclaration",
                  "scope": 1546,
                  "src": "8426:31:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                    "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1494,
                    "name": "PremiumUnitType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1111,
                    "src": "8426:15:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_PremiumUnitType_$1111",
                      "typeString": "enum SingleCoverageExamplePolicy.PremiumUnitType"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8425:33:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1498,
                  "name": "_premiumUnitLengthInSeconds",
                  "nodeType": "VariableDeclaration",
                  "scope": 1546,
                  "src": "8506:32:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1497,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "8506:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8505:34:7"
            },
            "scope": 1547,
            "src": "8387:738:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1548,
        "src": "175:8954:7"
      }
    ],
    "src": "0:9129:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "1537413714450": {
      "events": {},
      "links": {},
      "address": "0x501586E68cD666b09996Fc35e8f7cb506b7e773A",
      "transactionHash": "0xabed2c3f7954d4d6a49a36744aff2a67c126d4a3f3f3d825077971bf0875e121"
    }
  },
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:48.925Z"
}