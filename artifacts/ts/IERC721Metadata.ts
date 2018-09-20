export const IERC721Metadata = 
{
  "contractName": "IERC721Metadata",
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
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "operator",
          "type": "address"
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
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
          "name": "operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
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
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
          "indexed": true,
          "name": "tokenId",
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
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
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
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
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
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721.sol\";\n\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract IERC721Metadata is IERC721 {\n  function name() external view returns (string);\n  function symbol() external view returns (string);\n  function tokenURI(uint256 tokenId) public view returns (string);\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Metadata.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Metadata.sol",
    "exportedSymbols": {
      "IERC721Metadata": [
        3964
      ]
    },
    "id": 3965,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3943,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:26"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 3944,
        "nodeType": "ImportDirective",
        "scope": 3965,
        "sourceUnit": 3915,
        "src": "26:23:26",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3945,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3914,
              "src": "236:7:26",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$3914",
                "typeString": "contract IERC721"
              }
            },
            "id": 3946,
            "nodeType": "InheritanceSpecifier",
            "src": "236:7:26"
          }
        ],
        "contractDependencies": [
          1924,
          3914
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 3964,
        "linearizedBaseContracts": [
          3964,
          3914,
          1924
        ],
        "name": "IERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3951,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3947,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "261:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 3950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3949,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3951,
                  "src": "287:6:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3948,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "287:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "286:8:26"
            },
            "scope": 3964,
            "src": "248:47:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3956,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3952,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "313:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 3955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3954,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "339:6:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3953,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "338:8:26"
            },
            "scope": 3964,
            "src": "298:49:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3963,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3958,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3963,
                  "src": "368:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3957,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "368:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "367:17:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 3962,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3961,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3963,
                  "src": "406:6:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3960,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "406:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "405:8:26"
            },
            "scope": 3964,
            "src": "350:64:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3965,
        "src": "208:208:26"
      }
    ],
    "src": "0:417:26"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Metadata.sol",
    "exportedSymbols": {
      "IERC721Metadata": [
        3964
      ]
    },
    "id": 3965,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3943,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:26"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 3944,
        "nodeType": "ImportDirective",
        "scope": 3965,
        "sourceUnit": 3915,
        "src": "26:23:26",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3945,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3914,
              "src": "236:7:26",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$3914",
                "typeString": "contract IERC721"
              }
            },
            "id": 3946,
            "nodeType": "InheritanceSpecifier",
            "src": "236:7:26"
          }
        ],
        "contractDependencies": [
          1924,
          3914
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 3964,
        "linearizedBaseContracts": [
          3964,
          3914,
          1924
        ],
        "name": "IERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3951,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3947,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "261:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 3950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3949,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3951,
                  "src": "287:6:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3948,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "287:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "286:8:26"
            },
            "scope": 3964,
            "src": "248:47:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3956,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3952,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "313:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 3955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3954,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "339:6:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3953,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "338:8:26"
            },
            "scope": 3964,
            "src": "298:49:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3963,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3958,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3963,
                  "src": "368:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3957,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "368:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "367:17:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 3962,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3961,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3963,
                  "src": "406:6:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3960,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "406:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "405:8:26"
            },
            "scope": 3964,
            "src": "350:64:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3965,
        "src": "208:208:26"
      }
    ],
    "src": "0:417:26"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.576Z"
}