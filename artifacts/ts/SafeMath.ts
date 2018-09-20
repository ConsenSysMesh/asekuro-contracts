export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820104fc4f0e7a368bbc24d27b93b2b723598cfe391df73c52f1476f9d6514b1e8b0029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820104fc4f0e7a368bbc24d27b93b2b723598cfe391df73c52f1476f9d6514b1e8b0029",
  "sourceMap": "118:1531:15:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "118:1531:15:-;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that revert on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, reverts on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\n    // benefit is lost if 'b' is also tested.\n    // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522\n    if (a == 0) {\n      return 0;\n    }\n\n    uint256 c = a * b;\n    require(c / a == b);\n\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers truncating the quotient, reverts on division by zero.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    require(b > 0); // Solidity only automatically asserts when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, reverts on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    require(b <= a);\n    uint256 c = a - b;\n\n    return c;\n  }\n\n  /**\n  * @dev Adds two numbers, reverts on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    require(c >= a);\n\n    return c;\n  }\n\n  /**\n  * @dev Divides two numbers and returns the remainder (unsigned integer modulo),\n  * reverts when dividing by zero.\n  */\n  function mod(uint256 a, uint256 b) internal pure returns (uint256) {\n    require(b != 0);\n    return a % b;\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
    "exportedSymbols": {
      "SafeMath": [
        2120
      ]
    },
    "id": 2121,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1994,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeMath\n@dev Math operations with safety checks that revert on error",
        "fullyImplemented": true,
        "id": 2120,
        "linearizedBaseContracts": [
          2120
        ],
        "name": "SafeMath",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 2026,
              "nodeType": "Block",
              "src": "272:314:15",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2005,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2003,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1996,
                      "src": "487:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 2004,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "492:1:15",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "487:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 2009,
                  "nodeType": "IfStatement",
                  "src": "483:35:15",
                  "trueBody": {
                    "id": 2008,
                    "nodeType": "Block",
                    "src": "495:23:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "510:1:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 2002,
                        "id": 2007,
                        "nodeType": "Return",
                        "src": "503:8:15"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    2011
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2011,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 2027,
                      "src": "524:9:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2010,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "524:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2015,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2012,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1996,
                      "src": "536:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2013,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1998,
                      "src": "540:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "536:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "524:17:15"
                },
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
                        "id": 2021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2019,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 2017,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2011,
                            "src": "555:1:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 2018,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1996,
                            "src": "559:1:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "555:5:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2020,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1998,
                          "src": "564:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "555:10:15",
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
                      "id": 2016,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "547:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "547:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2023,
                  "nodeType": "ExpressionStatement",
                  "src": "547:19:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2024,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2011,
                    "src": "580:1:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2002,
                  "id": 2025,
                  "nodeType": "Return",
                  "src": "573:8:15"
                }
              ]
            },
            "documentation": "@dev Multiplies two numbers, reverts on overflow.",
            "id": 2027,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "mul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1996,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2027,
                  "src": "218:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1995,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "218:7:15",
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
                  "id": 1998,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2027,
                  "src": "229:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "229:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "217:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2001,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2027,
                  "src": "263:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "262:9:15"
            },
            "scope": 2120,
            "src": "205:381:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2050,
              "nodeType": "Block",
              "src": "763:203:15",
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
                        "id": 2039,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2037,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2031,
                          "src": "777:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2038,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "781:1:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "777:5:15",
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
                      "id": 2036,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "769:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "769:14:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2041,
                  "nodeType": "ExpressionStatement",
                  "src": "769:14:15"
                },
                {
                  "assignments": [
                    2043
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2043,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 2051,
                      "src": "847:9:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2042,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "847:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2047,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2046,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2044,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2029,
                      "src": "859:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2045,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2031,
                      "src": "863:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "859:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "847:17:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2048,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2043,
                    "src": "960:1:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2035,
                  "id": 2049,
                  "nodeType": "Return",
                  "src": "953:8:15"
                }
              ]
            },
            "documentation": "@dev Integer division of two numbers truncating the quotient, reverts on division by zero.",
            "id": 2051,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "div",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2029,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2051,
                  "src": "709:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2028,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:15",
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
                  "id": 2031,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2051,
                  "src": "720:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2030,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "708:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2034,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2051,
                  "src": "754:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2033,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "754:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "753:9:15"
            },
            "scope": 2120,
            "src": "696:270:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2074,
              "nodeType": "Block",
              "src": "1146:64:15",
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
                        "id": 2063,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2061,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2055,
                          "src": "1160:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2062,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2053,
                          "src": "1165:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1160:6:15",
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
                      "id": 2060,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1152:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1152:15:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2065,
                  "nodeType": "ExpressionStatement",
                  "src": "1152:15:15"
                },
                {
                  "assignments": [
                    2067
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2067,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 2075,
                      "src": "1173:9:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2066,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1173:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2071,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2068,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2053,
                      "src": "1185:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2069,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2055,
                      "src": "1189:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1185:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1173:17:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2072,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2067,
                    "src": "1204:1:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2059,
                  "id": 2073,
                  "nodeType": "Return",
                  "src": "1197:8:15"
                }
              ]
            },
            "documentation": "@dev Subtracts two numbers, reverts on overflow (i.e. if subtrahend is greater than minuend).",
            "id": 2075,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "sub",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2056,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2053,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2075,
                  "src": "1092:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2052,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1092:7:15",
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
                  "id": 2055,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2075,
                  "src": "1103:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2054,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1091:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2058,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2075,
                  "src": "1137:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2057,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1137:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1136:9:15"
            },
            "scope": 2120,
            "src": "1079:131:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2098,
              "nodeType": "Block",
              "src": "1340:64:15",
              "statements": [
                {
                  "assignments": [
                    2085
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2085,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 2099,
                      "src": "1346:9:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2084,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1346:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2089,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2088,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2086,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2077,
                      "src": "1358:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2087,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2079,
                      "src": "1362:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1358:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1346:17:15"
                },
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
                        "id": 2093,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2091,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2085,
                          "src": "1377:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2092,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2077,
                          "src": "1382:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1377:6:15",
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
                      "id": 2090,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1369:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2094,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1369:15:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2095,
                  "nodeType": "ExpressionStatement",
                  "src": "1369:15:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2096,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2085,
                    "src": "1398:1:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2083,
                  "id": 2097,
                  "nodeType": "Return",
                  "src": "1391:8:15"
                }
              ]
            },
            "documentation": "@dev Adds two numbers, reverts on overflow.",
            "id": 2099,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2080,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2077,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2099,
                  "src": "1286:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2076,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:15",
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
                  "id": 2079,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2099,
                  "src": "1297:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2078,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1297:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1285:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2082,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2099,
                  "src": "1331:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1331:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1330:9:15"
            },
            "scope": 2120,
            "src": "1273:131:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2118,
              "nodeType": "Block",
              "src": "1603:44:15",
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
                        "id": 2111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2109,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2103,
                          "src": "1617:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2110,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1622:1:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1617:6:15",
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
                      "id": 2108,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1609:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1609:15:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2113,
                  "nodeType": "ExpressionStatement",
                  "src": "1609:15:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2114,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2101,
                      "src": "1637:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2115,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2103,
                      "src": "1641:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1637:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2107,
                  "id": 2117,
                  "nodeType": "Return",
                  "src": "1630:12:15"
                }
              ]
            },
            "documentation": "@dev Divides two numbers and returns the remainder (unsigned integer modulo),\nreverts when dividing by zero.",
            "id": 2119,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "mod",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2101,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2119,
                  "src": "1549:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2100,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1549:7:15",
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
                  "id": 2103,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2119,
                  "src": "1560:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2102,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1560:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1548:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2106,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2119,
                  "src": "1594:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2105,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1594:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1593:9:15"
            },
            "scope": 2120,
            "src": "1536:111:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2121,
        "src": "118:1531:15"
      }
    ],
    "src": "0:1650:15"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol",
    "exportedSymbols": {
      "SafeMath": [
        2120
      ]
    },
    "id": 2121,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1994,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeMath\n@dev Math operations with safety checks that revert on error",
        "fullyImplemented": true,
        "id": 2120,
        "linearizedBaseContracts": [
          2120
        ],
        "name": "SafeMath",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 2026,
              "nodeType": "Block",
              "src": "272:314:15",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2005,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2003,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1996,
                      "src": "487:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 2004,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "492:1:15",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "487:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 2009,
                  "nodeType": "IfStatement",
                  "src": "483:35:15",
                  "trueBody": {
                    "id": 2008,
                    "nodeType": "Block",
                    "src": "495:23:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "510:1:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 2002,
                        "id": 2007,
                        "nodeType": "Return",
                        "src": "503:8:15"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    2011
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2011,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 2027,
                      "src": "524:9:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2010,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "524:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2015,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2012,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1996,
                      "src": "536:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2013,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1998,
                      "src": "540:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "536:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "524:17:15"
                },
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
                        "id": 2021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2019,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 2017,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2011,
                            "src": "555:1:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 2018,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1996,
                            "src": "559:1:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "555:5:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2020,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1998,
                          "src": "564:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "555:10:15",
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
                      "id": 2016,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "547:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "547:19:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2023,
                  "nodeType": "ExpressionStatement",
                  "src": "547:19:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2024,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2011,
                    "src": "580:1:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2002,
                  "id": 2025,
                  "nodeType": "Return",
                  "src": "573:8:15"
                }
              ]
            },
            "documentation": "@dev Multiplies two numbers, reverts on overflow.",
            "id": 2027,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "mul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1996,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2027,
                  "src": "218:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1995,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "218:7:15",
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
                  "id": 1998,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2027,
                  "src": "229:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "229:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "217:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2001,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2027,
                  "src": "263:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "262:9:15"
            },
            "scope": 2120,
            "src": "205:381:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2050,
              "nodeType": "Block",
              "src": "763:203:15",
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
                        "id": 2039,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2037,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2031,
                          "src": "777:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2038,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "781:1:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "777:5:15",
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
                      "id": 2036,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "769:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "769:14:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2041,
                  "nodeType": "ExpressionStatement",
                  "src": "769:14:15"
                },
                {
                  "assignments": [
                    2043
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2043,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 2051,
                      "src": "847:9:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2042,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "847:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2047,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2046,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2044,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2029,
                      "src": "859:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2045,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2031,
                      "src": "863:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "859:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "847:17:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2048,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2043,
                    "src": "960:1:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2035,
                  "id": 2049,
                  "nodeType": "Return",
                  "src": "953:8:15"
                }
              ]
            },
            "documentation": "@dev Integer division of two numbers truncating the quotient, reverts on division by zero.",
            "id": 2051,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "div",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2029,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2051,
                  "src": "709:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2028,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:15",
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
                  "id": 2031,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2051,
                  "src": "720:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2030,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "708:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2034,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2051,
                  "src": "754:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2033,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "754:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "753:9:15"
            },
            "scope": 2120,
            "src": "696:270:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2074,
              "nodeType": "Block",
              "src": "1146:64:15",
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
                        "id": 2063,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2061,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2055,
                          "src": "1160:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2062,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2053,
                          "src": "1165:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1160:6:15",
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
                      "id": 2060,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1152:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1152:15:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2065,
                  "nodeType": "ExpressionStatement",
                  "src": "1152:15:15"
                },
                {
                  "assignments": [
                    2067
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2067,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 2075,
                      "src": "1173:9:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2066,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1173:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2071,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2068,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2053,
                      "src": "1185:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2069,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2055,
                      "src": "1189:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1185:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1173:17:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2072,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2067,
                    "src": "1204:1:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2059,
                  "id": 2073,
                  "nodeType": "Return",
                  "src": "1197:8:15"
                }
              ]
            },
            "documentation": "@dev Subtracts two numbers, reverts on overflow (i.e. if subtrahend is greater than minuend).",
            "id": 2075,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "sub",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2056,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2053,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2075,
                  "src": "1092:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2052,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1092:7:15",
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
                  "id": 2055,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2075,
                  "src": "1103:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2054,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1091:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2058,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2075,
                  "src": "1137:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2057,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1137:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1136:9:15"
            },
            "scope": 2120,
            "src": "1079:131:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2098,
              "nodeType": "Block",
              "src": "1340:64:15",
              "statements": [
                {
                  "assignments": [
                    2085
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2085,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "scope": 2099,
                      "src": "1346:9:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2084,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1346:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2089,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2088,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2086,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2077,
                      "src": "1358:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2087,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2079,
                      "src": "1362:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1358:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1346:17:15"
                },
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
                        "id": 2093,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2091,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2085,
                          "src": "1377:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 2092,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2077,
                          "src": "1382:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1377:6:15",
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
                      "id": 2090,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1369:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2094,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1369:15:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2095,
                  "nodeType": "ExpressionStatement",
                  "src": "1369:15:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2096,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2085,
                    "src": "1398:1:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2083,
                  "id": 2097,
                  "nodeType": "Return",
                  "src": "1391:8:15"
                }
              ]
            },
            "documentation": "@dev Adds two numbers, reverts on overflow.",
            "id": 2099,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2080,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2077,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2099,
                  "src": "1286:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2076,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:15",
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
                  "id": 2079,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2099,
                  "src": "1297:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2078,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1297:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1285:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2082,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2099,
                  "src": "1331:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1331:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1330:9:15"
            },
            "scope": 2120,
            "src": "1273:131:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2118,
              "nodeType": "Block",
              "src": "1603:44:15",
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
                        "id": 2111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2109,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2103,
                          "src": "1617:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2110,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1622:1:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1617:6:15",
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
                      "id": 2108,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1609:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1609:15:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2113,
                  "nodeType": "ExpressionStatement",
                  "src": "1609:15:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 2114,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2101,
                      "src": "1637:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2115,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2103,
                      "src": "1641:1:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1637:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2107,
                  "id": 2117,
                  "nodeType": "Return",
                  "src": "1630:12:15"
                }
              ]
            },
            "documentation": "@dev Divides two numbers and returns the remainder (unsigned integer modulo),\nreverts when dividing by zero.",
            "id": 2119,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "mod",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2101,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 2119,
                  "src": "1549:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2100,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1549:7:15",
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
                  "id": 2103,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 2119,
                  "src": "1560:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2102,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1560:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1548:22:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2106,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2119,
                  "src": "1594:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2105,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1594:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1593:9:15"
            },
            "scope": 2120,
            "src": "1536:111:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2121,
        "src": "118:1531:15"
      }
    ],
    "src": "0:1650:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.557Z"
}