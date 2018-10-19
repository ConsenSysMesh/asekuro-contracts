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
  "bytecode": "0x608060405234801561001057600080fd5b50610032336000610037640100000000026102e0179091906401000000009004565b6100d1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561007357600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6103a6806100e06000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806346fbf68e1461005c5780636ef8d66d146100b757806382dc1ec4146100ce575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610111565b604051808215151515815260200191505060405180910390f35b3480156100c357600080fd5b506100cc61012e565b005b3480156100da57600080fd5b5061010f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610144565b005b60006101278260006101b290919063ffffffff16565b9050919050565b61014233600061024690919063ffffffff16565b565b61014d33610111565b151561015857600080fd5b61016c8160006102e090919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156101ef57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561028257600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561031c57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a72305820c0280e405dc2e520815db8d66cc3a52d3727d07112236ed821c9d69e215bdbea0029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806346fbf68e1461005c5780636ef8d66d146100b757806382dc1ec4146100ce575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610111565b604051808215151515815260200191505060405180910390f35b3480156100c357600080fd5b506100cc61012e565b005b3480156100da57600080fd5b5061010f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610144565b005b60006101278260006101b290919063ffffffff16565b9050919050565b61014233600061024690919063ffffffff16565b565b61014d33610111565b151561015857600080fd5b61016c8160006102e090919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156101ef57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561028257600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561031c57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a72305820c0280e405dc2e520815db8d66cc3a52d3727d07112236ed821c9d69e215bdbea0029",
  "sourceMap": "51:729:12:-;;;232:55;8:9:-1;5:2;;;30:1;27;20:12;5:2;232:55:12;259:23;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;51:729;;245:132:10;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;51:729:12:-;;;;;;;",
  "deployedSourceMap": "51:729:12:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:12;;;;;;468:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;364:100;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;588:70::-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;468:116::-;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;657:166:10:-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;245:132::-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../Roles.sol\";\n\n\ncontract PauserRole {\n  using Roles for Roles.Role;\n\n  event PauserAdded(address indexed account);\n  event PauserRemoved(address indexed account);\n\n  Roles.Role private pausers;\n\n  constructor() public {\n    pausers.add(msg.sender);\n  }\n\n  modifier onlyPauser() {\n    require(isPauser(msg.sender));\n    _;\n  }\n\n  function isPauser(address account) public view returns (bool) {\n    return pausers.has(account);\n  }\n\n  function addPauser(address account) public onlyPauser {\n    pausers.add(account);\n    emit PauserAdded(account);\n  }\n\n  function renouncePauser() public {\n    pausers.remove(msg.sender);\n  }\n\n  function _removePauser(address account) internal {\n    pausers.remove(account);\n    emit PauserRemoved(account);\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/PauserRole.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/PauserRole.sol",
    "exportedSymbols": {
      "PauserRole": [
        2414
      ]
    },
    "id": 2415,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2319,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:12"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/Roles.sol",
        "file": "../Roles.sol",
        "id": 2320,
        "nodeType": "ImportDirective",
        "scope": 2415,
        "sourceUnit": 2221,
        "src": "26:22:12",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2414,
        "linearizedBaseContracts": [
          2414
        ],
        "name": "PauserRole",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 2323,
            "libraryName": {
              "contractScope": null,
              "id": 2321,
              "name": "Roles",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2220,
              "src": "81:5:12",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Roles_$2220",
                "typeString": "library Roles"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "75:27:12",
            "typeName": {
              "contractScope": null,
              "id": 2322,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2148,
              "src": "91:10:12",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$2148_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            }
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2327,
            "name": "PauserAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2325,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2327,
                  "src": "124:23:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2324,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "123:25:12"
            },
            "src": "106:43:12"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2331,
            "name": "PauserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2329,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2331,
                  "src": "172:23:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2328,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "171:25:12"
            },
            "src": "152:45:12"
          },
          {
            "constant": false,
            "id": 2333,
            "name": "pausers",
            "nodeType": "VariableDeclaration",
            "scope": 2414,
            "src": "201:26:12",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Role_$2148_storage",
              "typeString": "struct Roles.Role"
            },
            "typeName": {
              "contractScope": null,
              "id": 2332,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2148,
              "src": "201:10:12",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$2148_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 2343,
              "nodeType": "Block",
              "src": "253:34:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2339,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "271:3:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "271:10:12",
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
                        "id": 2336,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "259:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2338,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2172,
                      "src": "259:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "259:23:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2342,
                  "nodeType": "ExpressionStatement",
                  "src": "259:23:12"
                }
              ]
            },
            "documentation": null,
            "id": 2344,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2334,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2335,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "253:0:12"
            },
            "scope": 2414,
            "src": "232:55:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2354,
              "nodeType": "Block",
              "src": "313:47:12",
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
                              "id": 2348,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4623,
                              "src": "336:3:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2349,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "336:10:12",
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
                          "id": 2347,
                          "name": "isPauser",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2368,
                          "src": "327:8:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 2350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "327:20:12",
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
                      "id": 2346,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "319:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "319:29:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2352,
                  "nodeType": "ExpressionStatement",
                  "src": "319:29:12"
                },
                {
                  "id": 2353,
                  "nodeType": "PlaceholderStatement",
                  "src": "354:1:12"
                }
              ]
            },
            "documentation": null,
            "id": 2355,
            "name": "onlyPauser",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2345,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "310:2:12"
            },
            "src": "291:69:12",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2367,
              "nodeType": "Block",
              "src": "426:38:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2364,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2357,
                        "src": "451:7:12",
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
                        "id": 2362,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "439:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2363,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "has",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2219,
                      "src": "439:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 2365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "439:20:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2361,
                  "id": 2366,
                  "nodeType": "Return",
                  "src": "432:27:12"
                }
              ]
            },
            "documentation": null,
            "id": 2368,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isPauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2357,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2368,
                  "src": "382:15:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2356,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "381:17:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2361,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2360,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2368,
                  "src": "420:4:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2359,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:4:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "419:6:12"
            },
            "scope": 2414,
            "src": "364:100:12",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2385,
              "nodeType": "Block",
              "src": "522:62:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2378,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2370,
                        "src": "540:7:12",
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
                        "id": 2375,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "528:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2377,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2172,
                      "src": "528:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:20:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2380,
                  "nodeType": "ExpressionStatement",
                  "src": "528:20:12"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2382,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2370,
                        "src": "571:7:12",
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
                      "id": 2381,
                      "name": "PauserAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2327,
                      "src": "559:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "559:20:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2384,
                  "nodeType": "EmitStatement",
                  "src": "554:25:12"
                }
              ]
            },
            "documentation": null,
            "id": 2386,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2373,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2372,
                  "name": "onlyPauser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2355,
                  "src": "511:10:12",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "511:10:12"
              }
            ],
            "name": "addPauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2370,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2386,
                  "src": "487:15:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2369,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "486:17:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "522:0:12"
            },
            "scope": 2414,
            "src": "468:116:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2396,
              "nodeType": "Block",
              "src": "621:37:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2392,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "642:3:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "642:10:12",
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
                        "id": 2389,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "627:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2391,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2196,
                      "src": "627:14:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "627:26:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2395,
                  "nodeType": "ExpressionStatement",
                  "src": "627:26:12"
                }
              ]
            },
            "documentation": null,
            "id": 2397,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "renouncePauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2387,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:2:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2388,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "621:0:12"
            },
            "scope": 2414,
            "src": "588:70:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2412,
              "nodeType": "Block",
              "src": "711:67:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2405,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2399,
                        "src": "732:7:12",
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
                        "id": 2402,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "717:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2404,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2196,
                      "src": "717:14:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "717:23:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2407,
                  "nodeType": "ExpressionStatement",
                  "src": "717:23:12"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2409,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2399,
                        "src": "765:7:12",
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
                      "id": 2408,
                      "name": "PauserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2331,
                      "src": "751:13:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "751:22:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2411,
                  "nodeType": "EmitStatement",
                  "src": "746:27:12"
                }
              ]
            },
            "documentation": null,
            "id": 2413,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removePauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2399,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2413,
                  "src": "685:15:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:17:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2401,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:12"
            },
            "scope": 2414,
            "src": "662:116:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2415,
        "src": "51:729:12"
      }
    ],
    "src": "0:781:12"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/PauserRole.sol",
    "exportedSymbols": {
      "PauserRole": [
        2414
      ]
    },
    "id": 2415,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2319,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:12"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/Roles.sol",
        "file": "../Roles.sol",
        "id": 2320,
        "nodeType": "ImportDirective",
        "scope": 2415,
        "sourceUnit": 2221,
        "src": "26:22:12",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2414,
        "linearizedBaseContracts": [
          2414
        ],
        "name": "PauserRole",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 2323,
            "libraryName": {
              "contractScope": null,
              "id": 2321,
              "name": "Roles",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2220,
              "src": "81:5:12",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Roles_$2220",
                "typeString": "library Roles"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "75:27:12",
            "typeName": {
              "contractScope": null,
              "id": 2322,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2148,
              "src": "91:10:12",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$2148_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            }
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2327,
            "name": "PauserAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2325,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2327,
                  "src": "124:23:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2324,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "123:25:12"
            },
            "src": "106:43:12"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2331,
            "name": "PauserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2329,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2331,
                  "src": "172:23:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2328,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "171:25:12"
            },
            "src": "152:45:12"
          },
          {
            "constant": false,
            "id": 2333,
            "name": "pausers",
            "nodeType": "VariableDeclaration",
            "scope": 2414,
            "src": "201:26:12",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Role_$2148_storage",
              "typeString": "struct Roles.Role"
            },
            "typeName": {
              "contractScope": null,
              "id": 2332,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2148,
              "src": "201:10:12",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$2148_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 2343,
              "nodeType": "Block",
              "src": "253:34:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2339,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "271:3:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "271:10:12",
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
                        "id": 2336,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "259:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2338,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2172,
                      "src": "259:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "259:23:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2342,
                  "nodeType": "ExpressionStatement",
                  "src": "259:23:12"
                }
              ]
            },
            "documentation": null,
            "id": 2344,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2334,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2335,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "253:0:12"
            },
            "scope": 2414,
            "src": "232:55:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2354,
              "nodeType": "Block",
              "src": "313:47:12",
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
                              "id": 2348,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4623,
                              "src": "336:3:12",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2349,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "336:10:12",
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
                          "id": 2347,
                          "name": "isPauser",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2368,
                          "src": "327:8:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 2350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "327:20:12",
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
                      "id": 2346,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "319:7:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "319:29:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2352,
                  "nodeType": "ExpressionStatement",
                  "src": "319:29:12"
                },
                {
                  "id": 2353,
                  "nodeType": "PlaceholderStatement",
                  "src": "354:1:12"
                }
              ]
            },
            "documentation": null,
            "id": 2355,
            "name": "onlyPauser",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2345,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "310:2:12"
            },
            "src": "291:69:12",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2367,
              "nodeType": "Block",
              "src": "426:38:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2364,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2357,
                        "src": "451:7:12",
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
                        "id": 2362,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "439:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2363,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "has",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2219,
                      "src": "439:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 2365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "439:20:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2361,
                  "id": 2366,
                  "nodeType": "Return",
                  "src": "432:27:12"
                }
              ]
            },
            "documentation": null,
            "id": 2368,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isPauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2357,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2368,
                  "src": "382:15:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2356,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "381:17:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2361,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2360,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2368,
                  "src": "420:4:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2359,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:4:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "419:6:12"
            },
            "scope": 2414,
            "src": "364:100:12",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2385,
              "nodeType": "Block",
              "src": "522:62:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2378,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2370,
                        "src": "540:7:12",
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
                        "id": 2375,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "528:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2377,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2172,
                      "src": "528:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:20:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2380,
                  "nodeType": "ExpressionStatement",
                  "src": "528:20:12"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2382,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2370,
                        "src": "571:7:12",
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
                      "id": 2381,
                      "name": "PauserAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2327,
                      "src": "559:11:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "559:20:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2384,
                  "nodeType": "EmitStatement",
                  "src": "554:25:12"
                }
              ]
            },
            "documentation": null,
            "id": 2386,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2373,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2372,
                  "name": "onlyPauser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2355,
                  "src": "511:10:12",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "511:10:12"
              }
            ],
            "name": "addPauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2370,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2386,
                  "src": "487:15:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2369,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "486:17:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "522:0:12"
            },
            "scope": 2414,
            "src": "468:116:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2396,
              "nodeType": "Block",
              "src": "621:37:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2392,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "642:3:12",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "642:10:12",
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
                        "id": 2389,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "627:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2391,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2196,
                      "src": "627:14:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "627:26:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2395,
                  "nodeType": "ExpressionStatement",
                  "src": "627:26:12"
                }
              ]
            },
            "documentation": null,
            "id": 2397,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "renouncePauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2387,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:2:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2388,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "621:0:12"
            },
            "scope": 2414,
            "src": "588:70:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2412,
              "nodeType": "Block",
              "src": "711:67:12",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2405,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2399,
                        "src": "732:7:12",
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
                        "id": 2402,
                        "name": "pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "717:7:12",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2404,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2196,
                      "src": "717:14:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "717:23:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2407,
                  "nodeType": "ExpressionStatement",
                  "src": "717:23:12"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2409,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2399,
                        "src": "765:7:12",
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
                      "id": 2408,
                      "name": "PauserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2331,
                      "src": "751:13:12",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "751:22:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2411,
                  "nodeType": "EmitStatement",
                  "src": "746:27:12"
                }
              ]
            },
            "documentation": null,
            "id": 2413,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removePauser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2399,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2413,
                  "src": "685:15:12",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:12",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:17:12"
            },
            "payable": false,
            "returnParameters": {
              "id": 2401,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:12"
            },
            "scope": 2414,
            "src": "662:116:12",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2415,
        "src": "51:729:12"
      }
    ],
    "src": "0:781:12"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.412Z"
}