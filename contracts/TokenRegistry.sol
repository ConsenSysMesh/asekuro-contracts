pragma solidity ^0.4.18;

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract TokenRegistry is Ownable {
    // used to lookup TokenAttribute
    mapping (bytes32 => TokenAttributes) public symbolHashToTokenAttributes;
    // list of token symbols
    string[256] public tokenSymbolList;
    // count of current token symbols in list
    uint8 public tokenSymbolListLength;

    struct TokenAttributes {
        address tokenAddress;
        uint tokenIndex;
        string name;
        uint8 numDecimals;
    }

    function setTokenAttributes(
        string _symbol,
        address _tokenAddress,
        string _tokenName,
        uint8 _numDecimals
    )
        public onlyOwner
    {
        bytes32 symbolHash = keccak256(_symbol);

        TokenAttributes memory attributes = symbolHashToTokenAttributes[symbolHash];

        if (attributes.tokenAddress == address(0)) {
            // Token has not been added to the registry
            attributes.tokenAddress = _tokenAddress;
            attributes.numDecimals = _numDecimals;
            attributes.name = _tokenName;
            attributes.tokenIndex = tokenSymbolListLength;
            tokenSymbolList[tokenSymbolListLength] = _symbol;
            tokenSymbolListLength++;
        } else {
            // Token has already been added
            attributes.tokenAddress = _tokenAddress;
            attributes.numDecimals = _numDecimals;
            attributes.name = _tokenName;
        }
        
        symbolHashToTokenAttributes[symbolHash] = attributes;
    }

    function getTokenAddressBySymbol(string _symbol) public view returns (address) {
        bytes32 symbolHash = keccak256(_symbol);

        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];

        return attributes.tokenAddress;
    }

    function getTokenAddressByIndex(uint _index) public view returns (address) {
        string storage symbol = tokenSymbolList[_index];

        return getTokenAddressBySymbol(symbol);
    }

    function getTokenSymbolByIndex(uint _index) public view returns (string) {
        return tokenSymbolList[_index];
    }

    function getTokenAttributesBySymbol(string _symbol)
        public
        view
        returns (
            address,
            uint,
            string,
            uint
        )
    {
        bytes32 symbolHash = keccak256(_symbol);

        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];

        return (
            attributes.tokenAddress,
            attributes.tokenIndex,
            attributes.name,
            attributes.numDecimals
        );
    }

    function getTokenAttributesByIndex(uint _index)
        public
        view
        returns (
            address,
            string,
            string,
            uint8
        )
    {
        string memory symbol = getTokenSymbolByIndex(_index);

        bytes32 symbolHash = keccak256(symbol);

        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];

        return (
            attributes.tokenAddress,
            symbol,
            attributes.name,
            attributes.numDecimals
        );
    }
}