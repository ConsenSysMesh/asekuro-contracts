export const ERC20Detailed = 
{
  "contractName": "ERC20Detailed",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "who",
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
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "inputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "decimals",
          "type": "uint8"
        }
      ],
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
          "indexed": false,
          "name": "value",
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
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC20.sol\";\n\n\n/**\n * @title ERC20Detailed token\n * @dev The decimals are only for visualization purposes.\n * All the operations are done using the smallest and indivisible token unit,\n * just as on Ethereum all the operations are done in wei.\n */\ncontract ERC20Detailed is IERC20 {\n  string private _name;\n  string private _symbol;\n  uint8 private _decimals;\n\n  constructor(string name, string symbol, uint8 decimals) public {\n    _name = name;\n    _symbol = symbol;\n    _decimals = decimals;\n  }\n\n  /**\n   * @return the name of the token.\n   */\n  function name() public view returns(string) {\n    return _name;\n  }\n\n  /**\n   * @return the symbol of the token.\n   */\n  function symbol() public view returns(string) {\n    return _symbol;\n  }\n\n  /**\n   * @return the number of decimals of the token.\n   */\n  function decimals() public view returns(uint8) {\n    return _decimals;\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
    "exportedSymbols": {
      "ERC20Detailed": [
        3301
      ]
    },
    "id": 3302,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3245,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:19"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
        "file": "./IERC20.sol",
        "id": 3246,
        "nodeType": "ImportDirective",
        "scope": 3302,
        "sourceUnit": 3442,
        "src": "26:22:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3247,
              "name": "IERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3441,
              "src": "310:6:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$3441",
                "typeString": "contract IERC20"
              }
            },
            "id": 3248,
            "nodeType": "InheritanceSpecifier",
            "src": "310:6:19"
          }
        ],
        "contractDependencies": [
          3441
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20Detailed token\n@dev The decimals are only for visualization purposes.\nAll the operations are done using the smallest and indivisible token unit,\njust as on Ethereum all the operations are done in wei.",
        "fullyImplemented": false,
        "id": 3301,
        "linearizedBaseContracts": [
          3301,
          3441
        ],
        "name": "ERC20Detailed",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3250,
            "name": "_name",
            "nodeType": "VariableDeclaration",
            "scope": 3301,
            "src": "321:20:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 3249,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "321:6:19",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3252,
            "name": "_symbol",
            "nodeType": "VariableDeclaration",
            "scope": 3301,
            "src": "345:22:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 3251,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "345:6:19",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3254,
            "name": "_decimals",
            "nodeType": "VariableDeclaration",
            "scope": 3301,
            "src": "371:23:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 3253,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "371:5:19",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 3275,
              "nodeType": "Block",
              "src": "462:71:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3263,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3250,
                      "src": "468:5:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3264,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3256,
                      "src": "476:4:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "468:12:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 3266,
                  "nodeType": "ExpressionStatement",
                  "src": "468:12:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3267,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3252,
                      "src": "486:7:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3268,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3258,
                      "src": "496:6:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "486:16:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 3270,
                  "nodeType": "ExpressionStatement",
                  "src": "486:16:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3271,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3254,
                      "src": "508:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3272,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3260,
                      "src": "520:8:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "508:20:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 3274,
                  "nodeType": "ExpressionStatement",
                  "src": "508:20:19"
                }
              ]
            },
            "documentation": null,
            "id": 3276,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3256,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 3276,
                  "src": "411:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3255,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "411:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3258,
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 3276,
                  "src": "424:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3257,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3260,
                  "name": "decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 3276,
                  "src": "439:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 3259,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:5:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "410:44:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "462:0:19"
            },
            "scope": 3301,
            "src": "399:134:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3283,
              "nodeType": "Block",
              "src": "629:23:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3281,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3250,
                    "src": "642:5:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 3280,
                  "id": 3282,
                  "nodeType": "Return",
                  "src": "635:12:19"
                }
              ]
            },
            "documentation": "@return the name of the token.",
            "id": 3284,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3277,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "598:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3279,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3284,
                  "src": "621:6:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3278,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "621:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "620:8:19"
            },
            "scope": 3301,
            "src": "585:67:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3291,
              "nodeType": "Block",
              "src": "752:25:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3289,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3252,
                    "src": "765:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 3288,
                  "id": 3290,
                  "nodeType": "Return",
                  "src": "758:14:19"
                }
              ]
            },
            "documentation": "@return the symbol of the token.",
            "id": 3292,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3285,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "721:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3287,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3292,
                  "src": "744:6:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3286,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:8:19"
            },
            "scope": 3301,
            "src": "706:71:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3299,
              "nodeType": "Block",
              "src": "890:27:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3297,
                    "name": "_decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3254,
                    "src": "903:9:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 3296,
                  "id": 3298,
                  "nodeType": "Return",
                  "src": "896:16:19"
                }
              ]
            },
            "documentation": "@return the number of decimals of the token.",
            "id": 3300,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3293,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "860:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3295,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3300,
                  "src": "883:5:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 3294,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "883:5:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "882:7:19"
            },
            "scope": 3301,
            "src": "843:74:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3302,
        "src": "284:635:19"
      }
    ],
    "src": "0:920:19"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
    "exportedSymbols": {
      "ERC20Detailed": [
        3301
      ]
    },
    "id": 3302,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3245,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:19"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
        "file": "./IERC20.sol",
        "id": 3246,
        "nodeType": "ImportDirective",
        "scope": 3302,
        "sourceUnit": 3442,
        "src": "26:22:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3247,
              "name": "IERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3441,
              "src": "310:6:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$3441",
                "typeString": "contract IERC20"
              }
            },
            "id": 3248,
            "nodeType": "InheritanceSpecifier",
            "src": "310:6:19"
          }
        ],
        "contractDependencies": [
          3441
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20Detailed token\n@dev The decimals are only for visualization purposes.\nAll the operations are done using the smallest and indivisible token unit,\njust as on Ethereum all the operations are done in wei.",
        "fullyImplemented": false,
        "id": 3301,
        "linearizedBaseContracts": [
          3301,
          3441
        ],
        "name": "ERC20Detailed",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3250,
            "name": "_name",
            "nodeType": "VariableDeclaration",
            "scope": 3301,
            "src": "321:20:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 3249,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "321:6:19",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3252,
            "name": "_symbol",
            "nodeType": "VariableDeclaration",
            "scope": 3301,
            "src": "345:22:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 3251,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "345:6:19",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 3254,
            "name": "_decimals",
            "nodeType": "VariableDeclaration",
            "scope": 3301,
            "src": "371:23:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 3253,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "371:5:19",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 3275,
              "nodeType": "Block",
              "src": "462:71:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3263,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3250,
                      "src": "468:5:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3264,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3256,
                      "src": "476:4:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "468:12:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 3266,
                  "nodeType": "ExpressionStatement",
                  "src": "468:12:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3267,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3252,
                      "src": "486:7:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3268,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3258,
                      "src": "496:6:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "486:16:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 3270,
                  "nodeType": "ExpressionStatement",
                  "src": "486:16:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3271,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3254,
                      "src": "508:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 3272,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3260,
                      "src": "520:8:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "508:20:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 3274,
                  "nodeType": "ExpressionStatement",
                  "src": "508:20:19"
                }
              ]
            },
            "documentation": null,
            "id": 3276,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3256,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 3276,
                  "src": "411:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3255,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "411:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3258,
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 3276,
                  "src": "424:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3257,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3260,
                  "name": "decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 3276,
                  "src": "439:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 3259,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:5:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "410:44:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "462:0:19"
            },
            "scope": 3301,
            "src": "399:134:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3283,
              "nodeType": "Block",
              "src": "629:23:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3281,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3250,
                    "src": "642:5:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 3280,
                  "id": 3282,
                  "nodeType": "Return",
                  "src": "635:12:19"
                }
              ]
            },
            "documentation": "@return the name of the token.",
            "id": 3284,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3277,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "598:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3279,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3284,
                  "src": "621:6:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3278,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "621:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "620:8:19"
            },
            "scope": 3301,
            "src": "585:67:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3291,
              "nodeType": "Block",
              "src": "752:25:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3289,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3252,
                    "src": "765:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 3288,
                  "id": 3290,
                  "nodeType": "Return",
                  "src": "758:14:19"
                }
              ]
            },
            "documentation": "@return the symbol of the token.",
            "id": 3292,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3285,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "721:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3287,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3292,
                  "src": "744:6:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3286,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:8:19"
            },
            "scope": 3301,
            "src": "706:71:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3299,
              "nodeType": "Block",
              "src": "890:27:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3297,
                    "name": "_decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3254,
                    "src": "903:9:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 3296,
                  "id": 3298,
                  "nodeType": "Return",
                  "src": "896:16:19"
                }
              ]
            },
            "documentation": "@return the number of decimals of the token.",
            "id": 3300,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3293,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "860:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 3296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3295,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3300,
                  "src": "883:5:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 3294,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "883:5:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "882:7:19"
            },
            "scope": 3301,
            "src": "843:74:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3302,
        "src": "284:635:19"
      }
    ],
    "src": "0:920:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.415Z"
}