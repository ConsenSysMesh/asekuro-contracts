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
  "bytecode": "0x60806040526000600160006101000a81548160ff02191690831515021790555034801561002b57600080fd5b50604051602080610bf08339810180604052810190808051906020019092919050505061006f3360006100b5640100000000026109cc179091906401000000009004565b806001806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061014f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156100f157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b610a928061015e6000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631c4dd7d0146100935780633f4ba83a146100ea57806346fbf68e146101015780635c975abb1461015c5780636ef8d66d1461018b57806382dc1ec4146101a25780638456cb59146101e5578063ccdac525146101fc575b600080fd5b34801561009f57600080fd5b506100a861026b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f657600080fd5b506100ff610290565b005b34801561010d57600080fd5b50610142600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610308565b604051808215151515815260200191505060405180910390f35b34801561016857600080fd5b50610171610325565b604051808215151515815260200191505060405180910390f35b34801561019757600080fd5b506101a061033c565b005b3480156101ae57600080fd5b506101e3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610352565b005b3480156101f157600080fd5b506101fa6103c0565b005b34801561020857600080fd5b50610255600480360381019080803560001916906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610438565b6040518082815260200191505060405180910390f35b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61029933610308565b15156102a457600080fd5b600160009054906101000a900460ff1615156102bf57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b600061031e82600061089e90919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b61035033600061093290919063ffffffff16565b565b61035b33610308565b151561036657600080fd5b61037a8160006109cc90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6103c933610308565b15156103d457600080fd5b600160009054906101000a900460ff161515156103f057600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b6000806000600160009054906101000a900460ff1615151561045957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561049557600080fd5b6000851115156104a457600080fd5b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166387c8bba9876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561053c57600080fd5b505af1158015610550573d6000803e3d6000fd5b505050506040513d602081101561056657600080fd5b810190808051906020019092919050505091506001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5f8231a876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561061157600080fd5b505af1158015610625573d6000803e3d6000fd5b505050506040513d602081101561063b57600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff166384423e9387338489896040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b15801561076957600080fd5b505af115801561077d573d6000803e3d6000fd5b505050506040513d602081101561079357600080fd5b810190808051906020019092919050505015156107f35785600019166002808111156107bb57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610895565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f63873f8d1fad972a88e1b44efea2b2d0c399a125a4ea2148b7ad254577cb821d8888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b50509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108db57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561096e57600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a0857600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a72305820626b48131b98dbe6c6fdabd9cf14cb6c6e4951e8d2a0404befb5234f71f1f7820029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631c4dd7d0146100935780633f4ba83a146100ea57806346fbf68e146101015780635c975abb1461015c5780636ef8d66d1461018b57806382dc1ec4146101a25780638456cb59146101e5578063ccdac525146101fc575b600080fd5b34801561009f57600080fd5b506100a861026b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f657600080fd5b506100ff610290565b005b34801561010d57600080fd5b50610142600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610308565b604051808215151515815260200191505060405180910390f35b34801561016857600080fd5b50610171610325565b604051808215151515815260200191505060405180910390f35b34801561019757600080fd5b506101a061033c565b005b3480156101ae57600080fd5b506101e3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610352565b005b3480156101f157600080fd5b506101fa6103c0565b005b34801561020857600080fd5b50610255600480360381019080803560001916906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610438565b6040518082815260200191505060405180910390f35b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61029933610308565b15156102a457600080fd5b600160009054906101000a900460ff1615156102bf57600080fd5b6000600160006101000a81548160ff0219169083151502179055507fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693360405160405180910390a1565b600061031e82600061089e90919063ffffffff16565b9050919050565b6000600160009054906101000a900460ff16905090565b61035033600061093290919063ffffffff16565b565b61035b33610308565b151561036657600080fd5b61037a8160006109cc90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6103c933610308565b15156103d457600080fd5b600160009054906101000a900460ff161515156103f057600080fd5b60018060006101000a81548160ff0219169083151502179055507f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75260405160405180910390a1565b6000806000600160009054906101000a900460ff1615151561045957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561049557600080fd5b6000851115156104a457600080fd5b6001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166387c8bba9876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561053c57600080fd5b505af1158015610550573d6000803e3d6000fd5b505050506040513d602081101561056657600080fd5b810190808051906020019092919050505091506001809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5f8231a876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561061157600080fd5b505af1158015610625573d6000803e3d6000fd5b505050506040513d602081101561063b57600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff166384423e9387338489896040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b15801561076957600080fd5b505af115801561077d573d6000803e3d6000fd5b505050506040513d602081101561079357600080fd5b810190808051906020019092919050505015156107f35785600019166002808111156107bb57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610895565b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f63873f8d1fad972a88e1b44efea2b2d0c399a125a4ea2148b7ad254577cb821d8888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b50509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108db57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561096e57600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a0857600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505600a165627a7a72305820626b48131b98dbe6c6fdabd9cf14cb6c6e4951e8d2a0404befb5234f71f1f7820029",
  "sourceMap": "258:1495:6:-;;;280:5:15;257:28;;;;;;;;;;;;;;;;;;;;740:135:6;8:9:-1;5:2;;;30:1;27;20:12;5:2;740:135:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;259:23:12;271:10;259:7;:11;;;;;;:23;;;;;:::i;:::-;852:15:6;820:14;;:48;;;;;;;;;;;;;;;;;;740:135;258:1495;;245:132:10;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o;258:1495:6:-;;;;;;;",
  "deployedSourceMap": "258:1495:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;299:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;299:36:6;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:95:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1002:95:15;;;;;;364:100:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;364:100:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;365:69:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;365:69:15;;;;;;;;;;;;;;;;;;;;;;;;;;;588:70:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;588:70:12;;;;;;468:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;468:116:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:93:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:93:15;;;;;;881:870:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;881:870:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;299:36;;;;;;;;;;;;;:::o;1002:95:15:-;327:20:12;336:10;327:8;:20::i;:::-;319:29;;;;;;;;728:7:15;;;;;;;;;;;720:16;;;;;;;;1066:5;1056:7;;:15;;;;;;;;;;;;;;;;;;1082:10;;;;;;;;;;1002:95::o;364:100:12:-;420:4;439:20;451:7;439;:11;;:20;;;;:::i;:::-;432:27;;364:100;;;:::o;365:69:15:-;403:4;422:7;;;;;;;;;;;415:14;;365:69;:::o;588:70:12:-;627:26;642:10;627:7;:14;;:26;;;;:::i;:::-;588:70::o;468:116::-;327:20;336:10;327:8;:20::i;:::-;319:29;;;;;;;;528:20;540:7;528;:11;;:20;;;;:::i;:::-;571:7;559:20;;;;;;;;;;;;468:116;:::o;827:93:15:-;327:20:12;336:10;327:8;:20::i;:::-;319:29;;;;;;;;575:7:15;;;;;;;;;;;574:8;566:17;;;;;;;;892:4;882:7;;:14;;;;;;;;;;;;;;;;;;907:8;;;;;;;;;;827:93::o;881:870:6:-;1034:16;1141:22;1218:15;575:7:15;;;;;;;;;;;574:8;566:17;;;;;;;;1098:1:6;1074:26;;:12;:26;;;;1066:35;;;;;;;;1128:1;1119:6;:10;1111:19;;;;;;;;1166:14;;;;;;;;;;;:32;;;1199:8;1166:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1166:42:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1166:42:6;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1166:42:6;;;;;;;;;;;;;;;;1141:67;;1236:14;;;;;;;;;;;:25;;;1262:8;1236:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1236:35:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1236:35:6;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1236:35:6;;;;;;;;;;;;;;;;1218:53;;1310:14;1287:54;;;1355:8;1377:10;1401:7;1422:6;1442:12;1287:177;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1287:177:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1287:177:6;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1287:177:6;;;;;;;;;;;;;;;;1286:178;1282:305;;;1545:8;1485:69;;;1500:42;1494:49;;;;;;;;1485:69;;;;;;;;;;;;1575:1;1568:8;;;;1282:305;1690:7;1657:63;;1678:10;1657:63;;1668:8;1657:63;;;;1699:6;1707:12;1657:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;1738:6;1731:13;;589:1:15;881:870:6;;;;;;;:::o;657:166:10:-;741:4;782:1;763:21;;:7;:21;;;;755:30;;;;;;;;798:4;:11;;:20;810:7;798:20;;;;;;;;;;;;;;;;;;;;;;;;;791:27;;657:166;;;;:::o;443:136::-;537:1;518:21;;:7;:21;;;;510:30;;;;;;;;569:5;546:4;:11;;:20;558:7;546:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;443:136;;:::o;245:132::-;336:1;317:21;;:7;:21;;;;309:30;;;;;;;;368:4;345;:11;;:20;357:7;345:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;245:132;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./PolicyRegistry.sol\";\nimport \"./PolicyTemplateContract.sol\";\nimport \"../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\ncontract PremiumRouter is Pausable {\n    PolicyRegistry public policyRegistry;\n\n    enum Errors {\n        POLICY_NONEXISTENT,\n        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,\n        PAYMENT_REJECTED_BY_POLICY_CONTRACT\n    }\n\n    event LogPayment(\n        bytes32 indexed _policyId,\n        address indexed _payer,\n        address indexed _beneficiary,\n        uint _amount,\n        address _token\n    );\n\n    event LogError(uint8 indexed _errorId, bytes32 indexed _policyId);\n\n    constructor(\n        address _policyRegistry\n    )\n        public\n    {\n        policyRegistry = PolicyRegistry(_policyRegistry);\n    }\n\n    function pay(\n        bytes32 policyId,\n        uint256 amount,\n        address tokenAddress\n    )\n        public\n        whenNotPaused\n        returns (uint _amountPaid)\n    {\n        require(tokenAddress != address(0));\n        require(amount > 0);\n\n        address policyContract = policyRegistry.getPolicyTemplate(policyId);\n        address carrier = policyRegistry.getCarrier(policyId);\n\n        if (!PolicyTemplateContract(policyContract).registerPayment(\n            policyId,\n            msg.sender,\n            carrier,\n            amount,\n            tokenAddress\n        )) {\n            emit LogError(uint8(Errors.PAYMENT_REJECTED_BY_POLICY_CONTRACT), policyId);\n            return 0;\n        }\n\n        // Transfer amount to carrier\n        // TODO\n\n        emit LogPayment(policyId, msg.sender, carrier, amount, tokenAddress);\n\n        return amount;\n    }\n}",
  "sourcePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
  "ast": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
    "exportedSymbols": {
      "PremiumRouter": [
        1115
      ]
    },
    "id": 1116,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 995,
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
        "id": 996,
        "nodeType": "ImportDirective",
        "scope": 1116,
        "sourceUnit": 859,
        "src": "26:30:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyTemplateContract.sol",
        "file": "./PolicyTemplateContract.sol",
        "id": 997,
        "nodeType": "ImportDirective",
        "scope": 1116,
        "sourceUnit": 909,
        "src": "57:38:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 998,
        "nodeType": "ImportDirective",
        "scope": 1116,
        "sourceUnit": 2544,
        "src": "96:80:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 999,
        "nodeType": "ImportDirective",
        "scope": 1116,
        "sourceUnit": 3244,
        "src": "177:79:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1000,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2543,
              "src": "284:8:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$2543",
                "typeString": "contract Pausable"
              }
            },
            "id": 1001,
            "nodeType": "InheritanceSpecifier",
            "src": "284:8:6"
          }
        ],
        "contractDependencies": [
          2414,
          2543
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1115,
        "linearizedBaseContracts": [
          1115,
          2543,
          2414
        ],
        "name": "PremiumRouter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1003,
            "name": "policyRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 1115,
            "src": "299:36:6",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyRegistry_$858",
              "typeString": "contract PolicyRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 1002,
              "name": "PolicyRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 858,
              "src": "299:14:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                "typeString": "contract PolicyRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "PremiumRouter.Errors",
            "id": 1007,
            "members": [
              {
                "id": 1004,
                "name": "POLICY_NONEXISTENT",
                "nodeType": "EnumValue",
                "src": "364:18:6"
              },
              {
                "id": 1005,
                "name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                "nodeType": "EnumValue",
                "src": "392:39:6"
              },
              {
                "id": 1006,
                "name": "PAYMENT_REJECTED_BY_POLICY_CONTRACT",
                "nodeType": "EnumValue",
                "src": "441:35:6"
              }
            ],
            "name": "Errors",
            "nodeType": "EnumDefinition",
            "src": "342:140:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1019,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1009,
                  "indexed": true,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "514:25:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1008,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "514:7:6",
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
                  "id": 1011,
                  "indexed": true,
                  "name": "_payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "549:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1010,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "549:7:6",
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
                  "id": 1013,
                  "indexed": true,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "581:28:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1012,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "581:7:6",
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
                  "id": 1015,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "619:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1014,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "619:4:6",
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
                  "id": 1017,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "641:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1016,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "504:157:6"
            },
            "src": "488:174:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1025,
            "name": "LogError",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1021,
                  "indexed": true,
                  "name": "_errorId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1025,
                  "src": "683:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1020,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "683:5:6",
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
                  "id": 1023,
                  "indexed": true,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1025,
                  "src": "707:25:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1022,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "707:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "682:51:6"
            },
            "src": "668:66:6"
          },
          {
            "body": {
              "id": 1036,
              "nodeType": "Block",
              "src": "810:65:6",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1030,
                      "name": "policyRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1003,
                      "src": "820:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$858",
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
                          "id": 1032,
                          "name": "_policyRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1027,
                          "src": "852:15:6",
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
                        "id": 1031,
                        "name": "PolicyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 858,
                        "src": "837:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyRegistry_$858_$",
                          "typeString": "type(contract PolicyRegistry)"
                        }
                      },
                      "id": 1033,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "837:31:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "src": "820:48:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                      "typeString": "contract PolicyRegistry"
                    }
                  },
                  "id": 1035,
                  "nodeType": "ExpressionStatement",
                  "src": "820:48:6"
                }
              ]
            },
            "documentation": null,
            "id": 1037,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1028,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1027,
                  "name": "_policyRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 1037,
                  "src": "761:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1026,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "761:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "751:39:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1029,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "810:0:6"
            },
            "scope": 1115,
            "src": "740:135:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1113,
              "nodeType": "Block",
              "src": "1056:695:6",
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
                        "id": 1055,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1051,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1043,
                          "src": "1074:12:6",
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
                              "id": 1053,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1098:1:6",
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
                            "id": 1052,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1090:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1090:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1074:26:6",
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
                      "id": 1050,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1066:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1056,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1066:35:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1057,
                  "nodeType": "ExpressionStatement",
                  "src": "1066:35:6"
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
                        "id": 1061,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1059,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1041,
                          "src": "1119:6:6",
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
                          "id": 1060,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1128:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1119:10:6",
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
                      "id": 1058,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1111:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1062,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1111:19:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1063,
                  "nodeType": "ExpressionStatement",
                  "src": "1111:19:6"
                },
                {
                  "assignments": [
                    1065
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1065,
                      "name": "policyContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 1114,
                      "src": "1141:22:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1064,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1141:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1070,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1068,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1039,
                        "src": "1199:8:6",
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
                        "id": 1066,
                        "name": "policyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1003,
                        "src": "1166:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1067,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getPolicyTemplate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 784,
                      "src": "1166:32:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 1069,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1166:42:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1141:67:6"
                },
                {
                  "assignments": [
                    1072
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1072,
                      "name": "carrier",
                      "nodeType": "VariableDeclaration",
                      "scope": 1114,
                      "src": "1218:15:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1071,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1218:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1077,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1075,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1039,
                        "src": "1262:8:6",
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
                        "id": 1073,
                        "name": "policyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1003,
                        "src": "1236:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1074,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getCarrier",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 825,
                      "src": "1236:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 1076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1236:35:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1218:53:6"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 1089,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1286:178:6",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1082,
                          "name": "policyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1039,
                          "src": "1355:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1083,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4623,
                            "src": "1377:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1084,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1377:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1085,
                          "name": "carrier",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1072,
                          "src": "1401:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1086,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1041,
                          "src": "1422:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1087,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1043,
                          "src": "1442:12:6",
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
                              "id": 1079,
                              "name": "policyContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1065,
                              "src": "1310:14:6",
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
                            "id": 1078,
                            "name": "PolicyTemplateContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 908,
                            "src": "1287:22:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_PolicyTemplateContract_$908_$",
                              "typeString": "type(contract PolicyTemplateContract)"
                            }
                          },
                          "id": 1080,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1287:38:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_PolicyTemplateContract_$908",
                            "typeString": "contract PolicyTemplateContract"
                          }
                        },
                        "id": 1081,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "registerPayment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 884,
                        "src": "1287:54:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address,address,uint256,address) external returns (bool)"
                        }
                      },
                      "id": 1088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1287:177:6",
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
                  "id": 1101,
                  "nodeType": "IfStatement",
                  "src": "1282:305:6",
                  "trueBody": {
                    "id": 1100,
                    "nodeType": "Block",
                    "src": "1466:121:6",
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
                                    "id": 1092,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1007,
                                    "src": "1500:6:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$1007_$",
                                      "typeString": "type(enum PremiumRouter.Errors)"
                                    }
                                  },
                                  "id": 1093,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "PAYMENT_REJECTED_BY_POLICY_CONTRACT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1500:42:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$1007",
                                    "typeString": "enum PremiumRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$1007",
                                    "typeString": "enum PremiumRouter.Errors"
                                  }
                                ],
                                "id": 1091,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1494:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 1094,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1494:49:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1095,
                              "name": "policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1039,
                              "src": "1545:8:6",
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
                            "id": 1090,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1025,
                            "src": "1485:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 1096,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1485:69:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1097,
                        "nodeType": "EmitStatement",
                        "src": "1480:74:6"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1098,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1575:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1049,
                        "id": 1099,
                        "nodeType": "Return",
                        "src": "1568:8:6"
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
                        "id": 1103,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1039,
                        "src": "1668:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1104,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "1678:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1678:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1106,
                        "name": "carrier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1072,
                        "src": "1690:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1107,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1041,
                        "src": "1699:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1108,
                        "name": "tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1043,
                        "src": "1707:12:6",
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
                      "id": 1102,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1019,
                      "src": "1657:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address,uint256,address)"
                      }
                    },
                    "id": 1109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1657:63:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1110,
                  "nodeType": "EmitStatement",
                  "src": "1652:68:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1111,
                    "name": "amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1041,
                    "src": "1738:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1049,
                  "id": 1112,
                  "nodeType": "Return",
                  "src": "1731:13:6"
                }
              ]
            },
            "documentation": null,
            "id": 1114,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1046,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1045,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2504,
                  "src": "1003:13:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1003:13:6"
              }
            ],
            "name": "pay",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1039,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "903:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1038,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:6",
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
                  "id": 1041,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "929:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "929:7:6",
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
                  "id": 1043,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "953:20:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "953:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "893:86:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1048,
                  "name": "_amountPaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "1034:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1047,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1034:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1033:18:6"
            },
            "scope": 1115,
            "src": "881:870:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1116,
        "src": "258:1495:6"
      }
    ],
    "src": "0:1753:6"
  },
  "legacyAST": {
    "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PremiumRouter.sol",
    "exportedSymbols": {
      "PremiumRouter": [
        1115
      ]
    },
    "id": 1116,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 995,
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
        "id": 996,
        "nodeType": "ImportDirective",
        "scope": 1116,
        "sourceUnit": 859,
        "src": "26:30:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/contracts/PolicyTemplateContract.sol",
        "file": "./PolicyTemplateContract.sol",
        "id": 997,
        "nodeType": "ImportDirective",
        "scope": 1116,
        "sourceUnit": 909,
        "src": "57:38:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 998,
        "nodeType": "ImportDirective",
        "scope": 1116,
        "sourceUnit": 2544,
        "src": "96:80:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/tyndall/Documents/Projects/asekuro-contracts-reloaded/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 999,
        "nodeType": "ImportDirective",
        "scope": 1116,
        "sourceUnit": 3244,
        "src": "177:79:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1000,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2543,
              "src": "284:8:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$2543",
                "typeString": "contract Pausable"
              }
            },
            "id": 1001,
            "nodeType": "InheritanceSpecifier",
            "src": "284:8:6"
          }
        ],
        "contractDependencies": [
          2414,
          2543
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1115,
        "linearizedBaseContracts": [
          1115,
          2543,
          2414
        ],
        "name": "PremiumRouter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1003,
            "name": "policyRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 1115,
            "src": "299:36:6",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_PolicyRegistry_$858",
              "typeString": "contract PolicyRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 1002,
              "name": "PolicyRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 858,
              "src": "299:14:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                "typeString": "contract PolicyRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "PremiumRouter.Errors",
            "id": 1007,
            "members": [
              {
                "id": 1004,
                "name": "POLICY_NONEXISTENT",
                "nodeType": "EnumValue",
                "src": "364:18:6"
              },
              {
                "id": 1005,
                "name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                "nodeType": "EnumValue",
                "src": "392:39:6"
              },
              {
                "id": 1006,
                "name": "PAYMENT_REJECTED_BY_POLICY_CONTRACT",
                "nodeType": "EnumValue",
                "src": "441:35:6"
              }
            ],
            "name": "Errors",
            "nodeType": "EnumDefinition",
            "src": "342:140:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1019,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1009,
                  "indexed": true,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "514:25:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1008,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "514:7:6",
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
                  "id": 1011,
                  "indexed": true,
                  "name": "_payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "549:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1010,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "549:7:6",
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
                  "id": 1013,
                  "indexed": true,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "581:28:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1012,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "581:7:6",
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
                  "id": 1015,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "619:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1014,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "619:4:6",
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
                  "id": 1017,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1019,
                  "src": "641:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1016,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "504:157:6"
            },
            "src": "488:174:6"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 1025,
            "name": "LogError",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1021,
                  "indexed": true,
                  "name": "_errorId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1025,
                  "src": "683:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1020,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "683:5:6",
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
                  "id": 1023,
                  "indexed": true,
                  "name": "_policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1025,
                  "src": "707:25:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1022,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "707:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "682:51:6"
            },
            "src": "668:66:6"
          },
          {
            "body": {
              "id": 1036,
              "nodeType": "Block",
              "src": "810:65:6",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1030,
                      "name": "policyRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1003,
                      "src": "820:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$858",
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
                          "id": 1032,
                          "name": "_policyRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1027,
                          "src": "852:15:6",
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
                        "id": 1031,
                        "name": "PolicyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 858,
                        "src": "837:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_PolicyRegistry_$858_$",
                          "typeString": "type(contract PolicyRegistry)"
                        }
                      },
                      "id": 1033,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "837:31:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                        "typeString": "contract PolicyRegistry"
                      }
                    },
                    "src": "820:48:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                      "typeString": "contract PolicyRegistry"
                    }
                  },
                  "id": 1035,
                  "nodeType": "ExpressionStatement",
                  "src": "820:48:6"
                }
              ]
            },
            "documentation": null,
            "id": 1037,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1028,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1027,
                  "name": "_policyRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 1037,
                  "src": "761:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1026,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "761:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "751:39:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1029,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "810:0:6"
            },
            "scope": 1115,
            "src": "740:135:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1113,
              "nodeType": "Block",
              "src": "1056:695:6",
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
                        "id": 1055,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1051,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1043,
                          "src": "1074:12:6",
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
                              "id": 1053,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1098:1:6",
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
                            "id": 1052,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1090:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1090:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1074:26:6",
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
                      "id": 1050,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1066:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1056,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1066:35:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1057,
                  "nodeType": "ExpressionStatement",
                  "src": "1066:35:6"
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
                        "id": 1061,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1059,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1041,
                          "src": "1119:6:6",
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
                          "id": 1060,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1128:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1119:10:6",
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
                      "id": 1058,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4626,
                        4627
                      ],
                      "referencedDeclaration": 4626,
                      "src": "1111:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1062,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1111:19:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1063,
                  "nodeType": "ExpressionStatement",
                  "src": "1111:19:6"
                },
                {
                  "assignments": [
                    1065
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1065,
                      "name": "policyContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 1114,
                      "src": "1141:22:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1064,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1141:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1070,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1068,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1039,
                        "src": "1199:8:6",
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
                        "id": 1066,
                        "name": "policyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1003,
                        "src": "1166:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1067,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getPolicyTemplate",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 784,
                      "src": "1166:32:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 1069,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1166:42:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1141:67:6"
                },
                {
                  "assignments": [
                    1072
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1072,
                      "name": "carrier",
                      "nodeType": "VariableDeclaration",
                      "scope": 1114,
                      "src": "1218:15:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1071,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1218:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1077,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1075,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1039,
                        "src": "1262:8:6",
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
                        "id": 1073,
                        "name": "policyRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1003,
                        "src": "1236:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PolicyRegistry_$858",
                          "typeString": "contract PolicyRegistry"
                        }
                      },
                      "id": 1074,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getCarrier",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 825,
                      "src": "1236:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 1076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1236:35:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1218:53:6"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 1089,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1286:178:6",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1082,
                          "name": "policyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1039,
                          "src": "1355:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1083,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4623,
                            "src": "1377:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1084,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1377:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1085,
                          "name": "carrier",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1072,
                          "src": "1401:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1086,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1041,
                          "src": "1422:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1087,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1043,
                          "src": "1442:12:6",
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
                              "id": 1079,
                              "name": "policyContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1065,
                              "src": "1310:14:6",
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
                            "id": 1078,
                            "name": "PolicyTemplateContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 908,
                            "src": "1287:22:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_PolicyTemplateContract_$908_$",
                              "typeString": "type(contract PolicyTemplateContract)"
                            }
                          },
                          "id": 1080,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1287:38:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_PolicyTemplateContract_$908",
                            "typeString": "contract PolicyTemplateContract"
                          }
                        },
                        "id": 1081,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "registerPayment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 884,
                        "src": "1287:54:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address,address,uint256,address) external returns (bool)"
                        }
                      },
                      "id": 1088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1287:177:6",
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
                  "id": 1101,
                  "nodeType": "IfStatement",
                  "src": "1282:305:6",
                  "trueBody": {
                    "id": 1100,
                    "nodeType": "Block",
                    "src": "1466:121:6",
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
                                    "id": 1092,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1007,
                                    "src": "1500:6:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$1007_$",
                                      "typeString": "type(enum PremiumRouter.Errors)"
                                    }
                                  },
                                  "id": 1093,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "PAYMENT_REJECTED_BY_POLICY_CONTRACT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1500:42:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$1007",
                                    "typeString": "enum PremiumRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$1007",
                                    "typeString": "enum PremiumRouter.Errors"
                                  }
                                ],
                                "id": 1091,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1494:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 1094,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1494:49:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1095,
                              "name": "policyId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1039,
                              "src": "1545:8:6",
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
                            "id": 1090,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1025,
                            "src": "1485:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 1096,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1485:69:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1097,
                        "nodeType": "EmitStatement",
                        "src": "1480:74:6"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1098,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1575:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1049,
                        "id": 1099,
                        "nodeType": "Return",
                        "src": "1568:8:6"
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
                        "id": 1103,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1039,
                        "src": "1668:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1104,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4623,
                          "src": "1678:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1678:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1106,
                        "name": "carrier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1072,
                        "src": "1690:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1107,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1041,
                        "src": "1699:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1108,
                        "name": "tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1043,
                        "src": "1707:12:6",
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
                      "id": 1102,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1019,
                      "src": "1657:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address,uint256,address)"
                      }
                    },
                    "id": 1109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1657:63:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1110,
                  "nodeType": "EmitStatement",
                  "src": "1652:68:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1111,
                    "name": "amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1041,
                    "src": "1738:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1049,
                  "id": 1112,
                  "nodeType": "Return",
                  "src": "1731:13:6"
                }
              ]
            },
            "documentation": null,
            "id": 1114,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1046,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1045,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2504,
                  "src": "1003:13:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1003:13:6"
              }
            ],
            "name": "pay",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1039,
                  "name": "policyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "903:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1038,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:6",
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
                  "id": 1041,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "929:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "929:7:6",
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
                  "id": 1043,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "953:20:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "953:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "893:86:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1048,
                  "name": "_amountPaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "1034:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1047,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1034:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1033:18:6"
            },
            "scope": 1115,
            "src": "881:870:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1116,
        "src": "258:1495:6"
      }
    ],
    "src": "0:1753:6"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {
    "1539960000103": {
      "events": {},
      "links": {},
      "address": "0x0E437c15aE63E3eeae4B5F7B558809BF4f3122E9",
      "transactionHash": "0x6e21824894c45370627b9e76615b957787faaeffddc63fd33252d598916ac4bf"
    },
    "1539979141293": {
      "events": {},
      "links": {},
      "address": "0xAcEbf77B30462757E372828c22bDC96d8148FFB7",
      "transactionHash": "0x427f1b55c54d609eb6a3e53a8d19ff61ed626817c44c301ad6394598039e87b1"
    }
  },
  "schemaVersion": "3.0.0-beta.1",
  "updatedAt": "2018-10-19T20:14:07.761Z"
}