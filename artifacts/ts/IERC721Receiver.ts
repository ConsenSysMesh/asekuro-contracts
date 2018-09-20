export const IERC721Receiver = 
{
  "contractName": "IERC721Receiver",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "operator",
          "type": "address"
        },
        {
          "name": "from",
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
      "name": "onERC721Received",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title ERC721 token receiver interface\n * @dev Interface for any contract that wants to support safeTransfers\n * from ERC721 asset contracts.\n */\ncontract IERC721Receiver {\n  /**\n   * @notice Handle the receipt of an NFT\n   * @dev The ERC721 smart contract calls this function on the recipient\n   * after a `safeTransfer`. This function MUST return the function selector,\n   * otherwise the caller will revert the transaction. The selector to be\n   * returned can be obtained as `this.onERC721Received.selector`. This\n   * function MAY throw to revert and reject the transfer.\n   * Note: the ERC721 contract address is always the message sender.\n   * @param operator The address which called `safeTransferFrom` function\n   * @param from The address which previously owned the token\n   * @param tokenId The NFT identifier which is being transferred\n   * @param data Additional data with no specified format\n   * @return `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`\n   */\n  function onERC721Received(\n    address operator,\n    address from,\n    uint256 tokenId,\n    bytes data\n  )\n    public\n    returns(bytes4);\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol",
    "exportedSymbols": {
      "IERC721Receiver": [
        3980
      ]
    },
    "id": 3981,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3966,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:27"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 token receiver interface\n@dev Interface for any contract that wants to support safeTransfers\nfrom ERC721 asset contracts.",
        "fullyImplemented": false,
        "id": 3980,
        "linearizedBaseContracts": [
          3980
        ],
        "name": "IERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Handle the receipt of an NFT\n@dev The ERC721 smart contract calls this function on the recipient\nafter a `safeTransfer`. This function MUST return the function selector,\notherwise the caller will revert the transaction. The selector to be\nreturned can be obtained as `this.onERC721Received.selector`. This\nfunction MAY throw to revert and reject the transfer.\nNote: the ERC721 contract address is always the message sender.\n@param operator The address which called `safeTransferFrom` function\n@param from The address which previously owned the token\n@param tokenId The NFT identifier which is being transferred\n@param data Additional data with no specified format\n@return `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`",
            "id": 3979,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3968,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1063:16:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3967,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3970,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1085:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3969,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1085:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3972,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1103:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:27",
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
                  "id": 3974,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1124:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3973,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1124:5:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1057:81:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 3978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3977,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1162:6:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 3976,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1161:8:27"
            },
            "scope": 3980,
            "src": "1032:138:27",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3981,
        "src": "180:992:27"
      }
    ],
    "src": "0:1173:27"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol",
    "exportedSymbols": {
      "IERC721Receiver": [
        3980
      ]
    },
    "id": 3981,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3966,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:27"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 token receiver interface\n@dev Interface for any contract that wants to support safeTransfers\nfrom ERC721 asset contracts.",
        "fullyImplemented": false,
        "id": 3980,
        "linearizedBaseContracts": [
          3980
        ],
        "name": "IERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Handle the receipt of an NFT\n@dev The ERC721 smart contract calls this function on the recipient\nafter a `safeTransfer`. This function MUST return the function selector,\notherwise the caller will revert the transaction. The selector to be\nreturned can be obtained as `this.onERC721Received.selector`. This\nfunction MAY throw to revert and reject the transfer.\nNote: the ERC721 contract address is always the message sender.\n@param operator The address which called `safeTransferFrom` function\n@param from The address which previously owned the token\n@param tokenId The NFT identifier which is being transferred\n@param data Additional data with no specified format\n@return `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`",
            "id": 3979,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3968,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1063:16:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3967,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3970,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1085:12:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3969,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1085:7:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3972,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1103:15:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:27",
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
                  "id": 3974,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1124:10:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3973,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1124:5:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1057:81:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 3978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3977,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3979,
                  "src": "1162:6:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 3976,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:6:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1161:8:27"
            },
            "scope": 3980,
            "src": "1032:138:27",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3981,
        "src": "180:992:27"
      }
    ],
    "src": "0:1173:27"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.577Z"
}