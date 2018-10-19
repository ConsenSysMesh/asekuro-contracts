export const Address = 
{
  "contractName": "Address",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a723058205349b64708011c676ebade253c39eee1463e550f60d1bf0ab0a137c36bdd24400029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a723058205349b64708011c676ebade253c39eee1463e550f60d1bf0ab0a137c36bdd24400029",
  "sourceMap": "87:948:30:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "87:948:30:-;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * Utility library of inline functions on addresses\n */\nlibrary Address {\n\n  /**\n   * Returns whether the target address is a contract\n   * @dev This function will return false if invoked during the constructor of a contract,\n   * as the code is not actually created until after the constructor finishes.\n   * @param account address of the account to check\n   * @return whether the target address is a contract\n   */\n  function isContract(address account) internal view returns (bool) {\n    uint256 size;\n    // XXX Currently there is no better way to check if there is a contract in an address\n    // than to check the size of the code at that address.\n    // See https://ethereum.stackexchange.com/a/14016/36603\n    // for more details about how this works.\n    // TODO Check this again before the Serenity release, because all addresses will be\n    // contracts then.\n    // solium-disable-next-line security/no-inline-assembly\n    assembly { size := extcodesize(account) }\n    return size > 0;\n  }\n\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
    "exportedSymbols": {
      "Address": [
        4608
      ]
    },
    "id": 4609,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4591,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:30"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "Utility library of inline functions on addresses",
        "fullyImplemented": true,
        "id": 4608,
        "linearizedBaseContracts": [
          4608
        ],
        "name": "Address",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 4606,
              "nodeType": "Block",
              "src": "516:516:30",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4599,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 4607,
                      "src": "522:12:30",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4598,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "522:7:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4600,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "522:12:30"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 4599,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "977:4:30",
                        "valueSize": 1
                      }
                    },
                    {
                      "account": {
                        "declaration": 4593,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "997:7:30",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 4601,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(account)\n}",
                  "src": "966:52:30"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 4602,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4599,
                      "src": "1019:4:30",
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
                      "id": 4603,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1026:1:30",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1019:8:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 4597,
                  "id": 4605,
                  "nodeType": "Return",
                  "src": "1012:15:30"
                }
              ]
            },
            "documentation": "Returns whether the target address is a contract\n@dev This function will return false if invoked during the constructor of a contract,\nas the code is not actually created until after the constructor finishes.\n@param account address of the account to check\n@return whether the target address is a contract",
            "id": 4607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4593,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 4607,
                  "src": "470:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "470:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "469:17:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 4597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4596,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4607,
                  "src": "510:4:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4595,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:6:30"
            },
            "scope": 4608,
            "src": "450:582:30",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 4609,
        "src": "87:948:30"
      }
    ],
    "src": "0:1036:30"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/utils/Address.sol",
    "exportedSymbols": {
      "Address": [
        4608
      ]
    },
    "id": 4609,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4591,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:30"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "Utility library of inline functions on addresses",
        "fullyImplemented": true,
        "id": 4608,
        "linearizedBaseContracts": [
          4608
        ],
        "name": "Address",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 4606,
              "nodeType": "Block",
              "src": "516:516:30",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4599,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 4607,
                      "src": "522:12:30",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4598,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "522:7:30",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4600,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "522:12:30"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 4599,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "977:4:30",
                        "valueSize": 1
                      }
                    },
                    {
                      "account": {
                        "declaration": 4593,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "997:7:30",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 4601,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(account)\n}",
                  "src": "966:52:30"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 4602,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4599,
                      "src": "1019:4:30",
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
                      "id": 4603,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1026:1:30",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1019:8:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 4597,
                  "id": 4605,
                  "nodeType": "Return",
                  "src": "1012:15:30"
                }
              ]
            },
            "documentation": "Returns whether the target address is a contract\n@dev This function will return false if invoked during the constructor of a contract,\nas the code is not actually created until after the constructor finishes.\n@param account address of the account to check\n@return whether the target address is a contract",
            "id": 4607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4593,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 4607,
                  "src": "470:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "470:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "469:17:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 4597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4596,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4607,
                  "src": "510:4:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4595,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:6:30"
            },
            "scope": 4608,
            "src": "450:582:30",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 4609,
        "src": "87:948:30"
      }
    ],
    "src": "0:1036:30"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.437Z"
}