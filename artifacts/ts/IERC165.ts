export const IERC165 = 
{
  "contractName": "IERC165",
  "abi": [
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title IERC165\n * @dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md\n */\ninterface IERC165 {\n\n  /**\n   * @notice Query if a contract implements an interface\n   * @param interfaceId The interface identifier, as specified in ERC-165\n   * @dev Interface identification is specified in ERC-165. This function\n   * uses less than 30,000 gas.\n   */\n  function supportsInterface(bytes4 interfaceId)\n    external\n    view\n    returns (bool);\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
    "exportedSymbols": {
      "IERC165": [
        1924
      ]
    },
    "id": 1925,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1916,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IERC165\n@dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md",
        "fullyImplemented": false,
        "id": 1924,
        "linearizedBaseContracts": [
          1924
        ],
        "name": "IERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Query if a contract implements an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@dev Interface identification is specified in ERC-165. This function\nuses less than 30,000 gas.",
            "id": 1923,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1918,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1923,
                  "src": "421:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 1917,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:20:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1921,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1923,
                  "src": "476:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1920,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "475:6:13"
            },
            "scope": 1924,
            "src": "394:88:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 1925,
        "src": "122:362:13"
      }
    ],
    "src": "0:485:13"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
    "exportedSymbols": {
      "IERC165": [
        1924
      ]
    },
    "id": 1925,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1916,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IERC165\n@dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md",
        "fullyImplemented": false,
        "id": 1924,
        "linearizedBaseContracts": [
          1924
        ],
        "name": "IERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Query if a contract implements an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@dev Interface identification is specified in ERC-165. This function\nuses less than 30,000 gas.",
            "id": 1923,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1918,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1923,
                  "src": "421:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 1917,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:20:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1921,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1923,
                  "src": "476:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1920,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "475:6:13"
            },
            "scope": 1924,
            "src": "394:88:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 1925,
        "src": "122:362:13"
      }
    ],
    "src": "0:485:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.555Z"
}