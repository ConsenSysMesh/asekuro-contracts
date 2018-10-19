export const ERC165 = 
{
  "contractName": "ERC165",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061004c6301ffc9a77c010000000000000000000000000000000000000000000000000000000002610051640100000000026401000000009004565b61010e565b63ffffffff7c010000000000000000000000000000000000000000000000000000000002817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515156100a257600080fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b61013d8061011d6000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a714610046575b600080fd5b34801561005257600080fd5b5061009060048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506100aa565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff1690509190505600a165627a7a723058203fac3b4f93dd7c208ff4d6c3d1300b91fd2a963ea68365e08a16a7d4a9cf4c8f0029",
  "deployedBytecode": "0x608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a714610046575b600080fd5b34801561005257600080fd5b5061009060048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506100aa565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff1690509190505600a165627a7a723058203fac3b4f93dd7c208ff4d6c3d1300b91fd2a963ea68365e08a16a7d4a9cf4c8f0029",
  "sourceMap": "158:948:13:-;;;579:77;8:9:-1;5:2;;;30:1;27;20:12;5:2;579:77:13;612:39;236:10;631:19;;612:18;;;:39;;;:::i;:::-;158:948;;950:154;1042:10;1027:25;;:11;:25;;;;;1019:34;;;;;;;;1095:4;1059:20;:33;1080:11;1059:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;950:154;:::o;158:948::-;;;;;;;",
  "deployedSourceMap": "158:948:13:-;;;;;;;;;;;;;;;;;;;;;;;;739:141;;8:9:-1;5:2;;;30:1;27;20:12;5:2;739:141:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;821:4;842:20;:33;863:11;842:33;;;;;;;;;;;;;;;;;;;;;;;;;;;835:40;;739:141;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC165.sol\";\n\n\n/**\n * @title ERC165\n * @author Matt Condon (@shrugs)\n * @dev Implements ERC165 using a lookup table.\n */\ncontract ERC165 is IERC165 {\n\n  bytes4 private constant _InterfaceId_ERC165 = 0x01ffc9a7;\n  /**\n   * 0x01ffc9a7 ===\n   *   bytes4(keccak256('supportsInterface(bytes4)'))\n   */\n\n  /**\n   * @dev a mapping of interface id to whether or not it's supported\n   */\n  mapping(bytes4 => bool) internal _supportedInterfaces;\n\n  /**\n   * @dev A contract implementing SupportsInterfaceWithLookup\n   * implement ERC165 itself\n   */\n  constructor()\n    public\n  {\n    _registerInterface(_InterfaceId_ERC165);\n  }\n\n  /**\n   * @dev implement supportsInterface(bytes4) using a lookup table\n   */\n  function supportsInterface(bytes4 interfaceId)\n    external\n    view\n    returns (bool)\n  {\n    return _supportedInterfaces[interfaceId];\n  }\n\n  /**\n   * @dev private method for registering an interface\n   */\n  function _registerInterface(bytes4 interfaceId)\n    internal\n  {\n    require(interfaceId != 0xffffffff);\n    _supportedInterfaces[interfaceId] = true;\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol",
    "exportedSymbols": {
      "ERC165": [
        2465
      ]
    },
    "id": 2466,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2416,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:13"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
        "file": "./IERC165.sol",
        "id": 2417,
        "nodeType": "ImportDirective",
        "scope": 2466,
        "sourceUnit": 2476,
        "src": "26:23:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2418,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2475,
              "src": "177:7:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$2475",
                "typeString": "contract IERC165"
              }
            },
            "id": 2419,
            "nodeType": "InheritanceSpecifier",
            "src": "177:7:13"
          }
        ],
        "contractDependencies": [
          2475
        ],
        "contractKind": "contract",
        "documentation": "@title ERC165\n@author Matt Condon (@shrugs)\n@dev Implements ERC165 using a lookup table.",
        "fullyImplemented": true,
        "id": 2465,
        "linearizedBaseContracts": [
          2465,
          2475
        ],
        "name": "ERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 2422,
            "name": "_InterfaceId_ERC165",
            "nodeType": "VariableDeclaration",
            "scope": 2465,
            "src": "190:56:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 2420,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "190:6:13",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783031666663396137",
              "id": 2421,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "236:10:13",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_33540519_by_1",
                "typeString": "int_const 33540519"
              },
              "value": "0x01ffc9a7"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2426,
            "name": "_supportedInterfaces",
            "nodeType": "VariableDeclaration",
            "scope": 2465,
            "src": "418:53:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
              "typeString": "mapping(bytes4 => bool)"
            },
            "typeName": {
              "id": 2425,
              "keyType": {
                "id": 2423,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "426:6:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "418:23:13",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                "typeString": "mapping(bytes4 => bool)"
              },
              "valueType": {
                "id": 2424,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "436:4:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2433,
              "nodeType": "Block",
              "src": "606:50:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2430,
                        "name": "_InterfaceId_ERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2422,
                        "src": "631:19:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 2429,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2464,
                      "src": "612:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 2431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "612:39:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2432,
                  "nodeType": "ExpressionStatement",
                  "src": "612:39:13"
                }
              ]
            },
            "documentation": "@dev A contract implementing SupportsInterfaceWithLookup\nimplement ERC165 itself",
            "id": 2434,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2427,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "590:2:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2428,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "606:0:13"
            },
            "scope": 2465,
            "src": "579:77:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2445,
              "nodeType": "Block",
              "src": "829:51:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 2441,
                      "name": "_supportedInterfaces",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2426,
                      "src": "842:20:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                        "typeString": "mapping(bytes4 => bool)"
                      }
                    },
                    "id": 2443,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 2442,
                      "name": "interfaceId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2436,
                      "src": "863:11:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "842:33:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2440,
                  "id": 2444,
                  "nodeType": "Return",
                  "src": "835:40:13"
                }
              ]
            },
            "documentation": "@dev implement supportsInterface(bytes4) using a lookup table",
            "id": 2446,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2437,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2436,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2446,
                  "src": "766:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2435,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "766:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "765:20:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2439,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2446,
                  "src": "821:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2438,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "821:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "820:6:13"
            },
            "scope": 2465,
            "src": "739:141:13",
            "stateMutability": "view",
            "superFunction": 2474,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2463,
              "nodeType": "Block",
              "src": "1013:91:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 2454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2452,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2448,
                          "src": "1027:11:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30786666666666666666",
                          "id": 2453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1042:10:13",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4294967295_by_1",
                            "typeString": "int_const 4294967295"
                          },
                          "value": "0xffffffff"
                        },
                        "src": "1027:25:13",
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
                      "id": 2451,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1019:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1019:34:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2456,
                  "nodeType": "ExpressionStatement",
                  "src": "1019:34:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2461,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 2457,
                        "name": "_supportedInterfaces",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2426,
                        "src": "1059:20:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 2459,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 2458,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2448,
                        "src": "1080:11:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1059:33:13",
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
                      "id": 2460,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1095:4:13",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1059:40:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2462,
                  "nodeType": "ExpressionStatement",
                  "src": "1059:40:13"
                }
              ]
            },
            "documentation": "@dev private method for registering an interface",
            "id": 2464,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_registerInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2448,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2464,
                  "src": "978:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2447,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:20:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1013:0:13"
            },
            "scope": 2465,
            "src": "950:154:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2466,
        "src": "158:948:13"
      }
    ],
    "src": "0:1107:13"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol",
    "exportedSymbols": {
      "ERC165": [
        2465
      ]
    },
    "id": 2466,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2416,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:13"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
        "file": "./IERC165.sol",
        "id": 2417,
        "nodeType": "ImportDirective",
        "scope": 2466,
        "sourceUnit": 2476,
        "src": "26:23:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2418,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2475,
              "src": "177:7:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$2475",
                "typeString": "contract IERC165"
              }
            },
            "id": 2419,
            "nodeType": "InheritanceSpecifier",
            "src": "177:7:13"
          }
        ],
        "contractDependencies": [
          2475
        ],
        "contractKind": "contract",
        "documentation": "@title ERC165\n@author Matt Condon (@shrugs)\n@dev Implements ERC165 using a lookup table.",
        "fullyImplemented": true,
        "id": 2465,
        "linearizedBaseContracts": [
          2465,
          2475
        ],
        "name": "ERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 2422,
            "name": "_InterfaceId_ERC165",
            "nodeType": "VariableDeclaration",
            "scope": 2465,
            "src": "190:56:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 2420,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "190:6:13",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783031666663396137",
              "id": 2421,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "236:10:13",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_33540519_by_1",
                "typeString": "int_const 33540519"
              },
              "value": "0x01ffc9a7"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2426,
            "name": "_supportedInterfaces",
            "nodeType": "VariableDeclaration",
            "scope": 2465,
            "src": "418:53:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
              "typeString": "mapping(bytes4 => bool)"
            },
            "typeName": {
              "id": 2425,
              "keyType": {
                "id": 2423,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "426:6:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "418:23:13",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                "typeString": "mapping(bytes4 => bool)"
              },
              "valueType": {
                "id": 2424,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "436:4:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2433,
              "nodeType": "Block",
              "src": "606:50:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2430,
                        "name": "_InterfaceId_ERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2422,
                        "src": "631:19:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 2429,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2464,
                      "src": "612:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 2431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "612:39:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2432,
                  "nodeType": "ExpressionStatement",
                  "src": "612:39:13"
                }
              ]
            },
            "documentation": "@dev A contract implementing SupportsInterfaceWithLookup\nimplement ERC165 itself",
            "id": 2434,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2427,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "590:2:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2428,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "606:0:13"
            },
            "scope": 2465,
            "src": "579:77:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2445,
              "nodeType": "Block",
              "src": "829:51:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 2441,
                      "name": "_supportedInterfaces",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2426,
                      "src": "842:20:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                        "typeString": "mapping(bytes4 => bool)"
                      }
                    },
                    "id": 2443,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 2442,
                      "name": "interfaceId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2436,
                      "src": "863:11:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "842:33:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2440,
                  "id": 2444,
                  "nodeType": "Return",
                  "src": "835:40:13"
                }
              ]
            },
            "documentation": "@dev implement supportsInterface(bytes4) using a lookup table",
            "id": 2446,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2437,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2436,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2446,
                  "src": "766:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2435,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "766:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "765:20:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2439,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2446,
                  "src": "821:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2438,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "821:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "820:6:13"
            },
            "scope": 2465,
            "src": "739:141:13",
            "stateMutability": "view",
            "superFunction": 2474,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2463,
              "nodeType": "Block",
              "src": "1013:91:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 2454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2452,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2448,
                          "src": "1027:11:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30786666666666666666",
                          "id": 2453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1042:10:13",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4294967295_by_1",
                            "typeString": "int_const 4294967295"
                          },
                          "value": "0xffffffff"
                        },
                        "src": "1027:25:13",
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
                      "id": 2451,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1019:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1019:34:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2456,
                  "nodeType": "ExpressionStatement",
                  "src": "1019:34:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2461,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 2457,
                        "name": "_supportedInterfaces",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2426,
                        "src": "1059:20:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 2459,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 2458,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2448,
                        "src": "1080:11:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1059:33:13",
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
                      "id": 2460,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1095:4:13",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1059:40:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2462,
                  "nodeType": "ExpressionStatement",
                  "src": "1059:40:13"
                }
              ]
            },
            "documentation": "@dev private method for registering an interface",
            "id": 2464,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_registerInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2448,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 2464,
                  "src": "978:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2447,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:20:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1013:0:13"
            },
            "scope": 2465,
            "src": "950:154:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2466,
        "src": "158:948:13"
      }
    ],
    "src": "0:1107:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.415Z"
}