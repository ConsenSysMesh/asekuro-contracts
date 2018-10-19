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
          "name": "insured",
          "type": "address"
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
          "indexed": false,
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
          "name": "policyTemplate",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "policyTemplateParameters",
          "type": "bytes32[3]"
        }
      ],
      "name": "LogInsertEntry",
      "type": "event",
      "signature": "0x4feaf7d6b903d66ef03bb0d6a3887df840871dc6feb8bd4b14fb685c64bbd56e"
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
          "name": "_policyTemplate",
          "type": "address"
        },
        {
          "name": "_policyTemplateParameters",
          "type": "bytes32[3]"
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
      "signature": "0xc9369cf8"
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
          "type": "bytes32[3]"
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
      "name": "getPolicyDetails",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "bytes32[3]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x40fac30c"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        }
      ],
      "name": "getPolicyTemplate",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x87c8bba9"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        }
      ],
      "name": "getPolicyTemplateParameters",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[3]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd71cf332"
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
  "bytecode": "0x60806040526000600160006101000a81548160ff02191690831515021790555061004033600061004564010000000002611278179091906401000000009004565b6100df565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561008157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6116d5806100ee6000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a146100ca57806340fac30c146100e1578063424475941461018157806346fbf68e146101c65780635c975abb146102215780636ef8d66d1461025057806382dc1ec4146102675780638456cb59146102aa57806387c8bba9146102c15780638eaa6ac014610332578063c9369cf8146104ac578063d71cf332146105ee578063f5f8231a1461065b575b600080fd5b3480156100d657600080fd5b506100df6106cc565b005b3480156100ed57600080fd5b506101106004803603810190808035600019169060200190929190505050610744565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600360200280838360005b8381101561016d578082015181840152602081019050610152565b505050509050019250505060405180910390f35b34801561018d57600080fd5b506101b060048036038101908080356000191690602001909291905050506107f7565b6040518082815260200191505060405180910390f35b3480156101d257600080fd5b50610207600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061081f565b604051808215151515815260200191505060405180910390f35b34801561022d57600080fd5b5061023661083c565b604051808215151515815260200191505060405180910390f35b34801561025c57600080fd5b50610265610853565b005b34801561027357600080fd5b506102a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610869565b005b3480156102b657600080fd5b506102bf6108d7565b005b3480156102cd57600080fd5b506102f0600480360381019080803560001916906020019092919050505061094f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561033e57600080fd5b506103616004803603810190808035600019169060200190929190505050610997565b604051808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183600360200280838360005b8381101561048c578082015181840152602081019050610471565b505050509050018281526020019850505050505050505060405180910390f35b3480156104b857600080fd5b506105d0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190806060019060038060200260405190810160405280929190826003602002808284378201915050505050919291929080359060200190929190505050610c2e565b60405180826000191660001916815260200191505060405180910390f35b3480156105fa57600080fd5b5061061d6004803603810190808035600019169060200190929190505050611095565b6040518082600360200280838360005b8381101561064857808201518184015260208101905061062d565b5050505090500191505060405180910390f35b34801561066757600080fd5b5061068a6004803603810190808035600019169060200190929190505050611102565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106d53361081f565b15156106e057600080fd5b600160009054906101000a900460ff1615156106fb57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b600061074e61153e565b60026000846000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008560001916600019168152602001908152602001600020600601806003806020026040519081016040528092919082600380156107e7576020028201915b815460001916815260200190600101908083116107cf575b5050505050905091509150915091565b6000600260008360001916600019168152602001908152602001600020600901549050919050565b600061083582600061114a90919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b6108673360006111de90919063ffffffff16565b565b6108723361081f565b151561087d57600080fd5b61089181600061127890919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6108e03361081f565b15156108eb57600080fd5b600160009054906101000a900460ff1615151561090757600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b600060026000836000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806000806000806109a861153e565b60006109b2611561565b600260008b6000191660001916815260200190815260200160002061010060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160068201600380602002604051908101604052809291908260038015610bd2576020028201915b81546000191681526020019060010190808311610bba575b505050505081526020016009820154815250509050806000015181602001518260400151836060015184608001518560a001518660c001518760e001518191509850985098509850985098509850985050919395975091939597565b6000610c38611561565b6000600160009054906101000a900460ff16151515610c5657600080fd5b610100604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018773ffffffffffffffffffffffffffffffffffffffff168152602001868152602001428152509150610d0c828b86611312565b9050600073ffffffffffffffffffffffffffffffffffffffff1660026000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d8757600080fd5b8160026000836000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c082015181600601906003610f2792919061161b565b5060e08201518160090155905050816020015173ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff1682600019167f4feaf7d6b903d66ef03bb0d6a3887df840871dc6feb8bd4b14fb685c64bbd56e8560400151866060015187608001518860a001518960c00151604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600360200280838360005b8381101561106d578082015181840152602081019050611052565b505050509050019550505050505060405180910390a480925050509998505050505050505050565b61109d61153e565b6002600083600019166000191681526020019081526020016000206006016003806020026040519081016040528092919082600380156110f6576020028201915b815460001916815260200190600101908083116110de575b50505050509050919050565b600060026000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561118757600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561121a57600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156112b457600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008360000151838560400151866060015187608001518860a001518960c0015188604051602001808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140183600360200280838360005b838110156114ad578082015181840152602081019050611492565b50505050905001828152602001985050505050505050506040516020818303038152906040526040518082805190602001908083835b60208310151561150857805182526020820191506020810190506020830392506114e3565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902090509392505050565b606060405190810160405280600390602082028038833980820191505090505090565b61014060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161160e611661565b8152602001600081525090565b8260038101928215611650579160200282015b8281111561164f57825182906000191690559160200191906001019061162e565b5b50905061165d9190611684565b5090565b606060405190810160405280600390602082028038833980820191505090505090565b6116a691905b808211156116a257600081600090555060010161168a565b5090565b905600a165627a7a723058206b00d28c4f4064e1c825aad2dd7977c0b01f9d85a96a5b5c33938e80b020999b0029",
  "deployedBytecode": "0x6080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a146100ca57806340fac30c146100e1578063424475941461018157806346fbf68e146101c65780635c975abb146102215780636ef8d66d1461025057806382dc1ec4146102675780638456cb59146102aa57806387c8bba9146102c15780638eaa6ac014610332578063c9369cf8146104ac578063d71cf332146105ee578063f5f8231a1461065b575b600080fd5b3480156100d657600080fd5b506100df6106cc565b005b3480156100ed57600080fd5b506101106004803603810190808035600019169060200190929190505050610744565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600360200280838360005b8381101561016d578082015181840152602081019050610152565b505050509050019250505060405180910390f35b34801561018d57600080fd5b506101b060048036038101908080356000191690602001909291905050506107f7565b6040518082815260200191505060405180910390f35b3480156101d257600080fd5b50610207600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061081f565b604051808215151515815260200191505060405180910390f35b34801561022d57600080fd5b5061023661083c565b604051808215151515815260200191505060405180910390f35b34801561025c57600080fd5b50610265610853565b005b34801561027357600080fd5b506102a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610869565b005b3480156102b657600080fd5b506102bf6108d7565b005b3480156102cd57600080fd5b506102f0600480360381019080803560001916906020019092919050505061094f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561033e57600080fd5b506103616004803603810190808035600019169060200190929190505050610997565b604051808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183600360200280838360005b8381101561048c578082015181840152602081019050610471565b505050509050018281526020019850505050505050505060405180910390f35b3480156104b857600080fd5b506105d0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190806060019060038060200260405190810160405280929190826003602002808284378201915050505050919291929080359060200190929190505050610c2e565b60405180826000191660001916815260200191505060405180910390f35b3480156105fa57600080fd5b5061061d6004803603810190808035600019169060200190929190505050611095565b6040518082600360200280838360005b8381101561064857808201518184015260208101905061062d565b5050505090500191505060405180910390f35b34801561066757600080fd5b5061068a6004803603810190808035600019169060200190929190505050611102565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106d53361081f565b15156106e057600080fd5b600160009054906101000a900460ff1615156106fb57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b600061074e61153e565b60026000846000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008560001916600019168152602001908152602001600020600601806003806020026040519081016040528092919082600380156107e7576020028201915b815460001916815260200190600101908083116107cf575b5050505050905091509150915091565b6000600260008360001916600019168152602001908152602001600020600901549050919050565b600061083582600061114a90919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b6108673360006111de90919063ffffffff16565b565b6108723361081f565b151561087d57600080fd5b61089181600061127890919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6108e03361081f565b15156108eb57600080fd5b600160009054906101000a900460ff1615151561090757600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b600060026000836000191660001916815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806000806000806109a861153e565b60006109b2611561565b600260008b6000191660001916815260200190815260200160002061010060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160068201600380602002604051908101604052809291908260038015610bd2576020028201915b81546000191681526020019060010190808311610bba575b505050505081526020016009820154815250509050806000015181602001518260400151836060015184608001518560a001518660c001518760e001518191509850985098509850985098509850985050919395975091939597565b6000610c38611561565b6000600160009054906101000a900460ff16151515610c5657600080fd5b610100604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018773ffffffffffffffffffffffffffffffffffffffff168152602001868152602001428152509150610d0c828b86611312565b9050600073ffffffffffffffffffffffffffffffffffffffff1660026000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d8757600080fd5b8160026000836000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c082015181600601906003610f2792919061161b565b5060e08201518160090155905050816020015173ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff1682600019167f4feaf7d6b903d66ef03bb0d6a3887df840871dc6feb8bd4b14fb685c64bbd56e8560400151866060015187608001518860a001518960c00151604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600360200280838360005b8381101561106d578082015181840152602081019050611052565b505050509050019550505050505060405180910390a480925050509998505050505050505050565b61109d61153e565b6002600083600019166000191681526020019081526020016000206006016003806020026040519081016040528092919082600380156110f6576020028201915b815460001916815260200190600101908083116110de575b50505050509050919050565b600060026000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561118757600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561121a57600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156112b457600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008360000151838560400151866060015187608001518860a001518960c0015188604051602001808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140183600360200280838360005b838110156114ad578082015181840152602081019050611492565b50505050905001828152602001985050505050505050506040516020818303038152906040526040518082805190602001908083835b60208310151561150857805182526020820191506020810190506020830392506114e3565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902090509392505050565b606060405190810160405280600390602082028038833980820191505090505090565b61014060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161160e611661565b8152602001600081525090565b8260038101928215611650579160200282015b8281111561164f57825182906000191690559160200191906001019061162e565b5b50905061165d9190611684565b5090565b606060405190810160405280600390602082028038833980820191505090505090565b6116a691905b808211156116a257600081600090555060010161168a565b5090565b905600a165627a7a723058206b00d28c4f4064e1c825aad2dd7977c0b01f9d85a96a5b5c33938e80b020999b0029",
  "sourceMap": "184:4130:3:-;;;280:5:15;257:28;;;;;;;;;;;;;;;;;;;;259:23:12;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;184:4130:3;;245:132:10;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;184:4130:3:-;;;;;;;",
  "deployedSourceMap": "184:4130:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:95:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1002:95:15;;;;;;2791:266:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2791:266:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2791:266:3;;;;;;;;;;;;;;;;;3446:195;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3446:195:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:100:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;365:69:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;365:69:15;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:12;;;;;;468:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:93:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:93:15;;;;;;3063:174:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3063:174:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2201:584;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2201:584:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2201:584:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;1032:1163;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1032:1163:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3243:197;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3243:197:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3243:197:3;;;;;;;;;;;;;;;;3647:160;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3647:160:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:95:15;327:20:12;336:10;327:8;:20::i;:::-;319:29;;;;;;;;728:7:15;;;;;;;;;;;720:16;;;;;;;;1066:5;1056:7;;:15;;;;;;;;;;;;;;;;;;1082:10;;;;;;;;;;1002:95::o;2791:266:3:-;2894:7;2903:10;;:::i;:::-;2950:8;:18;2959:8;2950:18;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;2997:8;:18;3006:8;2997:18;;;;;;;;;;;;;;;;;:43;;2929:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2791:266;;;:::o;3446:195::-;3557:14;3594:8;:18;3603:8;3594:18;;;;;;;;;;;;;;;;;:40;;;3587:47;;3446:195;;;:::o;364:100:12:-;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;365:69:15:-;403:4;422:7;;;;;;;;;;;415:14;;365:69;:::o;588:70:12:-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;468:116::-;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;827:93:15:-;327:20:12;336:10;327:8;:20::i;:::-;319:29;;;;;;;;575:7:15;;;;;;;;;;;574:8;566:17;;;;;;;;892:4;882:7;;:14;;;;;;;;;;;;;;;;;;907:8;;;;;;;;;;827:93::o;3063:174:3:-;3167:7;3197:8;:18;3206:8;3197:18;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;3190:40;;3063:174;;;:::o;2201:584::-;2277:7;2286;2295;2304;2313:4;2319:7;2328:10;;:::i;:::-;2340:4;2439:18;;:::i;:::-;2460:8;:18;2469:8;2460:18;;;;;;;;;;;;;;;;;2439:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2509:5;:13;;;2536:5;:13;;;2563:5;:14;;;2591:5;:17;;;2622:5;:27;;;2663:5;:20;;;2697:5;:30;;;2741:5;:27;;;2488:290;;;;;;;;;;;;;;;;;;;2201:584;;;;;;;;;;:::o;1032:1163::-;1379:17;1412:18;;:::i;:::-;1685:16;575:7:15;;;;;;;;;;;574:8;566:17;;;;;;;;1433:241:3;;;;;;;;;1452:8;1433:241;;;;;;1474:8;1433:241;;;;;;1496:9;1433:241;;;;;;1519:12;1433:241;;;;;;1545:22;1433:241;;;;1581:15;1433:241;;;;;;1610:25;1433:241;;;;1649:15;1433:241;;;1412:262;;1704:36;1717:5;1724:8;1734:5;1704:12;:36::i;:::-;1685:55;;1833:1;1795:40;;:8;:18;1804:8;1795:18;;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;:40;;;1787:49;;;;;;;;1868:5;1847:8;:18;1856:8;1847:18;;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1961:5;:13;;;1889:273;;1939:8;1889:273;;1917:8;1889:273;;;;1988:5;:14;;;2016:5;:17;;;2047:5;:27;;;2088:5;:20;;;2122:5;:30;;;1889:273;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1889:273:3;;;;;;;;;;;;;;;;;;;;2180:8;2173:15;;1032:1163;;;;;;;;;;;;;:::o;3243:197::-;3357:10;;:::i;:::-;3390:8;:18;3399:8;3390:18;;;;;;;;;;;;;;;;;:43;;3383:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3243:197;;;:::o;3647:160::-;3744:7;3774:8;:18;3783:8;3774:18;;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;3767:33;;3647:160;;;:::o;657:166:10:-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;245:132::-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;3813:498:3:-;3926:7;4013:6;:14;;;4046:8;4072:6;:15;;;4105:6;:18;;;4141:6;:28;;;4187:6;:21;;;4226:6;:31;;;4275:5;3979:315;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3979:315:3;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3979:315:3;;;3956:348;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;3956:348:3;;;;;;;;;;;;;;;;3949:355;;3813:498;;;;;:::o;184:4130::-;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;184:4130:3;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;184:4130:3;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\ncontract PolicyRegistry is Pausable {\n    using SafeMath for uint;\n\n    struct Entry {\n        address version;\n        address carrier;\n        address resolver;\n        address underwriter;\n        uint underwriterRiskRating;\n        address policyTemplate;\n        bytes32[3] policyTemplateParameters;\n        uint bindingBlockTimestamp;\n    }\n\n    // map policyIds to entries\n    mapping (bytes32 => Entry) internal registry;\n\n    // maps insured address to list of policies\n    mapping (address => bytes32[]) internal insuredToPolicies;\n\n    event LogInsertEntry(\n        bytes32 indexed policyId,\n        address indexed insured,\n        address indexed carrier,\n        address resolver,\n        address underwriter,\n        uint underwriterRiskRating,\n        address policyTemplate,\n        bytes32[3] policyTemplateParameters\n    );\n\n    function insert(\n        address _version,\n        address _carrier,\n        address _insured,\n        address _resolver,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _policyTemplate,\n        bytes32[3] _policyTemplateParameters,\n        uint _salt\n    )\n        public\n        whenNotPaused\n        returns (bytes32 _policyId)\n    {\n        Entry memory entry = Entry(\n            _version,\n            _carrier,\n            _resolver,\n            _underwriter,\n            _underwriterRiskRating,\n            _policyTemplate,\n            _policyTemplateParameters,\n            block.timestamp\n        );\n\n        bytes32 policyId = _getPolicyId(entry, _insured, _salt);\n\n        // Ensure this entry is new\n        require(registry[policyId].carrier == address(0));\n\n        registry[policyId] = entry;\n\n        emit LogInsertEntry(\n            policyId,\n            _insured,\n            entry.carrier,\n            entry.resolver,\n            entry.underwriter,\n            entry.underwriterRiskRating,\n            entry.policyTemplate,\n            entry.policyTemplateParameters\n        );\n\n        return policyId;\n    }\n\n    function get(bytes32 policyId)\n        public\n        view\n        returns (address, address, address, address, uint, address, bytes32[3], uint)\n    {\n        // Tip: instantiate struct in memory to reduce call stack depth issues\n        Entry memory entry = registry[policyId];\n        return (\n            entry.version,\n            entry.carrier,\n            entry.resolver,\n            entry.underwriter,\n            entry.underwriterRiskRating,\n            entry.policyTemplate,\n            entry.policyTemplateParameters,\n            entry.bindingBlockTimestamp\n        );\n    }\n\n    function getPolicyDetails(\n        bytes32 policyId\n    )\n        public\n        view\n        returns (address, bytes32[3])\n    {\n        return (\n            registry[policyId].policyTemplate,\n            registry[policyId].policyTemplateParameters\n        );\n    }\n\n    function getPolicyTemplate(\n        bytes32 policyId\n    )\n        public\n        view\n        returns (address)\n    {\n        return registry[policyId].policyTemplate;\n    }\n\n    function getPolicyTemplateParameters(\n        bytes32 policyId\n    )\n        public\n        view\n        returns (bytes32[3])\n    {\n        return registry[policyId].policyTemplateParameters;\n    }\n\n    function getBindingBlockTimestamp(\n        bytes32 policyId\n    )\n        public\n        view\n        returns (uint timestamp)\n    {\n        return registry[policyId].bindingBlockTimestamp;\n    }\n\n    function getCarrier(\n        bytes32 policyId\n    )\n        public\n        view\n        returns (address)\n    {\n        return registry[policyId].carrier;\n    }\n\n    function _getPolicyId(Entry _entry, address _insured, uint _salt)\n        internal\n        pure\n        returns (bytes32)\n    {\n        return keccak256(\n            abi.encodePacked(\n                _entry.version, \n                _insured,\n                _entry.resolver,\n                _entry.underwriter,\n                _entry.underwriterRiskRating,\n                _entry.policyTemplate,\n                _entry.policyTemplateParameters,\n                _salt\n            )\n        );\n    }\n\n}",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
    "exportedSymbols": {
      "PolicyRegistry": [
        858
      ]
    },
    "id": 859,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 560,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 561,
        "nodeType": "ImportDirective",
        "scope": 859,
        "sourceUnit": 2544,
        "src": "26:80:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 562,
        "nodeType": "ImportDirective",
        "scope": 859,
        "sourceUnit": 2672,
        "src": "107:75:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 563,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2543,
              "src": "211:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$2543",
                "typeString": "contract Pausable"
              }
            },
            "id": 564,
            "nodeType": "InheritanceSpecifier",
            "src": "211:8:3"
          }
        ],
        "contractDependencies": [
          2414,
          2543
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 858,
        "linearizedBaseContracts": [
          858,
          2543,
          2414
        ],
        "name": "PolicyRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 567,
            "libraryName": {
              "contractScope": null,
              "id": 565,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2671,
              "src": "232:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2671",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "226:24:3",
            "typeName": {
              "id": 566,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "245:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "PolicyRegistry.Entry",
            "id": 586,
            "members": [
              {
                "constant": false,
                "id": 569,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "279:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 568,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "279:7:3",
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
                "id": 571,
                "name": "carrier",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "304:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 570,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "304:7:3",
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
                "id": 573,
                "name": "resolver",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "329:16:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 572,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "329:7:3",
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
                "id": 575,
                "name": "underwriter",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "355:19:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 574,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "355:7:3",
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
                "id": 577,
                "name": "underwriterRiskRating",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "384:26:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 576,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "384:4:3",
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
                "id": 579,
                "name": "policyTemplate",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "420:22:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 578,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "420:7:3",
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
                "id": 583,
                "name": "policyTemplateParameters",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "452:35:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                  "typeString": "bytes32[3]"
                },
                "typeName": {
                  "baseType": {
                    "id": 580,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 582,
                  "length": {
                    "argumentTypes": null,
                    "hexValue": "33",
                    "id": 581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "460:1:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": null,
                      "typeString": null
                    },
                    "value": "3"
                  },
                  "nodeType": "ArrayTypeName",
                  "src": "452:10:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                    "typeString": "bytes32[3]"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 585,
                "name": "bindingBlockTimestamp",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "497:26:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 584,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "497:4:3",
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
            "scope": 858,
            "src": "256:274:3",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 590,
            "name": "registry",
            "nodeType": "VariableDeclaration",
            "scope": 858,
            "src": "568:44:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry)"
            },
            "typeName": {
              "id": 589,
              "keyType": {
                "id": 587,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "577:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "568:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry)"
              },
              "valueType": {
                "contractScope": null,
                "id": 588,
                "name": "Entry",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 586,
                "src": "588:5:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Entry_$586_storage_ptr",
                  "typeString": "struct PolicyRegistry.Entry"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 595,
            "name": "insuredToPolicies",
            "nodeType": "VariableDeclaration",
            "scope": 858,
            "src": "667:57:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
              "typeString": "mapping(address => bytes32[])"
            },
            "typeName": {
              "id": 594,
              "keyType": {
                "id": 591,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "676:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "667:30:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                "typeString": "mapping(address => bytes32[])"
              },
              "valueType": {
                "baseType": {
                  "id": 592,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "687:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "id": 593,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "687:9:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 615,
            "name": "LogInsertEntry",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 597,
                  "indexed": true,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "761:24:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 596,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "761:7:3",
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
                  "id": 599,
                  "indexed": true,
                  "name": "insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "795:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 598,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "795:7:3",
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
                  "id": 601,
                  "indexed": true,
                  "name": "carrier",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "828:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 600,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "828:7:3",
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
                  "id": 603,
                  "indexed": false,
                  "name": "resolver",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "861:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 602,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "861:7:3",
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
                  "id": 605,
                  "indexed": false,
                  "name": "underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "887:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 604,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "887:7:3",
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
                  "id": 607,
                  "indexed": false,
                  "name": "underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "916:26:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 606,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "916:4:3",
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
                  "id": 609,
                  "indexed": false,
                  "name": "policyTemplate",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "952:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 608,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:3",
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
                  "id": 613,
                  "indexed": false,
                  "name": "policyTemplateParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "984:35:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 610,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "984:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 612,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 611,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "992:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "984:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "751:274:3"
            },
            "src": "731:295:3"
          },
          {
            "body": {
              "id": 700,
              "nodeType": "Block",
              "src": "1402:793:3",
              "statements": [
                {
                  "assignments": [
                    643
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 643,
                      "name": "entry",
                      "nodeType": "VariableDeclaration",
                      "scope": 701,
                      "src": "1412:18:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 642,
                        "name": "Entry",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 586,
                        "src": "1412:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$586_storage_ptr",
                          "typeString": "struct PolicyRegistry.Entry"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 655,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 645,
                        "name": "_version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 617,
                        "src": "1452:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 646,
                        "name": "_carrier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 619,
                        "src": "1474:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 647,
                        "name": "_resolver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 623,
                        "src": "1496:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 648,
                        "name": "_underwriter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 625,
                        "src": "1519:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 649,
                        "name": "_underwriterRiskRating",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 627,
                        "src": "1545:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 650,
                        "name": "_policyTemplate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 629,
                        "src": "1581:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 651,
                        "name": "_policyTemplateParameters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 633,
                        "src": "1610:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                          "typeString": "bytes32[3] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 652,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4613,
                          "src": "1649:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 653,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1649:15:3",
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
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                          "typeString": "bytes32[3] memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 644,
                      "name": "Entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 586,
                      "src": "1433:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Entry_$586_storage_ptr_$",
                        "typeString": "type(struct PolicyRegistry.Entry storage pointer)"
                      }
                    },
                    "id": 654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1433:241:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$586_memory",
                      "typeString": "struct PolicyRegistry.Entry memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1412:262:3"
                },
                {
                  "assignments": [
                    657
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 657,
                      "name": "policyId",
                      "nodeType": "VariableDeclaration",
                      "scope": 701,
                      "src": "1685:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 656,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1685:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 663,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 659,
                        "name": "entry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 643,
                        "src": "1717:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                          "typeString": "struct PolicyRegistry.Entry memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 660,
                        "name": "_insured",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 621,
                        "src": "1724:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 661,
                        "name": "_salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 635,
                        "src": "1734:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
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
                      "id": 658,
                      "name": "_getPolicyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 857,
                      "src": "1704:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_Entry_$586_memory_ptr_$_t_address_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (struct PolicyRegistry.Entry memory,address,uint256) pure returns (bytes32)"
                      }
                    },
                    "id": 662,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1704:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1685:55:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 672,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 665,
                              "name": "registry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 590,
                              "src": "1795:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                                "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                              }
                            },
                            "id": 667,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 666,
                              "name": "policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 657,
                              "src": "1804:8:3",
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
                            "src": "1795:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Entry_$586_storage",
                              "typeString": "struct PolicyRegistry.Entry storage ref"
                            }
                          },
                          "id": 668,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "carrier",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 571,
                          "src": "1795:26:3",
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
                              "hexValue": "30",
                              "id": 670,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1833:1:3",
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
                            "id": 669,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1825:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 671,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1825:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1795:40:3",
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
                      "id": 664,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1787:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 673,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1787:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 674,
                  "nodeType": "ExpressionStatement",
                  "src": "1787:49:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 679,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 675,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "1847:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 677,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 676,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 657,
                        "src": "1856:8:3",
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
                      "src": "1847:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 678,
                      "name": "entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 643,
                      "src": "1868:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry memory"
                      }
                    },
                    "src": "1847:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$586_storage",
                      "typeString": "struct PolicyRegistry.Entry storage ref"
                    }
                  },
                  "id": 680,
                  "nodeType": "ExpressionStatement",
                  "src": "1847:26:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 682,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 657,
                        "src": "1917:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 683,
                        "name": "_insured",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 621,
                        "src": "1939:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 684,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "1961:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 685,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "carrier",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 571,
                        "src": "1961:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 686,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "1988:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 687,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "resolver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 573,
                        "src": "1988:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 688,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "2016:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 689,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 575,
                        "src": "2016:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 690,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "2047:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 691,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriterRiskRating",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 577,
                        "src": "2047:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 692,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "2088:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 693,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 579,
                        "src": "2088:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 694,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "2122:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 695,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplateParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 583,
                        "src": "2122:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                          "typeString": "bytes32[3] memory"
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
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                          "typeString": "bytes32[3] memory"
                        }
                      ],
                      "id": 681,
                      "name": "LogInsertEntry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 615,
                      "src": "1889:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_array$_t_bytes32_$3_memory_ptr_$returns$__$",
                        "typeString": "function (bytes32,address,address,address,address,uint256,address,bytes32[3] memory)"
                      }
                    },
                    "id": 696,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1889:273:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 697,
                  "nodeType": "EmitStatement",
                  "src": "1884:278:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 698,
                    "name": "policyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 657,
                    "src": "2180:8:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 641,
                  "id": 699,
                  "nodeType": "Return",
                  "src": "2173:15:3"
                }
              ]
            },
            "documentation": null,
            "id": 701,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 638,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 637,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2504,
                  "src": "1348:13:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1348:13:3"
              }
            ],
            "name": "insert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 617,
                  "name": "_version",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1057:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 616,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1057:7:3",
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
                  "id": 619,
                  "name": "_carrier",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1083:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 618,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1083:7:3",
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
                  "id": 621,
                  "name": "_insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1109:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 620,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1109:7:3",
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
                  "id": 623,
                  "name": "_resolver",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1135:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1135:7:3",
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
                  "id": 625,
                  "name": "_underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1162:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 624,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:7:3",
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
                  "id": 627,
                  "name": "_underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1192:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 626,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1192:4:3",
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
                  "id": 629,
                  "name": "_policyTemplate",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1229:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 628,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1229:7:3",
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
                  "name": "_policyTemplateParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1262:36:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 630,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1262:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 632,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 631,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1270:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1262:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 635,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1308:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 634,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1308:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1047:277:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 640,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1379:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 639,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1378:19:3"
            },
            "scope": 858,
            "src": "1032:1163:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 748,
              "nodeType": "Block",
              "src": "2350:435:3",
              "statements": [
                {
                  "assignments": [
                    725
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 725,
                      "name": "entry",
                      "nodeType": "VariableDeclaration",
                      "scope": 749,
                      "src": "2439:18:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 724,
                        "name": "Entry",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 586,
                        "src": "2439:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$586_storage_ptr",
                          "typeString": "struct PolicyRegistry.Entry"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 729,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 726,
                      "name": "registry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 590,
                      "src": "2460:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                        "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                      }
                    },
                    "id": 728,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 727,
                      "name": "policyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 703,
                      "src": "2469:8:3",
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
                    "src": "2460:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$586_storage",
                      "typeString": "struct PolicyRegistry.Entry storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2439:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 730,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2509:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 731,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "version",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 569,
                        "src": "2509:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 732,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2536:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 733,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "carrier",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 571,
                        "src": "2536:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 734,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2563:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 735,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "resolver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 573,
                        "src": "2563:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 736,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2591:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 737,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 575,
                        "src": "2591:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 738,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2622:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 739,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriterRiskRating",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 577,
                        "src": "2622:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 740,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2663:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 741,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 579,
                        "src": "2663:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 742,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2697:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 743,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplateParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 583,
                        "src": "2697:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                          "typeString": "bytes32[3] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 744,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2741:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 745,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "bindingBlockTimestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 585,
                        "src": "2741:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 746,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2495:283:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_array$_t_bytes32_$3_memory_$_t_uint256_$",
                      "typeString": "tuple(address,address,address,address,uint256,address,bytes32[3] memory,uint256)"
                    }
                  },
                  "functionReturnParameters": 723,
                  "id": 747,
                  "nodeType": "Return",
                  "src": "2488:290:3"
                }
              ]
            },
            "documentation": null,
            "id": 749,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "get",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 703,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2214:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 702,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2214:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2213:18:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 706,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2277:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 705,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2277:7:3",
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
                  "id": 708,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2286:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 707,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2286:7:3",
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
                  "id": 710,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2295:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 709,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2295:7:3",
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
                  "id": 712,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2304:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2304:7:3",
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
                  "id": 714,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2313:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 713,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2313:4:3",
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
                  "id": 716,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2319:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2319:7:3",
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
                  "id": 720,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2328:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 717,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2328:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 719,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 718,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2336:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2328:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 722,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2340:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 721,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2340:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2276:69:3"
            },
            "scope": 858,
            "src": "2201:584:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 770,
              "nodeType": "Block",
              "src": "2919:138:3",
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
                            "id": 760,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 590,
                            "src": "2950:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 762,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 761,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 751,
                            "src": "2959:8:3",
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
                          "src": "2950:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 763,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 579,
                        "src": "2950:33:3",
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
                            "id": 764,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 590,
                            "src": "2997:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 766,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 765,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 751,
                            "src": "3006:8:3",
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
                          "src": "2997:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 767,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplateParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 583,
                        "src": "2997:43:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$3_storage",
                          "typeString": "bytes32[3] storage ref"
                        }
                      }
                    ],
                    "id": 768,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2936:114:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_array$_t_bytes32_$3_storage_$",
                      "typeString": "tuple(address,bytes32[3] storage ref)"
                    }
                  },
                  "functionReturnParameters": 759,
                  "id": 769,
                  "nodeType": "Return",
                  "src": "2929:121:3"
                }
              ]
            },
            "documentation": null,
            "id": 771,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyDetails",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 751,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 771,
                  "src": "2826:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 750,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2826:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2816:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 754,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 771,
                  "src": "2894:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 753,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2894:7:3",
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
                  "id": 758,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 771,
                  "src": "2903:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 755,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2903:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 757,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 756,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2911:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2903:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2893:21:3"
            },
            "scope": 858,
            "src": "2791:266:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 783,
              "nodeType": "Block",
              "src": "3180:57:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 778,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "3197:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 780,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 779,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 773,
                        "src": "3206:8:3",
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
                      "src": "3197:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 781,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyTemplate",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 579,
                    "src": "3197:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 777,
                  "id": 782,
                  "nodeType": "Return",
                  "src": "3190:40:3"
                }
              ]
            },
            "documentation": null,
            "id": 784,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyTemplate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 773,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 784,
                  "src": "3099:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 772,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3099:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3089:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 776,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 784,
                  "src": "3167:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 775,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3167:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3166:9:3"
            },
            "scope": 858,
            "src": "3063:174:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 798,
              "nodeType": "Block",
              "src": "3373:67:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 793,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "3390:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 795,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 794,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 786,
                        "src": "3399:8:3",
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
                      "src": "3390:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 796,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyTemplateParameters",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 583,
                    "src": "3390:43:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage",
                      "typeString": "bytes32[3] storage ref"
                    }
                  },
                  "functionReturnParameters": 792,
                  "id": 797,
                  "nodeType": "Return",
                  "src": "3383:50:3"
                }
              ]
            },
            "documentation": null,
            "id": 799,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyTemplateParameters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 786,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 799,
                  "src": "3289:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 785,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3289:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3279:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 791,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 799,
                  "src": "3357:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 788,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "3357:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 790,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 789,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3365:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3357:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3356:12:3"
            },
            "scope": 858,
            "src": "3243:197:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 811,
              "nodeType": "Block",
              "src": "3577:64:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 806,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "3594:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 808,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 807,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 801,
                        "src": "3603:8:3",
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
                      "src": "3594:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 809,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "bindingBlockTimestamp",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 585,
                    "src": "3594:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 805,
                  "id": 810,
                  "nodeType": "Return",
                  "src": "3587:47:3"
                }
              ]
            },
            "documentation": null,
            "id": 812,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBindingBlockTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 801,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 812,
                  "src": "3489:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 800,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3489:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3479:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 804,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 812,
                  "src": "3557:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 803,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3557:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3556:16:3"
            },
            "scope": 858,
            "src": "3446:195:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 824,
              "nodeType": "Block",
              "src": "3757:50:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 819,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "3774:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 821,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 820,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 814,
                        "src": "3783:8:3",
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
                      "src": "3774:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 822,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "carrier",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 571,
                    "src": "3774:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 818,
                  "id": 823,
                  "nodeType": "Return",
                  "src": "3767:33:3"
                }
              ]
            },
            "documentation": null,
            "id": 825,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCarrier",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 814,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 825,
                  "src": "3676:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 813,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3676:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3666:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 817,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 825,
                  "src": "3744:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3744:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3743:9:3"
            },
            "scope": 858,
            "src": "3647:160:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 856,
              "nodeType": "Block",
              "src": "3939:372:3",
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
                              "id": 839,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4013:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 840,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "version",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 569,
                            "src": "4013:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 841,
                            "name": "_insured",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 829,
                            "src": "4046:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 842,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4072:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 843,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "resolver",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 573,
                            "src": "4072:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 844,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4105:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 845,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "underwriter",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 575,
                            "src": "4105:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 846,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4141:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 847,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "underwriterRiskRating",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 577,
                            "src": "4141:28:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 848,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4187:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 849,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyTemplate",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 579,
                            "src": "4187:21:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 850,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4226:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 851,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyTemplateParameters",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 583,
                            "src": "4226:31:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                              "typeString": "bytes32[3] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 852,
                            "name": "_salt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 831,
                            "src": "4275:5:3",
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
                              "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                              "typeString": "bytes32[3] memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 837,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4610,
                            "src": "3979:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 838,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3979:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 853,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3979:315:3",
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
                      "id": 836,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4617,
                      "src": "3956:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3956:348:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 835,
                  "id": 855,
                  "nodeType": "Return",
                  "src": "3949:355:3"
                }
              ]
            },
            "documentation": null,
            "id": 857,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_getPolicyId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 827,
                  "name": "_entry",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "3835:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                    "typeString": "struct PolicyRegistry.Entry"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 826,
                    "name": "Entry",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 586,
                    "src": "3835:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$586_storage_ptr",
                      "typeString": "struct PolicyRegistry.Entry"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 829,
                  "name": "_insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "3849:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 828,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3849:7:3",
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
                  "id": 831,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "3867:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 830,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3867:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3834:44:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 834,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "3926:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 833,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3926:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3925:9:3"
            },
            "scope": 858,
            "src": "3813:498:3",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 859,
        "src": "184:4130:3"
      }
    ],
    "src": "0:4314:3"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
    "exportedSymbols": {
      "PolicyRegistry": [
        858
      ]
    },
    "id": 859,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 560,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 561,
        "nodeType": "ImportDirective",
        "scope": 859,
        "sourceUnit": 2544,
        "src": "26:80:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 562,
        "nodeType": "ImportDirective",
        "scope": 859,
        "sourceUnit": 2672,
        "src": "107:75:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 563,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2543,
              "src": "211:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$2543",
                "typeString": "contract Pausable"
              }
            },
            "id": 564,
            "nodeType": "InheritanceSpecifier",
            "src": "211:8:3"
          }
        ],
        "contractDependencies": [
          2414,
          2543
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 858,
        "linearizedBaseContracts": [
          858,
          2543,
          2414
        ],
        "name": "PolicyRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 567,
            "libraryName": {
              "contractScope": null,
              "id": 565,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2671,
              "src": "232:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2671",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "226:24:3",
            "typeName": {
              "id": 566,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "245:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "PolicyRegistry.Entry",
            "id": 586,
            "members": [
              {
                "constant": false,
                "id": 569,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "279:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 568,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "279:7:3",
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
                "id": 571,
                "name": "carrier",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "304:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 570,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "304:7:3",
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
                "id": 573,
                "name": "resolver",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "329:16:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 572,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "329:7:3",
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
                "id": 575,
                "name": "underwriter",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "355:19:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 574,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "355:7:3",
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
                "id": 577,
                "name": "underwriterRiskRating",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "384:26:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 576,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "384:4:3",
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
                "id": 579,
                "name": "policyTemplate",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "420:22:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 578,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "420:7:3",
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
                "id": 583,
                "name": "policyTemplateParameters",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "452:35:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                  "typeString": "bytes32[3]"
                },
                "typeName": {
                  "baseType": {
                    "id": 580,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 582,
                  "length": {
                    "argumentTypes": null,
                    "hexValue": "33",
                    "id": 581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "460:1:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": null,
                      "typeString": null
                    },
                    "value": "3"
                  },
                  "nodeType": "ArrayTypeName",
                  "src": "452:10:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                    "typeString": "bytes32[3]"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 585,
                "name": "bindingBlockTimestamp",
                "nodeType": "VariableDeclaration",
                "scope": 586,
                "src": "497:26:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 584,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "497:4:3",
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
            "scope": 858,
            "src": "256:274:3",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 590,
            "name": "registry",
            "nodeType": "VariableDeclaration",
            "scope": 858,
            "src": "568:44:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry)"
            },
            "typeName": {
              "id": 589,
              "keyType": {
                "id": 587,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "577:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "568:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry)"
              },
              "valueType": {
                "contractScope": null,
                "id": 588,
                "name": "Entry",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 586,
                "src": "588:5:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Entry_$586_storage_ptr",
                  "typeString": "struct PolicyRegistry.Entry"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 595,
            "name": "insuredToPolicies",
            "nodeType": "VariableDeclaration",
            "scope": 858,
            "src": "667:57:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
              "typeString": "mapping(address => bytes32[])"
            },
            "typeName": {
              "id": 594,
              "keyType": {
                "id": 591,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "676:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "667:30:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                "typeString": "mapping(address => bytes32[])"
              },
              "valueType": {
                "baseType": {
                  "id": 592,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "687:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "id": 593,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "687:9:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 615,
            "name": "LogInsertEntry",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 597,
                  "indexed": true,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "761:24:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 596,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "761:7:3",
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
                  "id": 599,
                  "indexed": true,
                  "name": "insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "795:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 598,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "795:7:3",
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
                  "id": 601,
                  "indexed": true,
                  "name": "carrier",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "828:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 600,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "828:7:3",
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
                  "id": 603,
                  "indexed": false,
                  "name": "resolver",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "861:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 602,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "861:7:3",
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
                  "id": 605,
                  "indexed": false,
                  "name": "underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "887:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 604,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "887:7:3",
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
                  "id": 607,
                  "indexed": false,
                  "name": "underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "916:26:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 606,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "916:4:3",
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
                  "id": 609,
                  "indexed": false,
                  "name": "policyTemplate",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "952:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 608,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:3",
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
                  "id": 613,
                  "indexed": false,
                  "name": "policyTemplateParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 615,
                  "src": "984:35:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 610,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "984:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 612,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 611,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "992:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "984:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "751:274:3"
            },
            "src": "731:295:3"
          },
          {
            "body": {
              "id": 700,
              "nodeType": "Block",
              "src": "1402:793:3",
              "statements": [
                {
                  "assignments": [
                    643
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 643,
                      "name": "entry",
                      "nodeType": "VariableDeclaration",
                      "scope": 701,
                      "src": "1412:18:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 642,
                        "name": "Entry",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 586,
                        "src": "1412:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$586_storage_ptr",
                          "typeString": "struct PolicyRegistry.Entry"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 655,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 645,
                        "name": "_version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 617,
                        "src": "1452:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 646,
                        "name": "_carrier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 619,
                        "src": "1474:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 647,
                        "name": "_resolver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 623,
                        "src": "1496:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 648,
                        "name": "_underwriter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 625,
                        "src": "1519:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 649,
                        "name": "_underwriterRiskRating",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 627,
                        "src": "1545:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 650,
                        "name": "_policyTemplate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 629,
                        "src": "1581:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 651,
                        "name": "_policyTemplateParameters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 633,
                        "src": "1610:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                          "typeString": "bytes32[3] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 652,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4613,
                          "src": "1649:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 653,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1649:15:3",
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
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                          "typeString": "bytes32[3] memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 644,
                      "name": "Entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 586,
                      "src": "1433:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Entry_$586_storage_ptr_$",
                        "typeString": "type(struct PolicyRegistry.Entry storage pointer)"
                      }
                    },
                    "id": 654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1433:241:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$586_memory",
                      "typeString": "struct PolicyRegistry.Entry memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1412:262:3"
                },
                {
                  "assignments": [
                    657
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 657,
                      "name": "policyId",
                      "nodeType": "VariableDeclaration",
                      "scope": 701,
                      "src": "1685:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 656,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1685:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 663,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 659,
                        "name": "entry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 643,
                        "src": "1717:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                          "typeString": "struct PolicyRegistry.Entry memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 660,
                        "name": "_insured",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 621,
                        "src": "1724:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 661,
                        "name": "_salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 635,
                        "src": "1734:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
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
                      "id": 658,
                      "name": "_getPolicyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 857,
                      "src": "1704:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_Entry_$586_memory_ptr_$_t_address_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (struct PolicyRegistry.Entry memory,address,uint256) pure returns (bytes32)"
                      }
                    },
                    "id": 662,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1704:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1685:55:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 672,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 665,
                              "name": "registry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 590,
                              "src": "1795:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                                "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                              }
                            },
                            "id": 667,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 666,
                              "name": "policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 657,
                              "src": "1804:8:3",
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
                            "src": "1795:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Entry_$586_storage",
                              "typeString": "struct PolicyRegistry.Entry storage ref"
                            }
                          },
                          "id": 668,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "carrier",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 571,
                          "src": "1795:26:3",
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
                              "hexValue": "30",
                              "id": 670,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1833:1:3",
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
                            "id": 669,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1825:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 671,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1825:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1795:40:3",
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
                      "id": 664,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1787:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 673,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1787:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 674,
                  "nodeType": "ExpressionStatement",
                  "src": "1787:49:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 679,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 675,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "1847:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 677,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 676,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 657,
                        "src": "1856:8:3",
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
                      "src": "1847:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 678,
                      "name": "entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 643,
                      "src": "1868:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry memory"
                      }
                    },
                    "src": "1847:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$586_storage",
                      "typeString": "struct PolicyRegistry.Entry storage ref"
                    }
                  },
                  "id": 680,
                  "nodeType": "ExpressionStatement",
                  "src": "1847:26:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 682,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 657,
                        "src": "1917:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 683,
                        "name": "_insured",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 621,
                        "src": "1939:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 684,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "1961:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 685,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "carrier",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 571,
                        "src": "1961:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 686,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "1988:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 687,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "resolver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 573,
                        "src": "1988:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 688,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "2016:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 689,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 575,
                        "src": "2016:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 690,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "2047:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 691,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriterRiskRating",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 577,
                        "src": "2047:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 692,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "2088:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 693,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 579,
                        "src": "2088:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 694,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "2122:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 695,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplateParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 583,
                        "src": "2122:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                          "typeString": "bytes32[3] memory"
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
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                          "typeString": "bytes32[3] memory"
                        }
                      ],
                      "id": 681,
                      "name": "LogInsertEntry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 615,
                      "src": "1889:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_array$_t_bytes32_$3_memory_ptr_$returns$__$",
                        "typeString": "function (bytes32,address,address,address,address,uint256,address,bytes32[3] memory)"
                      }
                    },
                    "id": 696,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1889:273:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 697,
                  "nodeType": "EmitStatement",
                  "src": "1884:278:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 698,
                    "name": "policyId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 657,
                    "src": "2180:8:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 641,
                  "id": 699,
                  "nodeType": "Return",
                  "src": "2173:15:3"
                }
              ]
            },
            "documentation": null,
            "id": 701,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 638,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 637,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2504,
                  "src": "1348:13:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1348:13:3"
              }
            ],
            "name": "insert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 617,
                  "name": "_version",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1057:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 616,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1057:7:3",
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
                  "id": 619,
                  "name": "_carrier",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1083:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 618,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1083:7:3",
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
                  "id": 621,
                  "name": "_insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1109:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 620,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1109:7:3",
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
                  "id": 623,
                  "name": "_resolver",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1135:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1135:7:3",
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
                  "id": 625,
                  "name": "_underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1162:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 624,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:7:3",
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
                  "id": 627,
                  "name": "_underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1192:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 626,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1192:4:3",
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
                  "id": 629,
                  "name": "_policyTemplate",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1229:23:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 628,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1229:7:3",
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
                  "name": "_policyTemplateParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1262:36:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 630,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1262:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 632,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 631,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1270:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1262:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 635,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1308:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 634,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1308:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1047:277:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 640,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "1379:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 639,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1378:19:3"
            },
            "scope": 858,
            "src": "1032:1163:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 748,
              "nodeType": "Block",
              "src": "2350:435:3",
              "statements": [
                {
                  "assignments": [
                    725
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 725,
                      "name": "entry",
                      "nodeType": "VariableDeclaration",
                      "scope": 749,
                      "src": "2439:18:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                        "typeString": "struct PolicyRegistry.Entry"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 724,
                        "name": "Entry",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 586,
                        "src": "2439:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$586_storage_ptr",
                          "typeString": "struct PolicyRegistry.Entry"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 729,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 726,
                      "name": "registry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 590,
                      "src": "2460:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                        "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                      }
                    },
                    "id": 728,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 727,
                      "name": "policyId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 703,
                      "src": "2469:8:3",
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
                    "src": "2460:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$586_storage",
                      "typeString": "struct PolicyRegistry.Entry storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2439:39:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 730,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2509:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 731,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "version",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 569,
                        "src": "2509:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 732,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2536:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 733,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "carrier",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 571,
                        "src": "2536:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 734,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2563:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 735,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "resolver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 573,
                        "src": "2563:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 736,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2591:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 737,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriter",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 575,
                        "src": "2591:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 738,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2622:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 739,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "underwriterRiskRating",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 577,
                        "src": "2622:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 740,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2663:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 741,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 579,
                        "src": "2663:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 742,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2697:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 743,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplateParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 583,
                        "src": "2697:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                          "typeString": "bytes32[3] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 744,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 725,
                          "src": "2741:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                            "typeString": "struct PolicyRegistry.Entry memory"
                          }
                        },
                        "id": 745,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "bindingBlockTimestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 585,
                        "src": "2741:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 746,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2495:283:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_array$_t_bytes32_$3_memory_$_t_uint256_$",
                      "typeString": "tuple(address,address,address,address,uint256,address,bytes32[3] memory,uint256)"
                    }
                  },
                  "functionReturnParameters": 723,
                  "id": 747,
                  "nodeType": "Return",
                  "src": "2488:290:3"
                }
              ]
            },
            "documentation": null,
            "id": 749,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "get",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 703,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2214:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 702,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2214:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2213:18:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 706,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2277:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 705,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2277:7:3",
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
                  "id": 708,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2286:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 707,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2286:7:3",
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
                  "id": 710,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2295:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 709,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2295:7:3",
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
                  "id": 712,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2304:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2304:7:3",
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
                  "id": 714,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2313:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 713,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2313:4:3",
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
                  "id": 716,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2319:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2319:7:3",
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
                  "id": 720,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2328:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 717,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2328:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 719,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 718,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2336:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2328:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 722,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 749,
                  "src": "2340:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 721,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2340:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2276:69:3"
            },
            "scope": 858,
            "src": "2201:584:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 770,
              "nodeType": "Block",
              "src": "2919:138:3",
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
                            "id": 760,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 590,
                            "src": "2950:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 762,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 761,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 751,
                            "src": "2959:8:3",
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
                          "src": "2950:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 763,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplate",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 579,
                        "src": "2950:33:3",
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
                            "id": 764,
                            "name": "registry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 590,
                            "src": "2997:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                              "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                            }
                          },
                          "id": 766,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 765,
                            "name": "policyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 751,
                            "src": "3006:8:3",
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
                          "src": "2997:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Entry_$586_storage",
                            "typeString": "struct PolicyRegistry.Entry storage ref"
                          }
                        },
                        "id": 767,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "policyTemplateParameters",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 583,
                        "src": "2997:43:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$3_storage",
                          "typeString": "bytes32[3] storage ref"
                        }
                      }
                    ],
                    "id": 768,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2936:114:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_array$_t_bytes32_$3_storage_$",
                      "typeString": "tuple(address,bytes32[3] storage ref)"
                    }
                  },
                  "functionReturnParameters": 759,
                  "id": 769,
                  "nodeType": "Return",
                  "src": "2929:121:3"
                }
              ]
            },
            "documentation": null,
            "id": 771,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyDetails",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 751,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 771,
                  "src": "2826:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 750,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2826:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2816:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 754,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 771,
                  "src": "2894:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 753,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2894:7:3",
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
                  "id": 758,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 771,
                  "src": "2903:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 755,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2903:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 757,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 756,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2911:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2903:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2893:21:3"
            },
            "scope": 858,
            "src": "2791:266:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 783,
              "nodeType": "Block",
              "src": "3180:57:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 778,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "3197:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 780,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 779,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 773,
                        "src": "3206:8:3",
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
                      "src": "3197:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 781,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyTemplate",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 579,
                    "src": "3197:33:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 777,
                  "id": 782,
                  "nodeType": "Return",
                  "src": "3190:40:3"
                }
              ]
            },
            "documentation": null,
            "id": 784,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyTemplate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 773,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 784,
                  "src": "3099:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 772,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3099:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3089:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 776,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 784,
                  "src": "3167:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 775,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3167:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3166:9:3"
            },
            "scope": 858,
            "src": "3063:174:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 798,
              "nodeType": "Block",
              "src": "3373:67:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 793,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "3390:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 795,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 794,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 786,
                        "src": "3399:8:3",
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
                      "src": "3390:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 796,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "policyTemplateParameters",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 583,
                    "src": "3390:43:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage",
                      "typeString": "bytes32[3] storage ref"
                    }
                  },
                  "functionReturnParameters": 792,
                  "id": 797,
                  "nodeType": "Return",
                  "src": "3383:50:3"
                }
              ]
            },
            "documentation": null,
            "id": 799,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyTemplateParameters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 786,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 799,
                  "src": "3289:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 785,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3289:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3279:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 791,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 799,
                  "src": "3357:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$3_memory_ptr",
                    "typeString": "bytes32[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 788,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "3357:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 790,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "33",
                      "id": 789,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3365:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3357:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$3_storage_ptr",
                      "typeString": "bytes32[3]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3356:12:3"
            },
            "scope": 858,
            "src": "3243:197:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 811,
              "nodeType": "Block",
              "src": "3577:64:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 806,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "3594:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 808,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 807,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 801,
                        "src": "3603:8:3",
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
                      "src": "3594:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 809,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "bindingBlockTimestamp",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 585,
                    "src": "3594:40:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 805,
                  "id": 810,
                  "nodeType": "Return",
                  "src": "3587:47:3"
                }
              ]
            },
            "documentation": null,
            "id": 812,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBindingBlockTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 801,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 812,
                  "src": "3489:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 800,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3489:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3479:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 804,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 812,
                  "src": "3557:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 803,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3557:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3556:16:3"
            },
            "scope": 858,
            "src": "3446:195:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 824,
              "nodeType": "Block",
              "src": "3757:50:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 819,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 590,
                        "src": "3774:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$586_storage_$",
                          "typeString": "mapping(bytes32 => struct PolicyRegistry.Entry storage ref)"
                        }
                      },
                      "id": 821,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 820,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 814,
                        "src": "3783:8:3",
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
                      "src": "3774:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$586_storage",
                        "typeString": "struct PolicyRegistry.Entry storage ref"
                      }
                    },
                    "id": 822,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "carrier",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 571,
                    "src": "3774:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 818,
                  "id": 823,
                  "nodeType": "Return",
                  "src": "3767:33:3"
                }
              ]
            },
            "documentation": null,
            "id": 825,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getCarrier",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 814,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 825,
                  "src": "3676:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 813,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3676:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3666:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 817,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 825,
                  "src": "3744:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3744:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3743:9:3"
            },
            "scope": 858,
            "src": "3647:160:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 856,
              "nodeType": "Block",
              "src": "3939:372:3",
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
                              "id": 839,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4013:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 840,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "version",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 569,
                            "src": "4013:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 841,
                            "name": "_insured",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 829,
                            "src": "4046:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 842,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4072:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 843,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "resolver",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 573,
                            "src": "4072:15:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 844,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4105:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 845,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "underwriter",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 575,
                            "src": "4105:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 846,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4141:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 847,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "underwriterRiskRating",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 577,
                            "src": "4141:28:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 848,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4187:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 849,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyTemplate",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 579,
                            "src": "4187:21:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 850,
                              "name": "_entry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 827,
                              "src": "4226:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                                "typeString": "struct PolicyRegistry.Entry memory"
                              }
                            },
                            "id": 851,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "policyTemplateParameters",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 583,
                            "src": "4226:31:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                              "typeString": "bytes32[3] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 852,
                            "name": "_salt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 831,
                            "src": "4275:5:3",
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
                              "typeIdentifier": "t_array$_t_bytes32_$3_memory",
                              "typeString": "bytes32[3] memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 837,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4610,
                            "src": "3979:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 838,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3979:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 853,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3979:315:3",
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
                      "id": 836,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4617,
                      "src": "3956:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3956:348:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 835,
                  "id": 855,
                  "nodeType": "Return",
                  "src": "3949:355:3"
                }
              ]
            },
            "documentation": null,
            "id": 857,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_getPolicyId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 827,
                  "name": "_entry",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "3835:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Entry_$586_memory_ptr",
                    "typeString": "struct PolicyRegistry.Entry"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 826,
                    "name": "Entry",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 586,
                    "src": "3835:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$586_storage_ptr",
                      "typeString": "struct PolicyRegistry.Entry"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 829,
                  "name": "_insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "3849:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 828,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3849:7:3",
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
                  "id": 831,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "3867:10:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 830,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3867:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3834:44:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 834,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 857,
                  "src": "3926:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 833,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3926:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3925:9:3"
            },
            "scope": 858,
            "src": "3813:498:3",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 859,
        "src": "184:4130:3"
      }
    ],
    "src": "0:4314:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {
    "1539960000103": {
      "events": {},
      "links": {},
      "address": "0x9325f537E92589C6BDA72fbAf5fd9dA1CE61306D",
      "transactionHash": "0x28c1349061e423a8d1fdf47694925f7c92f52f8a9af0e12d98638fc42cf8a294"
    },
    "1539979141293": {
      "events": {},
      "links": {},
      "address": "0x4f8DcC5c51433F92dB57D157B02BA4d9395e0Ee3",
      "transactionHash": "0x6ed4026e90e283064362c260811946c5c2ffc892ccf9c5e93c1f6f17c7d60ef7"
    }
  },
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:08.363Z"
}