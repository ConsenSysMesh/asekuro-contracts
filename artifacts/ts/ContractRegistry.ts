export const ContractRegistry = 
{
  "contractName": "ContractRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "asekuroBroker",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x132c7a7c"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "policyRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1c4dd7d0"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "policyToken",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6307737b"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x715018a6"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "premiumRouter",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x7c56bb10"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8da5cb5b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8f32d59b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9d23c4c7"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf2fde38b"
    },
    {
      "inputs": [
        {
          "name": "_asekuroBroker",
          "type": "address"
        },
        {
          "name": "_policyRegistry",
          "type": "address"
        },
        {
          "name": "_policyToken",
          "type": "address"
        },
        {
          "name": "_premiumRouter",
          "type": "address"
        },
        {
          "name": "_tokenRegistry",
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
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event",
      "signature": "0xf8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c64820"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event",
      "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160a0806108628339810180604052810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505061066e806101f46000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063132c7a7c1461009e5780631c4dd7d0146100f55780636307737b1461014c578063715018a6146101a35780637c56bb10146101ba5780638da5cb5b146102115780638f32d59b146102685780639d23c4c714610297578063f2fde38b146102ee575b600080fd5b3480156100aa57600080fd5b506100b3610331565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010157600080fd5b5061010a610357565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015857600080fd5b5061016161037d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101af57600080fd5b506101b86103a3565b005b3480156101c657600080fd5b506101cf61045d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021d57600080fd5b50610226610483565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027457600080fd5b5061027d6104ac565b604051808215151515815260200191505060405180910390f35b3480156102a357600080fd5b506102ac610503565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102fa57600080fd5b5061032f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610529565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103ab6104ac565b15156103b657600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6105316104ac565b151561053c57600080fd5b61054581610548565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561058457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a7230582063faa9bd8da5b5d6acb6b1ff27ffb85560ccb0c5f122732af2b838928808bddb0029",
  "deployedBytecode": "0x608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063132c7a7c1461009e5780631c4dd7d0146100f55780636307737b1461014c578063715018a6146101a35780637c56bb10146101ba5780638da5cb5b146102115780638f32d59b146102685780639d23c4c714610297578063f2fde38b146102ee575b600080fd5b3480156100aa57600080fd5b506100b3610331565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010157600080fd5b5061010a610357565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015857600080fd5b5061016161037d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101af57600080fd5b506101b86103a3565b005b3480156101c657600080fd5b506101cf61045d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021d57600080fd5b50610226610483565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027457600080fd5b5061027d6104ac565b604051808215151515815260200191505060405180910390f35b3480156102a357600080fd5b506102ac610503565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102fa57600080fd5b5061032f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610529565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103ab6104ac565b15156103b657600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6105316104ac565b151561053c57600080fd5b61054581610548565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561058457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a7230582063faa9bd8da5b5d6acb6b1ff27ffb85560ccb0c5f122732af2b838928808bddb0029",
  "sourceMap": "257:724:1:-;;;504:475;8:9:-1;5:2;;;30:1;27;20:12;5:2;504:475:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;578:10:17;569:6;;:19;;;;;;;;;;;;;;;;;;740:14:1;710:13;;:45;;;;;;;;;;;;;;;;;;797:15;765:14;;:48;;;;;;;;;;;;;;;;;;849:12;823:11;;:39;;;;;;;;;;;;;;;;;;902:14;872:13;;:45;;;;;;;;;;;;;;;;;;957:14;927:13;;:45;;;;;;;;;;;;;;;;;;504:475;;;;;257:724;;;;;;",
  "deployedSourceMap": "257:724:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;301:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;301:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;341:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;341:36:1;;;;;;;;;;;;;;;;;;;;;;;;;;;383:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;383:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;1282:113:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1282:113:17;;;;;;419:34:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;419:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;648:70:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;648:70:17;;;;;;;;;;;;;;;;;;;;;;;;;;;935:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;935:83:17;;;;;;;;;;;;;;;;;;;;;;;;;;;459:34:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;459:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;1556:101:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1556:101:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;301:34:1;;;;;;;;;;;;;:::o;341:36::-;;;;;;;;;;;;;:::o;383:30::-;;;;;;;;;;;;;:::o;1282:113:17:-;833:9;:7;:9::i;:::-;825:18;;;;;;;;1358:6;;;;;;;;;;;1339:26;;;;;;;;;;;;1388:1;1371:6;;:19;;;;;;;;;;;;;;;;;;1282:113::o;419:34:1:-;;;;;;;;;;;;;:::o;648:70:17:-;685:7;707:6;;;;;;;;;;;700:13;;648:70;:::o;935:83::-;974:4;1007:6;;;;;;;;;;;993:20;;:10;:20;;;986:27;;935:83;:::o;459:34:1:-;;;;;;;;;;;;;:::o;1556:101:17:-;833:9;:7;:9::i;:::-;825:18;;;;;;;;1624:28;1643:8;1624:18;:28::i;:::-;1556:101;:::o;1791:169::-;1880:1;1860:22;;:8;:22;;;;1852:31;;;;;;;;1923:8;1894:38;;1915:6;;;;;;;;;;;1894:38;;;;;;;;;;;;1947:8;1938:6;;:17;;;;;;;;;;;;;;;;;;1791:169;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./AsekuroBroker.sol\";\nimport \"./PolicyRegistry.sol\";\nimport \"./PolicyToken.sol\";\nimport \"./PremiumRouter.sol\";\nimport \"./TokenRegistry.sol\";\n\nimport \"../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol\";\n\ncontract ContractRegistry is Ownable {\n\n    AsekuroBroker public asekuroBroker;\n    PolicyRegistry public policyRegistry;\n    PolicyToken public policyToken;\n    PremiumRouter public premiumRouter;\n    TokenRegistry public tokenRegistry;\n    \n    constructor(\n        address _asekuroBroker,\n        address _policyRegistry,\n        address _policyToken,\n        address _premiumRouter,\n        address _tokenRegistry\n    )\n        public\n    {\n        asekuroBroker = AsekuroBroker(_asekuroBroker);\n        policyRegistry = PolicyRegistry(_policyRegistry);\n        policyToken = PolicyToken(_policyToken);\n        premiumRouter = PremiumRouter(_premiumRouter);\n        tokenRegistry = TokenRegistry(_tokenRegistry);\n    }\n}",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/ContractRegistry.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/ContractRegistry.sol",
    "exportedSymbols": {
      "ContractRegistry": [
        501
      ]
    },
    "id": 502,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 438,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/AsekuroBroker.sol",
        "file": "./AsekuroBroker.sol",
        "id": 439,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 437,
        "src": "26:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
        "file": "./PolicyRegistry.sol",
        "id": 440,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 859,
        "src": "56:30:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyToken.sol",
        "file": "./PolicyToken.sol",
        "id": 441,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 994,
        "src": "87:27:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
        "file": "./PremiumRouter.sol",
        "id": 442,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 1116,
        "src": "115:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/TokenRegistry.sol",
        "file": "./TokenRegistry.sol",
        "id": 443,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 1363,
        "src": "145:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 444,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 2775,
        "src": "176:79:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 445,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2774,
              "src": "286:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$2774",
                "typeString": "contract Ownable"
              }
            },
            "id": 446,
            "nodeType": "InheritanceSpecifier",
            "src": "286:7:1"
          }
        ],
        "contractDependencies": [
          2774
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 501,
        "linearizedBaseContracts": [
          501,
          2774
        ],
        "name": "ContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 448,
            "name": "asekuroBroker",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "301:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_AsekuroBroker_$436",
              "typeString": "contract AsekuroBroker"
            },
            "typeName": {
              "contractScope": null,
              "id": 447,
              "name": "AsekuroBroker",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 436,
              "src": "301:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AsekuroBroker_$436",
                "typeString": "contract AsekuroBroker"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 450,
            "name": "policyRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "341:36:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyRegistry_$858",
              "typeString": "contract PolicyRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 449,
              "name": "PolicyRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 858,
              "src": "341:14:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                "typeString": "contract PolicyRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 452,
            "name": "policyToken",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "383:30:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyToken_$993",
              "typeString": "contract PolicyToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 451,
              "name": "PolicyToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 993,
              "src": "383:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyToken_$993",
                "typeString": "contract PolicyToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 454,
            "name": "premiumRouter",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "419:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PremiumRouter_$1115",
              "typeString": "contract PremiumRouter"
            },
            "typeName": {
              "contractScope": null,
              "id": 453,
              "name": "PremiumRouter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1115,
              "src": "419:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PremiumRouter_$1115",
                "typeString": "contract PremiumRouter"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 456,
            "name": "tokenRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "459:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_TokenRegistry_$1362",
              "typeString": "contract TokenRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 455,
              "name": "TokenRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1362,
              "src": "459:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenRegistry_$1362",
                "typeString": "contract TokenRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 499,
              "nodeType": "Block",
              "src": "700:279:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 469,
                      "name": "asekuroBroker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 448,
                      "src": "710:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AsekuroBroker_$436",
                        "typeString": "contract AsekuroBroker"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 471,
                          "name": "_asekuroBroker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 458,
                          "src": "740:14:1",
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
                        "id": 470,
                        "name": "AsekuroBroker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 436,
                        "src": "726:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AsekuroBroker_$436_$",
                          "typeString": "type(contract AsekuroBroker)"
                        }
                      },
                      "id": 472,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "726:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AsekuroBroker_$436",
                        "typeString": "contract AsekuroBroker"
                      }
                    },
                    "src": "710:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AsekuroBroker_$436",
                      "typeString": "contract AsekuroBroker"
                    }
                  },
                  "id": 474,
                  "nodeType": "ExpressionStatement",
                  "src": "710:45:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 475,
                      "name": "policyRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 450,
                      "src": "765:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 477,
                          "name": "_policyRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 460,
                          "src": "797:15:1",
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
                        "id": 476,
                        "name": "PolicyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 858,
                        "src": "782:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyRegistry_$858_$",
                          "typeString": "type(contract PolicyRegistry)"
                        }
                      },
                      "id": 478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "782:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "src": "765:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                      "typeString": "contract PolicyRegistry"
                    }
                  },
                  "id": 480,
                  "nodeType": "ExpressionStatement",
                  "src": "765:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 485,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 481,
                      "name": "policyToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 452,
                      "src": "823:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyToken_$993",
                        "typeString": "contract PolicyToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 483,
                          "name": "_policyToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 462,
                          "src": "849:12:1",
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
                        "id": 482,
                        "name": "PolicyToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 993,
                        "src": "837:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyToken_$993_$",
                          "typeString": "type(contract PolicyToken)"
                        }
                      },
                      "id": 484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "837:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyToken_$993",
                        "typeString": "contract PolicyToken"
                      }
                    },
                    "src": "823:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyToken_$993",
                      "typeString": "contract PolicyToken"
                    }
                  },
                  "id": 486,
                  "nodeType": "ExpressionStatement",
                  "src": "823:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 487,
                      "name": "premiumRouter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 454,
                      "src": "872:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PremiumRouter_$1115",
                        "typeString": "contract PremiumRouter"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 489,
                          "name": "_premiumRouter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 464,
                          "src": "902:14:1",
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
                        "id": 488,
                        "name": "PremiumRouter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1115,
                        "src": "888:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PremiumRouter_$1115_$",
                          "typeString": "type(contract PremiumRouter)"
                        }
                      },
                      "id": 490,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "888:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PremiumRouter_$1115",
                        "typeString": "contract PremiumRouter"
                      }
                    },
                    "src": "872:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PremiumRouter_$1115",
                      "typeString": "contract PremiumRouter"
                    }
                  },
                  "id": 492,
                  "nodeType": "ExpressionStatement",
                  "src": "872:45:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 493,
                      "name": "tokenRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 456,
                      "src": "927:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenRegistry_$1362",
                        "typeString": "contract TokenRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 495,
                          "name": "_tokenRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 466,
                          "src": "957:14:1",
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
                        "id": 494,
                        "name": "TokenRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1362,
                        "src": "943:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TokenRegistry_$1362_$",
                          "typeString": "type(contract TokenRegistry)"
                        }
                      },
                      "id": 496,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "943:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenRegistry_$1362",
                        "typeString": "contract TokenRegistry"
                      }
                    },
                    "src": "927:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_TokenRegistry_$1362",
                      "typeString": "contract TokenRegistry"
                    }
                  },
                  "id": 498,
                  "nodeType": "ExpressionStatement",
                  "src": "927:45:1"
                }
              ]
            },
            "documentation": null,
            "id": 500,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 458,
                  "name": "_asekuroBroker",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "525:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:7:1",
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
                  "id": 460,
                  "name": "_policyRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "557:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 459,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:1",
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
                  "id": 462,
                  "name": "_policyToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "590:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 461,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "590:7:1",
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
                  "id": 464,
                  "name": "_premiumRouter",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "620:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 463,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "620:7:1",
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
                  "id": 466,
                  "name": "_tokenRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "652:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 465,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "652:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "515:165:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 468,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "700:0:1"
            },
            "scope": 501,
            "src": "504:475:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 502,
        "src": "257:724:1"
      }
    ],
    "src": "0:981:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/ContractRegistry.sol",
    "exportedSymbols": {
      "ContractRegistry": [
        501
      ]
    },
    "id": 502,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 438,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/AsekuroBroker.sol",
        "file": "./AsekuroBroker.sol",
        "id": 439,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 437,
        "src": "26:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
        "file": "./PolicyRegistry.sol",
        "id": 440,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 859,
        "src": "56:30:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyToken.sol",
        "file": "./PolicyToken.sol",
        "id": 441,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 994,
        "src": "87:27:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
        "file": "./PremiumRouter.sol",
        "id": 442,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 1116,
        "src": "115:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/TokenRegistry.sol",
        "file": "./TokenRegistry.sol",
        "id": 443,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 1363,
        "src": "145:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 444,
        "nodeType": "ImportDirective",
        "scope": 502,
        "sourceUnit": 2775,
        "src": "176:79:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 445,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2774,
              "src": "286:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$2774",
                "typeString": "contract Ownable"
              }
            },
            "id": 446,
            "nodeType": "InheritanceSpecifier",
            "src": "286:7:1"
          }
        ],
        "contractDependencies": [
          2774
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 501,
        "linearizedBaseContracts": [
          501,
          2774
        ],
        "name": "ContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 448,
            "name": "asekuroBroker",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "301:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_AsekuroBroker_$436",
              "typeString": "contract AsekuroBroker"
            },
            "typeName": {
              "contractScope": null,
              "id": 447,
              "name": "AsekuroBroker",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 436,
              "src": "301:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AsekuroBroker_$436",
                "typeString": "contract AsekuroBroker"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 450,
            "name": "policyRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "341:36:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyRegistry_$858",
              "typeString": "contract PolicyRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 449,
              "name": "PolicyRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 858,
              "src": "341:14:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                "typeString": "contract PolicyRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 452,
            "name": "policyToken",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "383:30:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyToken_$993",
              "typeString": "contract PolicyToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 451,
              "name": "PolicyToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 993,
              "src": "383:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyToken_$993",
                "typeString": "contract PolicyToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 454,
            "name": "premiumRouter",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "419:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PremiumRouter_$1115",
              "typeString": "contract PremiumRouter"
            },
            "typeName": {
              "contractScope": null,
              "id": 453,
              "name": "PremiumRouter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1115,
              "src": "419:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PremiumRouter_$1115",
                "typeString": "contract PremiumRouter"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 456,
            "name": "tokenRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 501,
            "src": "459:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_TokenRegistry_$1362",
              "typeString": "contract TokenRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 455,
              "name": "TokenRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1362,
              "src": "459:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenRegistry_$1362",
                "typeString": "contract TokenRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 499,
              "nodeType": "Block",
              "src": "700:279:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 469,
                      "name": "asekuroBroker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 448,
                      "src": "710:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AsekuroBroker_$436",
                        "typeString": "contract AsekuroBroker"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 471,
                          "name": "_asekuroBroker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 458,
                          "src": "740:14:1",
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
                        "id": 470,
                        "name": "AsekuroBroker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 436,
                        "src": "726:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AsekuroBroker_$436_$",
                          "typeString": "type(contract AsekuroBroker)"
                        }
                      },
                      "id": 472,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "726:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AsekuroBroker_$436",
                        "typeString": "contract AsekuroBroker"
                      }
                    },
                    "src": "710:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AsekuroBroker_$436",
                      "typeString": "contract AsekuroBroker"
                    }
                  },
                  "id": 474,
                  "nodeType": "ExpressionStatement",
                  "src": "710:45:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 475,
                      "name": "policyRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 450,
                      "src": "765:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 477,
                          "name": "_policyRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 460,
                          "src": "797:15:1",
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
                        "id": 476,
                        "name": "PolicyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 858,
                        "src": "782:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyRegistry_$858_$",
                          "typeString": "type(contract PolicyRegistry)"
                        }
                      },
                      "id": 478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "782:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "src": "765:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                      "typeString": "contract PolicyRegistry"
                    }
                  },
                  "id": 480,
                  "nodeType": "ExpressionStatement",
                  "src": "765:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 485,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 481,
                      "name": "policyToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 452,
                      "src": "823:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyToken_$993",
                        "typeString": "contract PolicyToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 483,
                          "name": "_policyToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 462,
                          "src": "849:12:1",
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
                        "id": 482,
                        "name": "PolicyToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 993,
                        "src": "837:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyToken_$993_$",
                          "typeString": "type(contract PolicyToken)"
                        }
                      },
                      "id": 484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "837:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyToken_$993",
                        "typeString": "contract PolicyToken"
                      }
                    },
                    "src": "823:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyToken_$993",
                      "typeString": "contract PolicyToken"
                    }
                  },
                  "id": 486,
                  "nodeType": "ExpressionStatement",
                  "src": "823:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 487,
                      "name": "premiumRouter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 454,
                      "src": "872:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PremiumRouter_$1115",
                        "typeString": "contract PremiumRouter"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 489,
                          "name": "_premiumRouter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 464,
                          "src": "902:14:1",
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
                        "id": 488,
                        "name": "PremiumRouter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1115,
                        "src": "888:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PremiumRouter_$1115_$",
                          "typeString": "type(contract PremiumRouter)"
                        }
                      },
                      "id": 490,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "888:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PremiumRouter_$1115",
                        "typeString": "contract PremiumRouter"
                      }
                    },
                    "src": "872:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PremiumRouter_$1115",
                      "typeString": "contract PremiumRouter"
                    }
                  },
                  "id": 492,
                  "nodeType": "ExpressionStatement",
                  "src": "872:45:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 493,
                      "name": "tokenRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 456,
                      "src": "927:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenRegistry_$1362",
                        "typeString": "contract TokenRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 495,
                          "name": "_tokenRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 466,
                          "src": "957:14:1",
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
                        "id": 494,
                        "name": "TokenRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1362,
                        "src": "943:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TokenRegistry_$1362_$",
                          "typeString": "type(contract TokenRegistry)"
                        }
                      },
                      "id": 496,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "943:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenRegistry_$1362",
                        "typeString": "contract TokenRegistry"
                      }
                    },
                    "src": "927:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_TokenRegistry_$1362",
                      "typeString": "contract TokenRegistry"
                    }
                  },
                  "id": 498,
                  "nodeType": "ExpressionStatement",
                  "src": "927:45:1"
                }
              ]
            },
            "documentation": null,
            "id": 500,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 458,
                  "name": "_asekuroBroker",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "525:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:7:1",
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
                  "id": 460,
                  "name": "_policyRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "557:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 459,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:1",
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
                  "id": 462,
                  "name": "_policyToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "590:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 461,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "590:7:1",
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
                  "id": 464,
                  "name": "_premiumRouter",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "620:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 463,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "620:7:1",
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
                  "id": 466,
                  "name": "_tokenRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 500,
                  "src": "652:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 465,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "652:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "515:165:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 468,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "700:0:1"
            },
            "scope": 501,
            "src": "504:475:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 502,
        "src": "257:724:1"
      }
    ],
    "src": "0:981:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {
    "1539960000103": {
      "events": {},
      "links": {},
      "address": "0x98cf61223a22eA9edDC7F7405A257E5b7faEAB8B",
      "transactionHash": "0x28f611e5bbc8f77af8a9a307826fa31113395d2d60cc485eca0f3c04d26218d8"
    },
    "1539979141293": {
      "events": {},
      "links": {},
      "address": "0xF76C509111f35669F7B7C0e8030Bba13312A5Dc9",
      "transactionHash": "0x84c751c57c2f5a963a8fdac6813bdc221147a6b163419897b0f5fb04f6a619c1"
    }
  },
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:08.081Z"
}