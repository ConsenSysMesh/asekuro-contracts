export const Pausable = 
{
  "contractName": "Pausable",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isPauser",
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
      "name": "renouncePauser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addPauser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "PauserAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "PauserRemoved",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
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
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526000600160006101000a81548160ff02191690831515021790555061004033600061004564010000000002610465179091906401000000009004565b6100df565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561008157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61052b806100ee6000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a1461007d57806346fbf68e146100945780635c975abb146100ef5780636ef8d66d1461011e57806382dc1ec4146101355780638456cb5914610178575b600080fd5b34801561008957600080fd5b5061009261018f565b005b3480156100a057600080fd5b506100d5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610207565b604051808215151515815260200191505060405180910390f35b3480156100fb57600080fd5b50610104610224565b604051808215151515815260200191505060405180910390f35b34801561012a57600080fd5b5061013361023b565b005b34801561014157600080fd5b50610176600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610251565b005b34801561018457600080fd5b5061018d6102bf565b005b61019833610207565b15156101a357600080fd5b600160009054906101000a900460ff1615156101be57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b600061021d82600061033790919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b61024f3360006103cb90919063ffffffff16565b565b61025a33610207565b151561026557600080fd5b61027981600061046590919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6102c833610207565b15156102d357600080fd5b600160009054906101000a900460ff161515156102ef57600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561037457600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561040757600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156104a157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a723058207d9bd09891d060a5c44b956e235c31b576a2ac4a788a3c160057a389292027e70029",
  "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a1461007d57806346fbf68e146100945780635c975abb146100ef5780636ef8d66d1461011e57806382dc1ec4146101355780638456cb5914610178575b600080fd5b34801561008957600080fd5b5061009261018f565b005b3480156100a057600080fd5b506100d5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610207565b604051808215151515815260200191505060405180910390f35b3480156100fb57600080fd5b50610104610224565b604051808215151515815260200191505060405180910390f35b34801561012a57600080fd5b5061013361023b565b005b34801561014157600080fd5b50610176600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610251565b005b34801561018457600080fd5b5061018d6102bf565b005b61019833610207565b15156101a357600080fd5b600160009054906101000a900460ff1615156101be57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b600061021d82600061033790919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b61024f3360006103cb90919063ffffffff16565b565b61025a33610207565b151561026557600080fd5b61027981600061046590919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6102c833610207565b15156102d357600080fd5b600160009054906101000a900460ff161515156102ef57600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561037457600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561040757600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156104a157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a723058207d9bd09891d060a5c44b956e235c31b576a2ac4a788a3c160057a389292027e70029",
  "sourceMap": "182:917:14:-;;;280:5;257:28;;;;;;;;;;;;;;;;;;;;259:23:11;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;182:917:14;;245:132:9;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;182:917:14:-;;;;;;;",
  "deployedSourceMap": "182:917:14:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1002:95:14;;;;;;364:100:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;365:69:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;365:69:14;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:11;;;;;;468:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:93:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:93:14;;;;;;1002:95;327:20:11;336:10;327:8;:20::i;:::-;319:29;;;;;;;;728:7:14;;;;;;;;;;;720:16;;;;;;;;1066:5;1056:7;;:15;;;;;;;;;;;;;;;;;;1082:10;;;;;;;;;;1002:95::o;364:100:11:-;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;365:69:14:-;403:4;422:7;;;;;;;;;;;415:14;;365:69;:::o;588:70:11:-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;468:116::-;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;827:93:14:-;327:20:11;336:10;327:8;:20::i;:::-;319:29;;;;;;;;575:7:14;;;;;;;;;;;574:8;566:17;;;;;;;;892:4;882:7;;:14;;;;;;;;;;;;;;;;;;907:8;;;;;;;;;;827:93::o;657:166:9:-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;245:132::-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../access/roles/PauserRole.sol\";\n\n\n/**\n * @title Pausable\n * @dev Base contract which allows children to implement an emergency stop mechanism.\n */\ncontract Pausable is PauserRole {\n  event Paused();\n  event Unpaused();\n\n  bool private _paused = false;\n\n\n  /**\n   * @return true if the contract is paused, false otherwise.\n   */\n  function paused() public view returns(bool) {\n    return _paused;\n  }\n\n  /**\n   * @dev Modifier to make a function callable only when the contract is not paused.\n   */\n  modifier whenNotPaused() {\n    require(!_paused);\n    _;\n  }\n\n  /**\n   * @dev Modifier to make a function callable only when the contract is paused.\n   */\n  modifier whenPaused() {\n    require(_paused);\n    _;\n  }\n\n  /**\n   * @dev called by the owner to pause, triggers stopped state\n   */\n  function pause() public onlyPauser whenNotPaused {\n    _paused = true;\n    emit Paused();\n  }\n\n  /**\n   * @dev called by the owner to unpause, returns to normal state\n   */\n  function unpause() public onlyPauser whenPaused {\n    _paused = false;\n    emit Unpaused();\n  }\n}\n",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
    "exportedSymbols": {
      "Pausable": [
        1992
      ]
    },
    "id": 1993,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1926,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:14"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/PauserRole.sol",
        "file": "../access/roles/PauserRole.sol",
        "id": 1927,
        "nodeType": "ImportDirective",
        "scope": 1993,
        "sourceUnit": 1864,
        "src": "26:40:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1928,
              "name": "PauserRole",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1863,
              "src": "203:10:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PauserRole_$1863",
                "typeString": "contract PauserRole"
              }
            },
            "id": 1929,
            "nodeType": "InheritanceSpecifier",
            "src": "203:10:14"
          }
        ],
        "contractDependencies": [
          1863
        ],
        "contractKind": "contract",
        "documentation": "@title Pausable\n@dev Base contract which allows children to implement an emergency stop mechanism.",
        "fullyImplemented": true,
        "id": 1992,
        "linearizedBaseContracts": [
          1992,
          1863
        ],
        "name": "Pausable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 1931,
            "name": "Paused",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1930,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "230:2:14"
            },
            "src": "218:15:14"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1933,
            "name": "Unpaused",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1932,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "250:2:14"
            },
            "src": "236:17:14"
          },
          {
            "constant": false,
            "id": 1936,
            "name": "_paused",
            "nodeType": "VariableDeclaration",
            "scope": 1992,
            "src": "257:28:14",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 1934,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "257:4:14",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 1935,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "280:5:14",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1943,
              "nodeType": "Block",
              "src": "409:25:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1941,
                    "name": "_paused",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1936,
                    "src": "422:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1940,
                  "id": 1942,
                  "nodeType": "Return",
                  "src": "415:14:14"
                }
              ]
            },
            "documentation": "@return true if the contract is paused, false otherwise.",
            "id": 1944,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "paused",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1937,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "380:2:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 1940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1939,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1944,
                  "src": "403:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1938,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "402:6:14"
            },
            "scope": 1992,
            "src": "365:69:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1952,
              "nodeType": "Block",
              "src": "560:35:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1948,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "574:8:14",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 1947,
                          "name": "_paused",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1936,
                          "src": "575:7:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
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
                      "id": 1946,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "566:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1949,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "566:17:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1950,
                  "nodeType": "ExpressionStatement",
                  "src": "566:17:14"
                },
                {
                  "id": 1951,
                  "nodeType": "PlaceholderStatement",
                  "src": "589:1:14"
                }
              ]
            },
            "documentation": "@dev Modifier to make a function callable only when the contract is not paused.",
            "id": 1953,
            "name": "whenNotPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "557:2:14"
            },
            "src": "535:60:14",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1960,
              "nodeType": "Block",
              "src": "714:34:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1956,
                        "name": "_paused",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1936,
                        "src": "728:7:14",
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
                      "id": 1955,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "720:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1957,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "720:16:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1958,
                  "nodeType": "ExpressionStatement",
                  "src": "720:16:14"
                },
                {
                  "id": 1959,
                  "nodeType": "PlaceholderStatement",
                  "src": "742:1:14"
                }
              ]
            },
            "documentation": "@dev Modifier to make a function callable only when the contract is paused.",
            "id": 1961,
            "name": "whenPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1954,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:2:14"
            },
            "src": "692:56:14",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1975,
              "nodeType": "Block",
              "src": "876:44:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1968,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1936,
                      "src": "882:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1969,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "892:4:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "882:14:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1971,
                  "nodeType": "ExpressionStatement",
                  "src": "882:14:14"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1972,
                      "name": "Paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1931,
                      "src": "907:6:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 1973,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "907:8:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1974,
                  "nodeType": "EmitStatement",
                  "src": "902:13:14"
                }
              ]
            },
            "documentation": "@dev called by the owner to pause, triggers stopped state",
            "id": 1976,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1964,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1963,
                  "name": "onlyPauser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1804,
                  "src": "851:10:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "851:10:14"
              },
              {
                "arguments": null,
                "id": 1966,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1965,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1953,
                  "src": "862:13:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "862:13:14"
              }
            ],
            "name": "pause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1962,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "841:2:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 1967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "876:0:14"
            },
            "scope": 1992,
            "src": "827:93:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1990,
              "nodeType": "Block",
              "src": "1050:47:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1983,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1936,
                      "src": "1056:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 1984,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1066:5:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1056:15:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1986,
                  "nodeType": "ExpressionStatement",
                  "src": "1056:15:14"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1987,
                      "name": "Unpaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1933,
                      "src": "1082:8:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 1988,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1082:10:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1989,
                  "nodeType": "EmitStatement",
                  "src": "1077:15:14"
                }
              ]
            },
            "documentation": "@dev called by the owner to unpause, returns to normal state",
            "id": 1991,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1979,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1978,
                  "name": "onlyPauser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1804,
                  "src": "1028:10:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1028:10:14"
              },
              {
                "arguments": null,
                "id": 1981,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1980,
                  "name": "whenPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1961,
                  "src": "1039:10:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1039:10:14"
              }
            ],
            "name": "unpause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1977,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1018:2:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 1982,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1050:0:14"
            },
            "scope": 1992,
            "src": "1002:95:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1993,
        "src": "182:917:14"
      }
    ],
    "src": "0:1100:14"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
    "exportedSymbols": {
      "Pausable": [
        1992
      ]
    },
    "id": 1993,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1926,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:14"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/access/roles/PauserRole.sol",
        "file": "../access/roles/PauserRole.sol",
        "id": 1927,
        "nodeType": "ImportDirective",
        "scope": 1993,
        "sourceUnit": 1864,
        "src": "26:40:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1928,
              "name": "PauserRole",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1863,
              "src": "203:10:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PauserRole_$1863",
                "typeString": "contract PauserRole"
              }
            },
            "id": 1929,
            "nodeType": "InheritanceSpecifier",
            "src": "203:10:14"
          }
        ],
        "contractDependencies": [
          1863
        ],
        "contractKind": "contract",
        "documentation": "@title Pausable\n@dev Base contract which allows children to implement an emergency stop mechanism.",
        "fullyImplemented": true,
        "id": 1992,
        "linearizedBaseContracts": [
          1992,
          1863
        ],
        "name": "Pausable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 1931,
            "name": "Paused",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1930,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "230:2:14"
            },
            "src": "218:15:14"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1933,
            "name": "Unpaused",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1932,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "250:2:14"
            },
            "src": "236:17:14"
          },
          {
            "constant": false,
            "id": 1936,
            "name": "_paused",
            "nodeType": "VariableDeclaration",
            "scope": 1992,
            "src": "257:28:14",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 1934,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "257:4:14",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 1935,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "280:5:14",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1943,
              "nodeType": "Block",
              "src": "409:25:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1941,
                    "name": "_paused",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1936,
                    "src": "422:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1940,
                  "id": 1942,
                  "nodeType": "Return",
                  "src": "415:14:14"
                }
              ]
            },
            "documentation": "@return true if the contract is paused, false otherwise.",
            "id": 1944,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "paused",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1937,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "380:2:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 1940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1939,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1944,
                  "src": "403:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1938,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "402:6:14"
            },
            "scope": 1992,
            "src": "365:69:14",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1952,
              "nodeType": "Block",
              "src": "560:35:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1948,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "574:8:14",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 1947,
                          "name": "_paused",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1936,
                          "src": "575:7:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
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
                      "id": 1946,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "566:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1949,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "566:17:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1950,
                  "nodeType": "ExpressionStatement",
                  "src": "566:17:14"
                },
                {
                  "id": 1951,
                  "nodeType": "PlaceholderStatement",
                  "src": "589:1:14"
                }
              ]
            },
            "documentation": "@dev Modifier to make a function callable only when the contract is not paused.",
            "id": 1953,
            "name": "whenNotPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "557:2:14"
            },
            "src": "535:60:14",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1960,
              "nodeType": "Block",
              "src": "714:34:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1956,
                        "name": "_paused",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1936,
                        "src": "728:7:14",
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
                      "id": 1955,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "720:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1957,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "720:16:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1958,
                  "nodeType": "ExpressionStatement",
                  "src": "720:16:14"
                },
                {
                  "id": 1959,
                  "nodeType": "PlaceholderStatement",
                  "src": "742:1:14"
                }
              ]
            },
            "documentation": "@dev Modifier to make a function callable only when the contract is paused.",
            "id": 1961,
            "name": "whenPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1954,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:2:14"
            },
            "src": "692:56:14",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1975,
              "nodeType": "Block",
              "src": "876:44:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1968,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1936,
                      "src": "882:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 1969,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "892:4:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "882:14:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1971,
                  "nodeType": "ExpressionStatement",
                  "src": "882:14:14"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1972,
                      "name": "Paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1931,
                      "src": "907:6:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 1973,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "907:8:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1974,
                  "nodeType": "EmitStatement",
                  "src": "902:13:14"
                }
              ]
            },
            "documentation": "@dev called by the owner to pause, triggers stopped state",
            "id": 1976,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1964,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1963,
                  "name": "onlyPauser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1804,
                  "src": "851:10:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "851:10:14"
              },
              {
                "arguments": null,
                "id": 1966,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1965,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1953,
                  "src": "862:13:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "862:13:14"
              }
            ],
            "name": "pause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1962,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "841:2:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 1967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "876:0:14"
            },
            "scope": 1992,
            "src": "827:93:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1990,
              "nodeType": "Block",
              "src": "1050:47:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1983,
                      "name": "_paused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1936,
                      "src": "1056:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 1984,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1066:5:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1056:15:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1986,
                  "nodeType": "ExpressionStatement",
                  "src": "1056:15:14"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1987,
                      "name": "Unpaused",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1933,
                      "src": "1082:8:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 1988,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1082:10:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1989,
                  "nodeType": "EmitStatement",
                  "src": "1077:15:14"
                }
              ]
            },
            "documentation": "@dev called by the owner to unpause, returns to normal state",
            "id": 1991,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1979,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1978,
                  "name": "onlyPauser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1804,
                  "src": "1028:10:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1028:10:14"
              },
              {
                "arguments": null,
                "id": 1981,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1980,
                  "name": "whenPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1961,
                  "src": "1039:10:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1039:10:14"
              }
            ],
            "name": "unpause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1977,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1018:2:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 1982,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1050:0:14"
            },
            "scope": 1992,
            "src": "1002:95:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1993,
        "src": "182:917:14"
      }
    ],
    "src": "0:1100:14"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:43.556Z"
}