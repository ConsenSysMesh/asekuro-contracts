export const ERC721 = 
{
  "contractName": "ERC721",
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
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061004c6301ffc9a77c01000000000000000000000000000000000000000000000000000000000261008c640100000000026401000000009004565b6100876380ac58cd7c01000000000000000000000000000000000000000000000000000000000261008c640100000000026401000000009004565b610149565b63ffffffff7c010000000000000000000000000000000000000000000000000000000002817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515156100dd57600080fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6111ff806101586000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a7146100a9578063081812fc1461010d578063095ea7b31461017a57806323b872dd146101c757806342842e0e146102345780636352211e146102a157806370a082311461030e578063a22cb46514610365578063b88d4fde146103b4578063e985e9c514610467575b600080fd5b3480156100b557600080fd5b506100f360048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506104e2565b604051808215151515815260200191505060405180910390f35b34801561011957600080fd5b5061013860048036038101908080359060200190929190505050610549565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018657600080fd5b506101c5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061059a565b005b3480156101d357600080fd5b50610232600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106df565b005b34801561024057600080fd5b5061029f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ae565b005b3480156102ad57600080fd5b506102cc600480360381019080803590602001909291905050506107cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561031a57600080fd5b5061034f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061084d565b6040518082815260200191505060405180910390f35b34801561037157600080fd5b506103b2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506108d1565b005b3480156103c057600080fd5b50610465600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610a0d565b005b34801561047357600080fd5b506104c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a35565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061055482610ac9565b151561055f57600080fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105a5826107cf565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156105e257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061062257506106218133610a35565b5b151561062d57600080fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6106e93382610b3b565b15156106f457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561073057600080fd5b61073a8382610bd0565b6107448382610cd3565b61074e8282610e02565b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6107ca8383836020604051908101604052806000815250610a0d565b505050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084457600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561090c57600080fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b610a188484846106df565b610a2484848484610f5c565b1515610a2f57600080fd5b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600080610b47836107cf565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610bb657508373ffffffffffffffffffffffffffffffffffffffff16610b9e84610549565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bc75750610bc68185610a35565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bf0826107cf565b73ffffffffffffffffffffffffffffffffffffffff16141515610c1257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ccf5760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610cf3826107cf565b73ffffffffffffffffffffffffffffffffffffffff16141515610d1557600080fd5b610d686001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461117e90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610e7057600080fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f156001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119f90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610f7e8573ffffffffffffffffffffffffffffffffffffffff166111c0565b1515610f8d5760019150611175565b8473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611082578082015181840152602081019050611067565b50505050905090810190601f1680156110af5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156110d157600080fd5b505af11580156110e5573d6000803e3d6000fd5b505050506040513d60208110156110fb57600080fd5b8101908080519060200190929190505050905063150b7a027c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b60008083831115151561119057600080fd5b82840390508091505092915050565b60008082840190508381101515156111b657600080fd5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a72305820d54dcad7150fa493f38618536ce8db781225cdd696cfe3dd5e496d9c76a693d40029",
  "deployedBytecode": "0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a7146100a9578063081812fc1461010d578063095ea7b31461017a57806323b872dd146101c757806342842e0e146102345780636352211e146102a157806370a082311461030e578063a22cb46514610365578063b88d4fde146103b4578063e985e9c514610467575b600080fd5b3480156100b557600080fd5b506100f360048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506104e2565b604051808215151515815260200191505060405180910390f35b34801561011957600080fd5b5061013860048036038101908080359060200190929190505050610549565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561018657600080fd5b506101c5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061059a565b005b3480156101d357600080fd5b50610232600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106df565b005b34801561024057600080fd5b5061029f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ae565b005b3480156102ad57600080fd5b506102cc600480360381019080803590602001909291905050506107cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561031a57600080fd5b5061034f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061084d565b6040518082815260200191505060405180910390f35b34801561037157600080fd5b506103b2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506108d1565b005b3480156103c057600080fd5b50610465600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610a0d565b005b34801561047357600080fd5b506104c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a35565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b600061055482610ac9565b151561055f57600080fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105a5826107cf565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156105e257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061062257506106218133610a35565b5b151561062d57600080fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6106e93382610b3b565b15156106f457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561073057600080fd5b61073a8382610bd0565b6107448382610cd3565b61074e8282610e02565b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6107ca8383836020604051908101604052806000815250610a0d565b505050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084457600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561090c57600080fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b610a188484846106df565b610a2484848484610f5c565b1515610a2f57600080fd5b50505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600080610b47836107cf565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610bb657508373ffffffffffffffffffffffffffffffffffffffff16610b9e84610549565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bc75750610bc68185610a35565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bf0826107cf565b73ffffffffffffffffffffffffffffffffffffffff16141515610c1257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ccf5760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610cf3826107cf565b73ffffffffffffffffffffffffffffffffffffffff16141515610d1557600080fd5b610d686001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461117e90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610e7057600080fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f156001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119f90919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610f7e8573ffffffffffffffffffffffffffffffffffffffff166111c0565b1515610f8d5760019150611175565b8473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611082578082015181840152602081019050611067565b50505050905090810190601f1680156110af5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156110d157600080fd5b505af11580156110e5573d6000803e3d6000fd5b505050506040513d60208110156110fb57600080fd5b8101908080519060200190929190505050905063150b7a027c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b60008083831115151561119057600080fd5b82840390508091505092915050565b60008082840190508381101515156111b657600080fd5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a72305820d54dcad7150fa493f38618536ce8db781225cdd696cfe3dd5e496d9c76a693d40029",
  "sourceMap": "340:10914:20:-;;;1727:150;8:9:-1;5:2;;;30:1;27;20:12;5:2;1727:150:20;612:39:12;236:10;631:19;;612:18;;;:39;;;:::i;:::-;1833::20;1137:10;1852:19;;1833:18;;;:39;;;:::i;:::-;340:10914;;950:154:12;1042:10;1027:25;;:11;:25;;;;;1019:34;;;;;;;;1095:4;1059:20;:33;1080:11;1059:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;950:154;:::o;340:10914:20:-;;;;;;;",
  "deployedSourceMap": "340:10914:20:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;739:141:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;739:141:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3527::20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3527:141:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2986:270;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2986:270:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5032:326;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5032:326:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5971:193;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5971:193:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2420:163;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2420:163:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2068:140;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2068:140:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3946:199;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3946:199:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6843:268;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6843:268:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4452:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4452:165:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;739:141:12;821:4;842:20;:33;863:11;842:33;;;;;;;;;;;;;;;;;;;;;;;;;;;835:40;;739:141;;;:::o;3527::20:-;3586:7;3609:16;3617:7;3609;:16::i;:::-;3601:25;;;;;;;;3639:15;:24;3655:7;3639:24;;;;;;;;;;;;;;;;;;;;;3632:31;;3527:141;;;:::o;2986:270::-;3045:13;3061:16;3069:7;3061;:16::i;:::-;3045:32;;3097:5;3091:11;;:2;:11;;;;3083:20;;;;;;;;3131:5;3117:19;;:10;:19;;;:58;;;;3140:35;3157:5;3164:10;3140:16;:35::i;:::-;3117:58;3109:67;;;;;;;;3210:2;3183:15;:24;3199:7;3183:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;3243:7;3239:2;3223:28;;3232:5;3223:28;;;;;;;;;;;;2986:270;;;:::o;5032:326::-;5140:39;5159:10;5171:7;5140:18;:39::i;:::-;5132:48;;;;;;;;5208:1;5194:16;;:2;:16;;;;5186:25;;;;;;;;5218:29;5233:4;5239:7;5218:14;:29::i;:::-;5253:31;5270:4;5276:7;5253:16;:31::i;:::-;5290:24;5302:2;5306:7;5290:11;:24::i;:::-;5345:7;5341:2;5326:27;;5335:4;5326:27;;;;;;;;;;;;5032:326;;;:::o;5971:193::-;6120:39;6137:4;6143:2;6147:7;6120:39;;;;;;;;;;;;;:16;:39::i;:::-;5971:193;;;:::o;2420:163::-;2475:7;2490:13;2506:11;:20;2518:7;2506:20;;;;;;;;;;;;;;;;;;;;;2490:36;;2557:1;2540:19;;:5;:19;;;;2532:28;;;;;;;;2573:5;2566:12;;2420:163;;;;:::o;2068:140::-;2123:7;2163:1;2146:19;;:5;:19;;;;2138:28;;;;;;;;2179:17;:24;2197:5;2179:24;;;;;;;;;;;;;;;;2172:31;;2068:140;;;:::o;3946:199::-;4027:10;4021:16;;:2;:16;;;;4013:25;;;;;;;;4081:8;4044:18;:30;4063:10;4044:30;;;;;;;;;;;;;;;:34;4075:2;4044:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;4127:2;4100:40;;4115:10;4100:40;;;4131:8;4100:40;;;;;;;;;;;;;;;;;;;;;;3946:199;;:::o;6843:268::-;6964:31;6977:4;6983:2;6987:7;6964:12;:31::i;:::-;7054:51;7080:4;7086:2;7090:7;7099:5;7054:25;:51::i;:::-;7046:60;;;;;;;;6843:268;;;;:::o;4452:165::-;4556:4;4577:18;:25;4596:5;4577:25;;;;;;;;;;;;;;;:35;4603:8;4577:35;;;;;;;;;;;;;;;;;;;;;;;;;4570:42;;4452:165;;;;:::o;7288:142::-;7345:4;7357:13;7373:11;:20;7385:7;7373:20;;;;;;;;;;;;;;;;;;;;;7357:36;;7423:1;7406:19;;:5;:19;;;;7399:26;;7288:142;;;;:::o;7775:432::-;7884:4;7898:13;7914:16;7922:7;7914;:16::i;:::-;7898:32;;8108:5;8097:16;;:7;:16;;;:57;;;;8147:7;8123:31;;:20;8135:7;8123:11;:20::i;:::-;:31;;;8097:57;:99;;;;8164:32;8181:5;8188:7;8164:16;:32::i;:::-;8097:99;8082:120;;7775:432;;;;;:::o;9244:211::-;9343:5;9323:25;;:16;9331:7;9323;:16::i;:::-;:25;;;9315:34;;;;;;;;9395:1;9359:38;;:15;:24;9375:7;9359:24;;;;;;;;;;;;;;;;;;;;;:38;;;;9355:96;;;9442:1;9407:15;:24;9423:7;9407:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;9355:96;9244:211;;:::o;10195:::-;10295:4;10275:24;;:16;10283:7;10275;:16::i;:::-;:24;;;10267:33;;;;;;;;10332:30;10360:1;10332:17;:23;10350:4;10332:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;10306:17;:23;10324:4;10306:23;;;;;;;;;;;;;;;:56;;;;10399:1;10368:11;:20;10380:7;10368:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;10195:211;;:::o;9716:202::-;9821:1;9789:34;;:11;:20;9801:7;9789:20;;;;;;;;;;;;;;;;;;;;;:34;;;9781:43;;;;;;;;9853:2;9830:11;:20;9842:7;9830:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;9885:28;9911:1;9885:17;:21;9903:2;9885:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9861:17;:21;9879:2;9861:21;;;;;;;;;;;;;;;:52;;;;9716:202;;:::o;10909:343::-;11046:4;11113:13;11065:15;:2;:13;;;:15::i;:::-;11064:16;11060:48;;;11097:4;11090:11;;;;11060:48;11145:2;11129:36;;;11173:10;11185:4;11191:7;11200:5;11129:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;11129:77:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11129:77:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11129:77:20;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11129:77:20;;;;;;;;;;;;;;;;11113:93;;651:10;11230:16;;11220:26;;;:6;:26;;;;11212:35;;10909:343;;;;;;;;:::o;1079:131:15:-;1137:7;1173:9;1165:1;1160;:6;;1152:15;;;;;;;;1189:1;1185;:5;1173:17;;1204:1;1197:8;;1079:131;;;;;:::o;1273:::-;1331:7;1346:9;1362:1;1358;:5;1346:17;;1382:1;1377;:6;;1369:15;;;;;;;;1398:1;1391:8;;1273:131;;;;;:::o;450:582:28:-;510:4;522:12;997:7;985:20;977:28;;1026:1;1019:4;:8;1012:15;;450:582;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721.sol\";\nimport \"./IERC721Receiver.sol\";\nimport \"../../math/SafeMath.sol\";\nimport \"../../utils/Address.sol\";\nimport \"../../introspection/ERC165.sol\";\n\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic implementation\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721 is ERC165, IERC721 {\n\n  using SafeMath for uint256;\n  using Address for address;\n\n  // Equals to `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`\n  // which can be also obtained as `IERC721Receiver(0).onERC721Received.selector`\n  bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;\n\n  // Mapping from token ID to owner\n  mapping (uint256 => address) private _tokenOwner;\n\n  // Mapping from token ID to approved address\n  mapping (uint256 => address) private _tokenApprovals;\n\n  // Mapping from owner to number of owned token\n  mapping (address => uint256) private _ownedTokensCount;\n\n  // Mapping from owner to operator approvals\n  mapping (address => mapping (address => bool)) private _operatorApprovals;\n\n  bytes4 private constant _InterfaceId_ERC721 = 0x80ac58cd;\n  /*\n   * 0x80ac58cd ===\n   *   bytes4(keccak256('balanceOf(address)')) ^\n   *   bytes4(keccak256('ownerOf(uint256)')) ^\n   *   bytes4(keccak256('approve(address,uint256)')) ^\n   *   bytes4(keccak256('getApproved(uint256)')) ^\n   *   bytes4(keccak256('setApprovalForAll(address,bool)')) ^\n   *   bytes4(keccak256('isApprovedForAll(address,address)')) ^\n   *   bytes4(keccak256('transferFrom(address,address,uint256)')) ^\n   *   bytes4(keccak256('safeTransferFrom(address,address,uint256)')) ^\n   *   bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)'))\n   */\n\n  constructor()\n    public\n  {\n    // register the supported interfaces to conform to ERC721 via ERC165\n    _registerInterface(_InterfaceId_ERC721);\n  }\n\n  /**\n   * @dev Gets the balance of the specified address\n   * @param owner address to query the balance of\n   * @return uint256 representing the amount owned by the passed address\n   */\n  function balanceOf(address owner) public view returns (uint256) {\n    require(owner != address(0));\n    return _ownedTokensCount[owner];\n  }\n\n  /**\n   * @dev Gets the owner of the specified token ID\n   * @param tokenId uint256 ID of the token to query the owner of\n   * @return owner address currently marked as the owner of the given token ID\n   */\n  function ownerOf(uint256 tokenId) public view returns (address) {\n    address owner = _tokenOwner[tokenId];\n    require(owner != address(0));\n    return owner;\n  }\n\n  /**\n   * @dev Approves another address to transfer the given token ID\n   * The zero address indicates there is no approved address.\n   * There can only be one approved address per token at a given time.\n   * Can only be called by the token owner or an approved operator.\n   * @param to address to be approved for the given token ID\n   * @param tokenId uint256 ID of the token to be approved\n   */\n  function approve(address to, uint256 tokenId) public {\n    address owner = ownerOf(tokenId);\n    require(to != owner);\n    require(msg.sender == owner || isApprovedForAll(owner, msg.sender));\n\n    _tokenApprovals[tokenId] = to;\n    emit Approval(owner, to, tokenId);\n  }\n\n  /**\n   * @dev Gets the approved address for a token ID, or zero if no address set\n   * Reverts if the token ID does not exist.\n   * @param tokenId uint256 ID of the token to query the approval of\n   * @return address currently approved for the given token ID\n   */\n  function getApproved(uint256 tokenId) public view returns (address) {\n    require(_exists(tokenId));\n    return _tokenApprovals[tokenId];\n  }\n\n  /**\n   * @dev Sets or unsets the approval of a given operator\n   * An operator is allowed to transfer all tokens of the sender on their behalf\n   * @param to operator address to set the approval\n   * @param approved representing the status of the approval to be set\n   */\n  function setApprovalForAll(address to, bool approved) public {\n    require(to != msg.sender);\n    _operatorApprovals[msg.sender][to] = approved;\n    emit ApprovalForAll(msg.sender, to, approved);\n  }\n\n  /**\n   * @dev Tells whether an operator is approved by a given owner\n   * @param owner owner address which you want to query the approval of\n   * @param operator operator address which you want to query the approval of\n   * @return bool whether the given operator is approved by the given owner\n   */\n  function isApprovedForAll(\n    address owner,\n    address operator\n  )\n    public\n    view\n    returns (bool)\n  {\n    return _operatorApprovals[owner][operator];\n  }\n\n  /**\n   * @dev Transfers the ownership of a given token ID to another address\n   * Usage of this method is discouraged, use `safeTransferFrom` whenever possible\n   * Requires the msg sender to be the owner, approved, or operator\n   * @param from current owner of the token\n   * @param to address to receive the ownership of the given token ID\n   * @param tokenId uint256 ID of the token to be transferred\n  */\n  function transferFrom(\n    address from,\n    address to,\n    uint256 tokenId\n  )\n    public\n  {\n    require(_isApprovedOrOwner(msg.sender, tokenId));\n    require(to != address(0));\n\n    _clearApproval(from, tokenId);\n    _removeTokenFrom(from, tokenId);\n    _addTokenTo(to, tokenId);\n\n    emit Transfer(from, to, tokenId);\n  }\n\n  /**\n   * @dev Safely transfers the ownership of a given token ID to another address\n   * If the target address is a contract, it must implement `onERC721Received`,\n   * which is called upon a safe transfer, and return the magic value\n   * `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\n   * the transfer is reverted.\n   *\n   * Requires the msg sender to be the owner, approved, or operator\n   * @param from current owner of the token\n   * @param to address to receive the ownership of the given token ID\n   * @param tokenId uint256 ID of the token to be transferred\n  */\n  function safeTransferFrom(\n    address from,\n    address to,\n    uint256 tokenId\n  )\n    public\n  {\n    // solium-disable-next-line arg-overflow\n    safeTransferFrom(from, to, tokenId, \"\");\n  }\n\n  /**\n   * @dev Safely transfers the ownership of a given token ID to another address\n   * If the target address is a contract, it must implement `onERC721Received`,\n   * which is called upon a safe transfer, and return the magic value\n   * `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\n   * the transfer is reverted.\n   * Requires the msg sender to be the owner, approved, or operator\n   * @param from current owner of the token\n   * @param to address to receive the ownership of the given token ID\n   * @param tokenId uint256 ID of the token to be transferred\n   * @param _data bytes data to send along with a safe transfer check\n   */\n  function safeTransferFrom(\n    address from,\n    address to,\n    uint256 tokenId,\n    bytes _data\n  )\n    public\n  {\n    transferFrom(from, to, tokenId);\n    // solium-disable-next-line arg-overflow\n    require(_checkAndCallSafeTransfer(from, to, tokenId, _data));\n  }\n\n  /**\n   * @dev Returns whether the specified token exists\n   * @param tokenId uint256 ID of the token to query the existence of\n   * @return whether the token exists\n   */\n  function _exists(uint256 tokenId) internal view returns (bool) {\n    address owner = _tokenOwner[tokenId];\n    return owner != address(0);\n  }\n\n  /**\n   * @dev Returns whether the given spender can transfer a given token ID\n   * @param spender address of the spender to query\n   * @param tokenId uint256 ID of the token to be transferred\n   * @return bool whether the msg.sender is approved for the given token ID,\n   *  is an operator of the owner, or is the owner of the token\n   */\n  function _isApprovedOrOwner(\n    address spender,\n    uint256 tokenId\n  )\n    internal\n    view\n    returns (bool)\n  {\n    address owner = ownerOf(tokenId);\n    // Disable solium check because of\n    // https://github.com/duaraghav8/Solium/issues/175\n    // solium-disable-next-line operator-whitespace\n    return (\n      spender == owner ||\n      getApproved(tokenId) == spender ||\n      isApprovedForAll(owner, spender)\n    );\n  }\n\n  /**\n   * @dev Internal function to mint a new token\n   * Reverts if the given token ID already exists\n   * @param to The address that will own the minted token\n   * @param tokenId uint256 ID of the token to be minted by the msg.sender\n   */\n  function _mint(address to, uint256 tokenId) internal {\n    require(to != address(0));\n    _addTokenTo(to, tokenId);\n    emit Transfer(address(0), to, tokenId);\n  }\n\n  /**\n   * @dev Internal function to burn a specific token\n   * Reverts if the token does not exist\n   * @param tokenId uint256 ID of the token being burned by the msg.sender\n   */\n  function _burn(address owner, uint256 tokenId) internal {\n    _clearApproval(owner, tokenId);\n    _removeTokenFrom(owner, tokenId);\n    emit Transfer(owner, address(0), tokenId);\n  }\n\n  /**\n   * @dev Internal function to clear current approval of a given token ID\n   * Reverts if the given address is not indeed the owner of the token\n   * @param owner owner of the token\n   * @param tokenId uint256 ID of the token to be transferred\n   */\n  function _clearApproval(address owner, uint256 tokenId) internal {\n    require(ownerOf(tokenId) == owner);\n    if (_tokenApprovals[tokenId] != address(0)) {\n      _tokenApprovals[tokenId] = address(0);\n    }\n  }\n\n  /**\n   * @dev Internal function to add a token ID to the list of a given address\n   * @param to address representing the new owner of the given token ID\n   * @param tokenId uint256 ID of the token to be added to the tokens list of the given address\n   */\n  function _addTokenTo(address to, uint256 tokenId) internal {\n    require(_tokenOwner[tokenId] == address(0));\n    _tokenOwner[tokenId] = to;\n    _ownedTokensCount[to] = _ownedTokensCount[to].add(1);\n  }\n\n  /**\n   * @dev Internal function to remove a token ID from the list of a given address\n   * @param from address representing the previous owner of the given token ID\n   * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address\n   */\n  function _removeTokenFrom(address from, uint256 tokenId) internal {\n    require(ownerOf(tokenId) == from);\n    _ownedTokensCount[from] = _ownedTokensCount[from].sub(1);\n    _tokenOwner[tokenId] = address(0);\n  }\n\n  /**\n   * @dev Internal function to invoke `onERC721Received` on a target address\n   * The call is not executed if the target address is not a contract\n   * @param from address representing the previous owner of the given token ID\n   * @param to target address that will receive the tokens\n   * @param tokenId uint256 ID of the token to be transferred\n   * @param _data bytes optional data to send along with the call\n   * @return whether the call correctly returned the expected magic value\n   */\n  function _checkAndCallSafeTransfer(\n    address from,\n    address to,\n    uint256 tokenId,\n    bytes _data\n  )\n    internal\n    returns (bool)\n  {\n    if (!to.isContract()) {\n      return true;\n    }\n    bytes4 retval = IERC721Receiver(to).onERC721Received(\n      msg.sender, from, tokenId, _data);\n    return (retval == _ERC721_RECEIVED);\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol",
    "exportedSymbols": {
      "ERC721": [
        3377
      ]
    },
    "id": 3378,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2834,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:20"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 2835,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 3915,
        "src": "26:23:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol",
        "file": "./IERC721Receiver.sol",
        "id": 2836,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 3981,
        "src": "50:31:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 2837,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 2121,
        "src": "82:33:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
        "file": "../../utils/Address.sol",
        "id": 2838,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 4000,
        "src": "116:33:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol",
        "file": "../../introspection/ERC165.sol",
        "id": 2839,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 1915,
        "src": "150:40:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2840,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1914,
              "src": "359:6:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$1914",
                "typeString": "contract ERC165"
              }
            },
            "id": 2841,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:20"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2842,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3914,
              "src": "367:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$3914",
                "typeString": "contract IERC721"
              }
            },
            "id": 2843,
            "nodeType": "InheritanceSpecifier",
            "src": "367:7:20"
          }
        ],
        "contractDependencies": [
          1914,
          1924,
          3914
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic implementation\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": true,
        "id": 3377,
        "linearizedBaseContracts": [
          3377,
          3914,
          1914,
          1924
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 2846,
            "libraryName": {
              "contractScope": null,
              "id": 2844,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2120,
              "src": "386:8:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2120",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "380:27:20",
            "typeName": {
              "id": 2845,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "399:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 2849,
            "libraryName": {
              "contractScope": null,
              "id": 2847,
              "name": "Address",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3999,
              "src": "416:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Address_$3999",
                "typeString": "library Address"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "410:26:20",
            "typeName": {
              "id": 2848,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "428:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "constant": true,
            "id": 2852,
            "name": "_ERC721_RECEIVED",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "608:53:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 2850,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "608:6:20",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783135306237613032",
              "id": 2851,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "651:10:20",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_353073666_by_1",
                "typeString": "int_const 353073666"
              },
              "value": "0x150b7a02"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2856,
            "name": "_tokenOwner",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "702:48:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 2855,
              "keyType": {
                "id": 2853,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "711:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "702:28:20",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 2854,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "722:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2860,
            "name": "_tokenApprovals",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "802:52:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 2859,
              "keyType": {
                "id": 2857,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "811:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "802:28:20",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 2858,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "822:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2864,
            "name": "_ownedTokensCount",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "908:54:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 2863,
              "keyType": {
                "id": 2861,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "917:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "908:28:20",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 2862,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "928:7:20",
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
            "id": 2870,
            "name": "_operatorApprovals",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "1013:73:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 2869,
              "keyType": {
                "id": 2865,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1022:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1013:46:20",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueType": {
                "id": 2868,
                "keyType": {
                  "id": 2866,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1042:7:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1033:25:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 2867,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1053:4:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 2873,
            "name": "_InterfaceId_ERC721",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "1091:56:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 2871,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "1091:6:20",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783830616335386364",
              "id": 2872,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1137:10:20",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2158778573_by_1",
                "typeString": "int_const 2158778573"
              },
              "value": "0x80ac58cd"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 2880,
              "nodeType": "Block",
              "src": "1754:123:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2877,
                        "name": "_InterfaceId_ERC721",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2873,
                        "src": "1852:19:20",
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
                      "id": 2876,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1913,
                      "src": "1833:18:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 2878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1833:39:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2879,
                  "nodeType": "ExpressionStatement",
                  "src": "1833:39:20"
                }
              ]
            },
            "documentation": null,
            "id": 2881,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2874,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1738:2:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1754:0:20"
            },
            "scope": 3377,
            "src": "1727:150:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2900,
              "nodeType": "Block",
              "src": "2132:76:20",
              "statements": [
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
                        "id": 2893,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2889,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2883,
                          "src": "2146:5:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 2891,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2163:1:20",
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
                            "id": 2890,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2155:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2892,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2155:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2146:19:20",
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
                      "id": 2888,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "2138:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2894,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2138:28:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2895,
                  "nodeType": "ExpressionStatement",
                  "src": "2138:28:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 2896,
                      "name": "_ownedTokensCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2864,
                      "src": "2179:17:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 2898,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 2897,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2883,
                      "src": "2197:5:20",
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
                    "src": "2179:24:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2887,
                  "id": 2899,
                  "nodeType": "Return",
                  "src": "2172:31:20"
                }
              ]
            },
            "documentation": "@dev Gets the balance of the specified address\n@param owner address to query the balance of\n@return uint256 representing the amount owned by the passed address",
            "id": 2901,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2883,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2901,
                  "src": "2087:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2882,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2087:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2086:15:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2901,
                  "src": "2123:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2122:9:20"
            },
            "scope": 3377,
            "src": "2068:140:20",
            "stateMutability": "view",
            "superFunction": 3847,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2924,
              "nodeType": "Block",
              "src": "2484:99:20",
              "statements": [
                {
                  "assignments": [
                    2909
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2909,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 2925,
                      "src": "2490:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2908,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2490:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2913,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 2910,
                      "name": "_tokenOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2856,
                      "src": "2506:11:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 2912,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 2911,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2903,
                      "src": "2518:7:20",
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
                    "src": "2506:20:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2490:36:20"
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
                        "id": 2919,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2915,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2909,
                          "src": "2540:5:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 2917,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2557:1:20",
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
                            "id": 2916,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2549:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2918,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2549:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2540:19:20",
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
                      "id": 2914,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "2532:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2532:28:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2921,
                  "nodeType": "ExpressionStatement",
                  "src": "2532:28:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2922,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2909,
                    "src": "2573:5:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2907,
                  "id": 2923,
                  "nodeType": "Return",
                  "src": "2566:12:20"
                }
              ]
            },
            "documentation": "@dev Gets the owner of the specified token ID\n@param tokenId uint256 ID of the token to query the owner of\n@return owner address currently marked as the owner of the given token ID",
            "id": 2925,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2904,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2903,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2925,
                  "src": "2437:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2902,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2437:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2436:17:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2906,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2925,
                  "src": "2475:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2905,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2475:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2474:9:20"
            },
            "scope": 3377,
            "src": "2420:163:20",
            "stateMutability": "view",
            "superFunction": 3854,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2969,
              "nodeType": "Block",
              "src": "3039:217:20",
              "statements": [
                {
                  "assignments": [
                    2933
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2933,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 2970,
                      "src": "3045:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2932,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3045:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2937,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2935,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2929,
                        "src": "3069:7:20",
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
                      "id": 2934,
                      "name": "ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2925
                      ],
                      "referencedDeclaration": 2925,
                      "src": "3061:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 2936,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3061:16:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3045:32:20"
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
                        "id": 2941,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2939,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2927,
                          "src": "3091:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2940,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2933,
                          "src": "3097:5:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3091:11:20",
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
                      "id": 2938,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "3083:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2942,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3083:20:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2943,
                  "nodeType": "ExpressionStatement",
                  "src": "3083:20:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 2954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2948,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 2945,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4014,
                              "src": "3117:3:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2946,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3117:10:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 2947,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2933,
                            "src": "3131:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3117:19:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 2950,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2933,
                              "src": "3157:5:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 2951,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4014,
                                "src": "3164:3:20",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 2952,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3164:10:20",
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
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 2949,
                            "name": "isApprovedForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3035
                            ],
                            "referencedDeclaration": 3035,
                            "src": "3140:16:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 2953,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3140:35:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "3117:58:20",
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
                      "id": 2944,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "3109:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3109:67:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2956,
                  "nodeType": "ExpressionStatement",
                  "src": "3109:67:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 2957,
                        "name": "_tokenApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2860,
                        "src": "3183:15:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 2959,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 2958,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2929,
                        "src": "3199:7:20",
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
                      "src": "3183:24:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2960,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2927,
                      "src": "3210:2:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3183:29:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2962,
                  "nodeType": "ExpressionStatement",
                  "src": "3183:29:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2964,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2933,
                        "src": "3232:5:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2965,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2927,
                        "src": "3239:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2966,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2929,
                        "src": "3243:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2963,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3832,
                      "src": "3223:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 2967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3223:28:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2968,
                  "nodeType": "EmitStatement",
                  "src": "3218:33:20"
                }
              ]
            },
            "documentation": "@dev Approves another address to transfer the given token ID\nThe zero address indicates there is no approved address.\nThere can only be one approved address per token at a given time.\nCan only be called by the token owner or an approved operator.\n@param to address to be approved for the given token ID\n@param tokenId uint256 ID of the token to be approved",
            "id": 2970,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2927,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2970,
                  "src": "3003:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2926,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3003:7:20",
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
                  "id": 2929,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2970,
                  "src": "3015:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2928,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3015:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3002:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2931,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3039:0:20"
            },
            "scope": 3377,
            "src": "2986:270:20",
            "stateMutability": "nonpayable",
            "superFunction": 3861,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2987,
              "nodeType": "Block",
              "src": "3595:73:20",
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
                            "id": 2979,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2972,
                            "src": "3617:7:20",
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
                          "id": 2978,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3146,
                          "src": "3609:7:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 2980,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3609:16:20",
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
                      "id": 2977,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "3601:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3601:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2982,
                  "nodeType": "ExpressionStatement",
                  "src": "3601:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 2983,
                      "name": "_tokenApprovals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2860,
                      "src": "3639:15:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 2985,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 2984,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2972,
                      "src": "3655:7:20",
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
                    "src": "3639:24:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2976,
                  "id": 2986,
                  "nodeType": "Return",
                  "src": "3632:31:20"
                }
              ]
            },
            "documentation": "@dev Gets the approved address for a token ID, or zero if no address set\nReverts if the token ID does not exist.\n@param tokenId uint256 ID of the token to query the approval of\n@return address currently approved for the given token ID",
            "id": 2988,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2972,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2988,
                  "src": "3548:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3548:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3547:17:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2975,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2988,
                  "src": "3586:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2974,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3586:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3585:9:20"
            },
            "scope": 3377,
            "src": "3527:141:20",
            "stateMutability": "view",
            "superFunction": 3868,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3018,
              "nodeType": "Block",
              "src": "4007:138:20",
              "statements": [
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
                        "id": 2999,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2996,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2990,
                          "src": "4021:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2997,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4014,
                            "src": "4027:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2998,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4027:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "4021:16:20",
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
                      "id": 2995,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "4013:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4013:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3001,
                  "nodeType": "ExpressionStatement",
                  "src": "4013:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3009,
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
                          "id": 3002,
                          "name": "_operatorApprovals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2870,
                          "src": "4044:18:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 3006,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3003,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4014,
                            "src": "4063:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3004,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4063:10:20",
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
                        "src": "4044:30:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 3007,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3005,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2990,
                        "src": "4075:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4044:34:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3008,
                      "name": "approved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2992,
                      "src": "4081:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4044:45:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3010,
                  "nodeType": "ExpressionStatement",
                  "src": "4044:45:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3012,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "4115:3:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3013,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4115:10:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3014,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2990,
                        "src": "4127:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3015,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2992,
                        "src": "4131:8:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 3011,
                      "name": "ApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3840,
                      "src": "4100:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 3016,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4100:40:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3017,
                  "nodeType": "EmitStatement",
                  "src": "4095:45:20"
                }
              ]
            },
            "documentation": "@dev Sets or unsets the approval of a given operator\nAn operator is allowed to transfer all tokens of the sender on their behalf\n@param to operator address to set the approval\n@param approved representing the status of the approval to be set",
            "id": 3019,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2993,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2990,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3019,
                  "src": "3973:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2989,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3973:7:20",
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
                  "id": 2992,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3019,
                  "src": "3985:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2991,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3985:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3972:27:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2994,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4007:0:20"
            },
            "scope": 3377,
            "src": "3946:199:20",
            "stateMutability": "nonpayable",
            "superFunction": 3875,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3034,
              "nodeType": "Block",
              "src": "4564:53:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3028,
                        "name": "_operatorApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2870,
                        "src": "4577:18:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                          "typeString": "mapping(address => mapping(address => bool))"
                        }
                      },
                      "id": 3030,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3029,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3021,
                        "src": "4596:5:20",
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
                      "src": "4577:25:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 3032,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3031,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3023,
                      "src": "4603:8:20",
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
                    "src": "4577:35:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3027,
                  "id": 3033,
                  "nodeType": "Return",
                  "src": "4570:42:20"
                }
              ]
            },
            "documentation": "@dev Tells whether an operator is approved by a given owner\n@param owner owner address which you want to query the approval of\n@param operator operator address which you want to query the approval of\n@return bool whether the given operator is approved by the given owner",
            "id": 3035,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3021,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3035,
                  "src": "4483:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3020,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4483:7:20",
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
                  "id": 3023,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3035,
                  "src": "4502:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3022,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4502:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4477:45:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3026,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3035,
                  "src": "4556:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3025,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4556:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4555:6:20"
            },
            "scope": 3377,
            "src": "4452:165:20",
            "stateMutability": "view",
            "superFunction": 3884,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3081,
              "nodeType": "Block",
              "src": "5126:232:20",
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
                              "id": 3046,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4014,
                              "src": "5159:3:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3047,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5159:10:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3048,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3041,
                            "src": "5171:7:20",
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
                          "id": 3045,
                          "name": "_isApprovedOrOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3178,
                          "src": "5140:18:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) view returns (bool)"
                          }
                        },
                        "id": 3049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5140:39:20",
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
                      "id": 3044,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "5132:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5132:48:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3051,
                  "nodeType": "ExpressionStatement",
                  "src": "5132:48:20"
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
                        "id": 3057,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3053,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3039,
                          "src": "5194:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 3055,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5208:1:20",
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
                            "id": 3054,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5200:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3056,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5200:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5194:16:20",
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
                      "id": 3052,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "5186:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5186:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3059,
                  "nodeType": "ExpressionStatement",
                  "src": "5186:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3061,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3037,
                        "src": "5233:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3062,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3041,
                        "src": "5239:7:20",
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
                      "id": 3060,
                      "name": "_clearApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3266,
                      "src": "5218:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5218:29:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3064,
                  "nodeType": "ExpressionStatement",
                  "src": "5218:29:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3066,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3037,
                        "src": "5270:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3067,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3041,
                        "src": "5276:7:20",
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
                      "id": 3065,
                      "name": "_removeTokenFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3336,
                      "src": "5253:16:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3068,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5253:31:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3069,
                  "nodeType": "ExpressionStatement",
                  "src": "5253:31:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3071,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3039,
                        "src": "5302:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3072,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3041,
                        "src": "5306:7:20",
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
                      "id": 3070,
                      "name": "_addTokenTo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3301,
                      "src": "5290:11:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5290:24:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3074,
                  "nodeType": "ExpressionStatement",
                  "src": "5290:24:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3076,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3037,
                        "src": "5335:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3077,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3039,
                        "src": "5341:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3078,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3041,
                        "src": "5345:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3075,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3824,
                      "src": "5326:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3079,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5326:27:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3080,
                  "nodeType": "EmitStatement",
                  "src": "5321:32:20"
                }
              ]
            },
            "documentation": "@dev Transfers the ownership of a given token ID to another address\nUsage of this method is discouraged, use `safeTransferFrom` whenever possible\nRequires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3082,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3037,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3082,
                  "src": "5059:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3036,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5059:7:20",
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
                  "id": 3039,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3082,
                  "src": "5077:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3038,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5077:7:20",
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
                  "id": 3041,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3082,
                  "src": "5093:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5093:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5053:59:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3043,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5126:0:20"
            },
            "scope": 3377,
            "src": "5032:326:20",
            "stateMutability": "nonpayable",
            "superFunction": 3893,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3098,
              "nodeType": "Block",
              "src": "6069:95:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3092,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3084,
                        "src": "6137:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3093,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3086,
                        "src": "6143:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3094,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3088,
                        "src": "6147:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 3095,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6156:2:20",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 3091,
                      "name": "safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3099,
                        3126
                      ],
                      "referencedDeclaration": 3126,
                      "src": "6120:16:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 3096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6120:39:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3097,
                  "nodeType": "ExpressionStatement",
                  "src": "6120:39:20"
                }
              ]
            },
            "documentation": "@dev Safely transfers the ownership of a given token ID to another address\nIf the target address is a contract, it must implement `onERC721Received`,\nwhich is called upon a safe transfer, and return the magic value\n`bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\nthe transfer is reverted.\n   * Requires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3099,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3084,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3099,
                  "src": "6002:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3083,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6002:7:20",
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
                  "id": 3086,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3099,
                  "src": "6020:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3085,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6020:7:20",
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
                  "id": 3088,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3099,
                  "src": "6036:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6036:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5996:59:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3090,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6069:0:20"
            },
            "scope": 3377,
            "src": "5971:193:20",
            "stateMutability": "nonpayable",
            "superFunction": 3902,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3125,
              "nodeType": "Block",
              "src": "6958:153:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3111,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3101,
                        "src": "6977:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3112,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3103,
                        "src": "6983:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3113,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3105,
                        "src": "6987:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3110,
                      "name": "transferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3082
                      ],
                      "referencedDeclaration": 3082,
                      "src": "6964:12:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6964:31:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3115,
                  "nodeType": "ExpressionStatement",
                  "src": "6964:31:20"
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
                            "id": 3118,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3101,
                            "src": "7080:4:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3119,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3103,
                            "src": "7086:2:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3120,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3105,
                            "src": "7090:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3121,
                            "name": "_data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3107,
                            "src": "7099:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 3117,
                          "name": "_checkAndCallSafeTransfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3376,
                          "src": "7054:25:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256,bytes memory) returns (bool)"
                          }
                        },
                        "id": 3122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7054:51:20",
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
                      "id": 3116,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "7046:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7046:60:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3124,
                  "nodeType": "ExpressionStatement",
                  "src": "7046:60:20"
                }
              ]
            },
            "documentation": "@dev Safely transfers the ownership of a given token ID to another address\nIf the target address is a contract, it must implement `onERC721Received`,\nwhich is called upon a safe transfer, and return the magic value\n`bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\nthe transfer is reverted.\nRequires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred\n@param _data bytes data to send along with a safe transfer check",
            "id": 3126,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3101,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3126,
                  "src": "6874:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3100,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6874:7:20",
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
                  "id": 3103,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3126,
                  "src": "6892:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6892:7:20",
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
                  "id": 3105,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3126,
                  "src": "6908:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3104,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6908:7:20",
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
                  "id": 3107,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3126,
                  "src": "6929:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3106,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6929:5:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6868:76:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6958:0:20"
            },
            "scope": 3377,
            "src": "6843:268:20",
            "stateMutability": "nonpayable",
            "superFunction": 3913,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3145,
              "nodeType": "Block",
              "src": "7351:79:20",
              "statements": [
                {
                  "assignments": [
                    3134
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3134,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3146,
                      "src": "7357:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3133,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7357:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3138,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3135,
                      "name": "_tokenOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2856,
                      "src": "7373:11:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 3137,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3136,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3128,
                      "src": "7385:7:20",
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
                    "src": "7373:20:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7357:36:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 3139,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3134,
                      "src": "7406:5:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 3141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7423:1:20",
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
                        "id": 3140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7415:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3142,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7415:10:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7406:19:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3132,
                  "id": 3144,
                  "nodeType": "Return",
                  "src": "7399:26:20"
                }
              ]
            },
            "documentation": "@dev Returns whether the specified token exists\n@param tokenId uint256 ID of the token to query the existence of\n@return whether the token exists",
            "id": 3146,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3128,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3146,
                  "src": "7305:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3127,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7305:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7304:17:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3131,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3146,
                  "src": "7345:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3130,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7345:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7344:6:20"
            },
            "scope": 3377,
            "src": "7288:142:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3177,
              "nodeType": "Block",
              "src": "7892:315:20",
              "statements": [
                {
                  "assignments": [
                    3156
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3156,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3178,
                      "src": "7898:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3155,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7898:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3160,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3158,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3150,
                        "src": "7922:7:20",
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
                      "id": 3157,
                      "name": "ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2925
                      ],
                      "referencedDeclaration": 2925,
                      "src": "7914:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 3159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7914:16:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7898:32:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 3174,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 3169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 3163,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 3161,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3148,
                              "src": "8097:7:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 3162,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3156,
                              "src": "8108:5:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8097:16:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 3168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 3165,
                                  "name": "tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3150,
                                  "src": "8135:7:20",
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
                                "id": 3164,
                                "name": "getApproved",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  2988
                                ],
                                "referencedDeclaration": 2988,
                                "src": "8123:11:20",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                  "typeString": "function (uint256) view returns (address)"
                                }
                              },
                              "id": 3166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8123:20:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 3167,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3148,
                              "src": "8147:7:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8123:31:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "8097:57:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3171,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3156,
                              "src": "8181:5:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3172,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3148,
                              "src": "8188:7:20",
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
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 3170,
                            "name": "isApprovedForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3035
                            ],
                            "referencedDeclaration": 3035,
                            "src": "8164:16:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 3173,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8164:32:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "8097:99:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 3175,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8089:113:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3154,
                  "id": 3176,
                  "nodeType": "Return",
                  "src": "8082:120:20"
                }
              ]
            },
            "documentation": "@dev Returns whether the given spender can transfer a given token ID\n@param spender address of the spender to query\n@param tokenId uint256 ID of the token to be transferred\n@return bool whether the msg.sender is approved for the given token ID,\n is an operator of the owner, or is the owner of the token",
            "id": 3178,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_isApprovedOrOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3148,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3178,
                  "src": "7808:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3147,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7808:7:20",
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
                  "id": 3150,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3178,
                  "src": "7829:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3149,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7829:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7802:46:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3153,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3178,
                  "src": "7884:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3152,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7884:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7883:6:20"
            },
            "scope": 3377,
            "src": "7775:432:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3206,
              "nodeType": "Block",
              "src": "8507:110:20",
              "statements": [
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
                        "id": 3190,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3186,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3180,
                          "src": "8521:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 3188,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8535:1:20",
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
                            "id": 3187,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8527:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3189,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8527:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "8521:16:20",
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
                      "id": 3185,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "8513:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8513:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3192,
                  "nodeType": "ExpressionStatement",
                  "src": "8513:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3194,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3180,
                        "src": "8556:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3195,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3182,
                        "src": "8560:7:20",
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
                      "id": 3193,
                      "name": "_addTokenTo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3301,
                      "src": "8544:11:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8544:24:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3197,
                  "nodeType": "ExpressionStatement",
                  "src": "8544:24:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 3200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8596:1:20",
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
                          "id": 3199,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8588:7:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 3201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8588:10:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3202,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3180,
                        "src": "8600:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3203,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3182,
                        "src": "8604:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3198,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3824,
                      "src": "8579:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8579:33:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3205,
                  "nodeType": "EmitStatement",
                  "src": "8574:38:20"
                }
              ]
            },
            "documentation": "@dev Internal function to mint a new token\nReverts if the given token ID already exists\n@param to The address that will own the minted token\n@param tokenId uint256 ID of the token to be minted by the msg.sender",
            "id": 3207,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3180,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3207,
                  "src": "8469:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3179,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8469:7:20",
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
                  "id": 3182,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3207,
                  "src": "8481:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3181,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8481:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8468:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3184,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8507:0:20"
            },
            "scope": 3377,
            "src": "8454:163:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3232,
              "nodeType": "Block",
              "src": "8858:126:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3215,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3209,
                        "src": "8879:5:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3216,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3211,
                        "src": "8886:7:20",
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
                      "id": 3214,
                      "name": "_clearApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3266,
                      "src": "8864:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8864:30:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3218,
                  "nodeType": "ExpressionStatement",
                  "src": "8864:30:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3220,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3209,
                        "src": "8917:5:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3221,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3211,
                        "src": "8924:7:20",
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
                      "id": 3219,
                      "name": "_removeTokenFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3336,
                      "src": "8900:16:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3222,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8900:32:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3223,
                  "nodeType": "ExpressionStatement",
                  "src": "8900:32:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3225,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3209,
                        "src": "8952:5:20",
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
                            "id": 3227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8967:1:20",
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
                          "id": 3226,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8959:7:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 3228,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8959:10:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3229,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3211,
                        "src": "8971:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3224,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3824,
                      "src": "8943:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3230,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8943:36:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3231,
                  "nodeType": "EmitStatement",
                  "src": "8938:41:20"
                }
              ]
            },
            "documentation": "@dev Internal function to burn a specific token\nReverts if the token does not exist\n@param tokenId uint256 ID of the token being burned by the msg.sender",
            "id": 3233,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3209,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3233,
                  "src": "8817:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3208,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8817:7:20",
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
                  "id": 3211,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3233,
                  "src": "8832:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3210,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8832:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8816:32:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8858:0:20"
            },
            "scope": 3377,
            "src": "8802:182:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3265,
              "nodeType": "Block",
              "src": "9309:146:20",
              "statements": [
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
                        "id": 3245,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3242,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3237,
                              "src": "9331:7:20",
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
                            "id": 3241,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              2925
                            ],
                            "referencedDeclaration": 2925,
                            "src": "9323:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 3243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9323:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3244,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3235,
                          "src": "9343:5:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "9323:25:20",
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
                      "id": 3240,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "9315:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9315:34:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3247,
                  "nodeType": "ExpressionStatement",
                  "src": "9315:34:20"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3248,
                        "name": "_tokenApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2860,
                        "src": "9359:15:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3250,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3249,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3237,
                        "src": "9375:7:20",
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
                      "src": "9359:24:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 3252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9395:1:20",
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
                        "id": 3251,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9387:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9387:10:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9359:38:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3264,
                  "nodeType": "IfStatement",
                  "src": "9355:96:20",
                  "trueBody": {
                    "id": 3263,
                    "nodeType": "Block",
                    "src": "9399:52:20",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 3261,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 3255,
                              "name": "_tokenApprovals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2860,
                              "src": "9407:15:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 3257,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 3256,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3237,
                              "src": "9423:7:20",
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
                            "src": "9407:24:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 3259,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9442:1:20",
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
                              "id": 3258,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9434:7:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 3260,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9434:10:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "9407:37:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 3262,
                        "nodeType": "ExpressionStatement",
                        "src": "9407:37:20"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "@dev Internal function to clear current approval of a given token ID\nReverts if the given address is not indeed the owner of the token\n@param owner owner of the token\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3266,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_clearApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3235,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3266,
                  "src": "9268:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3234,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9268:7:20",
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
                  "id": 3237,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3266,
                  "src": "9283:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3236,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9283:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9267:32:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3239,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9309:0:20"
            },
            "scope": 3377,
            "src": "9244:211:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3300,
              "nodeType": "Block",
              "src": "9775:143:20",
              "statements": [
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
                        "id": 3280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3274,
                            "name": "_tokenOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2856,
                            "src": "9789:11:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                              "typeString": "mapping(uint256 => address)"
                            }
                          },
                          "id": 3276,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3275,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3270,
                            "src": "9801:7:20",
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
                          "src": "9789:20:20",
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
                              "id": 3278,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9821:1:20",
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
                            "id": 3277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9813:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9813:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "9789:34:20",
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
                      "id": 3273,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "9781:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9781:43:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3282,
                  "nodeType": "ExpressionStatement",
                  "src": "9781:43:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3283,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2856,
                        "src": "9830:11:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3285,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3284,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3270,
                        "src": "9842:7:20",
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
                      "src": "9830:20:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3286,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3268,
                      "src": "9853:2:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9830:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3288,
                  "nodeType": "ExpressionStatement",
                  "src": "9830:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3298,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3289,
                        "name": "_ownedTokensCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2864,
                        "src": "9861:17:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3291,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3290,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3268,
                        "src": "9879:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "9861:21:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 3296,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9911:1:20",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3292,
                            "name": "_ownedTokensCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2864,
                            "src": "9885:17:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 3294,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3293,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3268,
                            "src": "9903:2:20",
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
                          "src": "9885:21:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2099,
                        "src": "9885:25:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9885:28:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9861:52:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3299,
                  "nodeType": "ExpressionStatement",
                  "src": "9861:52:20"
                }
              ]
            },
            "documentation": "@dev Internal function to add a token ID to the list of a given address\n@param to address representing the new owner of the given token ID\n@param tokenId uint256 ID of the token to be added to the tokens list of the given address",
            "id": 3301,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_addTokenTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3268,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3301,
                  "src": "9737:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3267,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9737:7:20",
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
                  "id": 3270,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3301,
                  "src": "9749:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3269,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9749:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9736:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3272,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9775:0:20"
            },
            "scope": 3377,
            "src": "9716:202:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3335,
              "nodeType": "Block",
              "src": "10261:145:20",
              "statements": [
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
                        "id": 3313,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3310,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3305,
                              "src": "10283:7:20",
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
                            "id": 3309,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              2925
                            ],
                            "referencedDeclaration": 2925,
                            "src": "10275:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 3311,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10275:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3312,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3303,
                          "src": "10295:4:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "10275:24:20",
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
                      "id": 3308,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "10267:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10267:33:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3315,
                  "nodeType": "ExpressionStatement",
                  "src": "10267:33:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3325,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3316,
                        "name": "_ownedTokensCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2864,
                        "src": "10306:17:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3318,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3317,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3303,
                        "src": "10324:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10306:23:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 3323,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10360:1:20",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3319,
                            "name": "_ownedTokensCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2864,
                            "src": "10332:17:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 3321,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3320,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3303,
                            "src": "10350:4:20",
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
                          "src": "10332:23:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2075,
                        "src": "10332:27:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3324,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10332:30:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10306:56:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3326,
                  "nodeType": "ExpressionStatement",
                  "src": "10306:56:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3327,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2856,
                        "src": "10368:11:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3329,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3328,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3305,
                        "src": "10380:7:20",
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
                      "src": "10368:20:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 3331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10399:1:20",
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
                        "id": 3330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10391:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3332,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10391:10:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10368:33:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3334,
                  "nodeType": "ExpressionStatement",
                  "src": "10368:33:20"
                }
              ]
            },
            "documentation": "@dev Internal function to remove a token ID from the list of a given address\n@param from address representing the previous owner of the given token ID\n@param tokenId uint256 ID of the token to be removed from the tokens list of the given address",
            "id": 3336,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeTokenFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3303,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3336,
                  "src": "10221:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10221:7:20",
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
                  "id": 3305,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3336,
                  "src": "10235:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3304,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10235:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10220:31:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3307,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10261:0:20"
            },
            "scope": 3377,
            "src": "10195:211:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3375,
              "nodeType": "Block",
              "src": "11054:198:20",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 3352,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11064:16:20",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 3349,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3340,
                          "src": "11065:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 3350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3998,
                        "src": "11065:13:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 3351,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11065:15:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3356,
                  "nodeType": "IfStatement",
                  "src": "11060:48:20",
                  "trueBody": {
                    "id": 3355,
                    "nodeType": "Block",
                    "src": "11082:26:20",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 3353,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11097:4:20",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 3348,
                        "id": 3354,
                        "nodeType": "Return",
                        "src": "11090:11:20"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3358
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3358,
                      "name": "retval",
                      "nodeType": "VariableDeclaration",
                      "scope": 3376,
                      "src": "11113:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 3357,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "11113:6:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3369,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3363,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "11173:3:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "11173:10:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3365,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3338,
                        "src": "11185:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3366,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3342,
                        "src": "11191:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3367,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3344,
                        "src": "11200:5:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3360,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3340,
                            "src": "11145:2:20",
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
                          "id": 3359,
                          "name": "IERC721Receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3980,
                          "src": "11129:15:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC721Receiver_$3980_$",
                            "typeString": "type(contract IERC721Receiver)"
                          }
                        },
                        "id": 3361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11129:19:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC721Receiver_$3980",
                          "typeString": "contract IERC721Receiver"
                        }
                      },
                      "id": 3362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "onERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3979,
                      "src": "11129:36:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 3368,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11129:77:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11113:93:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 3372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3370,
                          "name": "retval",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3358,
                          "src": "11220:6:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3371,
                          "name": "_ERC721_RECEIVED",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2852,
                          "src": "11230:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "11220:26:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 3373,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "11219:28:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3348,
                  "id": 3374,
                  "nodeType": "Return",
                  "src": "11212:35:20"
                }
              ]
            },
            "documentation": "@dev Internal function to invoke `onERC721Received` on a target address\nThe call is not executed if the target address is not a contract\n@param from address representing the previous owner of the given token ID\n@param to target address that will receive the tokens\n@param tokenId uint256 ID of the token to be transferred\n@param _data bytes optional data to send along with the call\n@return whether the call correctly returned the expected magic value",
            "id": 3376,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_checkAndCallSafeTransfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3338,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "10949:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3337,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10949:7:20",
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
                  "id": 3340,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "10967:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3339,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10967:7:20",
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
                  "id": 3342,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "10983:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3341,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10983:7:20",
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
                  "id": 3344,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "11004:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3343,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11004:5:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10943:76:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3347,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "11046:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3346,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11046:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "11045:6:20"
            },
            "scope": 3377,
            "src": "10909:343:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3378,
        "src": "340:10914:20"
      }
    ],
    "src": "0:11255:20"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol",
    "exportedSymbols": {
      "ERC721": [
        3377
      ]
    },
    "id": 3378,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2834,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:20"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 2835,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 3915,
        "src": "26:23:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol",
        "file": "./IERC721Receiver.sol",
        "id": 2836,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 3981,
        "src": "50:31:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 2837,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 2121,
        "src": "82:33:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
        "file": "../../utils/Address.sol",
        "id": 2838,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 4000,
        "src": "116:33:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol",
        "file": "../../introspection/ERC165.sol",
        "id": 2839,
        "nodeType": "ImportDirective",
        "scope": 3378,
        "sourceUnit": 1915,
        "src": "150:40:20",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2840,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1914,
              "src": "359:6:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$1914",
                "typeString": "contract ERC165"
              }
            },
            "id": 2841,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:20"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2842,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3914,
              "src": "367:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$3914",
                "typeString": "contract IERC721"
              }
            },
            "id": 2843,
            "nodeType": "InheritanceSpecifier",
            "src": "367:7:20"
          }
        ],
        "contractDependencies": [
          1914,
          1924,
          3914
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic implementation\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": true,
        "id": 3377,
        "linearizedBaseContracts": [
          3377,
          3914,
          1914,
          1924
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 2846,
            "libraryName": {
              "contractScope": null,
              "id": 2844,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2120,
              "src": "386:8:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$2120",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "380:27:20",
            "typeName": {
              "id": 2845,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "399:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 2849,
            "libraryName": {
              "contractScope": null,
              "id": 2847,
              "name": "Address",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3999,
              "src": "416:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Address_$3999",
                "typeString": "library Address"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "410:26:20",
            "typeName": {
              "id": 2848,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "428:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            }
          },
          {
            "constant": true,
            "id": 2852,
            "name": "_ERC721_RECEIVED",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "608:53:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 2850,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "608:6:20",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783135306237613032",
              "id": 2851,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "651:10:20",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_353073666_by_1",
                "typeString": "int_const 353073666"
              },
              "value": "0x150b7a02"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2856,
            "name": "_tokenOwner",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "702:48:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 2855,
              "keyType": {
                "id": 2853,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "711:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "702:28:20",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 2854,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "722:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2860,
            "name": "_tokenApprovals",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "802:52:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 2859,
              "keyType": {
                "id": 2857,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "811:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "802:28:20",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueType": {
                "id": 2858,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "822:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2864,
            "name": "_ownedTokensCount",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "908:54:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 2863,
              "keyType": {
                "id": 2861,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "917:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "908:28:20",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 2862,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "928:7:20",
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
            "id": 2870,
            "name": "_operatorApprovals",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "1013:73:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 2869,
              "keyType": {
                "id": 2865,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1022:7:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1013:46:20",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueType": {
                "id": 2868,
                "keyType": {
                  "id": 2866,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1042:7:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1033:25:20",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 2867,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1053:4:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 2873,
            "name": "_InterfaceId_ERC721",
            "nodeType": "VariableDeclaration",
            "scope": 3377,
            "src": "1091:56:20",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 2871,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "1091:6:20",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783830616335386364",
              "id": 2872,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1137:10:20",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2158778573_by_1",
                "typeString": "int_const 2158778573"
              },
              "value": "0x80ac58cd"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 2880,
              "nodeType": "Block",
              "src": "1754:123:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2877,
                        "name": "_InterfaceId_ERC721",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2873,
                        "src": "1852:19:20",
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
                      "id": 2876,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1913,
                      "src": "1833:18:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 2878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1833:39:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2879,
                  "nodeType": "ExpressionStatement",
                  "src": "1833:39:20"
                }
              ]
            },
            "documentation": null,
            "id": 2881,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2874,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1738:2:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1754:0:20"
            },
            "scope": 3377,
            "src": "1727:150:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2900,
              "nodeType": "Block",
              "src": "2132:76:20",
              "statements": [
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
                        "id": 2893,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2889,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2883,
                          "src": "2146:5:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 2891,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2163:1:20",
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
                            "id": 2890,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2155:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2892,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2155:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2146:19:20",
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
                      "id": 2888,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "2138:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2894,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2138:28:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2895,
                  "nodeType": "ExpressionStatement",
                  "src": "2138:28:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 2896,
                      "name": "_ownedTokensCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2864,
                      "src": "2179:17:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 2898,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 2897,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2883,
                      "src": "2197:5:20",
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
                    "src": "2179:24:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2887,
                  "id": 2899,
                  "nodeType": "Return",
                  "src": "2172:31:20"
                }
              ]
            },
            "documentation": "@dev Gets the balance of the specified address\n@param owner address to query the balance of\n@return uint256 representing the amount owned by the passed address",
            "id": 2901,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2883,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2901,
                  "src": "2087:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2882,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2087:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2086:15:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2901,
                  "src": "2123:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2122:9:20"
            },
            "scope": 3377,
            "src": "2068:140:20",
            "stateMutability": "view",
            "superFunction": 3847,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2924,
              "nodeType": "Block",
              "src": "2484:99:20",
              "statements": [
                {
                  "assignments": [
                    2909
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2909,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 2925,
                      "src": "2490:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2908,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2490:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2913,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 2910,
                      "name": "_tokenOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2856,
                      "src": "2506:11:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 2912,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 2911,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2903,
                      "src": "2518:7:20",
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
                    "src": "2506:20:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2490:36:20"
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
                        "id": 2919,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2915,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2909,
                          "src": "2540:5:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 2917,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2557:1:20",
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
                            "id": 2916,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2549:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2918,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2549:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2540:19:20",
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
                      "id": 2914,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "2532:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2532:28:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2921,
                  "nodeType": "ExpressionStatement",
                  "src": "2532:28:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2922,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2909,
                    "src": "2573:5:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2907,
                  "id": 2923,
                  "nodeType": "Return",
                  "src": "2566:12:20"
                }
              ]
            },
            "documentation": "@dev Gets the owner of the specified token ID\n@param tokenId uint256 ID of the token to query the owner of\n@return owner address currently marked as the owner of the given token ID",
            "id": 2925,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2904,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2903,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2925,
                  "src": "2437:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2902,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2437:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2436:17:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2906,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2925,
                  "src": "2475:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2905,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2475:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2474:9:20"
            },
            "scope": 3377,
            "src": "2420:163:20",
            "stateMutability": "view",
            "superFunction": 3854,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2969,
              "nodeType": "Block",
              "src": "3039:217:20",
              "statements": [
                {
                  "assignments": [
                    2933
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2933,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 2970,
                      "src": "3045:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2932,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3045:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2937,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2935,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2929,
                        "src": "3069:7:20",
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
                      "id": 2934,
                      "name": "ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2925
                      ],
                      "referencedDeclaration": 2925,
                      "src": "3061:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 2936,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3061:16:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3045:32:20"
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
                        "id": 2941,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2939,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2927,
                          "src": "3091:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2940,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2933,
                          "src": "3097:5:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3091:11:20",
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
                      "id": 2938,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "3083:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2942,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3083:20:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2943,
                  "nodeType": "ExpressionStatement",
                  "src": "3083:20:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 2954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2948,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 2945,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4014,
                              "src": "3117:3:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2946,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3117:10:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 2947,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2933,
                            "src": "3131:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3117:19:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 2950,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2933,
                              "src": "3157:5:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 2951,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4014,
                                "src": "3164:3:20",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 2952,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3164:10:20",
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
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 2949,
                            "name": "isApprovedForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3035
                            ],
                            "referencedDeclaration": 3035,
                            "src": "3140:16:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 2953,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3140:35:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "3117:58:20",
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
                      "id": 2944,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "3109:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3109:67:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2956,
                  "nodeType": "ExpressionStatement",
                  "src": "3109:67:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 2957,
                        "name": "_tokenApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2860,
                        "src": "3183:15:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 2959,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 2958,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2929,
                        "src": "3199:7:20",
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
                      "src": "3183:24:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2960,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2927,
                      "src": "3210:2:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3183:29:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2962,
                  "nodeType": "ExpressionStatement",
                  "src": "3183:29:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2964,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2933,
                        "src": "3232:5:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2965,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2927,
                        "src": "3239:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2966,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2929,
                        "src": "3243:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2963,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3832,
                      "src": "3223:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 2967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3223:28:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2968,
                  "nodeType": "EmitStatement",
                  "src": "3218:33:20"
                }
              ]
            },
            "documentation": "@dev Approves another address to transfer the given token ID\nThe zero address indicates there is no approved address.\nThere can only be one approved address per token at a given time.\nCan only be called by the token owner or an approved operator.\n@param to address to be approved for the given token ID\n@param tokenId uint256 ID of the token to be approved",
            "id": 2970,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2927,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2970,
                  "src": "3003:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2926,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3003:7:20",
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
                  "id": 2929,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2970,
                  "src": "3015:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2928,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3015:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3002:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2931,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3039:0:20"
            },
            "scope": 3377,
            "src": "2986:270:20",
            "stateMutability": "nonpayable",
            "superFunction": 3861,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2987,
              "nodeType": "Block",
              "src": "3595:73:20",
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
                            "id": 2979,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2972,
                            "src": "3617:7:20",
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
                          "id": 2978,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3146,
                          "src": "3609:7:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 2980,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3609:16:20",
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
                      "id": 2977,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "3601:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2981,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3601:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2982,
                  "nodeType": "ExpressionStatement",
                  "src": "3601:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 2983,
                      "name": "_tokenApprovals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2860,
                      "src": "3639:15:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 2985,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 2984,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2972,
                      "src": "3655:7:20",
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
                    "src": "3639:24:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2976,
                  "id": 2986,
                  "nodeType": "Return",
                  "src": "3632:31:20"
                }
              ]
            },
            "documentation": "@dev Gets the approved address for a token ID, or zero if no address set\nReverts if the token ID does not exist.\n@param tokenId uint256 ID of the token to query the approval of\n@return address currently approved for the given token ID",
            "id": 2988,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2972,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2988,
                  "src": "3548:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3548:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3547:17:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2975,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2988,
                  "src": "3586:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2974,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3586:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3585:9:20"
            },
            "scope": 3377,
            "src": "3527:141:20",
            "stateMutability": "view",
            "superFunction": 3868,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3018,
              "nodeType": "Block",
              "src": "4007:138:20",
              "statements": [
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
                        "id": 2999,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2996,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2990,
                          "src": "4021:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2997,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4014,
                            "src": "4027:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2998,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4027:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "4021:16:20",
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
                      "id": 2995,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "4013:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4013:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3001,
                  "nodeType": "ExpressionStatement",
                  "src": "4013:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3009,
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
                          "id": 3002,
                          "name": "_operatorApprovals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2870,
                          "src": "4044:18:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 3006,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 3003,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4014,
                            "src": "4063:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3004,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4063:10:20",
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
                        "src": "4044:30:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 3007,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3005,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2990,
                        "src": "4075:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4044:34:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3008,
                      "name": "approved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2992,
                      "src": "4081:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4044:45:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3010,
                  "nodeType": "ExpressionStatement",
                  "src": "4044:45:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3012,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "4115:3:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3013,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4115:10:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3014,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2990,
                        "src": "4127:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3015,
                        "name": "approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2992,
                        "src": "4131:8:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 3011,
                      "name": "ApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3840,
                      "src": "4100:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,bool)"
                      }
                    },
                    "id": 3016,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4100:40:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3017,
                  "nodeType": "EmitStatement",
                  "src": "4095:45:20"
                }
              ]
            },
            "documentation": "@dev Sets or unsets the approval of a given operator\nAn operator is allowed to transfer all tokens of the sender on their behalf\n@param to operator address to set the approval\n@param approved representing the status of the approval to be set",
            "id": 3019,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2993,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2990,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3019,
                  "src": "3973:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2989,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3973:7:20",
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
                  "id": 2992,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3019,
                  "src": "3985:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2991,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3985:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3972:27:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 2994,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4007:0:20"
            },
            "scope": 3377,
            "src": "3946:199:20",
            "stateMutability": "nonpayable",
            "superFunction": 3875,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3034,
              "nodeType": "Block",
              "src": "4564:53:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3028,
                        "name": "_operatorApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2870,
                        "src": "4577:18:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                          "typeString": "mapping(address => mapping(address => bool))"
                        }
                      },
                      "id": 3030,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3029,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3021,
                        "src": "4596:5:20",
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
                      "src": "4577:25:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 3032,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3031,
                      "name": "operator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3023,
                      "src": "4603:8:20",
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
                    "src": "4577:35:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3027,
                  "id": 3033,
                  "nodeType": "Return",
                  "src": "4570:42:20"
                }
              ]
            },
            "documentation": "@dev Tells whether an operator is approved by a given owner\n@param owner owner address which you want to query the approval of\n@param operator operator address which you want to query the approval of\n@return bool whether the given operator is approved by the given owner",
            "id": 3035,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3021,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3035,
                  "src": "4483:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3020,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4483:7:20",
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
                  "id": 3023,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3035,
                  "src": "4502:16:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3022,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4502:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4477:45:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3026,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3035,
                  "src": "4556:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3025,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4556:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4555:6:20"
            },
            "scope": 3377,
            "src": "4452:165:20",
            "stateMutability": "view",
            "superFunction": 3884,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3081,
              "nodeType": "Block",
              "src": "5126:232:20",
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
                              "id": 3046,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4014,
                              "src": "5159:3:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3047,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "5159:10:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3048,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3041,
                            "src": "5171:7:20",
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
                          "id": 3045,
                          "name": "_isApprovedOrOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3178,
                          "src": "5140:18:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) view returns (bool)"
                          }
                        },
                        "id": 3049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5140:39:20",
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
                      "id": 3044,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "5132:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5132:48:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3051,
                  "nodeType": "ExpressionStatement",
                  "src": "5132:48:20"
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
                        "id": 3057,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3053,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3039,
                          "src": "5194:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 3055,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5208:1:20",
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
                            "id": 3054,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5200:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3056,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5200:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "5194:16:20",
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
                      "id": 3052,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "5186:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5186:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3059,
                  "nodeType": "ExpressionStatement",
                  "src": "5186:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3061,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3037,
                        "src": "5233:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3062,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3041,
                        "src": "5239:7:20",
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
                      "id": 3060,
                      "name": "_clearApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3266,
                      "src": "5218:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5218:29:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3064,
                  "nodeType": "ExpressionStatement",
                  "src": "5218:29:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3066,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3037,
                        "src": "5270:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3067,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3041,
                        "src": "5276:7:20",
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
                      "id": 3065,
                      "name": "_removeTokenFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3336,
                      "src": "5253:16:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3068,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5253:31:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3069,
                  "nodeType": "ExpressionStatement",
                  "src": "5253:31:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3071,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3039,
                        "src": "5302:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3072,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3041,
                        "src": "5306:7:20",
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
                      "id": 3070,
                      "name": "_addTokenTo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3301,
                      "src": "5290:11:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5290:24:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3074,
                  "nodeType": "ExpressionStatement",
                  "src": "5290:24:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3076,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3037,
                        "src": "5335:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3077,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3039,
                        "src": "5341:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3078,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3041,
                        "src": "5345:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3075,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3824,
                      "src": "5326:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3079,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5326:27:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3080,
                  "nodeType": "EmitStatement",
                  "src": "5321:32:20"
                }
              ]
            },
            "documentation": "@dev Transfers the ownership of a given token ID to another address\nUsage of this method is discouraged, use `safeTransferFrom` whenever possible\nRequires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3082,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3037,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3082,
                  "src": "5059:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3036,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5059:7:20",
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
                  "id": 3039,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3082,
                  "src": "5077:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3038,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5077:7:20",
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
                  "id": 3041,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3082,
                  "src": "5093:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5093:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5053:59:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3043,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5126:0:20"
            },
            "scope": 3377,
            "src": "5032:326:20",
            "stateMutability": "nonpayable",
            "superFunction": 3893,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3098,
              "nodeType": "Block",
              "src": "6069:95:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3092,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3084,
                        "src": "6137:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3093,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3086,
                        "src": "6143:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3094,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3088,
                        "src": "6147:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 3095,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6156:2:20",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 3091,
                      "name": "safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3099,
                        3126
                      ],
                      "referencedDeclaration": 3126,
                      "src": "6120:16:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 3096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6120:39:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3097,
                  "nodeType": "ExpressionStatement",
                  "src": "6120:39:20"
                }
              ]
            },
            "documentation": "@dev Safely transfers the ownership of a given token ID to another address\nIf the target address is a contract, it must implement `onERC721Received`,\nwhich is called upon a safe transfer, and return the magic value\n`bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\nthe transfer is reverted.\n   * Requires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3099,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3084,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3099,
                  "src": "6002:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3083,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6002:7:20",
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
                  "id": 3086,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3099,
                  "src": "6020:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3085,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6020:7:20",
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
                  "id": 3088,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3099,
                  "src": "6036:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6036:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5996:59:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3090,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6069:0:20"
            },
            "scope": 3377,
            "src": "5971:193:20",
            "stateMutability": "nonpayable",
            "superFunction": 3902,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3125,
              "nodeType": "Block",
              "src": "6958:153:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3111,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3101,
                        "src": "6977:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3112,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3103,
                        "src": "6983:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3113,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3105,
                        "src": "6987:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3110,
                      "name": "transferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3082
                      ],
                      "referencedDeclaration": 3082,
                      "src": "6964:12:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6964:31:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3115,
                  "nodeType": "ExpressionStatement",
                  "src": "6964:31:20"
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
                            "id": 3118,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3101,
                            "src": "7080:4:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3119,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3103,
                            "src": "7086:2:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3120,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3105,
                            "src": "7090:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 3121,
                            "name": "_data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3107,
                            "src": "7099:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 3117,
                          "name": "_checkAndCallSafeTransfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3376,
                          "src": "7054:25:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256,bytes memory) returns (bool)"
                          }
                        },
                        "id": 3122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7054:51:20",
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
                      "id": 3116,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "7046:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7046:60:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3124,
                  "nodeType": "ExpressionStatement",
                  "src": "7046:60:20"
                }
              ]
            },
            "documentation": "@dev Safely transfers the ownership of a given token ID to another address\nIf the target address is a contract, it must implement `onERC721Received`,\nwhich is called upon a safe transfer, and return the magic value\n`bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise,\nthe transfer is reverted.\nRequires the msg sender to be the owner, approved, or operator\n@param from current owner of the token\n@param to address to receive the ownership of the given token ID\n@param tokenId uint256 ID of the token to be transferred\n@param _data bytes data to send along with a safe transfer check",
            "id": 3126,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3101,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3126,
                  "src": "6874:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3100,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6874:7:20",
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
                  "id": 3103,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3126,
                  "src": "6892:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6892:7:20",
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
                  "id": 3105,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3126,
                  "src": "6908:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3104,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6908:7:20",
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
                  "id": 3107,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3126,
                  "src": "6929:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3106,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6929:5:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6868:76:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6958:0:20"
            },
            "scope": 3377,
            "src": "6843:268:20",
            "stateMutability": "nonpayable",
            "superFunction": 3913,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3145,
              "nodeType": "Block",
              "src": "7351:79:20",
              "statements": [
                {
                  "assignments": [
                    3134
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3134,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3146,
                      "src": "7357:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3133,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7357:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3138,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 3135,
                      "name": "_tokenOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2856,
                      "src": "7373:11:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 3137,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 3136,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3128,
                      "src": "7385:7:20",
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
                    "src": "7373:20:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7357:36:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 3139,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3134,
                      "src": "7406:5:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 3141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7423:1:20",
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
                        "id": 3140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7415:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3142,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7415:10:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7406:19:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3132,
                  "id": 3144,
                  "nodeType": "Return",
                  "src": "7399:26:20"
                }
              ]
            },
            "documentation": "@dev Returns whether the specified token exists\n@param tokenId uint256 ID of the token to query the existence of\n@return whether the token exists",
            "id": 3146,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3128,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3146,
                  "src": "7305:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3127,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7305:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7304:17:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3131,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3146,
                  "src": "7345:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3130,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7345:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7344:6:20"
            },
            "scope": 3377,
            "src": "7288:142:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3177,
              "nodeType": "Block",
              "src": "7892:315:20",
              "statements": [
                {
                  "assignments": [
                    3156
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3156,
                      "name": "owner",
                      "nodeType": "VariableDeclaration",
                      "scope": 3178,
                      "src": "7898:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 3155,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7898:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3160,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3158,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3150,
                        "src": "7922:7:20",
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
                      "id": 3157,
                      "name": "ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2925
                      ],
                      "referencedDeclaration": 2925,
                      "src": "7914:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 3159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7914:16:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7898:32:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 3174,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 3169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 3163,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 3161,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3148,
                              "src": "8097:7:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 3162,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3156,
                              "src": "8108:5:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8097:16:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 3168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 3165,
                                  "name": "tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3150,
                                  "src": "8135:7:20",
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
                                "id": 3164,
                                "name": "getApproved",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  2988
                                ],
                                "referencedDeclaration": 2988,
                                "src": "8123:11:20",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                  "typeString": "function (uint256) view returns (address)"
                                }
                              },
                              "id": 3166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8123:20:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 3167,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3148,
                              "src": "8147:7:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "8123:31:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "8097:57:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3171,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3156,
                              "src": "8181:5:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3172,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3148,
                              "src": "8188:7:20",
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
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 3170,
                            "name": "isApprovedForAll",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              3035
                            ],
                            "referencedDeclaration": 3035,
                            "src": "8164:16:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 3173,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8164:32:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "8097:99:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 3175,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8089:113:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3154,
                  "id": 3176,
                  "nodeType": "Return",
                  "src": "8082:120:20"
                }
              ]
            },
            "documentation": "@dev Returns whether the given spender can transfer a given token ID\n@param spender address of the spender to query\n@param tokenId uint256 ID of the token to be transferred\n@return bool whether the msg.sender is approved for the given token ID,\n is an operator of the owner, or is the owner of the token",
            "id": 3178,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_isApprovedOrOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3148,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3178,
                  "src": "7808:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3147,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7808:7:20",
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
                  "id": 3150,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3178,
                  "src": "7829:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3149,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7829:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7802:46:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3153,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3178,
                  "src": "7884:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3152,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7884:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7883:6:20"
            },
            "scope": 3377,
            "src": "7775:432:20",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3206,
              "nodeType": "Block",
              "src": "8507:110:20",
              "statements": [
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
                        "id": 3190,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3186,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3180,
                          "src": "8521:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 3188,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8535:1:20",
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
                            "id": 3187,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8527:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3189,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8527:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "8521:16:20",
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
                      "id": 3185,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "8513:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8513:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3192,
                  "nodeType": "ExpressionStatement",
                  "src": "8513:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3194,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3180,
                        "src": "8556:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3195,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3182,
                        "src": "8560:7:20",
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
                      "id": 3193,
                      "name": "_addTokenTo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3301,
                      "src": "8544:11:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8544:24:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3197,
                  "nodeType": "ExpressionStatement",
                  "src": "8544:24:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 3200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8596:1:20",
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
                          "id": 3199,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8588:7:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 3201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8588:10:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3202,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3180,
                        "src": "8600:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3203,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3182,
                        "src": "8604:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3198,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3824,
                      "src": "8579:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8579:33:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3205,
                  "nodeType": "EmitStatement",
                  "src": "8574:38:20"
                }
              ]
            },
            "documentation": "@dev Internal function to mint a new token\nReverts if the given token ID already exists\n@param to The address that will own the minted token\n@param tokenId uint256 ID of the token to be minted by the msg.sender",
            "id": 3207,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3180,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3207,
                  "src": "8469:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3179,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8469:7:20",
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
                  "id": 3182,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3207,
                  "src": "8481:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3181,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8481:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8468:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3184,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8507:0:20"
            },
            "scope": 3377,
            "src": "8454:163:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3232,
              "nodeType": "Block",
              "src": "8858:126:20",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3215,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3209,
                        "src": "8879:5:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3216,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3211,
                        "src": "8886:7:20",
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
                      "id": 3214,
                      "name": "_clearApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3266,
                      "src": "8864:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8864:30:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3218,
                  "nodeType": "ExpressionStatement",
                  "src": "8864:30:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3220,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3209,
                        "src": "8917:5:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3221,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3211,
                        "src": "8924:7:20",
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
                      "id": 3219,
                      "name": "_removeTokenFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3336,
                      "src": "8900:16:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3222,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8900:32:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3223,
                  "nodeType": "ExpressionStatement",
                  "src": "8900:32:20"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3225,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3209,
                        "src": "8952:5:20",
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
                            "id": 3227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8967:1:20",
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
                          "id": 3226,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8959:7:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 3228,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8959:10:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3229,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3211,
                        "src": "8971:7:20",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3224,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3824,
                      "src": "8943:8:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3230,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8943:36:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3231,
                  "nodeType": "EmitStatement",
                  "src": "8938:41:20"
                }
              ]
            },
            "documentation": "@dev Internal function to burn a specific token\nReverts if the token does not exist\n@param tokenId uint256 ID of the token being burned by the msg.sender",
            "id": 3233,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3209,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3233,
                  "src": "8817:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3208,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8817:7:20",
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
                  "id": 3211,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3233,
                  "src": "8832:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3210,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8832:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8816:32:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8858:0:20"
            },
            "scope": 3377,
            "src": "8802:182:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3265,
              "nodeType": "Block",
              "src": "9309:146:20",
              "statements": [
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
                        "id": 3245,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3242,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3237,
                              "src": "9331:7:20",
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
                            "id": 3241,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              2925
                            ],
                            "referencedDeclaration": 2925,
                            "src": "9323:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 3243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9323:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3244,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3235,
                          "src": "9343:5:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "9323:25:20",
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
                      "id": 3240,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "9315:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9315:34:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3247,
                  "nodeType": "ExpressionStatement",
                  "src": "9315:34:20"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3248,
                        "name": "_tokenApprovals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2860,
                        "src": "9359:15:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3250,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3249,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3237,
                        "src": "9375:7:20",
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
                      "src": "9359:24:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 3252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9395:1:20",
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
                        "id": 3251,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9387:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9387:10:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9359:38:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3264,
                  "nodeType": "IfStatement",
                  "src": "9355:96:20",
                  "trueBody": {
                    "id": 3263,
                    "nodeType": "Block",
                    "src": "9399:52:20",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 3261,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 3255,
                              "name": "_tokenApprovals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2860,
                              "src": "9407:15:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 3257,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 3256,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3237,
                              "src": "9423:7:20",
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
                            "src": "9407:24:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 3259,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9442:1:20",
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
                              "id": 3258,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9434:7:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 3260,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9434:10:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "9407:37:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 3262,
                        "nodeType": "ExpressionStatement",
                        "src": "9407:37:20"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "@dev Internal function to clear current approval of a given token ID\nReverts if the given address is not indeed the owner of the token\n@param owner owner of the token\n@param tokenId uint256 ID of the token to be transferred",
            "id": 3266,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_clearApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3235,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3266,
                  "src": "9268:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3234,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9268:7:20",
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
                  "id": 3237,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3266,
                  "src": "9283:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3236,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9283:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9267:32:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3239,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9309:0:20"
            },
            "scope": 3377,
            "src": "9244:211:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3300,
              "nodeType": "Block",
              "src": "9775:143:20",
              "statements": [
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
                        "id": 3280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3274,
                            "name": "_tokenOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2856,
                            "src": "9789:11:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                              "typeString": "mapping(uint256 => address)"
                            }
                          },
                          "id": 3276,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3275,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3270,
                            "src": "9801:7:20",
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
                          "src": "9789:20:20",
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
                              "id": 3278,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9821:1:20",
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
                            "id": 3277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9813:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 3279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9813:10:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "9789:34:20",
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
                      "id": 3273,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "9781:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9781:43:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3282,
                  "nodeType": "ExpressionStatement",
                  "src": "9781:43:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3283,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2856,
                        "src": "9830:11:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3285,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3284,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3270,
                        "src": "9842:7:20",
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
                      "src": "9830:20:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3286,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3268,
                      "src": "9853:2:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9830:25:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3288,
                  "nodeType": "ExpressionStatement",
                  "src": "9830:25:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3298,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3289,
                        "name": "_ownedTokensCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2864,
                        "src": "9861:17:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3291,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3290,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3268,
                        "src": "9879:2:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "9861:21:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 3296,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9911:1:20",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3292,
                            "name": "_ownedTokensCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2864,
                            "src": "9885:17:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 3294,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3293,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3268,
                            "src": "9903:2:20",
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
                          "src": "9885:21:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2099,
                        "src": "9885:25:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9885:28:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9861:52:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3299,
                  "nodeType": "ExpressionStatement",
                  "src": "9861:52:20"
                }
              ]
            },
            "documentation": "@dev Internal function to add a token ID to the list of a given address\n@param to address representing the new owner of the given token ID\n@param tokenId uint256 ID of the token to be added to the tokens list of the given address",
            "id": 3301,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_addTokenTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3268,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3301,
                  "src": "9737:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3267,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9737:7:20",
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
                  "id": 3270,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3301,
                  "src": "9749:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3269,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9749:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9736:29:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3272,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9775:0:20"
            },
            "scope": 3377,
            "src": "9716:202:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3335,
              "nodeType": "Block",
              "src": "10261:145:20",
              "statements": [
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
                        "id": 3313,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3310,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3305,
                              "src": "10283:7:20",
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
                            "id": 3309,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              2925
                            ],
                            "referencedDeclaration": 2925,
                            "src": "10275:7:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 3311,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10275:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3312,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3303,
                          "src": "10295:4:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "10275:24:20",
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
                      "id": 3308,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "10267:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10267:33:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3315,
                  "nodeType": "ExpressionStatement",
                  "src": "10267:33:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3325,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3316,
                        "name": "_ownedTokensCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2864,
                        "src": "10306:17:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 3318,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3317,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3303,
                        "src": "10324:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10306:23:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 3323,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10360:1:20",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3319,
                            "name": "_ownedTokensCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2864,
                            "src": "10332:17:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 3321,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 3320,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3303,
                            "src": "10350:4:20",
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
                          "src": "10332:23:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2075,
                        "src": "10332:27:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3324,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10332:30:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10306:56:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3326,
                  "nodeType": "ExpressionStatement",
                  "src": "10306:56:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 3327,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2856,
                        "src": "10368:11:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 3329,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 3328,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3305,
                        "src": "10380:7:20",
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
                      "src": "10368:20:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 3331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10399:1:20",
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
                        "id": 3330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10391:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 3332,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10391:10:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10368:33:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 3334,
                  "nodeType": "ExpressionStatement",
                  "src": "10368:33:20"
                }
              ]
            },
            "documentation": "@dev Internal function to remove a token ID from the list of a given address\n@param from address representing the previous owner of the given token ID\n@param tokenId uint256 ID of the token to be removed from the tokens list of the given address",
            "id": 3336,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeTokenFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3303,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3336,
                  "src": "10221:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10221:7:20",
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
                  "id": 3305,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3336,
                  "src": "10235:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3304,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10235:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10220:31:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3307,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10261:0:20"
            },
            "scope": 3377,
            "src": "10195:211:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 3375,
              "nodeType": "Block",
              "src": "11054:198:20",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 3352,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11064:16:20",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 3349,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3340,
                          "src": "11065:2:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 3350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3998,
                        "src": "11065:13:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 3351,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11065:15:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3356,
                  "nodeType": "IfStatement",
                  "src": "11060:48:20",
                  "trueBody": {
                    "id": 3355,
                    "nodeType": "Block",
                    "src": "11082:26:20",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 3353,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11097:4:20",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 3348,
                        "id": 3354,
                        "nodeType": "Return",
                        "src": "11090:11:20"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3358
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3358,
                      "name": "retval",
                      "nodeType": "VariableDeclaration",
                      "scope": 3376,
                      "src": "11113:13:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 3357,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "11113:6:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3369,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3363,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "11173:3:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "11173:10:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3365,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3338,
                        "src": "11185:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3366,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3342,
                        "src": "11191:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3367,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3344,
                        "src": "11200:5:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3360,
                            "name": "to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3340,
                            "src": "11145:2:20",
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
                          "id": 3359,
                          "name": "IERC721Receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3980,
                          "src": "11129:15:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC721Receiver_$3980_$",
                            "typeString": "type(contract IERC721Receiver)"
                          }
                        },
                        "id": 3361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11129:19:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC721Receiver_$3980",
                          "typeString": "contract IERC721Receiver"
                        }
                      },
                      "id": 3362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "onERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3979,
                      "src": "11129:36:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 3368,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11129:77:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11113:93:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 3372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 3370,
                          "name": "retval",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3358,
                          "src": "11220:6:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 3371,
                          "name": "_ERC721_RECEIVED",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2852,
                          "src": "11230:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "11220:26:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 3373,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "11219:28:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3348,
                  "id": 3374,
                  "nodeType": "Return",
                  "src": "11212:35:20"
                }
              ]
            },
            "documentation": "@dev Internal function to invoke `onERC721Received` on a target address\nThe call is not executed if the target address is not a contract\n@param from address representing the previous owner of the given token ID\n@param to target address that will receive the tokens\n@param tokenId uint256 ID of the token to be transferred\n@param _data bytes optional data to send along with the call\n@return whether the call correctly returned the expected magic value",
            "id": 3376,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_checkAndCallSafeTransfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3338,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "10949:12:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3337,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10949:7:20",
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
                  "id": 3340,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "10967:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3339,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10967:7:20",
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
                  "id": 3342,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "10983:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3341,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10983:7:20",
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
                  "id": 3344,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "11004:11:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3343,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11004:5:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "10943:76:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3347,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3376,
                  "src": "11046:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3346,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11046:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "11045:6:20"
            },
            "scope": 3377,
            "src": "10909:343:20",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3378,
        "src": "340:10914:20"
      }
    ],
    "src": "0:11255:20"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.573Z"
}