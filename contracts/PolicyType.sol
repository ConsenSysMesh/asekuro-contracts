pragma solidity ^0.4.24;

interface PolicyType {
    function registerPolicyStart(
        bytes32 policyId,
        address insured
    ) public returns (bool success);

    function registerPremiumPayment(
        bytes32 policyId,
        address insured,
        uint unitsOfPayment, 
        address tokenAddress
    ) public returns (bool success);

    function registerClaim(
        bytes32 policyId,
        uint coverageIndex,
        bytes32 proof,
        address reporter
    ) public returns (bool success);

    function getPremiumPaidToDate(
        bytes32 policyId
    ) public view returns (uint);

    function getExpectedPremiumPaid(
        bytes32 policyId,
        uint timestamp
    ) public view returns (uint);

    function getPolicyEndTimestamp(
        bytes32 policyId
    ) public view returns (uint);
}