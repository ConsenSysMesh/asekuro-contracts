export const IERC721 = 
{
  "contractName": "IERC721",
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../../introspection/IERC165.sol\";\n\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic interface\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract IERC721 is IERC165 {\n\n  event Transfer(\n    address indexed from,\n    address indexed to,\n    uint256 indexed tokenId\n  );\n  event Approval(\n    address indexed owner,\n    address indexed approved,\n    uint256 indexed tokenId\n  );\n  event ApprovalForAll(\n    address indexed owner,\n    address indexed operator,\n    bool approved\n  );\n\n  function balanceOf(address owner) public view returns (uint256 balance);\n  function ownerOf(uint256 tokenId) public view returns (address owner);\n\n  function approve(address to, uint256 tokenId) public;\n  function getApproved(uint256 tokenId)\n    public view returns (address operator);\n\n  function setApprovalForAll(address operator, bool _approved) public;\n  function isApprovedForAll(address owner, address operator)\n    public view returns (bool);\n\n  function transferFrom(address from, address to, uint256 tokenId) public;\n  function safeTransferFrom(address from, address to, uint256 tokenId)\n    public;\n\n  function safeTransferFrom(\n    address from,\n    address to,\n    uint256 tokenId,\n    bytes data\n  )\n    public;\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
    "exportedSymbols": {
      "IERC721": [
        4523
      ]
    },
    "id": 4524,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4422,
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
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
        "file": "../../introspection/IERC165.sol",
        "id": 4423,
        "nodeType": "ImportDirective",
        "scope": 4524,
        "sourceUnit": 2476,
        "src": "26:41:26",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4424,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2475,
              "src": "232:7:26",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$2475",
                "typeString": "contract IERC165"
              }
            },
            "id": 4425,
            "nodeType": "InheritanceSpecifier",
            "src": "232:7:26"
          }
        ],
        "contractDependencies": [
          2475
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 4523,
        "linearizedBaseContracts": [
          4523,
          2475
        ],
        "name": "IERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 4433,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 4432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4427,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4433,
                  "src": "265:20:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4426,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "265:7:26",
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
                  "id": 4429,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4433,
                  "src": "291:18:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4428,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:26",
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
                  "id": 4431,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4433,
                  "src": "315:23:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4430,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "315:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:83:26"
            },
            "src": "245:98:26"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 4441,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 4440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4435,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4441,
                  "src": "366:21:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4434,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:26",
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
                  "id": 4437,
                  "indexed": true,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 4441,
                  "src": "393:24:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4436,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:26",
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
                  "id": 4439,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4441,
                  "src": "423:23:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4438,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "423:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:90:26"
            },
            "src": "346:105:26"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 4449,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 4448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4443,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4449,
                  "src": "480:21:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4442,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:26",
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
                  "id": 4445,
                  "indexed": true,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4449,
                  "src": "507:24:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4444,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:26",
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
                  "id": 4447,
                  "indexed": false,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 4449,
                  "src": "537:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4446,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "474:80:26"
            },
            "src": "454:101:26"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4456,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4451,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4456,
                  "src": "578:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4450,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "578:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "577:15:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4454,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 4456,
                  "src": "614:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4453,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "614:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "613:17:26"
            },
            "scope": 4523,
            "src": "559:72:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4463,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4458,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4463,
                  "src": "651:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4457,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "651:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "650:17:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4461,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4463,
                  "src": "689:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4460,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "689:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "688:15:26"
            },
            "scope": 4523,
            "src": "634:70:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4470,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4465,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4470,
                  "src": "725:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4464,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:26",
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
                  "id": 4467,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4470,
                  "src": "737:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4466,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "737:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:29:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4469,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "760:0:26"
            },
            "scope": 4523,
            "src": "708:53:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4477,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4472,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4477,
                  "src": "785:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4471,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "784:17:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4475,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4477,
                  "src": "827:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4474,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "826:18:26"
            },
            "scope": 4523,
            "src": "764:81:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4484,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4479,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4484,
                  "src": "876:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4478,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "876:7:26",
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
                  "id": 4481,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 4484,
                  "src": "894:14:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4480,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "894:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "875:34:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4483,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "916:0:26"
            },
            "scope": 4523,
            "src": "849:68:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4493,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4486,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4493,
                  "src": "946:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4485,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "946:7:26",
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
                  "id": 4488,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4493,
                  "src": "961:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4487,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "945:33:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4491,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4493,
                  "src": "1004:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4490,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:6:26"
            },
            "scope": 4523,
            "src": "920:90:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4502,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4500,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4495,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4502,
                  "src": "1036:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4494,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1036:7:26",
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
                  "id": 4497,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4502,
                  "src": "1050:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4496,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1050:7:26",
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
                  "id": 4499,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4502,
                  "src": "1062:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4498,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1062:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1035:43:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4501,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1085:0:26"
            },
            "scope": 4523,
            "src": "1014:72:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4511,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4504,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4511,
                  "src": "1115:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4503,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1115:7:26",
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
                  "id": 4506,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4511,
                  "src": "1129:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4505,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:7:26",
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
                  "id": 4508,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4511,
                  "src": "1141:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1114:43:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4510,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1168:0:26"
            },
            "scope": 4523,
            "src": "1089:80:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4522,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4513,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4522,
                  "src": "1204:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4512,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:26",
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
                  "id": 4515,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4522,
                  "src": "1222:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4514,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:7:26",
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
                  "id": 4517,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4522,
                  "src": "1238:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4516,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:26",
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
                  "id": 4519,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 4522,
                  "src": "1259:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4518,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1259:5:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1198:75:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4521,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1284:0:26"
            },
            "scope": 4523,
            "src": "1173:112:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4524,
        "src": "212:1075:26"
      }
    ],
    "src": "0:1288:26"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
    "exportedSymbols": {
      "IERC721": [
        4523
      ]
    },
    "id": 4524,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4422,
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
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
        "file": "../../introspection/IERC165.sol",
        "id": 4423,
        "nodeType": "ImportDirective",
        "scope": 4524,
        "sourceUnit": 2476,
        "src": "26:41:26",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4424,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2475,
              "src": "232:7:26",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$2475",
                "typeString": "contract IERC165"
              }
            },
            "id": 4425,
            "nodeType": "InheritanceSpecifier",
            "src": "232:7:26"
          }
        ],
        "contractDependencies": [
          2475
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 4523,
        "linearizedBaseContracts": [
          4523,
          2475
        ],
        "name": "IERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 4433,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 4432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4427,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4433,
                  "src": "265:20:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4426,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "265:7:26",
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
                  "id": 4429,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4433,
                  "src": "291:18:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4428,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:26",
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
                  "id": 4431,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4433,
                  "src": "315:23:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4430,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "315:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:83:26"
            },
            "src": "245:98:26"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 4441,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 4440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4435,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4441,
                  "src": "366:21:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4434,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:26",
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
                  "id": 4437,
                  "indexed": true,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 4441,
                  "src": "393:24:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4436,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:26",
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
                  "id": 4439,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4441,
                  "src": "423:23:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4438,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "423:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:90:26"
            },
            "src": "346:105:26"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 4449,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 4448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4443,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4449,
                  "src": "480:21:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4442,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:26",
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
                  "id": 4445,
                  "indexed": true,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4449,
                  "src": "507:24:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4444,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:26",
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
                  "id": 4447,
                  "indexed": false,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 4449,
                  "src": "537:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4446,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "474:80:26"
            },
            "src": "454:101:26"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4456,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4451,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4456,
                  "src": "578:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4450,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "578:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "577:15:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4454,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 4456,
                  "src": "614:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4453,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "614:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "613:17:26"
            },
            "scope": 4523,
            "src": "559:72:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4463,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4458,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4463,
                  "src": "651:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4457,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "651:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "650:17:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4461,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4463,
                  "src": "689:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4460,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "689:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "688:15:26"
            },
            "scope": 4523,
            "src": "634:70:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4470,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4465,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4470,
                  "src": "725:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4464,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:26",
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
                  "id": 4467,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4470,
                  "src": "737:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4466,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "737:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:29:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4469,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "760:0:26"
            },
            "scope": 4523,
            "src": "708:53:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4477,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4472,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4477,
                  "src": "785:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4471,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "784:17:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4475,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4477,
                  "src": "827:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4474,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "826:18:26"
            },
            "scope": 4523,
            "src": "764:81:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4484,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4479,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4484,
                  "src": "876:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4478,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "876:7:26",
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
                  "id": 4481,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 4484,
                  "src": "894:14:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4480,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "894:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "875:34:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4483,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "916:0:26"
            },
            "scope": 4523,
            "src": "849:68:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4493,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4486,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 4493,
                  "src": "946:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4485,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "946:7:26",
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
                  "id": 4488,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 4493,
                  "src": "961:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4487,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "945:33:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4491,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4493,
                  "src": "1004:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4490,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:6:26"
            },
            "scope": 4523,
            "src": "920:90:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4502,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4500,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4495,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4502,
                  "src": "1036:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4494,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1036:7:26",
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
                  "id": 4497,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4502,
                  "src": "1050:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4496,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1050:7:26",
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
                  "id": 4499,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4502,
                  "src": "1062:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4498,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1062:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1035:43:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4501,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1085:0:26"
            },
            "scope": 4523,
            "src": "1014:72:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4511,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4504,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4511,
                  "src": "1115:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4503,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1115:7:26",
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
                  "id": 4506,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4511,
                  "src": "1129:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4505,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:7:26",
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
                  "id": 4508,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4511,
                  "src": "1141:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1114:43:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4510,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1168:0:26"
            },
            "scope": 4523,
            "src": "1089:80:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 4522,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4513,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4522,
                  "src": "1204:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4512,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:26",
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
                  "id": 4515,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4522,
                  "src": "1222:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4514,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:7:26",
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
                  "id": 4517,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4522,
                  "src": "1238:15:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4516,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:26",
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
                  "id": 4519,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 4522,
                  "src": "1259:10:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4518,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1259:5:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1198:75:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 4521,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1284:0:26"
            },
            "scope": 4523,
            "src": "1173:112:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4524,
        "src": "212:1075:26"
      }
    ],
    "src": "0:1288:26"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.429Z"
}