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
        4589
      ]
    },
    "id": 4590,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4575,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:29"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 token receiver interface\n@dev Interface for any contract that wants to support safeTransfers\nfrom ERC721 asset contracts.",
        "fullyImplemented": false,
        "id": 4589,
        "linearizedBaseContracts": [
          4589
        ],
        "name": "IERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Handle the receipt of an NFT\n@dev The ERC721 smart contract calls this function on the recipient\nafter a `safeTransfer`. This function MUST return the function selector,\notherwise the caller will revert the transaction. The selector to be\nreturned can be obtained as `this.onERC721Received.selector`. This\nfunction MAY throw to revert and reject the transfer.\nNote: the ERC721 contract address is always the message sender.\n@param operator The address which called `safeTransferFrom` function\n@param from The address which previously owned the token\n@param tokenId The NFT identifier which is being transferred\n@param data Additional data with no specified format\n@return `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`",
            "id": 4588,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4584,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4577,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1063:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4576,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:29",
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
                  "id": 4579,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1085:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1085:7:29",
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
                  "id": 4581,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1103:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:29",
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
                  "id": 4583,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1124:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4582,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1124:5:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1057:81:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 4587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4586,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1162:6:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 4585,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1161:8:29"
            },
            "scope": 4589,
            "src": "1032:138:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4590,
        "src": "180:992:29"
      }
    ],
    "src": "0:1173:29"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol",
    "exportedSymbols": {
      "IERC721Receiver": [
        4589
      ]
    },
    "id": 4590,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4575,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:29"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 token receiver interface\n@dev Interface for any contract that wants to support safeTransfers\nfrom ERC721 asset contracts.",
        "fullyImplemented": false,
        "id": 4589,
        "linearizedBaseContracts": [
          4589
        ],
        "name": "IERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Handle the receipt of an NFT\n@dev The ERC721 smart contract calls this function on the recipient\nafter a `safeTransfer`. This function MUST return the function selector,\notherwise the caller will revert the transaction. The selector to be\nreturned can be obtained as `this.onERC721Received.selector`. This\nfunction MAY throw to revert and reject the transfer.\nNote: the ERC721 contract address is always the message sender.\n@param operator The address which called `safeTransferFrom` function\n@param from The address which previously owned the token\n@param tokenId The NFT identifier which is being transferred\n@param data Additional data with no specified format\n@return `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`",
            "id": 4588,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4584,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4577,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1063:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4576,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:29",
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
                  "id": 4579,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1085:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1085:7:29",
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
                  "id": 4581,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1103:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1103:7:29",
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
                  "id": 4583,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1124:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4582,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1124:5:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1057:81:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 4587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4586,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4588,
                  "src": "1162:6:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 4585,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1161:8:29"
            },
            "scope": 4589,
            "src": "1032:138:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4590,
        "src": "180:992:29"
      }
    ],
    "src": "0:1173:29"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.429Z"
}