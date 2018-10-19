export const IERC20 = 
{
  "contractName": "IERC20",
  "abi": [
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
          "indexed": false,
          "name": "value",
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
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
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
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ninterface IERC20 {\n  function totalSupply() external view returns (uint256);\n\n  function balanceOf(address who) external view returns (uint256);\n\n  function allowance(address owner, address spender)\n    external view returns (uint256);\n\n  function transfer(address to, uint256 value) external returns (bool);\n\n  function approve(address spender, uint256 value)\n    external returns (bool);\n\n  function transferFrom(address from, address to, uint256 value)\n    external returns (bool);\n\n  event Transfer(\n    address indexed from,\n    address indexed to,\n    uint256 value\n  );\n\n  event Approval(\n    address indexed owner,\n    address indexed spender,\n    uint256 value\n  );\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        3441
      ]
    },
    "id": 3442,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3374,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 3441,
        "linearizedBaseContracts": [
          3441
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3379,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3375,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "157:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3378,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3377,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3379,
                  "src": "183:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3376,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "183:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "182:9:21"
            },
            "scope": 3441,
            "src": "137:55:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3386,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3381,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 3386,
                  "src": "215:11:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3380,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "215:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "214:13:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3385,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3384,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3386,
                  "src": "251:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3383,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:9:21"
            },
            "scope": 3441,
            "src": "196:64:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3395,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3388,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3395,
                  "src": "283:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3387,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:21",
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
                  "id": 3390,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3395,
                  "src": "298:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3389,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:32:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3393,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3395,
                  "src": "342:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3392,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:9:21"
            },
            "scope": 3441,
            "src": "264:87:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3404,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3397,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3404,
                  "src": "373:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:21",
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
                  "id": 3399,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3404,
                  "src": "385:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:27:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3402,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3404,
                  "src": "418:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3401,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "417:6:21"
            },
            "scope": 3441,
            "src": "355:69:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3413,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3406,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3413,
                  "src": "445:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3405,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:21",
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
                  "id": 3408,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3413,
                  "src": "462:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3407,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:32:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3411,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3413,
                  "src": "499:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3410,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "499:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "498:6:21"
            },
            "scope": 3441,
            "src": "428:77:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3424,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3415,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3424,
                  "src": "531:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3414,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "531:7:21",
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
                  "id": 3417,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3424,
                  "src": "545:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3416,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "545:7:21",
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
                  "id": 3419,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3424,
                  "src": "557:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "530:41:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3422,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3424,
                  "src": "594:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3421,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "594:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "593:6:21"
            },
            "scope": 3441,
            "src": "509:91:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3432,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3426,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3432,
                  "src": "624:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3425,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:21",
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
                  "id": 3428,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3432,
                  "src": "650:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3427,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:7:21",
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
                  "id": 3430,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3432,
                  "src": "674:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3429,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "618:73:21"
            },
            "src": "604:88:21"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3440,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3434,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3440,
                  "src": "716:21:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3433,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "716:7:21",
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
                  "id": 3436,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3440,
                  "src": "743:23:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3435,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:21",
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
                  "id": 3438,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3440,
                  "src": "772:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "710:79:21"
            },
            "src": "696:94:21"
          }
        ],
        "scope": 3442,
        "src": "116:676:21"
      }
    ],
    "src": "0:793:21"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        3441
      ]
    },
    "id": 3442,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3374,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 3441,
        "linearizedBaseContracts": [
          3441
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3379,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3375,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "157:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3378,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3377,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3379,
                  "src": "183:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3376,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "183:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "182:9:21"
            },
            "scope": 3441,
            "src": "137:55:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3386,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3381,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 3386,
                  "src": "215:11:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3380,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "215:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "214:13:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3385,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3384,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3386,
                  "src": "251:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3383,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:9:21"
            },
            "scope": 3441,
            "src": "196:64:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3395,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3388,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3395,
                  "src": "283:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3387,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:21",
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
                  "id": 3390,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3395,
                  "src": "298:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3389,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:32:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3393,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3395,
                  "src": "342:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3392,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:9:21"
            },
            "scope": 3441,
            "src": "264:87:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3404,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3397,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3404,
                  "src": "373:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:21",
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
                  "id": 3399,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3404,
                  "src": "385:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:27:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3402,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3404,
                  "src": "418:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3401,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "417:6:21"
            },
            "scope": 3441,
            "src": "355:69:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3413,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3406,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3413,
                  "src": "445:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3405,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:21",
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
                  "id": 3408,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3413,
                  "src": "462:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3407,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:32:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3411,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3413,
                  "src": "499:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3410,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "499:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "498:6:21"
            },
            "scope": 3441,
            "src": "428:77:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 3424,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3415,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3424,
                  "src": "531:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3414,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "531:7:21",
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
                  "id": 3417,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3424,
                  "src": "545:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3416,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "545:7:21",
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
                  "id": 3419,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3424,
                  "src": "557:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "530:41:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 3423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3422,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3424,
                  "src": "594:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3421,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "594:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "593:6:21"
            },
            "scope": 3441,
            "src": "509:91:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3432,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3426,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3432,
                  "src": "624:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3425,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:21",
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
                  "id": 3428,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3432,
                  "src": "650:18:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3427,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:7:21",
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
                  "id": 3430,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3432,
                  "src": "674:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3429,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "618:73:21"
            },
            "src": "604:88:21"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3440,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3434,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 3440,
                  "src": "716:21:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3433,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "716:7:21",
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
                  "id": 3436,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 3440,
                  "src": "743:23:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3435,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:21",
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
                  "id": 3438,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3440,
                  "src": "772:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "710:79:21"
            },
            "src": "696:94:21"
          }
        ],
        "scope": 3442,
        "src": "116:676:21"
      }
    ],
    "src": "0:793:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:01.419Z"
}