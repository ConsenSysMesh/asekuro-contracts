export const Address = 
{
  "contractName": "Address",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820573b90b0100825908253b7be41ca5d6577da998bb2b7e394d1be63fbe7f513d20029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820573b90b0100825908253b7be41ca5d6577da998bb2b7e394d1be63fbe7f513d20029",
  "sourceMap": "87:948:28:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "87:948:28:-;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * Utility library of inline functions on addresses\n */\nlibrary Address {\n\n  /**\n   * Returns whether the target address is a contract\n   * @dev This function will return false if invoked during the constructor of a contract,\n   * as the code is not actually created until after the constructor finishes.\n   * @param account address of the account to check\n   * @return whether the target address is a contract\n   */\n  function isContract(address account) internal view returns (bool) {\n    uint256 size;\n    // XXX Currently there is no better way to check if there is a contract in an address\n    // than to check the size of the code at that address.\n    // See https://ethereum.stackexchange.com/a/14016/36603\n    // for more details about how this works.\n    // TODO Check this again before the Serenity release, because all addresses will be\n    // contracts then.\n    // solium-disable-next-line security/no-inline-assembly\n    assembly { size := extcodesize(account) }\n    return size > 0;\n  }\n\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
    "exportedSymbols": {
      "Address": [
        3999
      ]
    },
    "id": 4000,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3982,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "Utility library of inline functions on addresses",
        "fullyImplemented": true,
        "id": 3999,
        "linearizedBaseContracts": [
          3999
        ],
        "name": "Address",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 3997,
              "nodeType": "Block",
              "src": "516:516:28",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3990,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 3998,
                      "src": "522:12:28",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3989,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "522:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3991,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "522:12:28"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 3990,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "977:4:28",
                        "valueSize": 1
                      }
                    },
                    {
                      "account": {
                        "declaration": 3984,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "997:7:28",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 3992,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(account)\n}",
                  "src": "966:52:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 3993,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3990,
                      "src": "1019:4:28",
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
                      "id": 3994,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1026:1:28",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1019:8:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3988,
                  "id": 3996,
                  "nodeType": "Return",
                  "src": "1012:15:28"
                }
              ]
            },
            "documentation": "Returns whether the target address is a contract\n@dev This function will return false if invoked during the constructor of a contract,\nas the code is not actually created until after the constructor finishes.\n@param account address of the account to check\n@return whether the target address is a contract",
            "id": 3998,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3984,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 3998,
                  "src": "470:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3983,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "470:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "469:17:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 3988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3987,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3998,
                  "src": "510:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3986,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:6:28"
            },
            "scope": 3999,
            "src": "450:582:28",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 4000,
        "src": "87:948:28"
      }
    ],
    "src": "0:1036:28"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
    "exportedSymbols": {
      "Address": [
        3999
      ]
    },
    "id": 4000,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3982,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "Utility library of inline functions on addresses",
        "fullyImplemented": true,
        "id": 3999,
        "linearizedBaseContracts": [
          3999
        ],
        "name": "Address",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 3997,
              "nodeType": "Block",
              "src": "516:516:28",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3990,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 3998,
                      "src": "522:12:28",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3989,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "522:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3991,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "522:12:28"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 3990,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "977:4:28",
                        "valueSize": 1
                      }
                    },
                    {
                      "account": {
                        "declaration": 3984,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "997:7:28",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 3992,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(account)\n}",
                  "src": "966:52:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 3993,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3990,
                      "src": "1019:4:28",
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
                      "id": 3994,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1026:1:28",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1019:8:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3988,
                  "id": 3996,
                  "nodeType": "Return",
                  "src": "1012:15:28"
                }
              ]
            },
            "documentation": "Returns whether the target address is a contract\n@dev This function will return false if invoked during the constructor of a contract,\nas the code is not actually created until after the constructor finishes.\n@param account address of the account to check\n@return whether the target address is a contract",
            "id": 3998,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3984,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 3998,
                  "src": "470:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3983,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "470:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "469:17:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 3988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3987,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3998,
                  "src": "510:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3986,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:6:28"
            },
            "scope": 3999,
            "src": "450:582:28",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 4000,
        "src": "87:948:28"
      }
    ],
    "src": "0:1036:28"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.577Z"
}