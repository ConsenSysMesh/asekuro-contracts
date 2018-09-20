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
        3914
      ]
    },
    "id": 3915,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3813,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
        "file": "../../introspection/IERC165.sol",
        "id": 3814,
        "nodeType": "ImportDirective",
        "scope": 3915,
        "sourceUnit": 1925,
        "src": "26:41:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3815,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1924,
              "src": "232:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$1924",
                "typeString": "contract IERC165"
              }
            },
            "id": 3816,
            "nodeType": "InheritanceSpecifier",
            "src": "232:7:24"
          }
        ],
        "contractDependencies": [
          1924
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 3914,
        "linearizedBaseContracts": [
          3914,
          1924
        ],
        "name": "IERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 3824,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3818,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3824,
                  "src": "265:20:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3817,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "265:7:24",
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
                  "id": 3820,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3824,
                  "src": "291:18:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3819,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:24",
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
                  "id": 3822,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3824,
                  "src": "315:23:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3821,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "315:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:83:24"
            },
            "src": "245:98:24"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3832,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3826,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3832,
                  "src": "366:21:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3825,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:24",
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
                  "id": 3828,
                  "indexed": true,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3832,
                  "src": "393:24:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3827,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:24",
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
                  "id": 3830,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3832,
                  "src": "423:23:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3829,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "423:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:90:24"
            },
            "src": "346:105:24"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3840,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3834,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3840,
                  "src": "480:21:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3833,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:24",
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
                  "id": 3836,
                  "indexed": true,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3840,
                  "src": "507:24:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3835,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:24",
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
                  "id": 3838,
                  "indexed": false,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3840,
                  "src": "537:13:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3837,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "474:80:24"
            },
            "src": "454:101:24"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3847,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3842,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3847,
                  "src": "578:13:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3841,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "578:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "577:15:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3845,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 3847,
                  "src": "614:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3844,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "614:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "613:17:24"
            },
            "scope": 3914,
            "src": "559:72:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3854,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3849,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3854,
                  "src": "651:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3848,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "651:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "650:17:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3852,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3854,
                  "src": "689:13:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3851,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "689:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "688:15:24"
            },
            "scope": 3914,
            "src": "634:70:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3861,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3856,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3861,
                  "src": "725:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3855,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:24",
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
                  "id": 3858,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3861,
                  "src": "737:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "737:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:29:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3860,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "760:0:24"
            },
            "scope": 3914,
            "src": "708:53:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3868,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3863,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3868,
                  "src": "785:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3862,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "784:17:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3866,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3868,
                  "src": "827:16:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3865,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "826:18:24"
            },
            "scope": 3914,
            "src": "764:81:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3875,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3870,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3875,
                  "src": "876:16:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3869,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "876:7:24",
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
                  "id": 3872,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3875,
                  "src": "894:14:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3871,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "894:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "875:34:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3874,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "916:0:24"
            },
            "scope": 3914,
            "src": "849:68:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3884,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3877,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3884,
                  "src": "946:13:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "946:7:24",
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
                  "id": 3879,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3884,
                  "src": "961:16:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3878,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "945:33:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3882,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3884,
                  "src": "1004:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3881,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:6:24"
            },
            "scope": 3914,
            "src": "920:90:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3893,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3886,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3893,
                  "src": "1036:12:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1036:7:24",
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
                  "id": 3888,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3893,
                  "src": "1050:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3887,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1050:7:24",
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
                  "id": 3890,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3893,
                  "src": "1062:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3889,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1062:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1035:43:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3892,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1085:0:24"
            },
            "scope": 3914,
            "src": "1014:72:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3902,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3895,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3902,
                  "src": "1115:12:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3894,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1115:7:24",
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
                  "id": 3897,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3902,
                  "src": "1129:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3896,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:7:24",
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
                  "id": 3899,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3902,
                  "src": "1141:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3898,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1114:43:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3901,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1168:0:24"
            },
            "scope": 3914,
            "src": "1089:80:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3913,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3904,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3913,
                  "src": "1204:12:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3903,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:24",
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
                  "id": 3906,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3913,
                  "src": "1222:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3905,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:7:24",
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
                  "id": 3908,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3913,
                  "src": "1238:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3907,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:24",
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
                  "id": 3910,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3913,
                  "src": "1259:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3909,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1259:5:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1198:75:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3912,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1284:0:24"
            },
            "scope": 3914,
            "src": "1173:112:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3915,
        "src": "212:1075:24"
      }
    ],
    "src": "0:1288:24"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol",
    "exportedSymbols": {
      "IERC721": [
        3914
      ]
    },
    "id": 3915,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3813,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol",
        "file": "../../introspection/IERC165.sol",
        "id": 3814,
        "nodeType": "ImportDirective",
        "scope": 3915,
        "sourceUnit": 1925,
        "src": "26:41:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3815,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1924,
              "src": "232:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$1924",
                "typeString": "contract IERC165"
              }
            },
            "id": 3816,
            "nodeType": "InheritanceSpecifier",
            "src": "232:7:24"
          }
        ],
        "contractDependencies": [
          1924
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 3914,
        "linearizedBaseContracts": [
          3914,
          1924
        ],
        "name": "IERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 3824,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3818,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3824,
                  "src": "265:20:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3817,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "265:7:24",
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
                  "id": 3820,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3824,
                  "src": "291:18:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3819,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:24",
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
                  "id": 3822,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3824,
                  "src": "315:23:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3821,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "315:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:83:24"
            },
            "src": "245:98:24"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3832,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3826,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3832,
                  "src": "366:21:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3825,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:24",
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
                  "id": 3828,
                  "indexed": true,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3832,
                  "src": "393:24:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3827,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:24",
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
                  "id": 3830,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3832,
                  "src": "423:23:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3829,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "423:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:90:24"
            },
            "src": "346:105:24"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3840,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3834,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3840,
                  "src": "480:21:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3833,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:24",
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
                  "id": 3836,
                  "indexed": true,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3840,
                  "src": "507:24:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3835,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:24",
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
                  "id": 3838,
                  "indexed": false,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3840,
                  "src": "537:13:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3837,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "474:80:24"
            },
            "src": "454:101:24"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3847,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3842,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3847,
                  "src": "578:13:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3841,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "578:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "577:15:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3845,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 3847,
                  "src": "614:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3844,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "614:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "613:17:24"
            },
            "scope": 3914,
            "src": "559:72:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3854,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3849,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3854,
                  "src": "651:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3848,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "651:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "650:17:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3852,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3854,
                  "src": "689:13:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3851,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "689:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "688:15:24"
            },
            "scope": 3914,
            "src": "634:70:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3861,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3856,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3861,
                  "src": "725:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3855,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:24",
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
                  "id": 3858,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3861,
                  "src": "737:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "737:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:29:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3860,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "760:0:24"
            },
            "scope": 3914,
            "src": "708:53:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3868,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3863,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3868,
                  "src": "785:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3862,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "784:17:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3866,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3868,
                  "src": "827:16:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3865,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "826:18:24"
            },
            "scope": 3914,
            "src": "764:81:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3875,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3870,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3875,
                  "src": "876:16:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3869,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "876:7:24",
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
                  "id": 3872,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3875,
                  "src": "894:14:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3871,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "894:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "875:34:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3874,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "916:0:24"
            },
            "scope": 3914,
            "src": "849:68:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3884,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3877,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3884,
                  "src": "946:13:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "946:7:24",
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
                  "id": 3879,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 3884,
                  "src": "961:16:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3878,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "945:33:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3882,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3884,
                  "src": "1004:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3881,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:6:24"
            },
            "scope": 3914,
            "src": "920:90:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3893,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3886,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3893,
                  "src": "1036:12:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1036:7:24",
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
                  "id": 3888,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3893,
                  "src": "1050:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3887,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1050:7:24",
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
                  "id": 3890,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3893,
                  "src": "1062:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3889,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1062:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1035:43:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3892,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1085:0:24"
            },
            "scope": 3914,
            "src": "1014:72:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3902,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3895,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3902,
                  "src": "1115:12:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3894,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1115:7:24",
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
                  "id": 3897,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3902,
                  "src": "1129:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3896,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:7:24",
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
                  "id": 3899,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3902,
                  "src": "1141:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3898,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1141:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1114:43:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3901,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1168:0:24"
            },
            "scope": 3914,
            "src": "1089:80:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3913,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3904,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3913,
                  "src": "1204:12:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3903,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:24",
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
                  "id": 3906,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3913,
                  "src": "1222:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3905,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:7:24",
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
                  "id": 3908,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3913,
                  "src": "1238:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3907,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:24",
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
                  "id": 3910,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3913,
                  "src": "1259:10:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3909,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1259:5:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1198:75:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 3912,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1284:0:24"
            },
            "scope": 3914,
            "src": "1173:112:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 3915,
        "src": "212:1075:24"
      }
    ],
    "src": "0:1288:24"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.576Z"
}