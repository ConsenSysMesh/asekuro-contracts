export const PremiumRouter = 
{
  "contractName": "PremiumRouter",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "policyRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1c4dd7d0"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3f4ba83a"
    },
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
      "type": "function",
      "signature": "0x46fbf68e"
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
      "type": "function",
      "signature": "0x5c975abb"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renouncePauser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x6ef8d66d"
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
      "type": "function",
      "signature": "0x82dc1ec4"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8456cb59"
    },
    {
      "inputs": [
        {
          "name": "_policyRegistry",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_policyId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "_payer",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "LogPayment",
      "type": "event",
      "signature": "0x63873f8d1fad972a88e1b44efea2b2d0c399a125a4ea2148b7ad254577cb821d"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_errorId",
          "type": "uint8"
        },
        {
          "indexed": true,
          "name": "_policyId",
          "type": "bytes32"
        }
      ],
      "name": "LogError",
      "type": "event",
      "signature": "0x36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e90"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Paused",
      "type": "event",
      "signature": "0x9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e752"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpaused",
      "type": "event",
      "signature": "0xa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d16933"
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
      "type": "event",
      "signature": "0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"
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
      "type": "event",
      "signature": "0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "policyId",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "pay",
      "outputs": [
        {
          "name": "_amountPaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xccdac525"
    }
  ],
  "bytecode": "0x60806040526000600160006101000a81548160ff02191690831515021790555034801561002b57600080fd5b50604051602080610bf08339810180604052810190808051906020019092919050505061006f3360006100b5640100000000026109cc179091906401000000009004565b806001806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061014f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156100f157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b610a928061015e6000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631c4dd7d0146100935780633f4ba83a146100ea57806346fbf68e146101015780635c975abb1461015c5780636ef8d66d1461018b57806382dc1ec4146101a25780638456cb59146101e5578063ccdac525146101fc575b600080fd5b34801561009f57600080fd5b506100a861026b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f657600080fd5b506100ff610290565b005b34801561010d57600080fd5b50610142600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610308565b604051808215151515815260200191505060405180910390f35b34801561016857600080fd5b50610171610325565b604051808215151515815260200191505060405180910390f35b34801561019757600080fd5b506101a061033c565b005b3480156101ae57600080fd5b506101e3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610352565b005b3480156101f157600080fd5b506101fa6103c0565b005b34801561020857600080fd5b50610255600480360381019080803560001916906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610438565b6040518082815260200191505060405180910390f35b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61029933610308565b15156102a457600080fd5b600160009054906101000a900460ff1615156102bf57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b600061031e82600061089e90919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b61035033600061093290919063ffffffff16565b565b61035b33610308565b151561036657600080fd5b61037a8160006109cc90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6103c933610308565b15156103d457600080fd5b600160009054906101000a900460ff161515156103f057600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b6000806000600160009054906101000a900460ff1615151561045957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561049557600080fd5b6000851115156104a457600080fd5b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639f89e7a0876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561053c57600080fd5b505af1158015610550573d6000803e3d6000fd5b505050506040513d602081101561056657600080fd5b810190808051906020019092919050505091506001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5f8231a876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561061157600080fd5b505af1158015610625573d6000803e3d6000fd5b505050506040513d602081101561063b57600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff166384423e9387338489896040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b15801561076957600080fd5b505af115801561077d573d6000803e3d6000fd5b505050506040513d602081101561079357600080fd5b810190808051906020019092919050505015156107f35785600019166002808111156107bb57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610895565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f63873f8d1fad972a88e1b44efea2b2d0c399a125a4ea2148b7ad254577cb821d8888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b50509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108db57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561096e57600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a0857600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a72305820d974d5435f78cb17799668c2cb393099360028263fcf1bc7f25537d2d9f4dfcb0029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631c4dd7d0146100935780633f4ba83a146100ea57806346fbf68e146101015780635c975abb1461015c5780636ef8d66d1461018b57806382dc1ec4146101a25780638456cb59146101e5578063ccdac525146101fc575b600080fd5b34801561009f57600080fd5b506100a861026b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f657600080fd5b506100ff610290565b005b34801561010d57600080fd5b50610142600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610308565b604051808215151515815260200191505060405180910390f35b34801561016857600080fd5b50610171610325565b604051808215151515815260200191505060405180910390f35b34801561019757600080fd5b506101a061033c565b005b3480156101ae57600080fd5b506101e3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610352565b005b3480156101f157600080fd5b506101fa6103c0565b005b34801561020857600080fd5b50610255600480360381019080803560001916906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610438565b6040518082815260200191505060405180910390f35b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61029933610308565b15156102a457600080fd5b600160009054906101000a900460ff1615156102bf57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b600061031e82600061089e90919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b61035033600061093290919063ffffffff16565b565b61035b33610308565b151561036657600080fd5b61037a8160006109cc90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6103c933610308565b15156103d457600080fd5b600160009054906101000a900460ff161515156103f057600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b6000806000600160009054906101000a900460ff1615151561045957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561049557600080fd5b6000851115156104a457600080fd5b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639f89e7a0876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561053c57600080fd5b505af1158015610550573d6000803e3d6000fd5b505050506040513d602081101561056657600080fd5b810190808051906020019092919050505091506001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5f8231a876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561061157600080fd5b505af1158015610625573d6000803e3d6000fd5b505050506040513d602081101561063b57600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff166384423e9387338489896040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b15801561076957600080fd5b505af115801561077d573d6000803e3d6000fd5b505050506040513d602081101561079357600080fd5b810190808051906020019092919050505015156107f35785600019166002808111156107bb57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610895565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f63873f8d1fad972a88e1b44efea2b2d0c399a125a4ea2148b7ad254577cb821d8888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b50509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108db57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561096e57600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a0857600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a72305820d974d5435f78cb17799668c2cb393099360028263fcf1bc7f25537d2d9f4dfcb0029",
  "sourceMap": "250:1487:6:-;;;280:5:14;257:28;;;;;;;;;;;;;;;;;;;;732:135:6;8:9:-1;5:2;;;30:1;27;20:12;5:2;732:135:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;259:23:11;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;844:15:6;812:14;;:48;;;;;;;;;;;;;;;;;;732:135;250:1487;;245:132:9;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;250:1487:6:-;;;;;;;",
  "deployedSourceMap": "250:1487:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;291:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;291:36:6;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:95:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1002:95:14;;;;;;364:100:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;365:69:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;365:69:14;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:11;;;;;;468:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:93:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:93:14;;;;;;873:862:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;873:862:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;291:36;;;;;;;;;;;;;:::o;1002:95:14:-;327:20:11;336:10;327:8;:20::i;:::-;319:29;;;;;;;;728:7:14;;;;;;;;;;;720:16;;;;;;;;1066:5;1056:7;;:15;;;;;;;;;;;;;;;;;;1082:10;;;;;;;;;;1002:95::o;364:100:11:-;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;365:69:14:-;403:4;422:7;;;;;;;;;;;415:14;;365:69;:::o;588:70:11:-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;468:116::-;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;827:93:14:-;327:20:11;336:10;327:8;:20::i;:::-;319:29;;;;;;;;575:7:14;;;;;;;;;;;574:8;566:17;;;;;;;;892:4;882:7;;:14;;;;;;;;;;;;;;;;;;907:8;;;;;;;;;;827:93::o;873:862:6:-;1026:16;1133:22;1210:15;575:7:14;;;;;;;;;;;574:8;566:17;;;;;;;;1090:1:6;1066:26;;:12;:26;;;;1058:35;;;;;;;;1120:1;1111:6;:10;1103:19;;;;;;;;1158:14;;;;;;;;;;;:32;;;1191:8;1158:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1158:42:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1158:42:6;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1158:42:6;;;;;;;;;;;;;;;;1133:67;;1228:14;;;;;;;;;;;:25;;;1254:8;1228:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1228:35:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1228:35:6;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1228:35:6;;;;;;;;;;;;;;;;1210:53;;1294:14;1279:46;;;1339:8;1361:10;1385:7;1406:6;1426:12;1279:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1279:169:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1279:169:6;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1279:169:6;;;;;;;;;;;;;;;;1278:170;1274:297;;;1529:8;1469:69;;;1484:42;1478:49;;;;;;;;1469:69;;;;;;;;;;;;1559:1;1552:8;;;;1274:297;1674:7;1641:63;;1662:10;1641:63;;1652:8;1641:63;;;;1683:6;1691:12;1641:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;1722:6;1715:13;;589:1:14;873:862:6;;;;;;;:::o;657:166:9:-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;245:132::-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./PolicyRegistry.sol\";\nimport \"./PolicyContract.sol\";\nimport \"../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\ncontract PremiumRouter is Pausable {\n    PolicyRegistry public policyRegistry;\n\n    enum Errors {\n        POLICY_NONEXISTENT,\n        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,\n        PAYMENT_REJECTED_BY_POLICY_CONTRACT\n    }\n\n    event LogPayment(\n        bytes32 indexed _policyId,\n        address indexed _payer,\n        address indexed _beneficiary,\n        uint _amount,\n        address _token\n    );\n\n    event LogError(uint8 indexed _errorId, bytes32 indexed _policyId);\n\n    constructor(\n        address _policyRegistry\n    )\n        public\n    {\n        policyRegistry = PolicyRegistry(_policyRegistry);\n    }\n\n    function pay(\n        bytes32 policyId,\n        uint256 amount,\n        address tokenAddress\n    )\n        public\n        whenNotPaused\n        returns (uint _amountPaid)\n    {\n        require(tokenAddress != address(0));\n        require(amount > 0);\n\n        address policyContract = policyRegistry.getPolicyContract(policyId);\n        address carrier = policyRegistry.getCarrier(policyId);\n\n        if (!PolicyContract(policyContract).registerPayment(\n            policyId,\n            msg.sender,\n            carrier,\n            amount,\n            tokenAddress\n        )) {\n            emit LogError(uint8(Errors.PAYMENT_REJECTED_BY_POLICY_CONTRACT), policyId);\n            return 0;\n        }\n\n        // Transfer amount to carrier\n        // TODO\n\n        emit LogPayment(policyId, msg.sender, carrier, amount, tokenAddress);\n\n        return amount;\n    }\n}",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
    "exportedSymbols": {
      "PremiumRouter": [
        1098
      ]
    },
    "id": 1099,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 978,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:6"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
        "file": "./PolicyRegistry.sol",
        "id": 979,
        "nodeType": "ImportDirective",
        "scope": 1099,
        "sourceUnit": 894,
        "src": "26:30:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyContract.sol",
        "file": "./PolicyContract.sol",
        "id": 980,
        "nodeType": "ImportDirective",
        "scope": 1099,
        "sourceUnit": 621,
        "src": "57:30:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 981,
        "nodeType": "ImportDirective",
        "scope": 1099,
        "sourceUnit": 1993,
        "src": "88:80:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 982,
        "nodeType": "ImportDirective",
        "scope": 1099,
        "sourceUnit": 2693,
        "src": "169:79:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 983,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1992,
              "src": "276:8:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$1992",
                "typeString": "contract Pausable"
              }
            },
            "id": 984,
            "nodeType": "InheritanceSpecifier",
            "src": "276:8:6"
          }
        ],
        "contractDependencies": [
          1863,
          1992
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1098,
        "linearizedBaseContracts": [
          1098,
          1992,
          1863
        ],
        "name": "PremiumRouter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 986,
            "name": "policyRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 1098,
            "src": "291:36:6",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyRegistry_$893",
              "typeString": "contract PolicyRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 985,
              "name": "PolicyRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 893,
              "src": "291:14:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                "typeString": "contract PolicyRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "PremiumRouter.Errors",
            "id": 990,
            "members": [
              {
                "id": 987,
                "name": "POLICY_NONEXISTENT",
                "nodeType": "EnumValue",
                "src": "356:18:6"
              },
              {
                "id": 988,
                "name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                "nodeType": "EnumValue",
                "src": "384:39:6"
              },
              {
                "id": 989,
                "name": "PAYMENT_REJECTED_BY_POLICY_CONTRACT",
                "nodeType": "EnumValue",
                "src": "433:35:6"
              }
            ],
            "name": "Errors",
            "nodeType": "EnumDefinition",
            "src": "334:140:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1002,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 992,
                  "indexed": true,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "506:25:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 991,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "506:7:6",
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
                  "id": 994,
                  "indexed": true,
                  "name": "_payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "541:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 993,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "541:7:6",
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
                  "id": 996,
                  "indexed": true,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "573:28:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 995,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "573:7:6",
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
                  "id": 998,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "611:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 997,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "611:4:6",
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
                  "id": 1000,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "633:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 999,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "496:157:6"
            },
            "src": "480:174:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1008,
            "name": "LogError",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1004,
                  "indexed": true,
                  "name": "_errorId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1008,
                  "src": "675:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1003,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "675:5:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1006,
                  "indexed": true,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1008,
                  "src": "699:25:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1005,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "674:51:6"
            },
            "src": "660:66:6"
          },
          {
            "body": {
              "id": 1019,
              "nodeType": "Block",
              "src": "802:65:6",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1017,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1013,
                      "name": "policyRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 986,
                      "src": "812:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1015,
                          "name": "_policyRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1010,
                          "src": "844:15:6",
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
                        "id": 1014,
                        "name": "PolicyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 893,
                        "src": "829:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyRegistry_$893_$",
                          "typeString": "type(contract PolicyRegistry)"
                        }
                      },
                      "id": 1016,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "829:31:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "src": "812:48:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                      "typeString": "contract PolicyRegistry"
                    }
                  },
                  "id": 1018,
                  "nodeType": "ExpressionStatement",
                  "src": "812:48:6"
                }
              ]
            },
            "documentation": null,
            "id": 1020,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1010,
                  "name": "_policyRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 1020,
                  "src": "753:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1009,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "753:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:39:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1012,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "802:0:6"
            },
            "scope": 1098,
            "src": "732:135:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1096,
              "nodeType": "Block",
              "src": "1048:687:6",
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
                        "id": 1038,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1034,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1026,
                          "src": "1066:12:6",
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
                              "id": 1036,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1090:1:6",
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
                            "id": 1035,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1082:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1037,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1082:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1066:26:6",
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
                      "id": 1033,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1058:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1058:35:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1040,
                  "nodeType": "ExpressionStatement",
                  "src": "1058:35:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1042,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1024,
                          "src": "1111:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1120:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1111:10:6",
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
                      "id": 1041,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1103:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1045,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1103:19:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1046,
                  "nodeType": "ExpressionStatement",
                  "src": "1103:19:6"
                },
                {
                  "assignments": [
                    1048
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1048,
                      "name": "policyContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 1097,
                      "src": "1133:22:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1047,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1133:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1053,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1051,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1022,
                        "src": "1191:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1049,
                        "name": "policyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 986,
                        "src": "1158:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1050,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getPolicyContract",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 834,
                      "src": "1158:32:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 1052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1158:42:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1133:67:6"
                },
                {
                  "assignments": [
                    1055
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1055,
                      "name": "carrier",
                      "nodeType": "VariableDeclaration",
                      "scope": 1097,
                      "src": "1210:15:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1054,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1210:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1060,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1058,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1022,
                        "src": "1254:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1056,
                        "name": "policyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 986,
                        "src": "1228:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1057,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getCarrier",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 860,
                      "src": "1228:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 1059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1228:35:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1210:53:6"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 1072,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1278:170:6",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1065,
                          "name": "policyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1022,
                          "src": "1339:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1066,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4014,
                            "src": "1361:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1067,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1361:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1068,
                          "name": "carrier",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1055,
                          "src": "1385:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1069,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1024,
                          "src": "1406:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1070,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1026,
                          "src": "1426:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1062,
                              "name": "policyContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1048,
                              "src": "1294:14:6",
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
                            "id": 1061,
                            "name": "PolicyContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "1279:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_PolicyContract_$620_$",
                              "typeString": "type(contract PolicyContract)"
                            }
                          },
                          "id": 1063,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1279:30:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_PolicyContract_$620",
                            "typeString": "contract PolicyContract"
                          }
                        },
                        "id": 1064,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "registerPayment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 576,
                        "src": "1279:46:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address,address,uint256,address) external returns (bool)"
                        }
                      },
                      "id": 1071,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1279:169:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1084,
                  "nodeType": "IfStatement",
                  "src": "1274:297:6",
                  "trueBody": {
                    "id": 1083,
                    "nodeType": "Block",
                    "src": "1450:121:6",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 1075,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 990,
                                    "src": "1484:6:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$990_$",
                                      "typeString": "type(enum PremiumRouter.Errors)"
                                    }
                                  },
                                  "id": 1076,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "PAYMENT_REJECTED_BY_POLICY_CONTRACT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1484:42:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$990",
                                    "typeString": "enum PremiumRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$990",
                                    "typeString": "enum PremiumRouter.Errors"
                                  }
                                ],
                                "id": 1074,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1478:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 1077,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1478:49:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1078,
                              "name": "policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1022,
                              "src": "1529:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 1073,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1008,
                            "src": "1469:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 1079,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1469:69:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1080,
                        "nodeType": "EmitStatement",
                        "src": "1464:74:6"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1081,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1559:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1032,
                        "id": 1082,
                        "nodeType": "Return",
                        "src": "1552:8:6"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1086,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1022,
                        "src": "1652:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1087,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "1662:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1088,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1662:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1089,
                        "name": "carrier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "1674:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1090,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1024,
                        "src": "1683:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1091,
                        "name": "tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1026,
                        "src": "1691:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1085,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1002,
                      "src": "1641:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address,uint256,address)"
                      }
                    },
                    "id": 1092,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1641:63:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1093,
                  "nodeType": "EmitStatement",
                  "src": "1636:68:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1094,
                    "name": "amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1024,
                    "src": "1722:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1032,
                  "id": 1095,
                  "nodeType": "Return",
                  "src": "1715:13:6"
                }
              ]
            },
            "documentation": null,
            "id": 1097,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1029,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1028,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1953,
                  "src": "995:13:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "995:13:6"
              }
            ],
            "name": "pay",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1022,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "895:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1021,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:6",
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
                  "id": 1024,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "921:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1023,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:7:6",
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
                  "id": 1026,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "945:20:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1025,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "945:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "885:86:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1031,
                  "name": "_amountPaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "1026:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1030,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:18:6"
            },
            "scope": 1098,
            "src": "873:862:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1099,
        "src": "250:1487:6"
      }
    ],
    "src": "0:1737:6"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
    "exportedSymbols": {
      "PremiumRouter": [
        1098
      ]
    },
    "id": 1099,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 978,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:6"
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyRegistry.sol",
        "file": "./PolicyRegistry.sol",
        "id": 979,
        "nodeType": "ImportDirective",
        "scope": 1099,
        "sourceUnit": 894,
        "src": "26:30:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyContract.sol",
        "file": "./PolicyContract.sol",
        "id": 980,
        "nodeType": "ImportDirective",
        "scope": 1099,
        "sourceUnit": 621,
        "src": "57:30:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 981,
        "nodeType": "ImportDirective",
        "scope": 1099,
        "sourceUnit": 1993,
        "src": "88:80:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 982,
        "nodeType": "ImportDirective",
        "scope": 1099,
        "sourceUnit": 2693,
        "src": "169:79:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 983,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1992,
              "src": "276:8:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$1992",
                "typeString": "contract Pausable"
              }
            },
            "id": 984,
            "nodeType": "InheritanceSpecifier",
            "src": "276:8:6"
          }
        ],
        "contractDependencies": [
          1863,
          1992
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1098,
        "linearizedBaseContracts": [
          1098,
          1992,
          1863
        ],
        "name": "PremiumRouter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 986,
            "name": "policyRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 1098,
            "src": "291:36:6",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyRegistry_$893",
              "typeString": "contract PolicyRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 985,
              "name": "PolicyRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 893,
              "src": "291:14:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                "typeString": "contract PolicyRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "PremiumRouter.Errors",
            "id": 990,
            "members": [
              {
                "id": 987,
                "name": "POLICY_NONEXISTENT",
                "nodeType": "EnumValue",
                "src": "356:18:6"
              },
              {
                "id": 988,
                "name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                "nodeType": "EnumValue",
                "src": "384:39:6"
              },
              {
                "id": 989,
                "name": "PAYMENT_REJECTED_BY_POLICY_CONTRACT",
                "nodeType": "EnumValue",
                "src": "433:35:6"
              }
            ],
            "name": "Errors",
            "nodeType": "EnumDefinition",
            "src": "334:140:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1002,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 992,
                  "indexed": true,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "506:25:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 991,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "506:7:6",
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
                  "id": 994,
                  "indexed": true,
                  "name": "_payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "541:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 993,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "541:7:6",
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
                  "id": 996,
                  "indexed": true,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "573:28:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 995,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "573:7:6",
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
                  "id": 998,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "611:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 997,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "611:4:6",
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
                  "id": 1000,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1002,
                  "src": "633:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 999,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "496:157:6"
            },
            "src": "480:174:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1008,
            "name": "LogError",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1004,
                  "indexed": true,
                  "name": "_errorId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1008,
                  "src": "675:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1003,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "675:5:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1006,
                  "indexed": true,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1008,
                  "src": "699:25:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1005,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "674:51:6"
            },
            "src": "660:66:6"
          },
          {
            "body": {
              "id": 1019,
              "nodeType": "Block",
              "src": "802:65:6",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1017,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1013,
                      "name": "policyRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 986,
                      "src": "812:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1015,
                          "name": "_policyRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1010,
                          "src": "844:15:6",
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
                        "id": 1014,
                        "name": "PolicyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 893,
                        "src": "829:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyRegistry_$893_$",
                          "typeString": "type(contract PolicyRegistry)"
                        }
                      },
                      "id": 1016,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "829:31:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "src": "812:48:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                      "typeString": "contract PolicyRegistry"
                    }
                  },
                  "id": 1018,
                  "nodeType": "ExpressionStatement",
                  "src": "812:48:6"
                }
              ]
            },
            "documentation": null,
            "id": 1020,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1010,
                  "name": "_policyRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 1020,
                  "src": "753:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1009,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "753:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:39:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1012,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "802:0:6"
            },
            "scope": 1098,
            "src": "732:135:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1096,
              "nodeType": "Block",
              "src": "1048:687:6",
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
                        "id": 1038,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1034,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1026,
                          "src": "1066:12:6",
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
                              "id": 1036,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1090:1:6",
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
                            "id": 1035,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1082:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1037,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1082:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1066:26:6",
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
                      "id": 1033,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1058:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1058:35:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1040,
                  "nodeType": "ExpressionStatement",
                  "src": "1058:35:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1042,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1024,
                          "src": "1111:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1120:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1111:10:6",
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
                      "id": 1041,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4017,
                        4018
                      ],
                      "referencedDeclaration": 4017,
                      "src": "1103:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1045,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1103:19:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1046,
                  "nodeType": "ExpressionStatement",
                  "src": "1103:19:6"
                },
                {
                  "assignments": [
                    1048
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1048,
                      "name": "policyContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 1097,
                      "src": "1133:22:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1047,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1133:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1053,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1051,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1022,
                        "src": "1191:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1049,
                        "name": "policyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 986,
                        "src": "1158:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1050,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getPolicyContract",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 834,
                      "src": "1158:32:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 1052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1158:42:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1133:67:6"
                },
                {
                  "assignments": [
                    1055
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1055,
                      "name": "carrier",
                      "nodeType": "VariableDeclaration",
                      "scope": 1097,
                      "src": "1210:15:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1054,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1210:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1060,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1058,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1022,
                        "src": "1254:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1056,
                        "name": "policyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 986,
                        "src": "1228:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$893",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1057,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getCarrier",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 860,
                      "src": "1228:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 1059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1228:35:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1210:53:6"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 1072,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1278:170:6",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1065,
                          "name": "policyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1022,
                          "src": "1339:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1066,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4014,
                            "src": "1361:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1067,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1361:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1068,
                          "name": "carrier",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1055,
                          "src": "1385:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1069,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1024,
                          "src": "1406:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1070,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1026,
                          "src": "1426:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1062,
                              "name": "policyContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1048,
                              "src": "1294:14:6",
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
                            "id": 1061,
                            "name": "PolicyContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "1279:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_PolicyContract_$620_$",
                              "typeString": "type(contract PolicyContract)"
                            }
                          },
                          "id": 1063,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1279:30:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_PolicyContract_$620",
                            "typeString": "contract PolicyContract"
                          }
                        },
                        "id": 1064,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "registerPayment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 576,
                        "src": "1279:46:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address,address,uint256,address) external returns (bool)"
                        }
                      },
                      "id": 1071,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1279:169:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1084,
                  "nodeType": "IfStatement",
                  "src": "1274:297:6",
                  "trueBody": {
                    "id": 1083,
                    "nodeType": "Block",
                    "src": "1450:121:6",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 1075,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 990,
                                    "src": "1484:6:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$990_$",
                                      "typeString": "type(enum PremiumRouter.Errors)"
                                    }
                                  },
                                  "id": 1076,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "PAYMENT_REJECTED_BY_POLICY_CONTRACT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1484:42:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$990",
                                    "typeString": "enum PremiumRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$990",
                                    "typeString": "enum PremiumRouter.Errors"
                                  }
                                ],
                                "id": 1074,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1478:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 1077,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1478:49:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1078,
                              "name": "policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1022,
                              "src": "1529:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 1073,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1008,
                            "src": "1469:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 1079,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1469:69:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1080,
                        "nodeType": "EmitStatement",
                        "src": "1464:74:6"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1081,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1559:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1032,
                        "id": 1082,
                        "nodeType": "Return",
                        "src": "1552:8:6"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1086,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1022,
                        "src": "1652:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1087,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4014,
                          "src": "1662:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1088,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1662:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1089,
                        "name": "carrier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "1674:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1090,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1024,
                        "src": "1683:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1091,
                        "name": "tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1026,
                        "src": "1691:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1085,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1002,
                      "src": "1641:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address,uint256,address)"
                      }
                    },
                    "id": 1092,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1641:63:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1093,
                  "nodeType": "EmitStatement",
                  "src": "1636:68:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1094,
                    "name": "amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1024,
                    "src": "1722:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1032,
                  "id": 1095,
                  "nodeType": "Return",
                  "src": "1715:13:6"
                }
              ]
            },
            "documentation": null,
            "id": 1097,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1029,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1028,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1953,
                  "src": "995:13:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "995:13:6"
              }
            ],
            "name": "pay",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1022,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "895:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1021,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:6",
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
                  "id": 1024,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "921:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1023,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:7:6",
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
                  "id": 1026,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "945:20:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1025,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "945:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "885:86:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1031,
                  "name": "_amountPaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "1026:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1030,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:18:6"
            },
            "scope": 1098,
            "src": "873:862:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1099,
        "src": "250:1487:6"
      }
    ],
    "src": "0:1737:6"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "1537413714450": {
      "events": {},
      "links": {},
      "address": "0xF0B601355C55336d2eC64b22b54B71fd40213228",
      "transactionHash": "0x66c8ca34dfd77a7695f1dfe0c7083b431a145f98bcaf9e2b6537fb687ee5b244"
    }
  },
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-20T03:48:48.687Z"
}