export const PauserRole = 
{
  "contractName": "PauserRole",
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
      "name": "PauserAdded",
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
      "name": "PauserRemoved",
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
      "name": "isPauser",
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
      "name": "addPauser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renouncePauser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50610032336000610037640100000000026102e0179091906401000000009004565b6100d1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561007357600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6103a6806100e06000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806346fbf68e1461005c5780636ef8d66d146100b757806382dc1ec4146100ce575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610111565b604051808215151515815260200191505060405180910390f35b3480156100c357600080fd5b506100cc61012e565b005b3480156100da57600080fd5b5061010f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610144565b005b60006101278260006101b290919063ffffffff16565b9050919050565b61014233600061024690919063ffffffff16565b565b61014d33610111565b151561015857600080fd5b61016c8160006102e090919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156101ef57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561028257600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561031c57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a723058203023161b9dcf098d52a425083a05da72e5b73bfec5c010246b9c28935a3a5a190029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806346fbf68e1461005c5780636ef8d66d146100b757806382dc1ec4146100ce575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610111565b604051808215151515815260200191505060405180910390f35b3480156100c357600080fd5b506100cc61012e565b005b3480156100da57600080fd5b5061010f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610144565b005b60006101278260006101b290919063ffffffff16565b9050919050565b61014233600061024690919063ffffffff16565b565b61014d33610111565b151561015857600080fd5b61016c8160006102e090919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156101ef57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561028257600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561031c57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a723058203023161b9dcf098d52a425083a05da72e5b73bfec5c010246b9c28935a3a5a190029",
  "sourceMap": "51:729:11:-;;;232:55;8:9:-1;5:2;;;30:1;27;20:12;5:2;232:55:11;259:23;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;51:729;;245:132:9;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;51:729:11:-;;;;;;;",
  "deployedSourceMap": "51:729:11:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:11;;;;;;468:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:100;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;588:70::-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;468:116::-;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;657:166:9:-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;245:132::-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../Roles.sol\";\n\n\ncontract PauserRole {\n  using Roles for Roles.Role;\n\n  event PauserAdded(address indexed account);\n  event PauserRemoved(address indexed account);\n\n  Roles.Role private pausers;\n\n  constructor() public {\n    pausers.add(msg.sender);\n  }\n\n  modifier onlyPauser() {\n    require(isPauser(msg.sender));\n    _;\n  }\n\n  function isPauser(address account) public view returns (bool) {\n    return pausers.has(account);\n  }\n\n  function addPauser(address account) public onlyPauser {\n    pausers.add(account);\n    emit PauserAdded(account);\n  }\n\n  function renouncePauser() public {\n    pausers.remove(msg.sender);\n  }\n\n  function _removePauser(address account) internal {\n    pausers.remove(account);\n    emit PauserRemoved(account);\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/PauserRole.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/PauserRole.sol",
    "exportedSymbols": {
      "PauserRole": [
        1863
      ]
    },
    "id": 1864,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1768,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:11"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/Roles.sol",
        "file": "../Roles.sol",
        "id": 1769,
        "nodeType": "ImportDirective",
        "scope": 1864,
        "sourceUnit": 1670,
        "src": "26:22:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1863,
        "linearizedBaseContracts": [
          1863
        ],
        "name": "PauserRole",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1772,
            "libraryName": {
              "contractScope": null,
              "id": 1770,
              "name": "Roles",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1669,
              "src": "81:5:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Roles_$1669",
                "typeString": "library Roles"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "75:27:11",
            "typeName": {
              "contractScope": null,
              "id": 1771,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1597,
              "src": "91:10:11",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            }
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1776,
            "name": "PauserAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1774,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1776,
                  "src": "124:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1773,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "123:25:11"
            },
            "src": "106:43:11"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1780,
            "name": "PauserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1778,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1780,
                  "src": "172:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1777,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "171:25:11"
            },
            "src": "152:45:11"
          },
          {
            "constant": false,
            "id": 1782,
            "name": "pausers",
            "nodeType": "VariableDeclaration",
            "scope": 1863,
            "src": "201:26:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Role_$1597_storage",
              "typeString": "struct Roles.Role"
            },
            "typeName": {
              "contractScope": null,
              "id": 1781,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1597,
              "src": "201:10:11",
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
              "id": 1792,
              "nodeType": "Block",
              "src": "253:34:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1788,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "271:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1789,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "271:10:11",
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
                        "id": 1785,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "259:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1787,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1621,
                      "src": "259:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "259:23:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1791,
                  "nodeType": "ExpressionStatement",
                  "src": "259:23:11"
                }
              ]
            },
            "documentation": null,
            "id": 1793,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1783,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1784,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "253:0:11"
            },
            "scope": 1863,
            "src": "232:55:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1803,
              "nodeType": "Block",
              "src": "313:47:11",
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
                              "id": 1797,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4014,
                              "src": "336:3:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1798,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "336:10:11",
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
                          "id": 1796,
                          "name": "isPauser",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1817,
                          "src": "327:8:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1799,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "327:20:11",
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
                      "id": 1795,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "319:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "319:29:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1801,
                  "nodeType": "ExpressionStatement",
                  "src": "319:29:11"
                },
                {
                  "id": 1802,
                  "nodeType": "PlaceholderStatement",
                  "src": "354:1:11"
                }
              ]
            },
            "documentation": null,
            "id": 1804,
            "name": "onlyPauser",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1794,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "310:2:11"
            },
            "src": "291:69:11",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1816,
              "nodeType": "Block",
              "src": "426:38:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1813,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1806,
                        "src": "451:7:11",
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
                        "id": 1811,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "439:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1812,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "has",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1668,
                      "src": "439:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 1814,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "439:20:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1810,
                  "id": 1815,
                  "nodeType": "Return",
                  "src": "432:27:11"
                }
              ]
            },
            "documentation": null,
            "id": 1817,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isPauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1806,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1817,
                  "src": "382:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1805,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "381:17:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1809,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1817,
                  "src": "420:4:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1808,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "419:6:11"
            },
            "scope": 1863,
            "src": "364:100:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1834,
              "nodeType": "Block",
              "src": "522:62:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1827,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1819,
                        "src": "540:7:11",
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
                        "id": 1824,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "528:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1826,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1621,
                      "src": "528:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1828,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:20:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1829,
                  "nodeType": "ExpressionStatement",
                  "src": "528:20:11"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1831,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1819,
                        "src": "571:7:11",
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
                      "id": 1830,
                      "name": "PauserAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1776,
                      "src": "559:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "559:20:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1833,
                  "nodeType": "EmitStatement",
                  "src": "554:25:11"
                }
              ]
            },
            "documentation": null,
            "id": 1835,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1822,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1821,
                  "name": "onlyPauser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1804,
                  "src": "511:10:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "511:10:11"
              }
            ],
            "name": "addPauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1819,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1835,
                  "src": "487:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1818,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "486:17:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1823,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "522:0:11"
            },
            "scope": 1863,
            "src": "468:116:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1845,
              "nodeType": "Block",
              "src": "621:37:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1841,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "642:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1842,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "642:10:11",
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
                        "id": 1838,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "627:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1840,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1645,
                      "src": "627:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1843,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "627:26:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1844,
                  "nodeType": "ExpressionStatement",
                  "src": "627:26:11"
                }
              ]
            },
            "documentation": null,
            "id": 1846,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "renouncePauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1837,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "621:0:11"
            },
            "scope": 1863,
            "src": "588:70:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1861,
              "nodeType": "Block",
              "src": "711:67:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1854,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1848,
                        "src": "732:7:11",
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
                        "id": 1851,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "717:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1853,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1645,
                      "src": "717:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "717:23:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1856,
                  "nodeType": "ExpressionStatement",
                  "src": "717:23:11"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1858,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1848,
                        "src": "765:7:11",
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
                      "id": 1857,
                      "name": "PauserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1780,
                      "src": "751:13:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "751:22:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1860,
                  "nodeType": "EmitStatement",
                  "src": "746:27:11"
                }
              ]
            },
            "documentation": null,
            "id": 1862,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removePauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1848,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1862,
                  "src": "685:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1847,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:17:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1850,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:11"
            },
            "scope": 1863,
            "src": "662:116:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1864,
        "src": "51:729:11"
      }
    ],
    "src": "0:781:11"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/PauserRole.sol",
    "exportedSymbols": {
      "PauserRole": [
        1863
      ]
    },
    "id": 1864,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1768,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:11"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/Roles.sol",
        "file": "../Roles.sol",
        "id": 1769,
        "nodeType": "ImportDirective",
        "scope": 1864,
        "sourceUnit": 1670,
        "src": "26:22:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1863,
        "linearizedBaseContracts": [
          1863
        ],
        "name": "PauserRole",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1772,
            "libraryName": {
              "contractScope": null,
              "id": 1770,
              "name": "Roles",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1669,
              "src": "81:5:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Roles_$1669",
                "typeString": "library Roles"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "75:27:11",
            "typeName": {
              "contractScope": null,
              "id": 1771,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1597,
              "src": "91:10:11",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            }
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1776,
            "name": "PauserAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1774,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1776,
                  "src": "124:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1773,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "123:25:11"
            },
            "src": "106:43:11"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1780,
            "name": "PauserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1778,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1780,
                  "src": "172:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1777,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "171:25:11"
            },
            "src": "152:45:11"
          },
          {
            "constant": false,
            "id": 1782,
            "name": "pausers",
            "nodeType": "VariableDeclaration",
            "scope": 1863,
            "src": "201:26:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Role_$1597_storage",
              "typeString": "struct Roles.Role"
            },
            "typeName": {
              "contractScope": null,
              "id": 1781,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1597,
              "src": "201:10:11",
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
              "id": 1792,
              "nodeType": "Block",
              "src": "253:34:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1788,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "271:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1789,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "271:10:11",
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
                        "id": 1785,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "259:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1787,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1621,
                      "src": "259:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "259:23:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1791,
                  "nodeType": "ExpressionStatement",
                  "src": "259:23:11"
                }
              ]
            },
            "documentation": null,
            "id": 1793,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1783,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1784,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "253:0:11"
            },
            "scope": 1863,
            "src": "232:55:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1803,
              "nodeType": "Block",
              "src": "313:47:11",
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
                              "id": 1797,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4014,
                              "src": "336:3:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1798,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "336:10:11",
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
                          "id": 1796,
                          "name": "isPauser",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1817,
                          "src": "327:8:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1799,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "327:20:11",
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
                      "id": 1795,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "319:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "319:29:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1801,
                  "nodeType": "ExpressionStatement",
                  "src": "319:29:11"
                },
                {
                  "id": 1802,
                  "nodeType": "PlaceholderStatement",
                  "src": "354:1:11"
                }
              ]
            },
            "documentation": null,
            "id": 1804,
            "name": "onlyPauser",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1794,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "310:2:11"
            },
            "src": "291:69:11",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1816,
              "nodeType": "Block",
              "src": "426:38:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1813,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1806,
                        "src": "451:7:11",
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
                        "id": 1811,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "439:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1812,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "has",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1668,
                      "src": "439:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 1814,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "439:20:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1810,
                  "id": 1815,
                  "nodeType": "Return",
                  "src": "432:27:11"
                }
              ]
            },
            "documentation": null,
            "id": 1817,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isPauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1806,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1817,
                  "src": "382:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1805,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "381:17:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1809,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1817,
                  "src": "420:4:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1808,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "419:6:11"
            },
            "scope": 1863,
            "src": "364:100:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1834,
              "nodeType": "Block",
              "src": "522:62:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1827,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1819,
                        "src": "540:7:11",
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
                        "id": 1824,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "528:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1826,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1621,
                      "src": "528:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1828,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:20:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1829,
                  "nodeType": "ExpressionStatement",
                  "src": "528:20:11"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1831,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1819,
                        "src": "571:7:11",
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
                      "id": 1830,
                      "name": "PauserAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1776,
                      "src": "559:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "559:20:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1833,
                  "nodeType": "EmitStatement",
                  "src": "554:25:11"
                }
              ]
            },
            "documentation": null,
            "id": 1835,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1822,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1821,
                  "name": "onlyPauser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1804,
                  "src": "511:10:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "511:10:11"
              }
            ],
            "name": "addPauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1819,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1835,
                  "src": "487:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1818,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "486:17:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1823,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "522:0:11"
            },
            "scope": 1863,
            "src": "468:116:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1845,
              "nodeType": "Block",
              "src": "621:37:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1841,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "642:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1842,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "642:10:11",
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
                        "id": 1838,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "627:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1840,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1645,
                      "src": "627:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1843,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "627:26:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1844,
                  "nodeType": "ExpressionStatement",
                  "src": "627:26:11"
                }
              ]
            },
            "documentation": null,
            "id": 1846,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "renouncePauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1837,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "621:0:11"
            },
            "scope": 1863,
            "src": "588:70:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1861,
              "nodeType": "Block",
              "src": "711:67:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1854,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1848,
                        "src": "732:7:11",
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
                        "id": 1851,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1782,
                        "src": "717:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 1853,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1645,
                      "src": "717:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$1597_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$1597_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 1855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "717:23:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1856,
                  "nodeType": "ExpressionStatement",
                  "src": "717:23:11"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1858,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1848,
                        "src": "765:7:11",
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
                      "id": 1857,
                      "name": "PauserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1780,
                      "src": "751:13:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 1859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "751:22:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1860,
                  "nodeType": "EmitStatement",
                  "src": "746:27:11"
                }
              ]
            },
            "documentation": null,
            "id": 1862,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removePauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1848,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1862,
                  "src": "685:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1847,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:17:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1850,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:11"
            },
            "scope": 1863,
            "src": "662:116:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1864,
        "src": "51:729:11"
      }
    ],
    "src": "0:781:11"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.553Z"
}