export const IERC721Enumerable = 
{
  "contractName": "IERC721Enumerable",
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
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "tokenId",
          "type": "uint256"
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721.sol\";\n\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract IERC721Enumerable is IERC721 {\n  function totalSupply() public view returns (uint256);\n  function tokenOfOwnerByIndex(\n    address owner,\n    uint256 index\n  )\n    public\n    view\n    returns (uint256 tokenId);\n\n  function tokenByIndex(uint256 index) public view returns (uint256);\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Enumerable.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Enumerable.sol",
    "exportedSymbols": {
      "IERC721Enumerable": [
        3941
      ]
    },
    "id": 3942,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3916,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:25"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 3917,
        "nodeType": "ImportDirective",
        "scope": 3942,
        "sourceUnit": 3915,
        "src": "26:23:25",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3918,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3914,
              "src": "241:7:25",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$3914",
                "typeString": "contract IERC721"
              }
            },
            "id": 3919,
            "nodeType": "InheritanceSpecifier",
            "src": "241:7:25"
          }
        ],
        "contractDependencies": [
          1924,
          3914
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 3941,
        "linearizedBaseContracts": [
          3941,
          3914,
          1924
        ],
        "name": "IERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3924,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3920,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "273:2:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 3923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3922,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3924,
                  "src": "297:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3921,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "296:9:25"
            },
            "scope": 3941,
            "src": "253:53:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3933,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3926,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3933,
                  "src": "343:13:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3925,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:25",
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
                  "id": 3928,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 3933,
                  "src": "362:13:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3927,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "337:42:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 3932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3931,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3933,
                  "src": "413:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3930,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "413:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "412:17:25"
            },
            "scope": 3941,
            "src": "309:121:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3940,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3935,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 3940,
                  "src": "456:13:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3934,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:15:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 3939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3938,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3940,
                  "src": "492:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3937,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "491:9:25"
            },
            "scope": 3941,
            "src": "434:67:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3942,
        "src": "211:292:25"
      }
    ],
    "src": "0:504:25"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Enumerable.sol",
    "exportedSymbols": {
      "IERC721Enumerable": [
        3941
      ]
    },
    "id": 3942,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3916,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:25"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 3917,
        "nodeType": "ImportDirective",
        "scope": 3942,
        "sourceUnit": 3915,
        "src": "26:23:25",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3918,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3914,
              "src": "241:7:25",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$3914",
                "typeString": "contract IERC721"
              }
            },
            "id": 3919,
            "nodeType": "InheritanceSpecifier",
            "src": "241:7:25"
          }
        ],
        "contractDependencies": [
          1924,
          3914
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 3941,
        "linearizedBaseContracts": [
          3941,
          3914,
          1924
        ],
        "name": "IERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3924,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3920,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "273:2:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 3923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3922,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3924,
                  "src": "297:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3921,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "296:9:25"
            },
            "scope": 3941,
            "src": "253:53:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3933,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3926,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3933,
                  "src": "343:13:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3925,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:25",
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
                  "id": 3928,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 3933,
                  "src": "362:13:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3927,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "337:42:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 3932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3931,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3933,
                  "src": "413:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3930,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "413:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "412:17:25"
            },
            "scope": 3941,
            "src": "309:121:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3940,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3935,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 3940,
                  "src": "456:13:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3934,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:15:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 3939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3938,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3940,
                  "src": "492:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3937,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "491:9:25"
            },
            "scope": 3941,
            "src": "434:67:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3942,
        "src": "211:292:25"
      }
    ],
    "src": "0:504:25"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.577Z"
}