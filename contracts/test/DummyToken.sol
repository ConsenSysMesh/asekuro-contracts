pragma solidity ^ 0.4.18;

import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract DummyToken is ERC20Mintable {
    using SafeMath for uint;

    string public name;
    string public symbol;
    uint public decimals;

    function DummyToken(
        string _name,
        string _symbol,
        uint _decimals,
        uint _totalSupply,
        address[] _initialBalanceHolders)
        public
    {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
    }
}
