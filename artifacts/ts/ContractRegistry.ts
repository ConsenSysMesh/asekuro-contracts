export const ContractRegistry = 
{
  "contractName": "ContractRegistry",
  "abi": [
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
      "name": "asekuroHub",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd3c0c1ca"
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
          "name": "_asekuroHub",
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
  "bytecode": "0x608060405234801561001057600080fd5b5060405160808061078e83398101806040528101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506105e6806101a86000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631c4dd7d0146100935780636307737b146100ea578063715018a6146101415780637c56bb10146101585780638da5cb5b146101af5780638f32d59b14610206578063d3c0c1ca14610235578063f2fde38b1461028c575b600080fd5b34801561009f57600080fd5b506100a86102cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f657600080fd5b506100ff6102f5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014d57600080fd5b5061015661031b565b005b34801561016457600080fd5b5061016d6103d5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101bb57600080fd5b506101c46103fb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021257600080fd5b5061021b610424565b604051808215151515815260200191505060405180910390f35b34801561024157600080fd5b5061024a61047b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561029857600080fd5b506102cd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104a1565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610323610424565b151561032e57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6104a9610424565b15156104b457600080fd5b6104bd816104c0565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156104fc57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058201f932da1e8306a41d33e42bd8a4625768ad0d8807b8a774b42c7ffeb9c0104120029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631c4dd7d0146100935780636307737b146100ea578063715018a6146101415780637c56bb10146101585780638da5cb5b146101af5780638f32d59b14610206578063d3c0c1ca14610235578063f2fde38b1461028c575b600080fd5b34801561009f57600080fd5b506100a86102cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f657600080fd5b506100ff6102f5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014d57600080fd5b5061015661031b565b005b34801561016457600080fd5b5061016d6103d5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101bb57600080fd5b506101c46103fb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021257600080fd5b5061021b610424565b604051808215151515815260200191505060405180910390f35b34801561024157600080fd5b5061024a61047b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561029857600080fd5b506102cd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104a1565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610323610424565b151561032e57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6104a9610424565b15156104b457600080fd5b6104bd816104c0565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156104fc57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058201f932da1e8306a41d33e42bd8a4625768ad0d8807b8a774b42c7ffeb9c0104120029",
  "sourceMap": "224:579:1:-;;;425:376;8:9:-1;5:2;;;30:1;27;20:12;5:2;425:376:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;578:10:16;569:6;;:19;;;;;;;;;;;;;;;;;;620:11:1;596:10;;:36;;;;;;;;;;;;;;;;;;674:15;642:14;;:48;;;;;;;;;;;;;;;;;;726:12;700:11;;:39;;;;;;;;;;;;;;;;;;779:14;749:13;;:45;;;;;;;;;;;;;;;;;;425:376;;;;224:579;;;;;;",
  "deployedSourceMap": "224:579:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;302:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;302:36:1;;;;;;;;;;;;;;;;;;;;;;;;;;;344:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;344:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;1282:113:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1282:113:16;;;;;;380:34:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;380:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;648:70:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;648:70:16;;;;;;;;;;;;;;;;;;;;;;;;;;;935:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;935:83:16;;;;;;;;;;;;;;;;;;;;;;;;;;;268:28:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;268:28:1;;;;;;;;;;;;;;;;;;;;;;;;;;;1556:101:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1556:101:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;302:36:1;;;;;;;;;;;;;:::o;344:30::-;;;;;;;;;;;;;:::o;1282:113:16:-;833:9;:7;:9::i;:::-;825:18;;;;;;;;1358:6;;;;;;;;;;;1339:26;;;;;;;;;;;;1388:1;1371:6;;:19;;;;;;;;;;;;;;;;;;1282:113::o;380:34:1:-;;;;;;;;;;;;;:::o;648:70:16:-;685:7;707:6;;;;;;;;;;;700:13;;648:70;:::o;935:83::-;974:4;1007:6;;;;;;;;;;;993:20;;:10;:20;;;986:27;;935:83;:::o;268:28:1:-;;;;;;;;;;;;;:::o;1556:101:16:-;833:9;:7;:9::i;:::-;825:18;;;;;;;;1624:28;1643:8;1624:18;:28::i;:::-;1556:101;:::o;1791:169::-;1880:1;1860:22;;:8;:22;;;;1852:31;;;;;;;;1923:8;1894:38;;1915:6;;;;;;;;;;;1894:38;;;;;;;;;;;;1947:8;1938:6;;:17;;;;;;;;;;;;;;;;;;1791:169;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./AsekuroHub.sol\";\nimport \"./PolicyRegistry.sol\";\nimport \"./PolicyToken.sol\";\nimport \"./PremiumRouter.sol\";\n\nimport \"../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol\";\n\ncontract ContractRegistry is Ownable {\n\n    AsekuroHub public asekuroHub;\n    PolicyRegistry public policyRegistry;\n    PolicyToken public policyToken;\n    PremiumRouter public premiumRouter;\n    \n    constructor(\n        address _asekuroHub,\n        address _policyRegistry,\n        address _policyToken,\n        address _premiumRouter\n    )\n        public\n    {\n        asekuroHub = AsekuroHub(_asekuroHub);\n        policyRegistry = PolicyRegistry(_policyRegistry);\n        policyToken = PolicyToken(_policyToken);\n        premiumRouter = PremiumRouter(_premiumRouter);\n    }\n}",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/ContractRegistry.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/ContractRegistry.sol",
    "exportedSymbols": {
      "ContractRegistry": [
        493
      ]
    },
    "id": 494,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 441,
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
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/AsekuroHub.sol",
        "file": "./AsekuroHub.sol",
        "id": 442,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 440,
        "src": "26:26:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
        "file": "./PolicyRegistry.sol",
        "id": 443,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 894,
        "src": "53:30:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyToken.sol",
        "file": "./PolicyToken.sol",
        "id": 444,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 977,
        "src": "84:27:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
        "file": "./PremiumRouter.sol",
        "id": 445,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 1099,
        "src": "112:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 446,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 2224,
        "src": "143:79:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 447,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2223,
              "src": "253:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$2223",
                "typeString": "contract Ownable"
              }
            },
            "id": 448,
            "nodeType": "InheritanceSpecifier",
            "src": "253:7:1"
          }
        ],
        "contractDependencies": [
          2223
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 493,
        "linearizedBaseContracts": [
          493,
          2223
        ],
        "name": "ContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 450,
            "name": "asekuroHub",
            "nodeType": "VariableDeclaration",
            "scope": 493,
            "src": "268:28:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_AsekuroHub_$439",
              "typeString": "contract AsekuroHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 449,
              "name": "AsekuroHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 439,
              "src": "268:10:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AsekuroHub_$439",
                "typeString": "contract AsekuroHub"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 452,
            "name": "policyRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 493,
            "src": "302:36:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyRegistry_$893",
              "typeString": "contract PolicyRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 451,
              "name": "PolicyRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 893,
              "src": "302:14:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                "typeString": "contract PolicyRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 454,
            "name": "policyToken",
            "nodeType": "VariableDeclaration",
            "scope": 493,
            "src": "344:30:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyToken_$976",
              "typeString": "contract PolicyToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 453,
              "name": "PolicyToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 976,
              "src": "344:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyToken_$976",
                "typeString": "contract PolicyToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 456,
            "name": "premiumRouter",
            "nodeType": "VariableDeclaration",
            "scope": 493,
            "src": "380:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PremiumRouter_$1098",
              "typeString": "contract PremiumRouter"
            },
            "typeName": {
              "contractScope": null,
              "id": 455,
              "name": "PremiumRouter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1098,
              "src": "380:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PremiumRouter_$1098",
                "typeString": "contract PremiumRouter"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 491,
              "nodeType": "Block",
              "src": "586:215:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 467,
                      "name": "asekuroHub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 450,
                      "src": "596:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AsekuroHub_$439",
                        "typeString": "contract AsekuroHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 469,
                          "name": "_asekuroHub",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 458,
                          "src": "620:11:1",
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
                        "id": 468,
                        "name": "AsekuroHub",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 439,
                        "src": "609:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AsekuroHub_$439_$",
                          "typeString": "type(contract AsekuroHub)"
                        }
                      },
                      "id": 470,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "609:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AsekuroHub_$439",
                        "typeString": "contract AsekuroHub"
                      }
                    },
                    "src": "596:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AsekuroHub_$439",
                      "typeString": "contract AsekuroHub"
                    }
                  },
                  "id": 472,
                  "nodeType": "ExpressionStatement",
                  "src": "596:36:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 477,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 473,
                      "name": "policyRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 452,
                      "src": "642:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$893",
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
                          "id": 475,
                          "name": "_policyRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 460,
                          "src": "674:15:1",
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
                        "id": 474,
                        "name": "PolicyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 893,
                        "src": "659:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyRegistry_$893_$",
                          "typeString": "type(contract PolicyRegistry)"
                        }
                      },
                      "id": 476,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "659:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "src": "642:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                      "typeString": "contract PolicyRegistry"
                    }
                  },
                  "id": 478,
                  "nodeType": "ExpressionStatement",
                  "src": "642:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 479,
                      "name": "policyToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 454,
                      "src": "700:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyToken_$976",
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
                          "id": 481,
                          "name": "_policyToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 462,
                          "src": "726:12:1",
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
                        "id": 480,
                        "name": "PolicyToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 976,
                        "src": "714:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyToken_$976_$",
                          "typeString": "type(contract PolicyToken)"
                        }
                      },
                      "id": 482,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "714:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyToken_$976",
                        "typeString": "contract PolicyToken"
                      }
                    },
                    "src": "700:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyToken_$976",
                      "typeString": "contract PolicyToken"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "700:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 485,
                      "name": "premiumRouter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 456,
                      "src": "749:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PremiumRouter_$1098",
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
                          "id": 487,
                          "name": "_premiumRouter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 464,
                          "src": "779:14:1",
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
                        "id": 486,
                        "name": "PremiumRouter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1098,
                        "src": "765:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PremiumRouter_$1098_$",
                          "typeString": "type(contract PremiumRouter)"
                        }
                      },
                      "id": 488,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "765:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PremiumRouter_$1098",
                        "typeString": "contract PremiumRouter"
                      }
                    },
                    "src": "749:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PremiumRouter_$1098",
                      "typeString": "contract PremiumRouter"
                    }
                  },
                  "id": 490,
                  "nodeType": "ExpressionStatement",
                  "src": "749:45:1"
                }
              ]
            },
            "documentation": null,
            "id": 492,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 458,
                  "name": "_asekuroHub",
                  "nodeType": "VariableDeclaration",
                  "scope": 492,
                  "src": "446:19:1",
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
                    "src": "446:7:1",
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
                  "scope": 492,
                  "src": "475:23:1",
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
                    "src": "475:7:1",
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
                  "scope": 492,
                  "src": "508:20:1",
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
                    "src": "508:7:1",
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
                  "scope": 492,
                  "src": "538:22:1",
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
                    "src": "538:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "436:130:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 466,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "586:0:1"
            },
            "scope": 493,
            "src": "425:376:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 494,
        "src": "224:579:1"
      }
    ],
    "src": "0:803:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/ContractRegistry.sol",
    "exportedSymbols": {
      "ContractRegistry": [
        493
      ]
    },
    "id": 494,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 441,
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
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/AsekuroHub.sol",
        "file": "./AsekuroHub.sol",
        "id": 442,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 440,
        "src": "26:26:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
        "file": "./PolicyRegistry.sol",
        "id": 443,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 894,
        "src": "53:30:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyToken.sol",
        "file": "./PolicyToken.sol",
        "id": 444,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 977,
        "src": "84:27:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
        "file": "./PremiumRouter.sol",
        "id": 445,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 1099,
        "src": "112:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 446,
        "nodeType": "ImportDirective",
        "scope": 494,
        "sourceUnit": 2224,
        "src": "143:79:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 447,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2223,
              "src": "253:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$2223",
                "typeString": "contract Ownable"
              }
            },
            "id": 448,
            "nodeType": "InheritanceSpecifier",
            "src": "253:7:1"
          }
        ],
        "contractDependencies": [
          2223
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 493,
        "linearizedBaseContracts": [
          493,
          2223
        ],
        "name": "ContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 450,
            "name": "asekuroHub",
            "nodeType": "VariableDeclaration",
            "scope": 493,
            "src": "268:28:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_AsekuroHub_$439",
              "typeString": "contract AsekuroHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 449,
              "name": "AsekuroHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 439,
              "src": "268:10:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AsekuroHub_$439",
                "typeString": "contract AsekuroHub"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 452,
            "name": "policyRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 493,
            "src": "302:36:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyRegistry_$893",
              "typeString": "contract PolicyRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 451,
              "name": "PolicyRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 893,
              "src": "302:14:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                "typeString": "contract PolicyRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 454,
            "name": "policyToken",
            "nodeType": "VariableDeclaration",
            "scope": 493,
            "src": "344:30:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyToken_$976",
              "typeString": "contract PolicyToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 453,
              "name": "PolicyToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 976,
              "src": "344:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyToken_$976",
                "typeString": "contract PolicyToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 456,
            "name": "premiumRouter",
            "nodeType": "VariableDeclaration",
            "scope": 493,
            "src": "380:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PremiumRouter_$1098",
              "typeString": "contract PremiumRouter"
            },
            "typeName": {
              "contractScope": null,
              "id": 455,
              "name": "PremiumRouter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1098,
              "src": "380:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PremiumRouter_$1098",
                "typeString": "contract PremiumRouter"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 491,
              "nodeType": "Block",
              "src": "586:215:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 467,
                      "name": "asekuroHub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 450,
                      "src": "596:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AsekuroHub_$439",
                        "typeString": "contract AsekuroHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 469,
                          "name": "_asekuroHub",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 458,
                          "src": "620:11:1",
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
                        "id": 468,
                        "name": "AsekuroHub",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 439,
                        "src": "609:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AsekuroHub_$439_$",
                          "typeString": "type(contract AsekuroHub)"
                        }
                      },
                      "id": 470,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "609:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_AsekuroHub_$439",
                        "typeString": "contract AsekuroHub"
                      }
                    },
                    "src": "596:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_AsekuroHub_$439",
                      "typeString": "contract AsekuroHub"
                    }
                  },
                  "id": 472,
                  "nodeType": "ExpressionStatement",
                  "src": "596:36:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 477,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 473,
                      "name": "policyRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 452,
                      "src": "642:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$893",
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
                          "id": 475,
                          "name": "_policyRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 460,
                          "src": "674:15:1",
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
                        "id": 474,
                        "name": "PolicyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 893,
                        "src": "659:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyRegistry_$893_$",
                          "typeString": "type(contract PolicyRegistry)"
                        }
                      },
                      "id": 476,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "659:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "src": "642:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                      "typeString": "contract PolicyRegistry"
                    }
                  },
                  "id": 478,
                  "nodeType": "ExpressionStatement",
                  "src": "642:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 479,
                      "name": "policyToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 454,
                      "src": "700:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyToken_$976",
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
                          "id": 481,
                          "name": "_policyToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 462,
                          "src": "726:12:1",
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
                        "id": 480,
                        "name": "PolicyToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 976,
                        "src": "714:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyToken_$976_$",
                          "typeString": "type(contract PolicyToken)"
                        }
                      },
                      "id": 482,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "714:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyToken_$976",
                        "typeString": "contract PolicyToken"
                      }
                    },
                    "src": "700:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyToken_$976",
                      "typeString": "contract PolicyToken"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "700:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 489,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 485,
                      "name": "premiumRouter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 456,
                      "src": "749:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PremiumRouter_$1098",
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
                          "id": 487,
                          "name": "_premiumRouter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 464,
                          "src": "779:14:1",
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
                        "id": 486,
                        "name": "PremiumRouter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1098,
                        "src": "765:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PremiumRouter_$1098_$",
                          "typeString": "type(contract PremiumRouter)"
                        }
                      },
                      "id": 488,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "765:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PremiumRouter_$1098",
                        "typeString": "contract PremiumRouter"
                      }
                    },
                    "src": "749:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PremiumRouter_$1098",
                      "typeString": "contract PremiumRouter"
                    }
                  },
                  "id": 490,
                  "nodeType": "ExpressionStatement",
                  "src": "749:45:1"
                }
              ]
            },
            "documentation": null,
            "id": 492,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 458,
                  "name": "_asekuroHub",
                  "nodeType": "VariableDeclaration",
                  "scope": 492,
                  "src": "446:19:1",
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
                    "src": "446:7:1",
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
                  "scope": 492,
                  "src": "475:23:1",
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
                    "src": "475:7:1",
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
                  "scope": 492,
                  "src": "508:20:1",
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
                    "src": "508:7:1",
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
                  "scope": 492,
                  "src": "538:22:1",
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
                    "src": "538:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "436:130:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 466,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "586:0:1"
            },
            "scope": 493,
            "src": "425:376:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 494,
        "src": "224:579:1"
      }
    ],
    "src": "0:803:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "1537413714450": {
      "events": {},
      "links": {},
      "address": "0xe12bAFca9C1C8486dd14e3Ab6dc431b77bEc816C",
      "transactionHash": "0xfa5500eadb97447b2d2b9487e7b2545ae3b483f00afcbd4711f9775ba69c7c5d"
    }
  },
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:48.921Z"
}