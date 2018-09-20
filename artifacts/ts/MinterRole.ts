export const MinterRole = 
{
  "contractName": "MinterRole",
  "abi": [
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
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50610032336000610037640100000000026101b2179091906401000000009004565b6100d1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561007357600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6103a6806100e06000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063983b2d561461005c578063986502751461009f578063aa271e1a146100b6575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610111565b005b3480156100ab57600080fd5b506100b461017f565b005b3480156100c257600080fd5b506100f7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610195565b604051808215151515815260200191505060405180910390f35b61011a33610195565b151561012557600080fd5b6101398160006101b290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61019333600061024c90919063ffffffff16565b565b60006101ab8260006102e690919063ffffffff16565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156101ee57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561028857600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561032357600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050929150505600a165627a7a72305820a31a1a7be9fe08f900ce6abcad1bc871718495ca44ec3bff72564bc0d293014d0029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063983b2d561461005c578063986502751461009f578063aa271e1a146100b6575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610111565b005b3480156100ab57600080fd5b506100b461017f565b005b3480156100c257600080fd5b506100f7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610195565b604051808215151515815260200191505060405180910390f35b61011a33610195565b151561012557600080fd5b6101398160006101b290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61019333600061024c90919063ffffffff16565b565b60006101ab8260006102e690919063ffffffff16565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156101ee57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561028857600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561032357600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050929150505600a165627a7a72305820a31a1a7be9fe08f900ce6abcad1bc871718495ca44ec3bff72564bc0d293014d0029",
  "sourceMap": "51:729:10:-;;;232:55;8:9:-1;5:2;;;30:1;27;20:12;5:2;232:55:10;259:23;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;51:729;;245:132:9;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;51:729:10:-;;;;;;;",
  "deployedSourceMap": "51:729:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;468:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:10;;;;;;364:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;468:116;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;588:70::-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;364:100::-;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;245:132:9:-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;657:166::-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../Roles.sol\";\n\n\ncontract MinterRole {\n  using Roles for Roles.Role;\n\n  event MinterAdded(address indexed account);\n  event MinterRemoved(address indexed account);\n\n  Roles.Role private minters;\n\n  constructor() public {\n    minters.add(msg.sender);\n  }\n\n  modifier onlyMinter() {\n    require(isMinter(msg.sender));\n    _;\n  }\n\n  function isMinter(address account) public view returns (bool) {\n    return minters.has(account);\n  }\n\n  function addMinter(address account) public onlyMinter {\n    minters.add(account);\n    emit MinterAdded(account);\n  }\n\n  function renounceMinter() public {\n    minters.remove(msg.sender);\n  }\n\n  function _removeMinter(address account) internal {\n    minters.remove(account);\n    emit MinterRemoved(account);\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/MinterRole.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/MinterRole.sol",
    "exportedSymbols": {
      "MinterRole": [
        1766
      ]
    },
    "id": 1767,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1671,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:10"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/Roles.sol",
        "file": "../Roles.sol",
        "id": 1672,
        "nodeType": "ImportDirective",
        "scope": 1767,
        "sourceUnit": 1670,
        "src": "26:22:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1766,
        "linearizedBaseContracts": [
          1766
        ],
        "name": "MinterRole",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1675,
            "libraryName": {
              "contractScope": null,
              "id": 1673,
              "name": "Roles",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1669,
              "src": "81:5:10",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Roles_$1669",
                "typeString": "library Roles"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "75:27:10",
            "typeName": {
              "contractScope": null,
              "id": 1674,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1597,
              "src": "91:10:10",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            }
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1679,
            "name": "MinterAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1677,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1679,
                  "src": "124:23:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "123:25:10"
            },
            "src": "106:43:10"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1683,
            "name": "MinterRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1681,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1683,
                  "src": "172:23:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1680,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "171:25:10"
            },
            "src": "152:45:10"
          },
          {
            "constant": false,
            "id": 1685,
            "name": "minters",
            "nodeType": "VariableDeclaration",
            "scope": 1766,
            "src": "201:26:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Role_$1597_storage",
              "typeString": "struct Roles.Role"
            },
            "typeName": {
              "contractScope": null,
              "id": 1684,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1597,
              "src": "201:10:10",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1695,
              "nodeType": "Block",
              "src": "253:34:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1691,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "271:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1692,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "271:10:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1688,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "259:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1690,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1621,
                      "src": "259:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "259:23:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1694,
                  "nodeType": "ExpressionStatement",
                  "src": "259:23:10"
                }
              ]
            },
            "documentation": null,
            "id": 1696,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1686,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "253:0:10"
            },
            "scope": 1766,
            "src": "232:55:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1706,
              "nodeType": "Block",
              "src": "313:47:10",
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
                              "id": 1700,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4014,
                              "src": "336:3:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1701,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "336:10:10",
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
                          "id": 1699,
                          "name": "isMinter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1720,
                          "src": "327:8:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1702,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "327:20:10",
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
                      "id": 1698,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "319:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "319:29:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1704,
                  "nodeType": "ExpressionStatement",
                  "src": "319:29:10"
                },
                {
                  "id": 1705,
                  "nodeType": "PlaceholderStatement",
                  "src": "354:1:10"
                }
              ]
            },
            "documentation": null,
            "id": 1707,
            "name": "onlyMinter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1697,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "310:2:10"
            },
            "src": "291:69:10",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1719,
              "nodeType": "Block",
              "src": "426:38:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1716,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1709,
                        "src": "451:7:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1714,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "439:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1715,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "has",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1668,
                      "src": "439:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 1717,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "439:20:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1713,
                  "id": 1718,
                  "nodeType": "Return",
                  "src": "432:27:10"
                }
              ]
            },
            "documentation": null,
            "id": 1720,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1710,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1709,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1720,
                  "src": "382:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "381:17:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1712,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1720,
                  "src": "420:4:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1711,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "419:6:10"
            },
            "scope": 1766,
            "src": "364:100:10",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1737,
              "nodeType": "Block",
              "src": "522:62:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1730,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1722,
                        "src": "540:7:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1727,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "528:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1729,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1621,
                      "src": "528:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1731,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:20:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1732,
                  "nodeType": "ExpressionStatement",
                  "src": "528:20:10"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1734,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1722,
                        "src": "571:7:10",
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
                      "id": 1733,
                      "name": "MinterAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1679,
                      "src": "559:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "559:20:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1736,
                  "nodeType": "EmitStatement",
                  "src": "554:25:10"
                }
              ]
            },
            "documentation": null,
            "id": 1738,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1725,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1724,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1707,
                  "src": "511:10:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "511:10:10"
              }
            ],
            "name": "addMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1722,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "487:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1721,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "486:17:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "522:0:10"
            },
            "scope": 1766,
            "src": "468:116:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1748,
              "nodeType": "Block",
              "src": "621:37:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1744,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "642:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1745,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "642:10:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1741,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "627:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1743,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1645,
                      "src": "627:14:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "627:26:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1747,
                  "nodeType": "ExpressionStatement",
                  "src": "627:26:10"
                }
              ]
            },
            "documentation": null,
            "id": 1749,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "renounceMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1739,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:2:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1740,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "621:0:10"
            },
            "scope": 1766,
            "src": "588:70:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1764,
              "nodeType": "Block",
              "src": "711:67:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1757,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1751,
                        "src": "732:7:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1754,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "717:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1756,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1645,
                      "src": "717:14:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "717:23:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1759,
                  "nodeType": "ExpressionStatement",
                  "src": "717:23:10"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1761,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1751,
                        "src": "765:7:10",
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
                      "id": 1760,
                      "name": "MinterRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1683,
                      "src": "751:13:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "751:22:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1763,
                  "nodeType": "EmitStatement",
                  "src": "746:27:10"
                }
              ]
            },
            "documentation": null,
            "id": 1765,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1751,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1765,
                  "src": "685:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1750,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:17:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:10"
            },
            "scope": 1766,
            "src": "662:116:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1767,
        "src": "51:729:10"
      }
    ],
    "src": "0:781:10"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/MinterRole.sol",
    "exportedSymbols": {
      "MinterRole": [
        1766
      ]
    },
    "id": 1767,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1671,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:10"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/Roles.sol",
        "file": "../Roles.sol",
        "id": 1672,
        "nodeType": "ImportDirective",
        "scope": 1767,
        "sourceUnit": 1670,
        "src": "26:22:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1766,
        "linearizedBaseContracts": [
          1766
        ],
        "name": "MinterRole",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1675,
            "libraryName": {
              "contractScope": null,
              "id": 1673,
              "name": "Roles",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1669,
              "src": "81:5:10",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Roles_$1669",
                "typeString": "library Roles"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "75:27:10",
            "typeName": {
              "contractScope": null,
              "id": 1674,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1597,
              "src": "91:10:10",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            }
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1679,
            "name": "MinterAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1677,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1679,
                  "src": "124:23:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "123:25:10"
            },
            "src": "106:43:10"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1683,
            "name": "MinterRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1681,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1683,
                  "src": "172:23:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1680,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "171:25:10"
            },
            "src": "152:45:10"
          },
          {
            "constant": false,
            "id": 1685,
            "name": "minters",
            "nodeType": "VariableDeclaration",
            "scope": 1766,
            "src": "201:26:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Role_$1597_storage",
              "typeString": "struct Roles.Role"
            },
            "typeName": {
              "contractScope": null,
              "id": 1684,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1597,
              "src": "201:10:10",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1695,
              "nodeType": "Block",
              "src": "253:34:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1691,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "271:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1692,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "271:10:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1688,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "259:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1690,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1621,
                      "src": "259:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "259:23:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1694,
                  "nodeType": "ExpressionStatement",
                  "src": "259:23:10"
                }
              ]
            },
            "documentation": null,
            "id": 1696,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1686,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "253:0:10"
            },
            "scope": 1766,
            "src": "232:55:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1706,
              "nodeType": "Block",
              "src": "313:47:10",
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
                              "id": 1700,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4014,
                              "src": "336:3:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1701,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "336:10:10",
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
                          "id": 1699,
                          "name": "isMinter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1720,
                          "src": "327:8:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1702,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "327:20:10",
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
                      "id": 1698,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "319:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "319:29:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1704,
                  "nodeType": "ExpressionStatement",
                  "src": "319:29:10"
                },
                {
                  "id": 1705,
                  "nodeType": "PlaceholderStatement",
                  "src": "354:1:10"
                }
              ]
            },
            "documentation": null,
            "id": 1707,
            "name": "onlyMinter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1697,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "310:2:10"
            },
            "src": "291:69:10",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1719,
              "nodeType": "Block",
              "src": "426:38:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1716,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1709,
                        "src": "451:7:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1714,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "439:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1715,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "has",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1668,
                      "src": "439:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 1717,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "439:20:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1713,
                  "id": 1718,
                  "nodeType": "Return",
                  "src": "432:27:10"
                }
              ]
            },
            "documentation": null,
            "id": 1720,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1710,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1709,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1720,
                  "src": "382:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "381:17:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1712,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1720,
                  "src": "420:4:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1711,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "419:6:10"
            },
            "scope": 1766,
            "src": "364:100:10",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1737,
              "nodeType": "Block",
              "src": "522:62:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1730,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1722,
                        "src": "540:7:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1727,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "528:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1729,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1621,
                      "src": "528:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1731,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:20:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1732,
                  "nodeType": "ExpressionStatement",
                  "src": "528:20:10"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1734,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1722,
                        "src": "571:7:10",
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
                      "id": 1733,
                      "name": "MinterAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1679,
                      "src": "559:11:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "559:20:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1736,
                  "nodeType": "EmitStatement",
                  "src": "554:25:10"
                }
              ]
            },
            "documentation": null,
            "id": 1738,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1725,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1724,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1707,
                  "src": "511:10:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "511:10:10"
              }
            ],
            "name": "addMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1722,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1738,
                  "src": "487:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1721,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "486:17:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "522:0:10"
            },
            "scope": 1766,
            "src": "468:116:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1748,
              "nodeType": "Block",
              "src": "621:37:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1744,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "642:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1745,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "642:10:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1741,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "627:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1743,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1645,
                      "src": "627:14:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "627:26:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1747,
                  "nodeType": "ExpressionStatement",
                  "src": "627:26:10"
                }
              ]
            },
            "documentation": null,
            "id": 1749,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "renounceMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1739,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:2:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1740,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "621:0:10"
            },
            "scope": 1766,
            "src": "588:70:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1764,
              "nodeType": "Block",
              "src": "711:67:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1757,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1751,
                        "src": "732:7:10",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 1754,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1685,
                        "src": "717:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1756,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1645,
                      "src": "717:14:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "717:23:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1759,
                  "nodeType": "ExpressionStatement",
                  "src": "717:23:10"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1761,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1751,
                        "src": "765:7:10",
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
                      "id": 1760,
                      "name": "MinterRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1683,
                      "src": "751:13:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "751:22:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1763,
                  "nodeType": "EmitStatement",
                  "src": "746:27:10"
                }
              ]
            },
            "documentation": null,
            "id": 1765,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1751,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1765,
                  "src": "685:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1750,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:17:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:10"
            },
            "scope": 1766,
            "src": "662:116:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1767,
        "src": "51:729:10"
      }
    ],
    "src": "0:781:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.555Z"
}