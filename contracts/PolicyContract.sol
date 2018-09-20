pragma solidity ^0.4.18;

interface PolicyContract {
    /// Activate a policy
    function registerPolicyStart(
        bytes32 policyId,
        address insured
    ) public returns (bool _success);

    /// Record all premium payments
    function registerPayment(
        bytes32 policyId,
        address payer,
        address beneficiary,
        uint256 unitsOfPayment,
        address tokenAddress
    ) public returns (bool _success);

    /// details of claim submission get stored on-chain in claims registry
    /// Claims registry must track and record every execution of claim
    function registerClaim(
        bytes32 policyId,
        bytes32 coverageCondition,
        bytes32 outcome,
        address reporter
    ) public view returns (uint);

    /// Should be easy to determine: length * premium payment
    function getExpectedPremiumPaid(
        bytes32 policyId,
        uint256 timestamp
    ) public view returns (uint256);

    /// Lookup payment history, can be used to determine whether
    /// a policy is up to date on payments
    function getPremiumPaidToDate(
        bytes32 policyId
    ) public view returns (uint256);

    function getPolicyEndTimestamp(
        bytes32 _policyId
    ) public view returns (uint);

    /// you could potentially have different oracles for each coverage condition
    function getResolver(
        bytes32 coverageCondition
    ) public view returns (address);

}