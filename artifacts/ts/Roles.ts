export const Roles = 
{
  "contractName": "Roles",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820e9cfb82ff318e809d903b633ff9d4ca40ca392f15afd27735d3c7fdf692ceb300029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820e9cfb82ff318e809d903b633ff9d4ca40ca392f15afd27735d3c7fdf692ceb300029",
  "sourceMap": "110:715:9:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "110:715:9:-;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title Roles\n * @dev Library for managing addresses assigned to a Role.\n */\nlibrary Roles {\n  struct Role {\n    mapping (address => bool) bearer;\n  }\n\n  /**\n   * @dev give an account access to this role\n   */\n  function add(Role storage role, address account) internal {\n    require(account != address(0));\n    role.bearer[account] = true;\n  }\n\n  /**\n   * @dev remove an account's access to this role\n   */\n  function remove(Role storage role, address account) internal {\n    require(account != address(0));\n    role.bearer[account] = false;\n  }\n\n  /**\n   * @dev check if an account has this role\n   * @return bool\n   */\n  function has(Role storage role, address account)\n    internal\n    view\n    returns (bool)\n  {\n    require(account != address(0));\n    return role.bearer[account];\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/Roles.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/Roles.sol",
    "exportedSymbols": {
      "Roles": [
        1669
      ]
    },
    "id": 1670,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1592,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:9"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title Roles\n@dev Library for managing addresses assigned to a Role.",
        "fullyImplemented": true,
        "id": 1669,
        "linearizedBaseContracts": [
          1669
        ],
        "name": "Roles",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Roles.Role",
            "id": 1597,
            "members": [
              {
                "constant": false,
                "id": 1596,
                "name": "bearer",
                "nodeType": "VariableDeclaration",
                "scope": 1597,
                "src": "146:32:9",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 1595,
                  "keyType": {
                    "id": 1593,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "155:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "146:25:9",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueType": {
                    "id": 1594,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "166:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Role",
            "nodeType": "StructDefinition",
            "scope": 1669,
            "src": "128:55:9",
            "visibility": "public"
          },
          {
            "body": {
              "id": 1620,
              "nodeType": "Block",
              "src": "303:74:9",
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
                        "id": 1609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1605,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1601,
                          "src": "317:7:9",
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
                              "id": 1607,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "336:1:9",
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
                            "id": 1606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "328:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "328:10:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "317:21:9",
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
                      "id": 1604,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "309:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "309:30:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1611,
                  "nodeType": "ExpressionStatement",
                  "src": "309:30:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1612,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1599,
                          "src": "345:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                            "typeString": "struct Roles.Role storage pointer"
                          }
                        },
                        "id": 1615,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "bearer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1596,
                        "src": "345:11:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 1616,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1614,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1601,
                        "src": "357:7:9",
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
                      "src": "345:20:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "368:4:9",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "345:27:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1619,
                  "nodeType": "ExpressionStatement",
                  "src": "345:27:9"
                }
              ]
            },
            "documentation": "@dev give an account access to this role",
            "id": 1621,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1599,
                  "name": "role",
                  "nodeType": "VariableDeclaration",
                  "scope": 1621,
                  "src": "258:17:9",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1598,
                    "name": "Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1597,
                    "src": "258:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1601,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1621,
                  "src": "277:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1600,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "257:36:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1603,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "303:0:9"
            },
            "scope": 1669,
            "src": "245:132:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1644,
              "nodeType": "Block",
              "src": "504:75:9",
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
                        "id": 1633,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1629,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1625,
                          "src": "518:7:9",
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
                              "id": 1631,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "537:1:9",
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
                            "id": 1630,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "529:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1632,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "529:10:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "518:21:9",
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
                      "id": 1628,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "510:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "510:30:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1635,
                  "nodeType": "ExpressionStatement",
                  "src": "510:30:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1642,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1636,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1623,
                          "src": "546:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                            "typeString": "struct Roles.Role storage pointer"
                          }
                        },
                        "id": 1639,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "bearer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1596,
                        "src": "546:11:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 1640,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1638,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1625,
                        "src": "558:7:9",
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
                      "src": "546:20:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 1641,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "569:5:9",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "546:28:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1643,
                  "nodeType": "ExpressionStatement",
                  "src": "546:28:9"
                }
              ]
            },
            "documentation": "@dev remove an account's access to this role",
            "id": 1645,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "remove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1623,
                  "name": "role",
                  "nodeType": "VariableDeclaration",
                  "scope": 1645,
                  "src": "459:17:9",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1622,
                    "name": "Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1597,
                    "src": "459:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1625,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1645,
                  "src": "478:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1624,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "478:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "458:36:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1627,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "504:0:9"
            },
            "scope": 1669,
            "src": "443:136:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1667,
              "nodeType": "Block",
              "src": "749:74:9",
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
                        "id": 1659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1655,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1649,
                          "src": "763:7:9",
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
                              "id": 1657,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "782:1:9",
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
                            "id": 1656,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "774:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1658,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "774:10:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "763:21:9",
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
                      "id": 1654,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "755:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "755:30:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1661,
                  "nodeType": "ExpressionStatement",
                  "src": "755:30:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1662,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1647,
                        "src": "798:4:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                          "typeString": "struct Roles.Role storage pointer"
                        }
                      },
                      "id": 1663,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bearer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1596,
                      "src": "798:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 1665,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 1664,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1649,
                      "src": "810:7:9",
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
                    "src": "798:20:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1653,
                  "id": 1666,
                  "nodeType": "Return",
                  "src": "791:27:9"
                }
              ]
            },
            "documentation": "@dev check if an account has this role\n@return bool",
            "id": 1668,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "has",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1647,
                  "name": "role",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "670:17:9",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1646,
                    "name": "Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1597,
                    "src": "670:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1649,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "689:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1648,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "689:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "669:36:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1653,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1652,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "741:4:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1651,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "741:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "740:6:9"
            },
            "scope": 1669,
            "src": "657:166:9",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1670,
        "src": "110:715:9"
      }
    ],
    "src": "0:826:9"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/Roles.sol",
    "exportedSymbols": {
      "Roles": [
        1669
      ]
    },
    "id": 1670,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1592,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:9"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title Roles\n@dev Library for managing addresses assigned to a Role.",
        "fullyImplemented": true,
        "id": 1669,
        "linearizedBaseContracts": [
          1669
        ],
        "name": "Roles",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Roles.Role",
            "id": 1597,
            "members": [
              {
                "constant": false,
                "id": 1596,
                "name": "bearer",
                "nodeType": "VariableDeclaration",
                "scope": 1597,
                "src": "146:32:9",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 1595,
                  "keyType": {
                    "id": 1593,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "155:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "146:25:9",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueType": {
                    "id": 1594,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "166:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Role",
            "nodeType": "StructDefinition",
            "scope": 1669,
            "src": "128:55:9",
            "visibility": "public"
          },
          {
            "body": {
              "id": 1620,
              "nodeType": "Block",
              "src": "303:74:9",
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
                        "id": 1609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1605,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1601,
                          "src": "317:7:9",
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
                              "id": 1607,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "336:1:9",
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
                            "id": 1606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "328:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "328:10:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "317:21:9",
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
                      "id": 1604,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "309:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "309:30:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1611,
                  "nodeType": "ExpressionStatement",
                  "src": "309:30:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1612,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1599,
                          "src": "345:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                            "typeString": "struct Roles.Role storage pointer"
                          }
                        },
                        "id": 1615,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "bearer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1596,
                        "src": "345:11:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 1616,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1614,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1601,
                        "src": "357:7:9",
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
                      "src": "345:20:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "368:4:9",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "345:27:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1619,
                  "nodeType": "ExpressionStatement",
                  "src": "345:27:9"
                }
              ]
            },
            "documentation": "@dev give an account access to this role",
            "id": 1621,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1599,
                  "name": "role",
                  "nodeType": "VariableDeclaration",
                  "scope": 1621,
                  "src": "258:17:9",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1598,
                    "name": "Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1597,
                    "src": "258:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1601,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1621,
                  "src": "277:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1600,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "257:36:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1603,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "303:0:9"
            },
            "scope": 1669,
            "src": "245:132:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1644,
              "nodeType": "Block",
              "src": "504:75:9",
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
                        "id": 1633,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1629,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1625,
                          "src": "518:7:9",
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
                              "id": 1631,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "537:1:9",
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
                            "id": 1630,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "529:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1632,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "529:10:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "518:21:9",
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
                      "id": 1628,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "510:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1634,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "510:30:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1635,
                  "nodeType": "ExpressionStatement",
                  "src": "510:30:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1642,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1636,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1623,
                          "src": "546:4:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                            "typeString": "struct Roles.Role storage pointer"
                          }
                        },
                        "id": 1639,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "bearer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1596,
                        "src": "546:11:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 1640,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1638,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1625,
                        "src": "558:7:9",
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
                      "src": "546:20:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 1641,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "569:5:9",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "546:28:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1643,
                  "nodeType": "ExpressionStatement",
                  "src": "546:28:9"
                }
              ]
            },
            "documentation": "@dev remove an account's access to this role",
            "id": 1645,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "remove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1623,
                  "name": "role",
                  "nodeType": "VariableDeclaration",
                  "scope": 1645,
                  "src": "459:17:9",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1622,
                    "name": "Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1597,
                    "src": "459:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1625,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1645,
                  "src": "478:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1624,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "478:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "458:36:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1627,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "504:0:9"
            },
            "scope": 1669,
            "src": "443:136:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1667,
              "nodeType": "Block",
              "src": "749:74:9",
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
                        "id": 1659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1655,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1649,
                          "src": "763:7:9",
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
                              "id": 1657,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "782:1:9",
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
                            "id": 1656,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "774:7:9",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1658,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "774:10:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "763:21:9",
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
                      "id": 1654,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "755:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "755:30:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1661,
                  "nodeType": "ExpressionStatement",
                  "src": "755:30:9"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1662,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1647,
                        "src": "798:4:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                          "typeString": "struct Roles.Role storage pointer"
                        }
                      },
                      "id": 1663,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bearer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1596,
                      "src": "798:11:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 1665,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 1664,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1649,
                      "src": "810:7:9",
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
                    "src": "798:20:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1653,
                  "id": 1666,
                  "nodeType": "Return",
                  "src": "791:27:9"
                }
              ]
            },
            "documentation": "@dev check if an account has this role\n@return bool",
            "id": 1668,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "has",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1647,
                  "name": "role",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "670:17:9",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                    "typeString": "struct Roles.Role"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1646,
                    "name": "Role",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1597,
                    "src": "670:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Role_$1597_storage_ptr",
                      "typeString": "struct Roles.Role"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1649,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "689:15:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1648,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "689:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "669:36:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 1653,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1652,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "741:4:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1651,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "741:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "740:6:9"
            },
            "scope": 1669,
            "src": "657:166:9",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 1670,
        "src": "110:715:9"
      }
    ],
    "src": "0:826:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.554Z"
}