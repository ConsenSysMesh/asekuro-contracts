pragma solidity ^0.4.18;

import "./PolicyRegistry.sol";
import "./PolicyTemplateContract.sol";
import "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract PremiumRouter is Pausable {
    PolicyRegistry public policyRegistry;

    enum Errors {
        POLICY_NONEXISTENT,
        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
        PAYMENT_REJECTED_BY_POLICY_CONTRACT
    }

    event LogPayment(
        bytes32 indexed _policyId,
        address indexed _payer,
        address indexed _beneficiary,
        uint _amount,
        address _token
    );

    event LogError(uint8 indexed _errorId, bytes32 indexed _policyId);

    constructor(
        address _policyRegistry
    )
        public
    {
        policyRegistry = PolicyRegistry(_policyRegistry);
    }

    function pay(
        bytes32 policyId,
        uint256 amount,
        address tokenAddress
    )
        public
        whenNotPaused
        returns (uint _amountPaid)
    {
        require(tokenAddress != address(0));
        require(amount > 0);

        address policyContract = policyRegistry.getPolicyTemplate(policyId);
        address carrier = policyRegistry.getCarrier(policyId);

        if (!PolicyTemplateContract(policyContract).registerPayment(
            policyId,
            msg.sender,
            carrier,
            amount,
            tokenAddress
        )) {
            emit LogError(uint8(Errors.PAYMENT_REJECTED_BY_POLICY_CONTRACT), policyId);
            return 0;
        }

        // Transfer amount to carrier
        // TODO

        emit LogPayment(policyId, msg.sender, carrier, amount, tokenAddress);

        return amount;
    }
}