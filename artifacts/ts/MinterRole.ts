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
  "bytecode": "0x608060405234801561001057600080fd5b50610032336000610037640100000000026101b2179091906401000000009004565b6100d1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561007357600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6103a6806100e06000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063983b2d561461005c578063986502751461009f578063aa271e1a146100b6575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610111565b005b3480156100ab57600080fd5b506100b461017f565b005b3480156100c257600080fd5b506100f7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610195565b604051808215151515815260200191505060405180910390f35b61011a33610195565b151561012557600080fd5b6101398160006101b290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61019333600061024c90919063ffffffff16565b565b60006101ab8260006102e690919063ffffffff16565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156101ee57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561028857600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561032357600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050929150505600a165627a7a72305820d22cfc3d25f3d35a2e2d02c8409ee7bb92afaa2fcd7a5eb1fd4bfa975dce941c0029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063983b2d561461005c578063986502751461009f578063aa271e1a146100b6575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610111565b005b3480156100ab57600080fd5b506100b461017f565b005b3480156100c257600080fd5b506100f7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610195565b604051808215151515815260200191505060405180910390f35b61011a33610195565b151561012557600080fd5b6101398160006101b290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61019333600061024c90919063ffffffff16565b565b60006101ab8260006102e690919063ffffffff16565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156101ee57600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561028857600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561032357600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050929150505600a165627a7a72305820d22cfc3d25f3d35a2e2d02c8409ee7bb92afaa2fcd7a5eb1fd4bfa975dce941c0029",
  "sourceMap": "51:729:11:-;;;232:55;8:9:-1;5:2;;;30:1;27;20:12;5:2;232:55:11;259:23;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;51:729;;245:132:10;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;51:729:11:-;;;;;;;",
  "deployedSourceMap": "51:729:11:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;468:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:11;;;;;;364:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;468:116;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;588:70::-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;364:100::-;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;245:132:10:-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;657:166::-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../Roles.sol\";\n\n\ncontract MinterRole {\n  using Roles for Roles.Role;\n\n  event MinterAdded(address indexed account);\n  event MinterRemoved(address indexed account);\n\n  Roles.Role private minters;\n\n  constructor() public {\n    minters.add(msg.sender);\n  }\n\n  modifier onlyMinter() {\n    require(isMinter(msg.sender));\n    _;\n  }\n\n  function isMinter(address account) public view returns (bool) {\n    return minters.has(account);\n  }\n\n  function addMinter(address account) public onlyMinter {\n    minters.add(account);\n    emit MinterAdded(account);\n  }\n\n  function renounceMinter() public {\n    minters.remove(msg.sender);\n  }\n\n  function _removeMinter(address account) internal {\n    minters.remove(account);\n    emit MinterRemoved(account);\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/MinterRole.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/MinterRole.sol",
    "exportedSymbols": {
      "MinterRole": [
        2317
      ]
    },
    "id": 2318,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2222,
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
        "id": 2223,
        "nodeType": "ImportDirective",
        "scope": 2318,
        "sourceUnit": 2221,
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
        "id": 2317,
        "linearizedBaseContracts": [
          2317
        ],
        "name": "MinterRole",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 2226,
            "libraryName": {
              "contractScope": null,
              "id": 2224,
              "name": "Roles",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2220,
              "src": "81:5:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Roles_$2220",
                "typeString": "library Roles"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "75:27:11",
            "typeName": {
              "contractScope": null,
              "id": 2225,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2148,
              "src": "91:10:11",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$2148_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            }
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2230,
            "name": "MinterAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2228,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2230,
                  "src": "124:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2227,
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
            "id": 2234,
            "name": "MinterRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2232,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2234,
                  "src": "172:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2231,
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
            "id": 2236,
            "name": "minters",
            "nodeType": "VariableDeclaration",
            "scope": 2317,
            "src": "201:26:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Role_$2148_storage",
              "typeString": "struct Roles.Role"
            },
            "typeName": {
              "contractScope": null,
              "id": 2235,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2148,
              "src": "201:10:11",
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
              "id": 2246,
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
                          "id": 2242,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "271:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2243,
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
                        "id": 2239,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "259:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2241,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2172,
                      "src": "259:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2244,
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
                  "id": 2245,
                  "nodeType": "ExpressionStatement",
                  "src": "259:23:11"
                }
              ]
            },
            "documentation": null,
            "id": 2247,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2237,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 2238,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "253:0:11"
            },
            "scope": 2317,
            "src": "232:55:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2257,
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
                              "id": 2251,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4623,
                              "src": "336:3:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2252,
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
                          "id": 2250,
                          "name": "isMinter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2271,
                          "src": "327:8:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 2253,
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
                      "id": 2249,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "319:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2254,
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
                  "id": 2255,
                  "nodeType": "ExpressionStatement",
                  "src": "319:29:11"
                },
                {
                  "id": 2256,
                  "nodeType": "PlaceholderStatement",
                  "src": "354:1:11"
                }
              ]
            },
            "documentation": null,
            "id": 2258,
            "name": "onlyMinter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2248,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "310:2:11"
            },
            "src": "291:69:11",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2270,
              "nodeType": "Block",
              "src": "426:38:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2267,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2260,
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
                        "id": 2265,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "439:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2266,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "has",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2219,
                      "src": "439:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 2268,
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
                  "functionReturnParameters": 2264,
                  "id": 2269,
                  "nodeType": "Return",
                  "src": "432:27:11"
                }
              ]
            },
            "documentation": null,
            "id": 2271,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2260,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2271,
                  "src": "382:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2259,
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
              "id": 2264,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2263,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2271,
                  "src": "420:4:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2262,
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
            "scope": 2317,
            "src": "364:100:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2288,
              "nodeType": "Block",
              "src": "522:62:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2281,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2273,
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
                        "id": 2278,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "528:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2280,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2172,
                      "src": "528:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2282,
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
                  "id": 2283,
                  "nodeType": "ExpressionStatement",
                  "src": "528:20:11"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2285,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2273,
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
                      "id": 2284,
                      "name": "MinterAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2230,
                      "src": "559:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2286,
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
                  "id": 2287,
                  "nodeType": "EmitStatement",
                  "src": "554:25:11"
                }
              ]
            },
            "documentation": null,
            "id": 2289,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2276,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2275,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2258,
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
            "name": "addMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2274,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2273,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "487:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2272,
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
              "id": 2277,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "522:0:11"
            },
            "scope": 2317,
            "src": "468:116:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2299,
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
                          "id": 2295,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "642:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2296,
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
                        "id": 2292,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "627:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2294,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2196,
                      "src": "627:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2297,
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
                  "id": 2298,
                  "nodeType": "ExpressionStatement",
                  "src": "627:26:11"
                }
              ]
            },
            "documentation": null,
            "id": 2300,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "renounceMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2290,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 2291,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "621:0:11"
            },
            "scope": 2317,
            "src": "588:70:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2315,
              "nodeType": "Block",
              "src": "711:67:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2308,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2302,
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
                        "id": 2305,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "717:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2307,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2196,
                      "src": "717:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2309,
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
                  "id": 2310,
                  "nodeType": "ExpressionStatement",
                  "src": "717:23:11"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2312,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2302,
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
                      "id": 2311,
                      "name": "MinterRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2234,
                      "src": "751:13:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2313,
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
                  "id": 2314,
                  "nodeType": "EmitStatement",
                  "src": "746:27:11"
                }
              ]
            },
            "documentation": null,
            "id": 2316,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2302,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2316,
                  "src": "685:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2301,
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
              "id": 2304,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:11"
            },
            "scope": 2317,
            "src": "662:116:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2318,
        "src": "51:729:11"
      }
    ],
    "src": "0:781:11"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/MinterRole.sol",
    "exportedSymbols": {
      "MinterRole": [
        2317
      ]
    },
    "id": 2318,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2222,
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
        "id": 2223,
        "nodeType": "ImportDirective",
        "scope": 2318,
        "sourceUnit": 2221,
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
        "id": 2317,
        "linearizedBaseContracts": [
          2317
        ],
        "name": "MinterRole",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 2226,
            "libraryName": {
              "contractScope": null,
              "id": 2224,
              "name": "Roles",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2220,
              "src": "81:5:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Roles_$2220",
                "typeString": "library Roles"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "75:27:11",
            "typeName": {
              "contractScope": null,
              "id": 2225,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2148,
              "src": "91:10:11",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Role_$2148_storage_ptr",
                "typeString": "struct Roles.Role"
              }
            }
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2230,
            "name": "MinterAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2228,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2230,
                  "src": "124:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2227,
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
            "id": 2234,
            "name": "MinterRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2232,
                  "indexed": true,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2234,
                  "src": "172:23:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2231,
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
            "id": 2236,
            "name": "minters",
            "nodeType": "VariableDeclaration",
            "scope": 2317,
            "src": "201:26:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Role_$2148_storage",
              "typeString": "struct Roles.Role"
            },
            "typeName": {
              "contractScope": null,
              "id": 2235,
              "name": "Roles.Role",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2148,
              "src": "201:10:11",
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
              "id": 2246,
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
                          "id": 2242,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "271:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2243,
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
                        "id": 2239,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "259:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2241,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2172,
                      "src": "259:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2244,
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
                  "id": 2245,
                  "nodeType": "ExpressionStatement",
                  "src": "259:23:11"
                }
              ]
            },
            "documentation": null,
            "id": 2247,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2237,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 2238,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "253:0:11"
            },
            "scope": 2317,
            "src": "232:55:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2257,
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
                              "id": 2251,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4623,
                              "src": "336:3:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2252,
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
                          "id": 2250,
                          "name": "isMinter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2271,
                          "src": "327:8:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 2253,
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
                      "id": 2249,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "319:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2254,
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
                  "id": 2255,
                  "nodeType": "ExpressionStatement",
                  "src": "319:29:11"
                },
                {
                  "id": 2256,
                  "nodeType": "PlaceholderStatement",
                  "src": "354:1:11"
                }
              ]
            },
            "documentation": null,
            "id": 2258,
            "name": "onlyMinter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2248,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "310:2:11"
            },
            "src": "291:69:11",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2270,
              "nodeType": "Block",
              "src": "426:38:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2267,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2260,
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
                        "id": 2265,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "439:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2266,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "has",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2219,
                      "src": "439:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 2268,
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
                  "functionReturnParameters": 2264,
                  "id": 2269,
                  "nodeType": "Return",
                  "src": "432:27:11"
                }
              ]
            },
            "documentation": null,
            "id": 2271,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2260,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2271,
                  "src": "382:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2259,
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
              "id": 2264,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2263,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2271,
                  "src": "420:4:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2262,
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
            "scope": 2317,
            "src": "364:100:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2288,
              "nodeType": "Block",
              "src": "522:62:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2281,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2273,
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
                        "id": 2278,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "528:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2280,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2172,
                      "src": "528:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2282,
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
                  "id": 2283,
                  "nodeType": "ExpressionStatement",
                  "src": "528:20:11"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2285,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2273,
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
                      "id": 2284,
                      "name": "MinterAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2230,
                      "src": "559:11:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2286,
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
                  "id": 2287,
                  "nodeType": "EmitStatement",
                  "src": "554:25:11"
                }
              ]
            },
            "documentation": null,
            "id": 2289,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2276,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2275,
                  "name": "onlyMinter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2258,
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
            "name": "addMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2274,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2273,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2289,
                  "src": "487:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2272,
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
              "id": 2277,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "522:0:11"
            },
            "scope": 2317,
            "src": "468:116:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2299,
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
                          "id": 2295,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "642:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2296,
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
                        "id": 2292,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "627:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2294,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2196,
                      "src": "627:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2297,
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
                  "id": 2298,
                  "nodeType": "ExpressionStatement",
                  "src": "627:26:11"
                }
              ]
            },
            "documentation": null,
            "id": 2300,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "renounceMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2290,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 2291,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "621:0:11"
            },
            "scope": 2317,
            "src": "588:70:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2315,
              "nodeType": "Block",
              "src": "711:67:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2308,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2302,
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
                        "id": 2305,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2236,
                        "src": "717:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$2148_storage",
                          "typeString": "struct Roles.Role storage ref"
                        }
                      },
                      "id": 2307,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2196,
                      "src": "717:14:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Role_$2148_storage_ptr_$_t_address_$returns$__$bound_to$_t_struct$_Role_$2148_storage_ptr_$",
                        "typeString": "function (struct Roles.Role storage pointer,address)"
                      }
                    },
                    "id": 2309,
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
                  "id": 2310,
                  "nodeType": "ExpressionStatement",
                  "src": "717:23:11"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2312,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2302,
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
                      "id": 2311,
                      "name": "MinterRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2234,
                      "src": "751:13:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2313,
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
                  "id": 2314,
                  "nodeType": "EmitStatement",
                  "src": "746:27:11"
                }
              ]
            },
            "documentation": null,
            "id": 2316,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeMinter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2302,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 2316,
                  "src": "685:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2301,
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
              "id": 2304,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:11"
            },
            "scope": 2317,
            "src": "662:116:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2318,
        "src": "51:729:11"
      }
    ],
    "src": "0:781:11"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.413Z"
}