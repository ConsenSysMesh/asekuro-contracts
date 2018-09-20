export const Ownable = 
{
  "contractName": "Ownable",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
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
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103c6806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063715018a6146100675780638da5cb5b1461007e5780638f32d59b146100d5578063f2fde38b14610104575b600080fd5b34801561007357600080fd5b5061007c610147565b005b34801561008a57600080fd5b50610093610201565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100e157600080fd5b506100ea61022a565b604051808215151515815260200191505060405180910390f35b34801561011057600080fd5b50610145600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610281565b005b61014f61022a565b151561015a57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b61028961022a565b151561029457600080fd5b61029d816102a0565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156102dc57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820d060540e21ecdb29d58c42cd3c5dd83c538a0ed94a88822b06d3c11e192d5c2a0029",
  "deployedBytecode": "0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063715018a6146100675780638da5cb5b1461007e5780638f32d59b146100d5578063f2fde38b14610104575b600080fd5b34801561007357600080fd5b5061007c610147565b005b34801561008a57600080fd5b50610093610201565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100e157600080fd5b506100ea61022a565b604051808215151515815260200191505060405180910390f35b34801561011057600080fd5b50610145600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610281565b005b61014f61022a565b151561015a57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b61028961022a565b151561029457600080fd5b61029d816102a0565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156102dc57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820d060540e21ecdb29d58c42cd3c5dd83c538a0ed94a88822b06d3c11e192d5c2a0029",
  "sourceMap": "217:1745:16:-;;;542:51;8:9:-1;5:2;;;30:1;27;20:12;5:2;542:51:16;578:10;569:6;;:19;;;;;;;;;;;;;;;;;;217:1745;;;;;;",
  "deployedSourceMap": "217:1745:16:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1282:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1282:113:16;;;;;;648:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;648:70:16;;;;;;;;;;;;;;;;;;;;;;;;;;;935:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;935:83:16;;;;;;;;;;;;;;;;;;;;;;;;;;;1556:101;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1556:101:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;1282:113;833:9;:7;:9::i;:::-;825:18;;;;;;;;1358:6;;;;;;;;;;;1339:26;;;;;;;;;;;;1388:1;1371:6;;:19;;;;;;;;;;;;;;;;;;1282:113::o;648:70::-;685:7;707:6;;;;;;;;;;;700:13;;648:70;:::o;935:83::-;974:4;1007:6;;;;;;;;;;;993:20;;:10;:20;;;986:27;;935:83;:::o;1556:101::-;833:9;:7;:9::i;:::-;825:18;;;;;;;;1624:28;1643:8;1624:18;:28::i;:::-;1556:101;:::o;1791:169::-;1880:1;1860:22;;:8;:22;;;;1852:31;;;;;;;;1923:8;1894:38;;1915:6;;;;;;;;;;;1894:38;;;;;;;;;;;;1947:8;1938:6;;:17;;;;;;;;;;;;;;;;;;1791:169;:::o",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n  address private _owner;\n\n\n  event OwnershipRenounced(address indexed previousOwner);\n  event OwnershipTransferred(\n    address indexed previousOwner,\n    address indexed newOwner\n  );\n\n\n  /**\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n   * account.\n   */\n  constructor() public {\n    _owner = msg.sender;\n  }\n\n  /**\n   * @return the address of the owner.\n   */\n  function owner() public view returns(address) {\n    return _owner;\n  }\n\n  /**\n   * @dev Throws if called by any account other than the owner.\n   */\n  modifier onlyOwner() {\n    require(isOwner());\n    _;\n  }\n\n  /**\n   * @return true if `msg.sender` is the owner of the contract.\n   */\n  function isOwner() public view returns(bool) {\n    return msg.sender == _owner;\n  }\n\n  /**\n   * @dev Allows the current owner to relinquish control of the contract.\n   * @notice Renouncing to ownership will leave the contract without an owner.\n   * It will not be possible to call the functions with the `onlyOwner`\n   * modifier anymore.\n   */\n  function renounceOwnership() public onlyOwner {\n    emit OwnershipRenounced(_owner);\n    _owner = address(0);\n  }\n\n  /**\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function transferOwnership(address newOwner) public onlyOwner {\n    _transferOwnership(newOwner);\n  }\n\n  /**\n   * @dev Transfers control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function _transferOwnership(address newOwner) internal {\n    require(newOwner != address(0));\n    emit OwnershipTransferred(_owner, newOwner);\n    _owner = newOwner;\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
    "exportedSymbols": {
      "Ownable": [
        2223
      ]
    },
    "id": 2224,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2122,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:16"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
        "fullyImplemented": true,
        "id": 2223,
        "linearizedBaseContracts": [
          2223
        ],
        "name": "Ownable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2124,
            "name": "_owner",
            "nodeType": "VariableDeclaration",
            "scope": 2223,
            "src": "238:22:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 2123,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "238:7:16",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2128,
            "name": "OwnershipRenounced",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2127,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2126,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2128,
                  "src": "291:29:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2125,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "290:31:16"
            },
            "src": "266:56:16"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2134,
            "name": "OwnershipTransferred",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2130,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2134,
                  "src": "357:29:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2129,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:7:16",
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
                  "id": 2132,
                  "indexed": true,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2134,
                  "src": "392:24:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2131,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "351:69:16"
            },
            "src": "325:96:16"
          },
          {
            "body": {
              "id": 2142,
              "nodeType": "Block",
              "src": "563:30:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2137,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2124,
                      "src": "569:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2138,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4014,
                        "src": "578:3:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "578:10:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "569:19:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2141,
                  "nodeType": "ExpressionStatement",
                  "src": "569:19:16"
                }
              ]
            },
            "documentation": "@dev The Ownable constructor sets the original `owner` of the contract to the sender\naccount.",
            "id": 2143,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2135,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "553:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2136,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "563:0:16"
            },
            "scope": 2223,
            "src": "542:51:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2150,
              "nodeType": "Block",
              "src": "694:24:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2148,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2124,
                    "src": "707:6:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2147,
                  "id": 2149,
                  "nodeType": "Return",
                  "src": "700:13:16"
                }
              ]
            },
            "documentation": "@return the address of the owner.",
            "id": 2151,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "owner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2146,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2151,
                  "src": "685:7:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2145,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:9:16"
            },
            "scope": 2223,
            "src": "648:70:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2159,
              "nodeType": "Block",
              "src": "819:36:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 2154,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2171,
                          "src": "833:7:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 2155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "833:9:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2153,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "825:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "825:18:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2157,
                  "nodeType": "ExpressionStatement",
                  "src": "825:18:16"
                },
                {
                  "id": 2158,
                  "nodeType": "PlaceholderStatement",
                  "src": "849:1:16"
                }
              ]
            },
            "documentation": "@dev Throws if called by any account other than the owner.",
            "id": 2160,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "816:2:16"
            },
            "src": "798:57:16",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2170,
              "nodeType": "Block",
              "src": "980:38:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 2168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2165,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4014,
                        "src": "993:3:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "993:10:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2167,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2124,
                      "src": "1007:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "993:20:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2164,
                  "id": 2169,
                  "nodeType": "Return",
                  "src": "986:27:16"
                }
              ]
            },
            "documentation": "@return true if `msg.sender` is the owner of the contract.",
            "id": 2171,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2161,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "951:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2163,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2171,
                  "src": "974:4:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2162,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "974:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "973:6:16"
            },
            "scope": 2223,
            "src": "935:83:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2186,
              "nodeType": "Block",
              "src": "1328:67:16",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2177,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2124,
                        "src": "1358:6:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2176,
                      "name": "OwnershipRenounced",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2128,
                      "src": "1339:18:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1339:26:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2179,
                  "nodeType": "EmitStatement",
                  "src": "1334:31:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2184,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2180,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2124,
                      "src": "1371:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1388:1:16",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 2181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1380:7:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 2183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1380:10:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1371:19:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2185,
                  "nodeType": "ExpressionStatement",
                  "src": "1371:19:16"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to relinquish control of the contract.\n@notice Renouncing to ownership will leave the contract without an owner.\nIt will not be possible to call the functions with the `onlyOwner`\nmodifier anymore.",
            "id": 2187,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2174,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2173,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2160,
                  "src": "1318:9:16",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1318:9:16"
              }
            ],
            "name": "renounceOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1308:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1328:0:16"
            },
            "scope": 2223,
            "src": "1282:113:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2198,
              "nodeType": "Block",
              "src": "1618:39:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2195,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2189,
                        "src": "1643:8:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2194,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2222,
                      "src": "1624:18:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1624:28:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2197,
                  "nodeType": "ExpressionStatement",
                  "src": "1624:28:16"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to transfer control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
            "id": 2199,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2192,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2191,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2160,
                  "src": "1608:9:16",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1608:9:16"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2189,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2199,
                  "src": "1583:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2188,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1583:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1582:18:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2193,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1618:0:16"
            },
            "scope": 2223,
            "src": "1556:101:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2221,
              "nodeType": "Block",
              "src": "1846:114:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2205,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2201,
                          "src": "1860:8:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 2207,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1880:1:16",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 2206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1872:7:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2208,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1872:10:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1860:22:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2204,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1852:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1852:31:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2211,
                  "nodeType": "ExpressionStatement",
                  "src": "1852:31:16"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2213,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2124,
                        "src": "1915:6:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2214,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2201,
                        "src": "1923:8:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2212,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2134,
                      "src": "1894:20:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 2215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1894:38:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2216,
                  "nodeType": "EmitStatement",
                  "src": "1889:43:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2217,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2124,
                      "src": "1938:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2218,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2201,
                      "src": "1947:8:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1938:17:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2220,
                  "nodeType": "ExpressionStatement",
                  "src": "1938:17:16"
                }
              ]
            },
            "documentation": "@dev Transfers control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
            "id": 2222,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2201,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2222,
                  "src": "1819:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2200,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1819:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1818:18:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2203,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1846:0:16"
            },
            "scope": 2223,
            "src": "1791:169:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2224,
        "src": "217:1745:16"
      }
    ],
    "src": "0:1963:16"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol",
    "exportedSymbols": {
      "Ownable": [
        2223
      ]
    },
    "id": 2224,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2122,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:16"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
        "fullyImplemented": true,
        "id": 2223,
        "linearizedBaseContracts": [
          2223
        ],
        "name": "Ownable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2124,
            "name": "_owner",
            "nodeType": "VariableDeclaration",
            "scope": 2223,
            "src": "238:22:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 2123,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "238:7:16",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2128,
            "name": "OwnershipRenounced",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2127,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2126,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2128,
                  "src": "291:29:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2125,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "290:31:16"
            },
            "src": "266:56:16"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2134,
            "name": "OwnershipTransferred",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2130,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2134,
                  "src": "357:29:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2129,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:7:16",
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
                  "id": 2132,
                  "indexed": true,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2134,
                  "src": "392:24:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2131,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "351:69:16"
            },
            "src": "325:96:16"
          },
          {
            "body": {
              "id": 2142,
              "nodeType": "Block",
              "src": "563:30:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2137,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2124,
                      "src": "569:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2138,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4014,
                        "src": "578:3:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "578:10:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "569:19:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2141,
                  "nodeType": "ExpressionStatement",
                  "src": "569:19:16"
                }
              ]
            },
            "documentation": "@dev The Ownable constructor sets the original `owner` of the contract to the sender\naccount.",
            "id": 2143,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2135,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "553:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2136,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "563:0:16"
            },
            "scope": 2223,
            "src": "542:51:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2150,
              "nodeType": "Block",
              "src": "694:24:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2148,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2124,
                    "src": "707:6:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2147,
                  "id": 2149,
                  "nodeType": "Return",
                  "src": "700:13:16"
                }
              ]
            },
            "documentation": "@return the address of the owner.",
            "id": 2151,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "owner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2146,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2151,
                  "src": "685:7:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2145,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:9:16"
            },
            "scope": 2223,
            "src": "648:70:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2159,
              "nodeType": "Block",
              "src": "819:36:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 2154,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2171,
                          "src": "833:7:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 2155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "833:9:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2153,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "825:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "825:18:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2157,
                  "nodeType": "ExpressionStatement",
                  "src": "825:18:16"
                },
                {
                  "id": 2158,
                  "nodeType": "PlaceholderStatement",
                  "src": "849:1:16"
                }
              ]
            },
            "documentation": "@dev Throws if called by any account other than the owner.",
            "id": 2160,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "816:2:16"
            },
            "src": "798:57:16",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2170,
              "nodeType": "Block",
              "src": "980:38:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 2168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2165,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4014,
                        "src": "993:3:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "993:10:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2167,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2124,
                      "src": "1007:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "993:20:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2164,
                  "id": 2169,
                  "nodeType": "Return",
                  "src": "986:27:16"
                }
              ]
            },
            "documentation": "@return true if `msg.sender` is the owner of the contract.",
            "id": 2171,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2161,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "951:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2163,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2171,
                  "src": "974:4:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2162,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "974:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "973:6:16"
            },
            "scope": 2223,
            "src": "935:83:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2186,
              "nodeType": "Block",
              "src": "1328:67:16",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2177,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2124,
                        "src": "1358:6:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2176,
                      "name": "OwnershipRenounced",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2128,
                      "src": "1339:18:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1339:26:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2179,
                  "nodeType": "EmitStatement",
                  "src": "1334:31:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2184,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2180,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2124,
                      "src": "1371:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1388:1:16",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 2181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1380:7:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 2183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1380:10:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1371:19:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2185,
                  "nodeType": "ExpressionStatement",
                  "src": "1371:19:16"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to relinquish control of the contract.\n@notice Renouncing to ownership will leave the contract without an owner.\nIt will not be possible to call the functions with the `onlyOwner`\nmodifier anymore.",
            "id": 2187,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2174,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2173,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2160,
                  "src": "1318:9:16",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1318:9:16"
              }
            ],
            "name": "renounceOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1308:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1328:0:16"
            },
            "scope": 2223,
            "src": "1282:113:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2198,
              "nodeType": "Block",
              "src": "1618:39:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2195,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2189,
                        "src": "1643:8:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2194,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2222,
                      "src": "1624:18:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1624:28:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2197,
                  "nodeType": "ExpressionStatement",
                  "src": "1624:28:16"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to transfer control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
            "id": 2199,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2192,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2191,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2160,
                  "src": "1608:9:16",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1608:9:16"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2189,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2199,
                  "src": "1583:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2188,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1583:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1582:18:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2193,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1618:0:16"
            },
            "scope": 2223,
            "src": "1556:101:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2221,
              "nodeType": "Block",
              "src": "1846:114:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 2209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2205,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2201,
                          "src": "1860:8:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 2207,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1880:1:16",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 2206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1872:7:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2208,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1872:10:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1860:22:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2204,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1852:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1852:31:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2211,
                  "nodeType": "ExpressionStatement",
                  "src": "1852:31:16"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2213,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2124,
                        "src": "1915:6:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2214,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2201,
                        "src": "1923:8:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2212,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2134,
                      "src": "1894:20:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 2215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1894:38:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2216,
                  "nodeType": "EmitStatement",
                  "src": "1889:43:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2217,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2124,
                      "src": "1938:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2218,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2201,
                      "src": "1947:8:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1938:17:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2220,
                  "nodeType": "ExpressionStatement",
                  "src": "1938:17:16"
                }
              ]
            },
            "documentation": "@dev Transfers control of the contract to a newOwner.\n@param newOwner The address to transfer ownership to.",
            "id": 2222,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2201,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 2222,
                  "src": "1819:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2200,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1819:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1818:18:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 2203,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1846:0:16"
            },
            "scope": 2223,
            "src": "1791:169:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2224,
        "src": "217:1745:16"
      }
    ],
    "src": "0:1963:16"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.557Z"
}