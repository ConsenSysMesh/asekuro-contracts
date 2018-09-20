export const Migrations = 
{
  "contractName": "Migrations",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "last_completed_migration",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x445df0ac"
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "completed",
          "type": "uint256"
        }
      ],
      "name": "setCompleted",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xfdacd576"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "new_address",
          "type": "address"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x0900f010"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102f8806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a72305820c7f9d6ac62e74b356716484cedbda5d5bdfae14d7ba35f666c78641d0182163b0029",
  "deployedBytecode": "0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a72305820c7f9d6ac62e74b356716484cedbda5d5bdfae14d7ba35f666c78641d0182163b0029",
  "sourceMap": "26:480:2:-;;;115:50;8:9:-1;5:2;;;30:1;27;20:12;5:2;115:50:2;150:10;142:5;;:18;;;;;;;;;;;;;;;;;;26:480;;;;;;",
  "deployedSourceMap": "26:480:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;339:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;339:165:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;74:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;74:36:2;;;;;;;;;;;;;;;;;;;;;;;50:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;50:20:2;;;;;;;;;;;;;;;;;;;;;;;;;;;232:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;232:103:2;;;;;;;;;;;;;;;;;;;;;;;;;;339:165;401:19;215:5;;;;;;;;;;;201:19;;:10;:19;;;197:26;;;434:11;401:45;;452:8;:21;;;474:24;;452:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;452:47:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;452:47:2;;;;197:26;339:165;;:::o;74:36::-;;;;:::o;50:20::-;;;;;;;;;;;;;:::o;232:103::-;215:5;;;;;;;;;;;201:19;;:10;:19;;;197:26;;;321:9;294:24;:36;;;;197:26;232:103;:::o",
  "source": "pragma solidity ^0.4.23;\n\ncontract Migrations {\n  address public owner;\n  uint public last_completed_migration;\n\n  constructor() public {\n    owner = msg.sender;\n  }\n\n  modifier restricted() {\n    if (msg.sender == owner) _;\n  }\n\n  function setCompleted(uint completed) public restricted {\n    last_completed_migration = completed;\n  }\n\n  function upgrade(address new_address) public restricted {\n    Migrations upgraded = Migrations(new_address);\n    upgraded.setCompleted(last_completed_migration);\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/Migrations.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/Migrations.sol",
    "exportedSymbols": {
      "Migrations": [
        550
      ]
    },
    "id": 551,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 495,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 550,
        "linearizedBaseContracts": [
          550
        ],
        "name": "Migrations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 497,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 550,
            "src": "50:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 496,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "50:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 499,
            "name": "last_completed_migration",
            "nodeType": "VariableDeclaration",
            "scope": 550,
            "src": "74:36:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 498,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "74:4:2",
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
              "id": 507,
              "nodeType": "Block",
              "src": "136:29:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 502,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 497,
                      "src": "142:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 503,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4014,
                        "src": "150:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 504,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "150:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "142:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 506,
                  "nodeType": "ExpressionStatement",
                  "src": "142:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 508,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 500,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "126:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 501,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "136:0:2"
            },
            "scope": 550,
            "src": "115:50:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 516,
              "nodeType": "Block",
              "src": "191:37:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 513,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 510,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4014,
                        "src": "201:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "201:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 512,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 497,
                      "src": "215:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "201:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 515,
                  "nodeType": "IfStatement",
                  "src": "197:26:2",
                  "trueBody": {
                    "id": 514,
                    "nodeType": "PlaceholderStatement",
                    "src": "222:1:2"
                  }
                }
              ]
            },
            "documentation": null,
            "id": 517,
            "name": "restricted",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 509,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "188:2:2"
            },
            "src": "169:59:2",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 528,
              "nodeType": "Block",
              "src": "288:47:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 524,
                      "name": "last_completed_migration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 499,
                      "src": "294:24:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 525,
                      "name": "completed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 519,
                      "src": "321:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "294:36:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 527,
                  "nodeType": "ExpressionStatement",
                  "src": "294:36:2"
                }
              ]
            },
            "documentation": null,
            "id": 529,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 522,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 521,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 517,
                  "src": "277:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "277:10:2"
              }
            ],
            "name": "setCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 519,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 529,
                  "src": "254:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 518,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:16:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 523,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "288:0:2"
            },
            "scope": 550,
            "src": "232:103:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 548,
              "nodeType": "Block",
              "src": "395:109:2",
              "statements": [
                {
                  "assignments": [
                    537
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 537,
                      "name": "upgraded",
                      "nodeType": "VariableDeclaration",
                      "scope": 549,
                      "src": "401:19:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Migrations_$550",
                        "typeString": "contract Migrations"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 536,
                        "name": "Migrations",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 550,
                        "src": "401:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$550",
                          "typeString": "contract Migrations"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 541,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 539,
                        "name": "new_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 531,
                        "src": "434:11:2",
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
                      "id": 538,
                      "name": "Migrations",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 550,
                      "src": "423:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Migrations_$550_$",
                        "typeString": "type(contract Migrations)"
                      }
                    },
                    "id": 540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "423:23:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Migrations_$550",
                      "typeString": "contract Migrations"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "401:45:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 545,
                        "name": "last_completed_migration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 499,
                        "src": "474:24:2",
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
                        "id": 542,
                        "name": "upgraded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 537,
                        "src": "452:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$550",
                          "typeString": "contract Migrations"
                        }
                      },
                      "id": 544,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setCompleted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 529,
                      "src": "452:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 546,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "452:47:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 547,
                  "nodeType": "ExpressionStatement",
                  "src": "452:47:2"
                }
              ]
            },
            "documentation": null,
            "id": 549,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 534,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 533,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 517,
                  "src": "384:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "384:10:2"
              }
            ],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 531,
                  "name": "new_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 549,
                  "src": "356:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 530,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "355:21:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 535,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "395:0:2"
            },
            "scope": 550,
            "src": "339:165:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 551,
        "src": "26:480:2"
      }
    ],
    "src": "0:507:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/Migrations.sol",
    "exportedSymbols": {
      "Migrations": [
        550
      ]
    },
    "id": 551,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 495,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 550,
        "linearizedBaseContracts": [
          550
        ],
        "name": "Migrations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 497,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 550,
            "src": "50:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 496,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "50:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 499,
            "name": "last_completed_migration",
            "nodeType": "VariableDeclaration",
            "scope": 550,
            "src": "74:36:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 498,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "74:4:2",
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
              "id": 507,
              "nodeType": "Block",
              "src": "136:29:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 502,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 497,
                      "src": "142:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 503,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4014,
                        "src": "150:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 504,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "150:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "142:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 506,
                  "nodeType": "ExpressionStatement",
                  "src": "142:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 508,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 500,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "126:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 501,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "136:0:2"
            },
            "scope": 550,
            "src": "115:50:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 516,
              "nodeType": "Block",
              "src": "191:37:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 513,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 510,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4014,
                        "src": "201:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "201:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 512,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 497,
                      "src": "215:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "201:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 515,
                  "nodeType": "IfStatement",
                  "src": "197:26:2",
                  "trueBody": {
                    "id": 514,
                    "nodeType": "PlaceholderStatement",
                    "src": "222:1:2"
                  }
                }
              ]
            },
            "documentation": null,
            "id": 517,
            "name": "restricted",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 509,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "188:2:2"
            },
            "src": "169:59:2",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 528,
              "nodeType": "Block",
              "src": "288:47:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 524,
                      "name": "last_completed_migration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 499,
                      "src": "294:24:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 525,
                      "name": "completed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 519,
                      "src": "321:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "294:36:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 527,
                  "nodeType": "ExpressionStatement",
                  "src": "294:36:2"
                }
              ]
            },
            "documentation": null,
            "id": 529,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 522,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 521,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 517,
                  "src": "277:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "277:10:2"
              }
            ],
            "name": "setCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 519,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 529,
                  "src": "254:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 518,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:16:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 523,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "288:0:2"
            },
            "scope": 550,
            "src": "232:103:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 548,
              "nodeType": "Block",
              "src": "395:109:2",
              "statements": [
                {
                  "assignments": [
                    537
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 537,
                      "name": "upgraded",
                      "nodeType": "VariableDeclaration",
                      "scope": 549,
                      "src": "401:19:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Migrations_$550",
                        "typeString": "contract Migrations"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 536,
                        "name": "Migrations",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 550,
                        "src": "401:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$550",
                          "typeString": "contract Migrations"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 541,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 539,
                        "name": "new_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 531,
                        "src": "434:11:2",
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
                      "id": 538,
                      "name": "Migrations",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 550,
                      "src": "423:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Migrations_$550_$",
                        "typeString": "type(contract Migrations)"
                      }
                    },
                    "id": 540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "423:23:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Migrations_$550",
                      "typeString": "contract Migrations"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "401:45:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 545,
                        "name": "last_completed_migration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 499,
                        "src": "474:24:2",
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
                        "id": 542,
                        "name": "upgraded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 537,
                        "src": "452:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$550",
                          "typeString": "contract Migrations"
                        }
                      },
                      "id": 544,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setCompleted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 529,
                      "src": "452:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 546,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "452:47:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 547,
                  "nodeType": "ExpressionStatement",
                  "src": "452:47:2"
                }
              ]
            },
            "documentation": null,
            "id": 549,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 534,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 533,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 517,
                  "src": "384:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "384:10:2"
              }
            ],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 532,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 531,
                  "name": "new_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 549,
                  "src": "356:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 530,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "355:21:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 535,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "395:0:2"
            },
            "scope": 550,
            "src": "339:165:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 551,
        "src": "26:480:2"
      }
    ],
    "src": "0:507:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "1537413714450": {
      "events": {},
      "links": {},
      "address": "0xAcE17641890D5dA1b56C4Ba94e792A9F4479b715",
      "transactionHash": "0x41e2a372c28f9edc8082959e44b7545f21d0fec92a39321332a3f90390cfd049"
    }
  },
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:49.165Z"
}