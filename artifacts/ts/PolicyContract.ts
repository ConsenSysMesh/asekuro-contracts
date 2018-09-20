export const PolicyContract = 
{
  "contractName": "PolicyContract",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        },
        {
          "name": "insured",
          "type": "address"
        }
      ],
      "name": "registerPolicyStart",
      "outputs": [
        {
          "name": "_success",
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
          "name": "policyId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfPayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerPayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        },
        {
          "name": "coverageCondition",
          "type": "bytes32"
        },
        {
          "name": "outcome",
          "type": "bytes32"
        },
        {
          "name": "reporter",
          "type": "address"
        }
      ],
      "name": "registerClaim",
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
          "name": "policyId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedPremiumPaid",
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
          "name": "policyId",
          "type": "bytes32"
        }
      ],
      "name": "getPremiumPaidToDate",
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
          "name": "_policyId",
          "type": "bytes32"
        }
      ],
      "name": "getPolicyEndTimestamp",
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
          "name": "coverageCondition",
          "type": "bytes32"
        }
      ],
      "name": "getResolver",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
  "source": "pragma solidity ^0.4.18;\n\ninterface PolicyContract {\n    /// Activate a policy\n    function registerPolicyStart(\n        bytes32 policyId,\n        address insured\n    ) public returns (bool _success);\n\n    /// Record all premium payments\n    function registerPayment(\n        bytes32 policyId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfPayment,\n        address tokenAddress\n    ) public returns (bool _success);\n\n    /// details of claim submission get stored on-chain in claims registry\n    /// Claims registry must track and record every execution of claim\n    function registerClaim(\n        bytes32 policyId,\n        bytes32 coverageCondition,\n        bytes32 outcome,\n        address reporter\n    ) public view returns (uint);\n\n    /// Should be easy to determine: length * premium payment\n    function getExpectedPremiumPaid(\n        bytes32 policyId,\n        uint256 timestamp\n    ) public view returns (uint256);\n\n    /// Lookup payment history, can be used to determine whether\n    /// a policy is up to date on payments\n    function getPremiumPaidToDate(\n        bytes32 policyId\n    ) public view returns (uint256);\n\n    function getPolicyEndTimestamp(\n        bytes32 _policyId\n    ) public view returns (uint);\n\n    /// you could potentially have different oracles for each coverage condition\n    function getResolver(\n        bytes32 coverageCondition\n    ) public view returns (address);\n\n}",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyContract.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyContract.sol",
    "exportedSymbols": {
      "PolicyContract": [
        620
      ]
    },
    "id": 621,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 552,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 620,
        "linearizedBaseContracts": [
          620
        ],
        "name": "PolicyContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "Activate a policy",
            "id": 561,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerPolicyStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 554,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "121:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 553,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 556,
                  "name": "insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "147:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 555,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "147:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "111:57:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 559,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "185:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 558,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "185:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "184:15:3"
            },
            "scope": 620,
            "src": "83:117:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Record all premium payments",
            "id": 576,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerPayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 563,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "276:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 562,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "276:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 565,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "302:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 564,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:7:3",
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
                  "id": 567,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "325:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 566,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:7:3",
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
                  "id": 569,
                  "name": "unitsOfPayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "354:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 568,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "354:7:3",
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
                  "id": 571,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "386:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 570,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "266:146:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 574,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "429:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 573,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:15:3"
            },
            "scope": 620,
            "src": "242:202:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "details of claim submission get stored on-chain in claims registry\n Claims registry must track and record every execution of claim",
            "id": 589,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "registerClaim",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 578,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "628:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 577,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "628:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 580,
                  "name": "coverageCondition",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "654:25:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 579,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "654:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 582,
                  "name": "outcome",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "689:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 581,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "689:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 584,
                  "name": "reporter",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "714:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 583,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "714:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "618:118:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 587,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "758:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 586,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "758:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "757:6:3"
            },
            "scope": 620,
            "src": "596:168:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Should be easy to determine: length * premium payment",
            "id": 598,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedPremiumPaid",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 591,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 598,
                  "src": "873:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 590,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "873:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 593,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 598,
                  "src": "899:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 592,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "899:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "863:59:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 596,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 598,
                  "src": "944:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "944:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "943:9:3"
            },
            "scope": 620,
            "src": "832:121:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Lookup payment history, can be used to determine whether\n a policy is up to date on payments",
            "id": 605,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPremiumPaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 600,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 605,
                  "src": "1106:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 599,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1106:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1096:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 603,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 605,
                  "src": "1150:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 602,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1150:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1149:9:3"
            },
            "scope": 620,
            "src": "1067:92:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 612,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 607,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 612,
                  "src": "1205:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 606,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1205:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1195:33:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 610,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 612,
                  "src": "1250:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 609,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1250:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1249:6:3"
            },
            "scope": 620,
            "src": "1165:91:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "you could potentially have different oracles for each coverage condition",
            "id": 619,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getResolver",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 615,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 614,
                  "name": "coverageCondition",
                  "nodeType": "VariableDeclaration",
                  "scope": 619,
                  "src": "1373:25:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 613,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1373:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1363:41:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 617,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 619,
                  "src": "1426:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 616,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1426:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1425:9:3"
            },
            "scope": 620,
            "src": "1343:92:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 621,
        "src": "26:1412:3"
      }
    ],
    "src": "0:1438:3"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyContract.sol",
    "exportedSymbols": {
      "PolicyContract": [
        620
      ]
    },
    "id": 621,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 552,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 620,
        "linearizedBaseContracts": [
          620
        ],
        "name": "PolicyContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "Activate a policy",
            "id": 561,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerPolicyStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 554,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "121:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 553,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 556,
                  "name": "insured",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "147:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 555,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "147:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "111:57:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 559,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "185:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 558,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "185:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "184:15:3"
            },
            "scope": 620,
            "src": "83:117:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Record all premium payments",
            "id": 576,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerPayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 563,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "276:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 562,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "276:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 565,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "302:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 564,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:7:3",
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
                  "id": 567,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "325:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 566,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:7:3",
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
                  "id": 569,
                  "name": "unitsOfPayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "354:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 568,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "354:7:3",
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
                  "id": 571,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "386:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 570,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "266:146:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 574,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 576,
                  "src": "429:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 573,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:15:3"
            },
            "scope": 620,
            "src": "242:202:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "details of claim submission get stored on-chain in claims registry\n Claims registry must track and record every execution of claim",
            "id": 589,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "registerClaim",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 578,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "628:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 577,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "628:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 580,
                  "name": "coverageCondition",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "654:25:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 579,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "654:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 582,
                  "name": "outcome",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "689:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 581,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "689:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 584,
                  "name": "reporter",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "714:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 583,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "714:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "618:118:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 587,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 589,
                  "src": "758:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 586,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "758:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "757:6:3"
            },
            "scope": 620,
            "src": "596:168:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Should be easy to determine: length * premium payment",
            "id": 598,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedPremiumPaid",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 591,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 598,
                  "src": "873:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 590,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "873:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 593,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 598,
                  "src": "899:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 592,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "899:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "863:59:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 596,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 598,
                  "src": "944:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "944:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "943:9:3"
            },
            "scope": 620,
            "src": "832:121:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Lookup payment history, can be used to determine whether\n a policy is up to date on payments",
            "id": 605,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPremiumPaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 600,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 605,
                  "src": "1106:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 599,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1106:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1096:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 603,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 605,
                  "src": "1150:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 602,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1150:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1149:9:3"
            },
            "scope": 620,
            "src": "1067:92:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 612,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPolicyEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 607,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 612,
                  "src": "1205:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 606,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1205:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1195:33:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 610,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 612,
                  "src": "1250:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 609,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1250:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1249:6:3"
            },
            "scope": 620,
            "src": "1165:91:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "you could potentially have different oracles for each coverage condition",
            "id": 619,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getResolver",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 615,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 614,
                  "name": "coverageCondition",
                  "nodeType": "VariableDeclaration",
                  "scope": 619,
                  "src": "1373:25:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 613,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1373:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1363:41:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 617,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 619,
                  "src": "1426:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 616,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1426:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1425:9:3"
            },
            "scope": 620,
            "src": "1343:92:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 621,
        "src": "26:1412:3"
      }
    ],
    "src": "0:1438:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.538Z"
}