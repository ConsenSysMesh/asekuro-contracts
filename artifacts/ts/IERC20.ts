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
        2832
      ]
    },
    "id": 2833,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2765,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 2832,
        "linearizedBaseContracts": [
          2832
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2770,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2766,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "157:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2768,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2770,
                  "src": "183:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2767,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "183:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "182:9:19"
            },
            "scope": 2832,
            "src": "137:55:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2777,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2772,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 2777,
                  "src": "215:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2771,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "215:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "214:13:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2776,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2775,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2777,
                  "src": "251:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2774,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:9:19"
            },
            "scope": 2832,
            "src": "196:64:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2786,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2779,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2786,
                  "src": "283:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2778,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:19",
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
                  "id": 2781,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2786,
                  "src": "298:15:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2780,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:32:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2785,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2784,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2786,
                  "src": "342:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2783,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:9:19"
            },
            "scope": 2832,
            "src": "264:87:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2795,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2788,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2795,
                  "src": "373:10:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2787,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:19",
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
                  "id": 2790,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2795,
                  "src": "385:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2789,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:27:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2793,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2795,
                  "src": "418:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2792,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "417:6:19"
            },
            "scope": 2832,
            "src": "355:69:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2804,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2797,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2804,
                  "src": "445:15:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2796,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:19",
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
                  "id": 2799,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2804,
                  "src": "462:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:32:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2802,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2804,
                  "src": "499:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2801,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "499:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "498:6:19"
            },
            "scope": 2832,
            "src": "428:77:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2815,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2806,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "531:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2805,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "531:7:19",
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
                  "id": 2808,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "545:10:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2807,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "545:7:19",
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
                  "id": 2810,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "557:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2809,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "530:41:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2813,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "594:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2812,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "594:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "593:6:19"
            },
            "scope": 2832,
            "src": "509:91:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2823,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2817,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2823,
                  "src": "624:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:19",
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
                  "id": 2819,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2823,
                  "src": "650:18:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2818,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:7:19",
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
                  "id": 2821,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2823,
                  "src": "674:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "618:73:19"
            },
            "src": "604:88:19"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2831,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2825,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "716:21:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2824,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "716:7:19",
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
                  "id": 2827,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "743:23:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2826,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:19",
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
                  "id": 2829,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "772:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2828,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "710:79:19"
            },
            "src": "696:94:19"
          }
        ],
        "scope": 2833,
        "src": "116:676:19"
      }
    ],
    "src": "0:793:19"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        2832
      ]
    },
    "id": 2833,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2765,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 2832,
        "linearizedBaseContracts": [
          2832
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2770,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2766,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "157:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2768,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2770,
                  "src": "183:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2767,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "183:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "182:9:19"
            },
            "scope": 2832,
            "src": "137:55:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2777,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2773,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2772,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 2777,
                  "src": "215:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2771,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "215:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "214:13:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2776,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2775,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2777,
                  "src": "251:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2774,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:9:19"
            },
            "scope": 2832,
            "src": "196:64:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2786,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2779,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2786,
                  "src": "283:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2778,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:19",
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
                  "id": 2781,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2786,
                  "src": "298:15:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2780,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:32:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2785,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2784,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2786,
                  "src": "342:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2783,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:9:19"
            },
            "scope": 2832,
            "src": "264:87:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2795,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2788,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2795,
                  "src": "373:10:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2787,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:19",
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
                  "id": 2790,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2795,
                  "src": "385:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2789,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:27:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2793,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2795,
                  "src": "418:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2792,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "417:6:19"
            },
            "scope": 2832,
            "src": "355:69:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2804,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2797,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2804,
                  "src": "445:15:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2796,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:19",
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
                  "id": 2799,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2804,
                  "src": "462:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:32:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2802,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2804,
                  "src": "499:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2801,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "499:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "498:6:19"
            },
            "scope": 2832,
            "src": "428:77:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2815,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2806,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "531:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2805,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "531:7:19",
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
                  "id": 2808,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "545:10:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2807,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "545:7:19",
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
                  "id": 2810,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "557:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2809,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "530:41:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 2814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2813,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "594:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2812,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "594:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "593:6:19"
            },
            "scope": 2832,
            "src": "509:91:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2823,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2817,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 2823,
                  "src": "624:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:19",
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
                  "id": 2819,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 2823,
                  "src": "650:18:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2818,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:7:19",
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
                  "id": 2821,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2823,
                  "src": "674:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "618:73:19"
            },
            "src": "604:88:19"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2831,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2825,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "716:21:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2824,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "716:7:19",
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
                  "id": 2827,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "743:23:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2826,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:19",
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
                  "id": 2829,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 2831,
                  "src": "772:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2828,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "710:79:19"
            },
            "src": "696:94:19"
          }
        ],
        "scope": 2833,
        "src": "116:676:19"
      }
    ],
    "src": "0:793:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.563Z"
}