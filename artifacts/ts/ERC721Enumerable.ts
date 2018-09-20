export const ERC721Enumerable = 
{
  "contractName": "ERC721Enumerable",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
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
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
          "indexed": true,
          "name": "tokenId",
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
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
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
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
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
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061004c6301ffc9a77c0100000000000000000000000000000000000000000000000000000000026100c7640100000000026401000000009004565b6100876380ac58cd7c0100000000000000000000000000000000000000000000000000000000026100c7640100000000026401000000009004565b6100c263780e9d637c0100000000000000000000000000000000000000000000000000000000026100c7640100000000026401000000009004565b610184565b63ffffffff7c010000000000000000000000000000000000000000000000000000000002817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415151561011857600080fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b61168d806101936000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a7146100ca578063081812fc1461012e578063095ea7b31461019b57806318160ddd146101e857806323b872dd146102135780632f745c591461028057806342842e0e146102e15780634f6ccce71461034e5780636352211e1461038f57806370a08231146103fc578063a22cb46514610453578063b88d4fde146104a2578063e985e9c514610555575b600080fd5b3480156100d657600080fd5b5061011460048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506105d0565b604051808215151515815260200191505060405180910390f35b34801561013a57600080fd5b5061015960048036038101908080359060200190929190505050610637565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101a757600080fd5b506101e6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610688565b005b3480156101f457600080fd5b506101fd6107cd565b6040518082815260200191505060405180910390f35b34801561021f57600080fd5b5061027e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107da565b005b34801561028c57600080fd5b506102cb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a9565b6040518082815260200191505060405180910390f35b3480156102ed57600080fd5b5061034c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610920565b005b34801561035a57600080fd5b5061037960048036038101908080359060200190929190505050610941565b6040518082815260200191505060405180910390f35b34801561039b57600080fd5b506103ba60048036038101908080359060200190929190505050610979565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561040857600080fd5b5061043d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f7565b6040518082815260200191505060405180910390f35b34801561045f57600080fd5b506104a0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610a7b565b005b3480156104ae57600080fd5b50610553600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610bb7565b005b34801561056157600080fd5b506105b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bdf565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061064282610c73565b151561064d57600080fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061069382610979565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106d057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610710575061070f8133610bdf565b5b151561071b57600080fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b6107e43382610ce5565b15156107ef57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561082b57600080fd5b6108358382610d7a565b61083f8382610e7d565b6108498282611039565b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006108b4836109f7565b821015156108c157600080fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561090d57fe5b9060005260206000200154905092915050565b61093c8383836020604051908101604052806000815250610bb7565b505050565b600061094b6107cd565b8210151561095857600080fd5b60078281548110151561096757fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156109ee57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610a3457600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610ab657600080fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b610bc28484846107da565b610bce84848484611110565b1515610bd957600080fd5b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600080610cf183610979565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d6057508373ffffffffffffffffffffffffffffffffffffffff16610d4884610637565b73ffffffffffffffffffffffffffffffffffffffff16145b80610d715750610d708185610bdf565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610d9a82610979565b73ffffffffffffffffffffffffffffffffffffffff16141515610dbc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610e795760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050565b6000806000610e8c8585611332565b60066000858152602001908152602001600020549250610ef86001600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061146190919063ffffffff16565b9150600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610f4657fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481101515610fa057fe5b9060005260206000200181905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036110009190611610565b50600060066000868152602001908152602001600020819055508260066000838152602001908152602001600020819055505050505050565b60006110458383611482565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050906001820390600052602060002001600090919290919091505550806006600084815260200190815260200160002081905550505050565b6000806111328573ffffffffffffffffffffffffffffffffffffffff166115dc565b15156111415760019150611329565b8473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561123657808201518184015260208101905061121b565b50505050905090810190601f1680156112635780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561128557600080fd5b505af1158015611299573d6000803e3d6000fd5b505050506040513d60208110156112af57600080fd5b8101908080519060200190929190505050905063150b7a027c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff1661135282610979565b73ffffffffffffffffffffffffffffffffffffffff1614151561137457600080fd5b6113c76001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461146190919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008083831115151561147357600080fd5b82840390508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156114f057600080fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506115956001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ef90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561160657600080fd5b8091505092915050565b81548183558181111561163757818360005260206000209182019101611636919061163c565b5b505050565b61165e91905b8082111561165a576000816000905550600101611642565b5090565b905600a165627a7a72305820ae95d6b1df565204c5023ec8fa7f1386bf7d4606dff9464c12093c887e6c31910029",
  "deployedBytecode": "0x6080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a7146100ca578063081812fc1461012e578063095ea7b31461019b57806318160ddd146101e857806323b872dd146102135780632f745c591461028057806342842e0e146102e15780634f6ccce71461034e5780636352211e1461038f57806370a08231146103fc578063a22cb46514610453578063b88d4fde146104a2578063e985e9c514610555575b600080fd5b3480156100d657600080fd5b5061011460048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506105d0565b604051808215151515815260200191505060405180910390f35b34801561013a57600080fd5b5061015960048036038101908080359060200190929190505050610637565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101a757600080fd5b506101e6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610688565b005b3480156101f457600080fd5b506101fd6107cd565b6040518082815260200191505060405180910390f35b34801561021f57600080fd5b5061027e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107da565b005b34801561028c57600080fd5b506102cb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a9565b6040518082815260200191505060405180910390f35b3480156102ed57600080fd5b5061034c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610920565b005b34801561035a57600080fd5b5061037960048036038101908080359060200190929190505050610941565b6040518082815260200191505060405180910390f35b34801561039b57600080fd5b506103ba60048036038101908080359060200190929190505050610979565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561040857600080fd5b5061043d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f7565b6040518082815260200191505060405180910390f35b34801561045f57600080fd5b506104a0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610a7b565b005b3480156104ae57600080fd5b50610553600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610bb7565b005b34801561056157600080fd5b506105b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bdf565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061064282610c73565b151561064d57600080fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061069382610979565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106d057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610710575061070f8133610bdf565b5b151561071b57600080fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b6107e43382610ce5565b15156107ef57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561082b57600080fd5b6108358382610d7a565b61083f8382610e7d565b6108498282611039565b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006108b4836109f7565b821015156108c157600080fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561090d57fe5b9060005260206000200154905092915050565b61093c8383836020604051908101604052806000815250610bb7565b505050565b600061094b6107cd565b8210151561095857600080fd5b60078281548110151561096757fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156109ee57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610a3457600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610ab657600080fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b610bc28484846107da565b610bce84848484611110565b1515610bd957600080fd5b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600080610cf183610979565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d6057508373ffffffffffffffffffffffffffffffffffffffff16610d4884610637565b73ffffffffffffffffffffffffffffffffffffffff16145b80610d715750610d708185610bdf565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610d9a82610979565b73ffffffffffffffffffffffffffffffffffffffff16141515610dbc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610e795760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050565b6000806000610e8c8585611332565b60066000858152602001908152602001600020549250610ef86001600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061146190919063ffffffff16565b9150600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610f4657fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481101515610fa057fe5b9060005260206000200181905550600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036110009190611610565b50600060066000868152602001908152602001600020819055508260066000838152602001908152602001600020819055505050505050565b60006110458383611482565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050906001820390600052602060002001600090919290919091505550806006600084815260200190815260200160002081905550505050565b6000806111328573ffffffffffffffffffffffffffffffffffffffff166115dc565b15156111415760019150611329565b8473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561123657808201518184015260208101905061121b565b50505050905090810190601f1680156112635780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561128557600080fd5b505af1158015611299573d6000803e3d6000fd5b505050506040513d60208110156112af57600080fd5b8101908080519060200190929190505050905063150b7a027c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff1661135282610979565b73ffffffffffffffffffffffffffffffffffffffff1614151561137457600080fd5b6113c76001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461146190919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008083831115151561147357600080fd5b82840390508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156114f057600080fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506115956001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ef90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561160657600080fd5b8091505092915050565b81548183558181111561163757818360005260206000209182019101611636919061163c565b5b505050565b61165e91905b8082111561165a576000816000905550600101611642565b5090565b905600a165627a7a72305820ae95d6b1df565204c5023ec8fa7f1386bf7d4606dff9464c12093c887e6c31910029",
  "sourceMap": "126:5109:21:-;;;928:153;8:9:-1;5:2;;;30:1;27;20:12;5:2;928:153:21;612:39:12;236:10;631:19;;612:18;;;:39;;;:::i;:::-;1833::20;1137:10;1852:19;;1833:18;;;:39;;;:::i;:::-;1027:49:21;677:10;1046:29;;1027:18;;;:49;;;:::i;:::-;126:5109;;950:154:12;1042:10;1027:25;;:11;:25;;;;;1019:34;;;;;;;;1095:4;1059:20;:33;1080:11;1059:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;950:154;:::o;126:5109:21:-;;;;;;;",
  "deployedSourceMap": "126:5109:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;739:141:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;739:141:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3527::20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3527:141:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2986:270;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2986:270:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1780:88:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1780:88:21;;;;;;;;;;;;;;;;;;;;;;;5032:326:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5032:326:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1440:198:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1440:198:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5971:193:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5971:193:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2191:138:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2191:138:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2420:163:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2420:163:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2068:140;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2068:140:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3946:199;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3946:199:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6843:268;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6843:268:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4452:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4452:165:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;739:141:12;821:4;842:20;:33;863:11;842:33;;;;;;;;;;;;;;;;;;;;;;;;;;;835:40;;739:141;;;:::o;3527::20:-;3586:7;3609:16;3617:7;3609;:16::i;:::-;3601:25;;;;;;;;3639:15;:24;3655:7;3639:24;;;;;;;;;;;;;;;;;;;;;3632:31;;3527:141;;;:::o;2986:270::-;3045:13;3061:16;3069:7;3061;:16::i;:::-;3045:32;;3097:5;3091:11;;:2;:11;;;;3083:20;;;;;;;;3131:5;3117:19;;:10;:19;;;:58;;;;3140:35;3157:5;3164:10;3140:16;:35::i;:::-;3117:58;3109:67;;;;;;;;3210:2;3183:15;:24;3199:7;3183:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;3243:7;3239:2;3223:28;;3232:5;3223:28;;;;;;;;;;;;2986:270;;;:::o;1780:88:21:-;1824:7;1846:10;:17;;;;1839:24;;1780:88;:::o;5032:326:20:-;5140:39;5159:10;5171:7;5140:18;:39::i;:::-;5132:48;;;;;;;;5208:1;5194:16;;:2;:16;;;;5186:25;;;;;;;;5218:29;5233:4;5239:7;5218:14;:29::i;:::-;5253:31;5270:4;5276:7;5253:16;:31::i;:::-;5290:24;5302:2;5306:7;5290:11;:24::i;:::-;5345:7;5341:2;5326:27;;5335:4;5326:27;;;;;;;;;;;;5032:326;;;:::o;1440:198:21:-;1544:7;1577:16;1587:5;1577:9;:16::i;:::-;1569:5;:24;1561:33;;;;;;;;1607:12;:19;1620:5;1607:19;;;;;;;;;;;;;;;1627:5;1607:26;;;;;;;;;;;;;;;;;;1600:33;;1440:198;;;;:::o;5971:193:20:-;6120:39;6137:4;6143:2;6147:7;6120:39;;;;;;;;;;;;;:16;:39::i;:::-;5971:193;;;:::o;2191:138:21:-;2249:7;2280:13;:11;:13::i;:::-;2272:5;:21;2264:30;;;;;;;;2307:10;2318:5;2307:17;;;;;;;;;;;;;;;;;;2300:24;;2191:138;;;:::o;2420:163:20:-;2475:7;2490:13;2506:11;:20;2518:7;2506:20;;;;;;;;;;;;;;;;;;;;;2490:36;;2557:1;2540:19;;:5;:19;;;;2532:28;;;;;;;;2573:5;2566:12;;2420:163;;;;:::o;2068:140::-;2123:7;2163:1;2146:19;;:5;:19;;;;2138:28;;;;;;;;2179:17;:24;2197:5;2179:24;;;;;;;;;;;;;;;;2172:31;;2068:140;;;:::o;3946:199::-;4027:10;4021:16;;:2;:16;;;;4013:25;;;;;;;;4081:8;4044:18;:30;4063:10;4044:30;;;;;;;;;;;;;;;:34;4075:2;4044:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;4127:2;4100:40;;4115:10;4100:40;;;4131:8;4100:40;;;;;;;;;;;;;;;;;;;;;;3946:199;;:::o;6843:268::-;6964:31;6977:4;6983:2;6987:7;6964:12;:31::i;:::-;7054:51;7080:4;7086:2;7090:7;7099:5;7054:25;:51::i;:::-;7046:60;;;;;;;;6843:268;;;;:::o;4452:165::-;4556:4;4577:18;:25;4596:5;4577:25;;;;;;;;;;;;;;;:35;4603:8;4577:35;;;;;;;;;;;;;;;;;;;;;;;;;4570:42;;4452:165;;;;:::o;7288:142::-;7345:4;7357:13;7373:11;:20;7385:7;7373:20;;;;;;;;;;;;;;;;;;;;;7357:36;;7423:1;7406:19;;:5;:19;;;;7399:26;;7288:142;;;;:::o;7775:432::-;7884:4;7898:13;7914:16;7922:7;7914;:16::i;:::-;7898:32;;8108:5;8097:16;;:7;:16;;;:57;;;;8147:7;8123:31;;:20;8135:7;8123:11;:20::i;:::-;:31;;;8097:57;:99;;;;8164:32;8181:5;8188:7;8164:16;:32::i;:::-;8097:99;8082:120;;7775:432;;;;;:::o;9244:211::-;9343:5;9323:25;;:16;9331:7;9323;:16::i;:::-;:25;;;9315:34;;;;;;;;9395:1;9359:38;;:15;:24;9375:7;9359:24;;;;;;;;;;;;;;;;;;;;;:38;;;;9355:96;;;9442:1;9407:15;:24;9423:7;9407:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;9355:96;9244:211;;:::o;3090:1020:21:-;3343:18;3396:22;3459:17;3162:37;3185:4;3191:7;3162:22;:37::i;:::-;3364:17;:26;3382:7;3364:26;;;;;;;;;;;;3343:47;;3421:32;3451:1;3421:12;:18;3434:4;3421:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;3396:57;;3479:12;:18;3492:4;3479:18;;;;;;;;;;;;;;;3498:14;3479:34;;;;;;;;;;;;;;;;;;3459:54;;3553:9;3520:12;:18;3533:4;3520:18;;;;;;;;;;;;;;;3539:10;3520:30;;;;;;;;;;;;;;;;;:42;;;;3640:12;:18;3653:4;3640:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;4057:1;4028:17;:26;4046:7;4028:26;;;;;;;;;;;:30;;;;4095:10;4064:17;:28;4082:9;4064:28;;;;;;;;;;;:41;;;;3090:1020;;;;;:::o;2590:223::-;2691:14;2655:30;2673:2;2677:7;2655:17;:30::i;:::-;2708:12;:16;2721:2;2708:16;;;;;;;;;;;;;;;:23;;;;2691:40;;2737:12;:16;2750:2;2737:16;;;;;;;;;;;;;;;2759:7;2737:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2737:30:21;;;;;;;;;;;;;;;;;;;;;;2802:6;2773:17;:26;2791:7;2773:26;;;;;;;;;;;:35;;;;2590:223;;;:::o;10909:343:20:-;11046:4;11113:13;11065:15;:2;:13;;;:15::i;:::-;11064:16;11060:48;;;11097:4;11090:11;;;;11060:48;11145:2;11129:36;;;11173:10;11185:4;11191:7;11200:5;11129:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;11129:77:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11129:77:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11129:77:20;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11129:77:20;;;;;;;;;;;;;;;;11113:93;;651:10;11230:16;;11220:26;;;:6;:26;;;;11212:35;;10909:343;;;;;;;;:::o;10195:211::-;10295:4;10275:24;;:16;10283:7;10275;:16::i;:::-;:24;;;10267:33;;;;;;;;10332:30;10360:1;10332:17;:23;10350:4;10332:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;10306:17;:23;10324:4;10306:23;;;;;;;;;;;;;;;:56;;;;10399:1;10368:11;:20;10380:7;10368:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;10195:211;;:::o;1079:131:15:-;1137:7;1173:9;1165:1;1160;:6;;1152:15;;;;;;;;1189:1;1185;:5;1173:17;;1204:1;1197:8;;1079:131;;;;;:::o;9716:202:20:-;9821:1;9789:34;;:11;:20;9801:7;9789:20;;;;;;;;;;;;;;;;;;;;;:34;;;9781:43;;;;;;;;9853:2;9830:11;:20;9842:7;9830:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;9885:28;9911:1;9885:17;:21;9903:2;9885:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9861:17;:21;9879:2;9861:21;;;;;;;;;;;;;;;:52;;;;9716:202;;:::o;450:582:28:-;510:4;522:12;997:7;985:20;977:28;;1026:1;1019:4;:8;1012:15;;450:582;;;;:::o;1273:131:15:-;1331:7;1346:9;1362:1;1358;:5;1346:17;;1382:1;1377;:6;;1369:15;;;;;;;;1398:1;1391:8;;1273:131;;;;;:::o;126:5109:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721Enumerable.sol\";\nimport \"./ERC721.sol\";\nimport \"../../introspection/ERC165.sol\";\n\n\ncontract ERC721Enumerable is ERC165, ERC721, IERC721Enumerable {\n  // Mapping from owner to list of owned token IDs\n  mapping(address => uint256[]) private _ownedTokens;\n\n  // Mapping from token ID to index of the owner tokens list\n  mapping(uint256 => uint256) private _ownedTokensIndex;\n\n  // Array with all token ids, used for enumeration\n  uint256[] private _allTokens;\n\n  // Mapping from token id to position in the allTokens array\n  mapping(uint256 => uint256) private _allTokensIndex;\n\n  bytes4 private constant _InterfaceId_ERC721Enumerable = 0x780e9d63;\n  /**\n   * 0x780e9d63 ===\n   *   bytes4(keccak256('totalSupply()')) ^\n   *   bytes4(keccak256('tokenOfOwnerByIndex(address,uint256)')) ^\n   *   bytes4(keccak256('tokenByIndex(uint256)'))\n   */\n\n  /**\n   * @dev Constructor function\n   */\n  constructor() public {\n    // register the supported interface to conform to ERC721 via ERC165\n    _registerInterface(_InterfaceId_ERC721Enumerable);\n  }\n\n  /**\n   * @dev Gets the token ID at a given index of the tokens list of the requested owner\n   * @param owner address owning the tokens list to be accessed\n   * @param index uint256 representing the index to be accessed of the requested tokens list\n   * @return uint256 token ID at the given index of the tokens list owned by the requested address\n   */\n  function tokenOfOwnerByIndex(\n    address owner,\n    uint256 index\n  )\n    public\n    view\n    returns (uint256)\n  {\n    require(index < balanceOf(owner));\n    return _ownedTokens[owner][index];\n  }\n\n  /**\n   * @dev Gets the total amount of tokens stored by the contract\n   * @return uint256 representing the total amount of tokens\n   */\n  function totalSupply() public view returns (uint256) {\n    return _allTokens.length;\n  }\n\n  /**\n   * @dev Gets the token ID at a given index of all the tokens in this contract\n   * Reverts if the index is greater or equal to the total number of tokens\n   * @param index uint256 representing the index to be accessed of the tokens list\n   * @return uint256 token ID at the given index of the tokens list\n   */\n  function tokenByIndex(uint256 index) public view returns (uint256) {\n    require(index < totalSupply());\n    return _allTokens[index];\n  }\n\n  /**\n   * @dev Internal function to add a token ID to the list of a given address\n   * @param to address representing the new owner of the given token ID\n   * @param tokenId uint256 ID of the token to be added to the tokens list of the given address\n   */\n  function _addTokenTo(address to, uint256 tokenId) internal {\n    super._addTokenTo(to, tokenId);\n    uint256 length = _ownedTokens[to].length;\n    _ownedTokens[to].push(tokenId);\n    _ownedTokensIndex[tokenId] = length;\n  }\n\n  /**\n   * @dev Internal function to remove a token ID from the list of a given address\n   * @param from address representing the previous owner of the given token ID\n   * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address\n   */\n  function _removeTokenFrom(address from, uint256 tokenId) internal {\n    super._removeTokenFrom(from, tokenId);\n\n    // To prevent a gap in the array, we store the last token in the index of the token to delete, and\n    // then delete the last slot.\n    uint256 tokenIndex = _ownedTokensIndex[tokenId];\n    uint256 lastTokenIndex = _ownedTokens[from].length.sub(1);\n    uint256 lastToken = _ownedTokens[from][lastTokenIndex];\n\n    _ownedTokens[from][tokenIndex] = lastToken;\n    // This also deletes the contents at the last position of the array\n    _ownedTokens[from].length--;\n\n    // Note that this will handle single-element arrays. In that case, both tokenIndex and lastTokenIndex are going to\n    // be zero. Then we can make sure that we will remove tokenId from the ownedTokens list since we are first swapping\n    // the lastToken to the first position, and then dropping the element placed in the last position of the list\n\n    _ownedTokensIndex[tokenId] = 0;\n    _ownedTokensIndex[lastToken] = tokenIndex;\n  }\n\n  /**\n   * @dev Internal function to mint a new token\n   * Reverts if the given token ID already exists\n   * @param to address the beneficiary that will own the minted token\n   * @param tokenId uint256 ID of the token to be minted by the msg.sender\n   */\n  function _mint(address to, uint256 tokenId) internal {\n    super._mint(to, tokenId);\n\n    _allTokensIndex[tokenId] = _allTokens.length;\n    _allTokens.push(tokenId);\n  }\n\n  /**\n   * @dev Internal function to burn a specific token\n   * Reverts if the token does not exist\n   * @param owner owner of the token to burn\n   * @param tokenId uint256 ID of the token being burned by the msg.sender\n   */\n  function _burn(address owner, uint256 tokenId) internal {\n    super._burn(owner, tokenId);\n\n    // Reorg all tokens array\n    uint256 tokenIndex = _allTokensIndex[tokenId];\n    uint256 lastTokenIndex = _allTokens.length.sub(1);\n    uint256 lastToken = _allTokens[lastTokenIndex];\n\n    _allTokens[tokenIndex] = lastToken;\n    _allTokens[lastTokenIndex] = 0;\n\n    _allTokens.length--;\n    _allTokensIndex[tokenId] = 0;\n    _allTokensIndex[lastToken] = tokenIndex;\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Enumerable.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Enumerable.sol",
    "exportedSymbols": {
      "ERC721Enumerable": [
        3660
      ]
    },
    "id": 3661,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3379,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Enumerable.sol",
        "file": "./IERC721Enumerable.sol",
        "id": 3380,
        "nodeType": "ImportDirective",
        "scope": 3661,
        "sourceUnit": 3942,
        "src": "26:33:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 3381,
        "nodeType": "ImportDirective",
        "scope": 3661,
        "sourceUnit": 3378,
        "src": "60:22:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol",
        "file": "../../introspection/ERC165.sol",
        "id": 3382,
        "nodeType": "ImportDirective",
        "scope": 3661,
        "sourceUnit": 1915,
        "src": "83:40:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3383,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1914,
              "src": "155:6:21",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$1914",
                "typeString": "contract ERC165"
              }
            },
            "id": 3384,
            "nodeType": "InheritanceSpecifier",
            "src": "155:6:21"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3385,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3377,
              "src": "163:6:21",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$3377",
                "typeString": "contract ERC721"
              }
            },
            "id": 3386,
            "nodeType": "InheritanceSpecifier",
            "src": "163:6:21"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3387,
              "name": "IERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3941,
              "src": "171:17:21",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Enumerable_$3941",
                "typeString": "contract IERC721Enumerable"
              }
            },
            "id": 3388,
            "nodeType": "InheritanceSpecifier",
            "src": "171:17:21"
          }
        ],
        "contractDependencies": [
          1914,
          1924,
          3377,
          3914,
          3941
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 3660,
        "linearizedBaseContracts": [
          3660,
          3941,
          3377,
          3914,
          1914,
          1924
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3393,
            "name": "_ownedTokens",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "244:50:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
              "typeString": "mapping(address => uint256[])"
            },
            "typeName": {
              "id": 3392,
              "keyType": {
                "id": 3389,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "252:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "244:29:21",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(address => uint256[])"
              },
              "valueType": {
                "baseType": {
                  "id": 3390,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "263:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 3391,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "263:9:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3397,
            "name": "_ownedTokensIndex",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "360:53:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 3396,
              "keyType": {
                "id": 3394,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "368:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "360:27:21",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 3395,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "379:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3400,
            "name": "_allTokens",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "470:28:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 3398,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "470:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 3399,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "470:9:21",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3404,
            "name": "_allTokensIndex",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "565:51:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 3403,
              "keyType": {
                "id": 3401,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "573:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "565:27:21",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 3402,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "584:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 3407,
            "name": "_InterfaceId_ERC721Enumerable",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "621:66:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 3405,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "621:6:21",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783738306539643633",
              "id": 3406,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "677:10:21",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2014223715_by_1",
                "typeString": "int_const 2014223715"
              },
              "value": "0x780e9d63"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 3414,
              "nodeType": "Block",
              "src": "949:132:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3411,
                        "name": "_InterfaceId_ERC721Enumerable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3407,
                        "src": "1046:29:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 3410,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1913,
                      "src": "1027:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 3412,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1027:49:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3413,
                  "nodeType": "ExpressionStatement",
                  "src": "1027:49:21"
                }
              ]
            },
            "documentation": "@dev Constructor function",
            "id": 3415,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "939:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "949:0:21"
            },
            "scope": 3660,
            "src": "928:153:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3438,
              "nodeType": "Block",
              "src": "1555:83:21",
              "statements": [
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
                        "id": 3429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3425,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3419,
                          "src": "1569:5:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3427,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3417,
                              "src": "1587:5:21",
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
                            "id": 3426,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              2901
                            ],
                            "referencedDeclaration": 2901,
                            "src": "1577:9:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 3428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1577:16:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1569:24:21",
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
                      "id": 3424,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1561:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1561:33:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3431,
                  "nodeType": "ExpressionStatement",
                  "src": "1561:33:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3432,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3393,
                        "src": "1607:12:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 3434,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3433,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3417,
                        "src": "1620:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1607:19:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3436,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3435,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3419,
                      "src": "1627:5:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1607:26:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3423,
                  "id": 3437,
                  "nodeType": "Return",
                  "src": "1600:33:21"
                }
              ]
            },
            "documentation": "@dev Gets the token ID at a given index of the tokens list of the requested owner\n@param owner address owning the tokens list to be accessed\n@param index uint256 representing the index to be accessed of the requested tokens list\n@return uint256 token ID at the given index of the tokens list owned by the requested address",
            "id": 3439,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3417,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3439,
                  "src": "1474:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3416,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1474:7:21",
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
                  "id": 3419,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 3439,
                  "src": "1493:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1493:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1468:42:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3422,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3439,
                  "src": "1544:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3421,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1544:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1543:9:21"
            },
            "scope": 3660,
            "src": "1440:198:21",
            "stateMutability": "view",
            "superFunction": 3933,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3447,
              "nodeType": "Block",
              "src": "1833:35:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 3444,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3400,
                      "src": "1846:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3445,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1846:17:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3443,
                  "id": 3446,
                  "nodeType": "Return",
                  "src": "1839:24:21"
                }
              ]
            },
            "documentation": "@dev Gets the total amount of tokens stored by the contract\n@return uint256 representing the total amount of tokens",
            "id": 3448,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3440,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1800:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3442,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3448,
                  "src": "1824:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1824:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1823:9:21"
            },
            "scope": 3660,
            "src": "1780:88:21",
            "stateMutability": "view",
            "superFunction": 3924,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3466,
              "nodeType": "Block",
              "src": "2258:71:21",
              "statements": [
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
                        "id": 3459,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3456,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3450,
                          "src": "2272:5:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 3457,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3448
                            ],
                            "referencedDeclaration": 3448,
                            "src": "2280:11:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 3458,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2280:13:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2272:21:21",
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
                      "id": 3455,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "2264:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2264:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3461,
                  "nodeType": "ExpressionStatement",
                  "src": "2264:30:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3462,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3400,
                      "src": "2307:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3464,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3463,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3450,
                      "src": "2318:5:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2307:17:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3454,
                  "id": 3465,
                  "nodeType": "Return",
                  "src": "2300:24:21"
                }
              ]
            },
            "documentation": "@dev Gets the token ID at a given index of all the tokens in this contract\nReverts if the index is greater or equal to the total number of tokens\n@param index uint256 representing the index to be accessed of the tokens list\n@return uint256 token ID at the given index of the tokens list",
            "id": 3467,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3450,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 3467,
                  "src": "2213:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3449,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2213:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2212:15:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3453,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3467,
                  "src": "2249:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3452,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2249:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2248:9:21"
            },
            "scope": 3660,
            "src": "2191:138:21",
            "stateMutability": "view",
            "superFunction": 3940,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3501,
              "nodeType": "Block",
              "src": "2649:164:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3477,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3469,
                        "src": "2673:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3478,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3471,
                        "src": "2677:7:21",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 3474,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4058,
                        "src": "2655:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$3660",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 3476,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_addTokenTo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3301,
                      "src": "2655:17:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2655:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3480,
                  "nodeType": "ExpressionStatement",
                  "src": "2655:30:21"
                },
                {
                  "assignments": [
                    3482
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3482,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 3502,
                      "src": "2691:14:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3481,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2691:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3487,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3483,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3393,
                        "src": "2708:12:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 3485,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3484,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3469,
                        "src": "2721:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2708:16:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3486,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2708:23:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2691:40:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3492,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3471,
                        "src": "2759:7:21",
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
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3488,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3393,
                          "src": "2737:12:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 3490,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 3489,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3469,
                          "src": "2750:2:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2737:16:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3491,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2737:21:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 3493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2737:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3494,
                  "nodeType": "ExpressionStatement",
                  "src": "2737:30:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3495,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3397,
                        "src": "2773:17:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3497,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3496,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3471,
                        "src": "2791:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2773:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3498,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3482,
                      "src": "2802:6:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2773:35:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3500,
                  "nodeType": "ExpressionStatement",
                  "src": "2773:35:21"
                }
              ]
            },
            "documentation": "@dev Internal function to add a token ID to the list of a given address\n@param to address representing the new owner of the given token ID\n@param tokenId uint256 ID of the token to be added to the tokens list of the given address",
            "id": 3502,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_addTokenTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3469,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3502,
                  "src": "2611:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3468,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2611:7:21",
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
                  "id": 3471,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3502,
                  "src": "2623:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3470,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2623:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2610:29:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3473,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2649:0:21"
            },
            "scope": 3660,
            "src": "2590:223:21",
            "stateMutability": "nonpayable",
            "superFunction": 3301,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3566,
              "nodeType": "Block",
              "src": "3156:954:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3512,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3504,
                        "src": "3185:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3513,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3506,
                        "src": "3191:7:21",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 3509,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4058,
                        "src": "3162:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$3660",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 3511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_removeTokenFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3336,
                      "src": "3162:22:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3514,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3162:37:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3515,
                  "nodeType": "ExpressionStatement",
                  "src": "3162:37:21"
                },
                {
                  "assignments": [
                    3517
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3517,
                      "name": "tokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 3567,
                      "src": "3343:18:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3516,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3343:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3521,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3518,
                      "name": "_ownedTokensIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3397,
                      "src": "3364:17:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 3520,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3519,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3506,
                      "src": "3382:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3364:26:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3343:47:21"
                },
                {
                  "assignments": [
                    3523
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3523,
                      "name": "lastTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 3567,
                      "src": "3396:22:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3522,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3396:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3531,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 3529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3451:1:21",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3524,
                            "name": "_ownedTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3393,
                            "src": "3421:12:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                              "typeString": "mapping(address => uint256[] storage ref)"
                            }
                          },
                          "id": 3526,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3525,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3504,
                            "src": "3434:4:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3421:18:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 3527,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3421:25:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3528,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2075,
                      "src": "3421:29:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3530,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3421:32:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3396:57:21"
                },
                {
                  "assignments": [
                    3533
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3533,
                      "name": "lastToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 3567,
                      "src": "3459:17:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3532,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3459:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3539,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3534,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3393,
                        "src": "3479:12:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 3536,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3535,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3504,
                        "src": "3492:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3479:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3538,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3537,
                      "name": "lastTokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3523,
                      "src": "3498:14:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3479:34:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3459:54:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3546,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3540,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3393,
                          "src": "3520:12:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 3543,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 3541,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3504,
                          "src": "3533:4:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3520:18:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3544,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3542,
                        "name": "tokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3517,
                        "src": "3539:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3520:30:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3545,
                      "name": "lastToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3533,
                      "src": "3553:9:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3520:42:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3547,
                  "nodeType": "ExpressionStatement",
                  "src": "3520:42:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3640:27:21",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3548,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3393,
                          "src": "3640:12:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 3550,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 3549,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3504,
                          "src": "3653:4:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3640:18:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3551,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3640:25:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3553,
                  "nodeType": "ExpressionStatement",
                  "src": "3640:27:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3554,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3397,
                        "src": "4028:17:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3556,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3555,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3506,
                        "src": "4046:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4028:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 3557,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4057:1:21",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4028:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3559,
                  "nodeType": "ExpressionStatement",
                  "src": "4028:30:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3560,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3397,
                        "src": "4064:17:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3562,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3561,
                        "name": "lastToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3533,
                        "src": "4082:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4064:28:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3563,
                      "name": "tokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3517,
                      "src": "4095:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4064:41:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3565,
                  "nodeType": "ExpressionStatement",
                  "src": "4064:41:21"
                }
              ]
            },
            "documentation": "@dev Internal function to remove a token ID from the list of a given address\n@param from address representing the previous owner of the given token ID\n@param tokenId uint256 ID of the token to be removed from the tokens list of the given address",
            "id": 3567,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeTokenFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3504,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3567,
                  "src": "3116:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3503,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3116:7:21",
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
                  "id": 3506,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3567,
                  "src": "3130:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3115:31:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3508,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3156:0:21"
            },
            "scope": 3660,
            "src": "3090:1020:21",
            "stateMutability": "nonpayable",
            "superFunction": 3336,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3594,
              "nodeType": "Block",
              "src": "4422:116:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3577,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3569,
                        "src": "4440:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3578,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3571,
                        "src": "4444:7:21",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 3574,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4058,
                        "src": "4428:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$3660",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 3576,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3207,
                      "src": "4428:11:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4428:24:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3580,
                  "nodeType": "ExpressionStatement",
                  "src": "4428:24:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3581,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3404,
                        "src": "4459:15:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3583,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3582,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3571,
                        "src": "4475:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4459:24:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 3584,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "4486:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3585,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4486:17:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4459:44:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3587,
                  "nodeType": "ExpressionStatement",
                  "src": "4459:44:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3591,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3571,
                        "src": "4525:7:21",
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
                        "id": 3588,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "4509:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3590,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4509:15:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 3592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4509:24:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3593,
                  "nodeType": "ExpressionStatement",
                  "src": "4509:24:21"
                }
              ]
            },
            "documentation": "@dev Internal function to mint a new token\nReverts if the given token ID already exists\n@param to address the beneficiary that will own the minted token\n@param tokenId uint256 ID of the token to be minted by the msg.sender",
            "id": 3595,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3569,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3595,
                  "src": "4384:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3568,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4384:7:21",
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
                  "id": 3571,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3595,
                  "src": "4396:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3570,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4396:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4383:29:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3573,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4422:0:21"
            },
            "scope": 3660,
            "src": "4369:169:21",
            "stateMutability": "nonpayable",
            "superFunction": 3207,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3658,
              "nodeType": "Block",
              "src": "4824:409:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3605,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3597,
                        "src": "4842:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3606,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3599,
                        "src": "4849:7:21",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 3602,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4058,
                        "src": "4830:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$3660",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 3604,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3233,
                      "src": "4830:11:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4830:27:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3608,
                  "nodeType": "ExpressionStatement",
                  "src": "4830:27:21"
                },
                {
                  "assignments": [
                    3610
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3610,
                      "name": "tokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 3659,
                      "src": "4894:18:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3609,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4894:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3614,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3611,
                      "name": "_allTokensIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3404,
                      "src": "4915:15:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 3613,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3612,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3599,
                      "src": "4931:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4915:24:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4894:45:21"
                },
                {
                  "assignments": [
                    3616
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3616,
                      "name": "lastTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 3659,
                      "src": "4945:22:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3615,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4945:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3622,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 3620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4992:1:21",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3617,
                          "name": "_allTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3400,
                          "src": "4970:10:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 3618,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4970:17:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2075,
                      "src": "4970:21:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4970:24:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4945:49:21"
                },
                {
                  "assignments": [
                    3624
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3624,
                      "name": "lastToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 3659,
                      "src": "5000:17:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3623,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5000:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3628,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3625,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3400,
                      "src": "5020:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3627,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3626,
                      "name": "lastTokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3616,
                      "src": "5031:14:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5020:26:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5000:46:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3633,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3629,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "5053:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3631,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3630,
                        "name": "tokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3610,
                        "src": "5064:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5053:22:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3632,
                      "name": "lastToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3624,
                      "src": "5078:9:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5053:34:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3634,
                  "nodeType": "ExpressionStatement",
                  "src": "5053:34:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3639,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3635,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "5093:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3637,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3636,
                        "name": "lastTokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3616,
                        "src": "5104:14:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5093:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 3638,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5122:1:21",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5093:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3640,
                  "nodeType": "ExpressionStatement",
                  "src": "5093:30:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3644,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "5130:19:21",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 3641,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "5130:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3643,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5130:17:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3645,
                  "nodeType": "ExpressionStatement",
                  "src": "5130:19:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3646,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3404,
                        "src": "5155:15:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3648,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3647,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3599,
                        "src": "5171:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5155:24:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 3649,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5182:1:21",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5155:28:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3651,
                  "nodeType": "ExpressionStatement",
                  "src": "5155:28:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3652,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3404,
                        "src": "5189:15:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3654,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3653,
                        "name": "lastToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3624,
                        "src": "5205:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5189:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3655,
                      "name": "tokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3610,
                      "src": "5218:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5189:39:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3657,
                  "nodeType": "ExpressionStatement",
                  "src": "5189:39:21"
                }
              ]
            },
            "documentation": "@dev Internal function to burn a specific token\nReverts if the token does not exist\n@param owner owner of the token to burn\n@param tokenId uint256 ID of the token being burned by the msg.sender",
            "id": 3659,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3600,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3597,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3659,
                  "src": "4783:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3596,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4783:7:21",
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
                  "id": 3599,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3659,
                  "src": "4798:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3598,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4798:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4782:32:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3601,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4824:0:21"
            },
            "scope": 3660,
            "src": "4768:465:21",
            "stateMutability": "nonpayable",
            "superFunction": 3233,
            "visibility": "internal"
          }
        ],
        "scope": 3661,
        "src": "126:5109:21"
      }
    ],
    "src": "0:5236:21"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Enumerable.sol",
    "exportedSymbols": {
      "ERC721Enumerable": [
        3660
      ]
    },
    "id": 3661,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3379,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Enumerable.sol",
        "file": "./IERC721Enumerable.sol",
        "id": 3380,
        "nodeType": "ImportDirective",
        "scope": 3661,
        "sourceUnit": 3942,
        "src": "26:33:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 3381,
        "nodeType": "ImportDirective",
        "scope": 3661,
        "sourceUnit": 3378,
        "src": "60:22:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol",
        "file": "../../introspection/ERC165.sol",
        "id": 3382,
        "nodeType": "ImportDirective",
        "scope": 3661,
        "sourceUnit": 1915,
        "src": "83:40:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3383,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1914,
              "src": "155:6:21",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$1914",
                "typeString": "contract ERC165"
              }
            },
            "id": 3384,
            "nodeType": "InheritanceSpecifier",
            "src": "155:6:21"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3385,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3377,
              "src": "163:6:21",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$3377",
                "typeString": "contract ERC721"
              }
            },
            "id": 3386,
            "nodeType": "InheritanceSpecifier",
            "src": "163:6:21"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3387,
              "name": "IERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3941,
              "src": "171:17:21",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Enumerable_$3941",
                "typeString": "contract IERC721Enumerable"
              }
            },
            "id": 3388,
            "nodeType": "InheritanceSpecifier",
            "src": "171:17:21"
          }
        ],
        "contractDependencies": [
          1914,
          1924,
          3377,
          3914,
          3941
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 3660,
        "linearizedBaseContracts": [
          3660,
          3941,
          3377,
          3914,
          1914,
          1924
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3393,
            "name": "_ownedTokens",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "244:50:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
              "typeString": "mapping(address => uint256[])"
            },
            "typeName": {
              "id": 3392,
              "keyType": {
                "id": 3389,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "252:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "244:29:21",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(address => uint256[])"
              },
              "valueType": {
                "baseType": {
                  "id": 3390,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "263:7:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 3391,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "263:9:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3397,
            "name": "_ownedTokensIndex",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "360:53:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 3396,
              "keyType": {
                "id": 3394,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "368:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "360:27:21",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 3395,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "379:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3400,
            "name": "_allTokens",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "470:28:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 3398,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "470:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 3399,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "470:9:21",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3404,
            "name": "_allTokensIndex",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "565:51:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 3403,
              "keyType": {
                "id": 3401,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "573:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "565:27:21",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 3402,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "584:7:21",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 3407,
            "name": "_InterfaceId_ERC721Enumerable",
            "nodeType": "VariableDeclaration",
            "scope": 3660,
            "src": "621:66:21",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 3405,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "621:6:21",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783738306539643633",
              "id": 3406,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "677:10:21",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2014223715_by_1",
                "typeString": "int_const 2014223715"
              },
              "value": "0x780e9d63"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 3414,
              "nodeType": "Block",
              "src": "949:132:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3411,
                        "name": "_InterfaceId_ERC721Enumerable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3407,
                        "src": "1046:29:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 3410,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1913,
                      "src": "1027:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 3412,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1027:49:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3413,
                  "nodeType": "ExpressionStatement",
                  "src": "1027:49:21"
                }
              ]
            },
            "documentation": "@dev Constructor function",
            "id": 3415,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "939:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "949:0:21"
            },
            "scope": 3660,
            "src": "928:153:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3438,
              "nodeType": "Block",
              "src": "1555:83:21",
              "statements": [
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
                        "id": 3429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3425,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3419,
                          "src": "1569:5:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3427,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3417,
                              "src": "1587:5:21",
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
                            "id": 3426,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              2901
                            ],
                            "referencedDeclaration": 2901,
                            "src": "1577:9:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 3428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1577:16:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1569:24:21",
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
                      "id": 3424,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1561:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1561:33:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3431,
                  "nodeType": "ExpressionStatement",
                  "src": "1561:33:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3432,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3393,
                        "src": "1607:12:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 3434,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3433,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3417,
                        "src": "1620:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1607:19:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3436,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3435,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3419,
                      "src": "1627:5:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1607:26:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3423,
                  "id": 3437,
                  "nodeType": "Return",
                  "src": "1600:33:21"
                }
              ]
            },
            "documentation": "@dev Gets the token ID at a given index of the tokens list of the requested owner\n@param owner address owning the tokens list to be accessed\n@param index uint256 representing the index to be accessed of the requested tokens list\n@return uint256 token ID at the given index of the tokens list owned by the requested address",
            "id": 3439,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3417,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3439,
                  "src": "1474:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3416,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1474:7:21",
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
                  "id": 3419,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 3439,
                  "src": "1493:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1493:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1468:42:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3422,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3439,
                  "src": "1544:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3421,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1544:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1543:9:21"
            },
            "scope": 3660,
            "src": "1440:198:21",
            "stateMutability": "view",
            "superFunction": 3933,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3447,
              "nodeType": "Block",
              "src": "1833:35:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 3444,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3400,
                      "src": "1846:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3445,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1846:17:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3443,
                  "id": 3446,
                  "nodeType": "Return",
                  "src": "1839:24:21"
                }
              ]
            },
            "documentation": "@dev Gets the total amount of tokens stored by the contract\n@return uint256 representing the total amount of tokens",
            "id": 3448,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3440,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1800:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3442,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3448,
                  "src": "1824:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1824:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1823:9:21"
            },
            "scope": 3660,
            "src": "1780:88:21",
            "stateMutability": "view",
            "superFunction": 3924,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3466,
              "nodeType": "Block",
              "src": "2258:71:21",
              "statements": [
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
                        "id": 3459,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3456,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3450,
                          "src": "2272:5:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 3457,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3448
                            ],
                            "referencedDeclaration": 3448,
                            "src": "2280:11:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 3458,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2280:13:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2272:21:21",
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
                      "id": 3455,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "2264:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2264:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3461,
                  "nodeType": "ExpressionStatement",
                  "src": "2264:30:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3462,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3400,
                      "src": "2307:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3464,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3463,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3450,
                      "src": "2318:5:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2307:17:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3454,
                  "id": 3465,
                  "nodeType": "Return",
                  "src": "2300:24:21"
                }
              ]
            },
            "documentation": "@dev Gets the token ID at a given index of all the tokens in this contract\nReverts if the index is greater or equal to the total number of tokens\n@param index uint256 representing the index to be accessed of the tokens list\n@return uint256 token ID at the given index of the tokens list",
            "id": 3467,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3450,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 3467,
                  "src": "2213:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3449,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2213:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2212:15:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3453,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3467,
                  "src": "2249:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3452,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2249:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2248:9:21"
            },
            "scope": 3660,
            "src": "2191:138:21",
            "stateMutability": "view",
            "superFunction": 3940,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3501,
              "nodeType": "Block",
              "src": "2649:164:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3477,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3469,
                        "src": "2673:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3478,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3471,
                        "src": "2677:7:21",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 3474,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4058,
                        "src": "2655:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$3660",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 3476,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_addTokenTo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3301,
                      "src": "2655:17:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2655:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3480,
                  "nodeType": "ExpressionStatement",
                  "src": "2655:30:21"
                },
                {
                  "assignments": [
                    3482
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3482,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 3502,
                      "src": "2691:14:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3481,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2691:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3487,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3483,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3393,
                        "src": "2708:12:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 3485,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3484,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3469,
                        "src": "2721:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2708:16:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3486,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2708:23:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2691:40:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3492,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3471,
                        "src": "2759:7:21",
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
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3488,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3393,
                          "src": "2737:12:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 3490,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 3489,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3469,
                          "src": "2750:2:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2737:16:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3491,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2737:21:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 3493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2737:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3494,
                  "nodeType": "ExpressionStatement",
                  "src": "2737:30:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3495,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3397,
                        "src": "2773:17:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3497,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3496,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3471,
                        "src": "2791:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2773:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3498,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3482,
                      "src": "2802:6:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2773:35:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3500,
                  "nodeType": "ExpressionStatement",
                  "src": "2773:35:21"
                }
              ]
            },
            "documentation": "@dev Internal function to add a token ID to the list of a given address\n@param to address representing the new owner of the given token ID\n@param tokenId uint256 ID of the token to be added to the tokens list of the given address",
            "id": 3502,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_addTokenTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3469,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3502,
                  "src": "2611:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3468,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2611:7:21",
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
                  "id": 3471,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3502,
                  "src": "2623:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3470,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2623:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2610:29:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3473,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2649:0:21"
            },
            "scope": 3660,
            "src": "2590:223:21",
            "stateMutability": "nonpayable",
            "superFunction": 3301,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3566,
              "nodeType": "Block",
              "src": "3156:954:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3512,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3504,
                        "src": "3185:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3513,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3506,
                        "src": "3191:7:21",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 3509,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4058,
                        "src": "3162:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$3660",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 3511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_removeTokenFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3336,
                      "src": "3162:22:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3514,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3162:37:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3515,
                  "nodeType": "ExpressionStatement",
                  "src": "3162:37:21"
                },
                {
                  "assignments": [
                    3517
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3517,
                      "name": "tokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 3567,
                      "src": "3343:18:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3516,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3343:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3521,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3518,
                      "name": "_ownedTokensIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3397,
                      "src": "3364:17:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 3520,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3519,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3506,
                      "src": "3382:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3364:26:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3343:47:21"
                },
                {
                  "assignments": [
                    3523
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3523,
                      "name": "lastTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 3567,
                      "src": "3396:22:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3522,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3396:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3531,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 3529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3451:1:21",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3524,
                            "name": "_ownedTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3393,
                            "src": "3421:12:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                              "typeString": "mapping(address => uint256[] storage ref)"
                            }
                          },
                          "id": 3526,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3525,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3504,
                            "src": "3434:4:21",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3421:18:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 3527,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3421:25:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3528,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2075,
                      "src": "3421:29:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3530,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3421:32:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3396:57:21"
                },
                {
                  "assignments": [
                    3533
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3533,
                      "name": "lastToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 3567,
                      "src": "3459:17:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3532,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3459:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3539,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3534,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3393,
                        "src": "3479:12:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 3536,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3535,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3504,
                        "src": "3492:4:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3479:18:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3538,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3537,
                      "name": "lastTokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3523,
                      "src": "3498:14:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3479:34:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3459:54:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3546,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3540,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3393,
                          "src": "3520:12:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 3543,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 3541,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3504,
                          "src": "3533:4:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3520:18:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3544,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3542,
                        "name": "tokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3517,
                        "src": "3539:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3520:30:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3545,
                      "name": "lastToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3533,
                      "src": "3553:9:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3520:42:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3547,
                  "nodeType": "ExpressionStatement",
                  "src": "3520:42:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "3640:27:21",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 3548,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3393,
                          "src": "3640:12:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 3550,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 3549,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3504,
                          "src": "3653:4:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3640:18:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3551,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3640:25:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3553,
                  "nodeType": "ExpressionStatement",
                  "src": "3640:27:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3554,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3397,
                        "src": "4028:17:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3556,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3555,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3506,
                        "src": "4046:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4028:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 3557,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4057:1:21",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4028:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3559,
                  "nodeType": "ExpressionStatement",
                  "src": "4028:30:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3560,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3397,
                        "src": "4064:17:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3562,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3561,
                        "name": "lastToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3533,
                        "src": "4082:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4064:28:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3563,
                      "name": "tokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3517,
                      "src": "4095:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4064:41:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3565,
                  "nodeType": "ExpressionStatement",
                  "src": "4064:41:21"
                }
              ]
            },
            "documentation": "@dev Internal function to remove a token ID from the list of a given address\n@param from address representing the previous owner of the given token ID\n@param tokenId uint256 ID of the token to be removed from the tokens list of the given address",
            "id": 3567,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeTokenFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3504,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3567,
                  "src": "3116:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3503,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3116:7:21",
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
                  "id": 3506,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3567,
                  "src": "3130:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3115:31:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3508,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3156:0:21"
            },
            "scope": 3660,
            "src": "3090:1020:21",
            "stateMutability": "nonpayable",
            "superFunction": 3336,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3594,
              "nodeType": "Block",
              "src": "4422:116:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3577,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3569,
                        "src": "4440:2:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3578,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3571,
                        "src": "4444:7:21",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 3574,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4058,
                        "src": "4428:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$3660",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 3576,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3207,
                      "src": "4428:11:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4428:24:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3580,
                  "nodeType": "ExpressionStatement",
                  "src": "4428:24:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3581,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3404,
                        "src": "4459:15:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3583,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3582,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3571,
                        "src": "4475:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4459:24:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 3584,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "4486:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3585,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4486:17:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4459:44:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3587,
                  "nodeType": "ExpressionStatement",
                  "src": "4459:44:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3591,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3571,
                        "src": "4525:7:21",
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
                        "id": 3588,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "4509:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3590,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4509:15:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 3592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4509:24:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3593,
                  "nodeType": "ExpressionStatement",
                  "src": "4509:24:21"
                }
              ]
            },
            "documentation": "@dev Internal function to mint a new token\nReverts if the given token ID already exists\n@param to address the beneficiary that will own the minted token\n@param tokenId uint256 ID of the token to be minted by the msg.sender",
            "id": 3595,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3569,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3595,
                  "src": "4384:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3568,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4384:7:21",
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
                  "id": 3571,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3595,
                  "src": "4396:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3570,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4396:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4383:29:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3573,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4422:0:21"
            },
            "scope": 3660,
            "src": "4369:169:21",
            "stateMutability": "nonpayable",
            "superFunction": 3207,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3658,
              "nodeType": "Block",
              "src": "4824:409:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3605,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3597,
                        "src": "4842:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3606,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3599,
                        "src": "4849:7:21",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 3602,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4058,
                        "src": "4830:5:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$3660",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 3604,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3233,
                      "src": "4830:11:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4830:27:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3608,
                  "nodeType": "ExpressionStatement",
                  "src": "4830:27:21"
                },
                {
                  "assignments": [
                    3610
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3610,
                      "name": "tokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 3659,
                      "src": "4894:18:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3609,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4894:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3614,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3611,
                      "name": "_allTokensIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3404,
                      "src": "4915:15:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 3613,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3612,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3599,
                      "src": "4931:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4915:24:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4894:45:21"
                },
                {
                  "assignments": [
                    3616
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3616,
                      "name": "lastTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 3659,
                      "src": "4945:22:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3615,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4945:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3622,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 3620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4992:1:21",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3617,
                          "name": "_allTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3400,
                          "src": "4970:10:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 3618,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4970:17:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2075,
                      "src": "4970:21:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4970:24:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4945:49:21"
                },
                {
                  "assignments": [
                    3624
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3624,
                      "name": "lastToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 3659,
                      "src": "5000:17:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3623,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5000:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3628,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3625,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3400,
                      "src": "5020:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 3627,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3626,
                      "name": "lastTokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3616,
                      "src": "5031:14:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5020:26:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5000:46:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3633,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3629,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "5053:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3631,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3630,
                        "name": "tokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3610,
                        "src": "5064:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5053:22:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3632,
                      "name": "lastToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3624,
                      "src": "5078:9:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5053:34:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3634,
                  "nodeType": "ExpressionStatement",
                  "src": "5053:34:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3639,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3635,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "5093:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3637,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3636,
                        "name": "lastTokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3616,
                        "src": "5104:14:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5093:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 3638,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5122:1:21",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5093:30:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3640,
                  "nodeType": "ExpressionStatement",
                  "src": "5093:30:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3644,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "5130:19:21",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 3641,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3400,
                        "src": "5130:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 3643,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5130:17:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3645,
                  "nodeType": "ExpressionStatement",
                  "src": "5130:19:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3646,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3404,
                        "src": "5155:15:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3648,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3647,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3599,
                        "src": "5171:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5155:24:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 3649,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5182:1:21",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5155:28:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3651,
                  "nodeType": "ExpressionStatement",
                  "src": "5155:28:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3652,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3404,
                        "src": "5189:15:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3654,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3653,
                        "name": "lastToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3624,
                        "src": "5205:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5189:26:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3655,
                      "name": "tokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3610,
                      "src": "5218:10:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5189:39:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3657,
                  "nodeType": "ExpressionStatement",
                  "src": "5189:39:21"
                }
              ]
            },
            "documentation": "@dev Internal function to burn a specific token\nReverts if the token does not exist\n@param owner owner of the token to burn\n@param tokenId uint256 ID of the token being burned by the msg.sender",
            "id": 3659,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3600,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3597,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3659,
                  "src": "4783:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3596,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4783:7:21",
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
                  "id": 3599,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3659,
                  "src": "4798:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3598,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4798:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4782:32:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3601,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4824:0:21"
            },
            "scope": 3660,
            "src": "4768:465:21",
            "stateMutability": "nonpayable",
            "superFunction": 3233,
            "visibility": "internal"
          }
        ],
        "scope": 3661,
        "src": "126:5109:21"
      }
    ],
    "src": "0:5236:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.565Z"
}