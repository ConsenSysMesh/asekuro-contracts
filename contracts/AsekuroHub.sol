pragma solidity ^0.4.18;

import "./PolicyContract.sol";
import "./PolicyToken.sol";

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract AsekuroHub is Pausable, Ownable {
    using SafeMath for uint;

    PolicyToken public policyToken;

    event  LogPolicyOrderFilled(
        bytes32 indexed _policyId,
        uint _coverageAmount,
        address _coverageToken,
        address indexed _underwriter,
        uint _underwriterFee,
        address _resolver,
        uint _resolverFee,
        address indexed _relayer,
        uint _relayerFee
    );

    struct Declaration {
        address version;
        address insured;
        address resolver;
        address underwriter;
        uint underwriterRiskRating;
        address policyContract;
        bytes32 policyContractParameters;
        uint salt;
        bytes32 policyId;
    }

    struct PolicyOrder {
        Declaration declaration;
        uint underwriterFee;
        uint relayerFee;
        uint resolverFee;
        uint coverageAmount;
        address premiumToken;
        address claimToken;
        address relayer;
        uint expirationTimestampInSec;
        bytes32 policyOrderHash;
    }

    function setPolicyToken(address policyTokenAddress)
        public
        onlyOwner
    {
        policyToken = PolicyToken(policyTokenAddress);
    }

    /**
     * 
     */
    function fillPolicyOrder(
        address carrier,
        address[8] orderAddresses,
        uint[7] orderValues,
        bytes32[1] orderBytes32,
        uint8[3] signaturesV,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        public
        whenNotPaused
        returns (bytes32 _policyId)
    {
        PolicyOrder memory policyOrder = getPolicyOrder(orderAddresses, orderValues, orderBytes32);
        
        // Check policyOrder conditions
        // TODO
        
        // Mint policy token and finalize policy agreement
        issuePolicy(carrier, policyOrder.declaration);
        
        // register policy start
        if (policyOrder.declaration.policyContract != address(0)) {
            require(
                PolicyContract(policyOrder.declaration.policyContract)
                    .registerPolicyStart(
                        policyOrder.declaration.policyId,
                        policyOrder.declaration.insured
                    )
            );
        }

        // transfer underwriter feee to underwriter
        // TODO

        // transfer relayer fee to relayer
        // TODO

        emit LogPolicyOrderFilled(
            policyOrder.declaration.policyId,
            policyOrder.coverageAmount,
            policyOrder.claimToken,
            policyOrder.declaration.underwriter,
            policyOrder.underwriterFee,
            policyOrder.declaration.resolver,
            policyOrder.resolverFee,
            policyOrder.relayer,
            policyOrder.relayerFee
        );

        return policyOrder.declaration.policyId;
    }

    ////////////////////////////
    //// INTERNAL FUNCTIONS ////
    ////////////////////////////
    function issuePolicy(address carrier, Declaration declaration)
        internal
        returns (bytes32 _policyId)
    {
        // Mint policy token and finalize policy agreement
        uint tokenId = policyToken.create(
            declaration.version,
            carrier,
            declaration.insured,
            declaration.resolver,
            declaration.underwriter,
            declaration.underwriterRiskRating,
            declaration.policyContract,
            declaration.policyContractParameters,
            declaration.salt
        );

        assert(tokenId == uint(declaration.policyId));

        return declaration.policyId;
    }

    function getDeclaration(
        address version,
        address insured,
        address resolver,
        address underwriter,
        address policyContract,
        uint underwriterRiskRating,
        uint salt,
        bytes32 policyContractParameters
    )
        internal
        pure
        returns (Declaration _declaration)
    {
        Declaration memory declaration = Declaration({
            version: version,
            insured: insured,
            resolver: resolver,
            underwriter: underwriter,
            underwriterRiskRating: underwriterRiskRating,
            policyContract: policyContract,
            policyContractParameters: policyContractParameters,
            salt: salt,
            policyId: getPolicyId(
                version,
                insured,
                resolver,
                underwriter,
                underwriterRiskRating,
                policyContract,
                salt,
                policyContractParameters
            )
        });

        return declaration;
    }

    function getPolicyOrder(address[8] orderAddresses, uint[7] orderValues, bytes32[1] orderBytes32)
        internal
        view
        returns (PolicyOrder _policyOrder)
    {
        PolicyOrder memory policyOrder = PolicyOrder({
            declaration: getDeclaration(
                orderAddresses[0],
                orderAddresses[1],
                orderAddresses[2],
                orderAddresses[3],
                orderAddresses[4],
                orderValues[0],
                orderValues[1],
                orderBytes32[0]
            ),
            claimToken: orderAddresses[5],
            premiumToken: orderAddresses[6],
            relayer: orderAddresses[7],
            coverageAmount: orderValues[2],
            underwriterFee: orderValues[3],
            relayerFee: orderValues[4],
            resolverFee: orderValues[5],
            expirationTimestampInSec: orderValues[6],
            policyOrderHash: bytes32(0)
        });

        policyOrder.policyOrderHash = getPolicyOrderHash(policyOrder);
    }

    function getPolicyId(
        address version,
        address insured,
        address resolver,
        address underwriter,
        uint underwriterRiskRating,
        address policyContract,
        uint salt,
        bytes32 policyContractParameters
    )
        internal
        pure
        returns (bytes32 _policyId)
    {
        return keccak256(
            abi.encodePacked(
                version,
                insured,
                resolver,
                underwriter,
                underwriterRiskRating,
                policyContract,
                policyContractParameters,
                salt
            )
        );
    }

    function getPolicyOrderHash(PolicyOrder policyOrder)
        internal
        view
        returns (bytes32 _policyOrderHash)
    {
        return keccak256(
            abi.encodePacked(
                address(this),
                policyOrder.declaration.policyId,
                policyOrder.underwriterFee,
                policyOrder.relayerFee,
                policyOrder.resolverFee,
                policyOrder.coverageAmount,
                policyOrder.premiumToken,
                policyOrder.claimToken,
                policyOrder.relayer,
                policyOrder.expirationTimestampInSec
            )
        );
    }
}