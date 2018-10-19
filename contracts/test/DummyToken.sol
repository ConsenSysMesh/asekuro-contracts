pragma solidity ^ 0.4.18;

import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract DummyToken is ERC20, ERC20Detailed, ERC20Mintable {
    using SafeMath for uint;

    string public _name;
    string public _symbol;
    uint public _decimals;

    constructor (
        string name,
        string symbol,
        uint8 decimals,
        uint totalSupply,
        address[] initialBalanceHolders
    )
        ERC20Mintable()
        ERC20Detailed(name, symbol, decimals)
        ERC20()
        public
    {
        _name = name;
        _symbol = symbol;
        _decimals = decimals;

        uint numInitialBalanceHolders = initialBalanceHolders.length;
        
        for (uint i = 0; i < numInitialBalanceHolders; i++) {
            address account = initialBalanceHolders[i];
            // uint amount = totalSupply / numInitialBalanceHolders;
            uint amount = 100000;
            mint(account, amount);
        }
    }
}
