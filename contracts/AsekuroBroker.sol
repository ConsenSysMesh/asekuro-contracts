pragma solidity ^0.4.18;

import "./PolicyTemplateContract.sol";
import "./PolicyToken.sol";

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract AsekuroBroker is Pausable, Ownable {
    using SafeMath for uint;

    PolicyToken public policyToken;

    event  LogPolicyOrderFilled(
        bytes32 indexed _policyId,
        address _claimToken,
        address _premiumToken,
        address indexed _underwriter,
        uint _underwriterFee,
        address _resolver,
        uint _resolverFee,
        address indexed _relayer,
        uint _relayerFee
    );

    struct Declaration {
        address version; // address of premiumRouter
        address insured;
        address resolver;
        address underwriter;
        uint underwriterRiskRating;
        address policyTemplate;
        bytes32[3] policyTemplateParameters;
        uint salt;
        bytes32 policyId;
    }

    struct PolicyOrder {
        Declaration declaration;
        uint underwriterFee;
        uint relayerFee;
        uint resolverFee;
        address premiumToken; // also used for fees
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
        uint[6] orderValues,
        bytes32[3] orderBytes32,
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
        bindPolicy(carrier, policyOrder.declaration);
        
        // register policy start
        if (policyOrder.declaration.policyTemplate != address(0)) {
            require(
                PolicyTemplateContract(policyOrder.declaration.policyTemplate)
                    .registerPolicyStart(
                        policyOrder.declaration.policyId,
                        policyOrder.declaration.insured
                    )
            );
        }

        // TODO implement fee transfer here

        emit LogPolicyOrderFilled(
            policyOrder.declaration.policyId,
            policyOrder.claimToken,
            policyOrder.premiumToken,
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
    function bindPolicy(address carrier, Declaration declaration)
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
            declaration.policyTemplate,
            declaration.policyTemplateParameters,
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
        address policyTemplate,
        uint underwriterRiskRating,
        uint salt,
        bytes32[3] policyTemplateParameters
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
            policyTemplate: policyTemplate,
            policyTemplateParameters: policyTemplateParameters,
            salt: salt,
            policyId: getPolicyId(
                version,
                insured,
                resolver,
                underwriter,
                underwriterRiskRating,
                policyTemplate,
                salt,
                policyTemplateParameters
            )
        });

        return declaration;
    }

    function getPolicyOrder(address[8] orderAddresses, uint[6] orderValues, bytes32[3] orderBytes32)
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
                orderBytes32
            ),
            claimToken: orderAddresses[5],
            premiumToken: orderAddresses[6],
            relayer: orderAddresses[7],
            underwriterFee: orderValues[2],
            relayerFee: orderValues[3],
            resolverFee: orderValues[4],
            expirationTimestampInSec: orderValues[5],
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
        bytes32[3] policyContractParameters
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
                policyOrder.premiumToken,
                policyOrder.claimToken,
                policyOrder.relayer,
                policyOrder.expirationTimestampInSec
            )
        );
    }
}