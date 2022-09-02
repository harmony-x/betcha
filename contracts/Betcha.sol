// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./BetchaCoin.sol";



/**
 * @title Betcha
 * @dev Basically lottery with chainlink VRF
 */
contract Betcha is VRFConsumerBaseV2, ReentrancyGuard, Ownable {
    using SafeMath for uint256;

    VRFCoordinatorV2Interface COORDINATOR;
    BetchaCoin coin;

    // subscription ID.
    uint64 s_subscriptionId;

    // Mumbai coordinator. For other networks,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    address vrfCoordinator = 0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed;

    bytes32 keyHash = 0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f;

    uint32 callbackGasLimit = 100000;

    // The default is 3, but you can set this higher.
    uint16 requestConfirmations = 3;

    uint32 numWords =  1;

    struct Bet {
        address initiator;
        uint256 amount;
        uint256 option;
        bool settled;
        bool won;
        bool paid;
    }

    mapping(uint256 => Bet) public bets;

    uint256 public unAvailablePool = 0;

    event BetPlaced(address indexed initiator, uint256 requestId, uint256 amount, uint256 indexed option);
    event BetFulfilled(uint256 requestId, bool won);
    event ProceedsClaimed(address indexed initiator, uint256 requestId, uint256 amount);

    constructor(uint64 subscriptionId) VRFConsumerBaseV2(vrfCoordinator) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_subscriptionId = subscriptionId;
        coin = new BetchaCoin();
    }

    // Assumes the subscription is funded sufficiently.
    function placeBet(uint8 betOption)  public payable{
        // check valid bet option 
        require(betOption == 0 || betOption == 1, "You placed an invalid bet");

        // Minimum bet requirement 0.05 MATIC
        require(msg.value >= 5*1e16, "You must bet at least 0.05 MATIC");

        // 0.1% fee
        uint256 stake = msg.value * 999 / 1000;

        // make stake unavailable 
        unAvailablePool += stake;

        // can use it to check that stake less than 25% of pool
        uint256 max_stake = availablePool() / 4;
        require(stake <= max_stake, "Your stake is too large for this pool.");

        // Will revert if subscription is not set and funded.
        uint256 requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );

        // store bet details in contract
        bets[requestId].initiator = msg.sender;
        bets[requestId].amount = stake;
        bets[requestId].option = betOption;

        emit BetPlaced(msg.sender, requestId, stake, betOption);
    }

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        require(!bets[requestId].settled, "This bet has been fulfilled");
        // transform the result to a number between 0 and 2 inclusively
        uint256 correctGuess = (randomWords[0] % 3);
        if (correctGuess == bets[requestId].option) {
            // allow redemption
            bets[requestId].won = true;
            // increase unavailable
            unAvailablePool += bets[requestId].amount;
        } else {
            unAvailablePool -= bets[requestId].amount;
        }
        bets[requestId].settled = true;

        emit BetFulfilled(requestId, bets[requestId].won);
    }

    function withdrawProceeds (uint256 requestId) public payable nonReentrant {
        require(!bets[requestId].paid && bets[requestId].won, "This bet was either lost or has been fulfilled.");
        uint256 amountWon = bets[requestId].amount*2;
        unAvailablePool -= amountWon;
        bets[requestId].paid = true;
        payable(bets[requestId].initiator).transfer(amountWon);

        emit ProceedsClaimed(bets[requestId].initiator, requestId, amountWon);
    }

    function availablePool() public view returns(uint256) {
        return address(this).balance - unAvailablePool;
    }

    // Liquidity Provision
    function addLiquidity() public payable {
        require(availablePool() != 0, "There has to be MATIC in the pool to add liquidity");
        require(msg.value != 0, "You have to send MATIC to the pool to add liquidity");

        uint256 newTokens = msg.value * coin.totalSupply() / availablePool();
        if(coin.totalSupply()!=0) {
            coin.mint(owner(), newTokens / 200);
            coin.mint(msg.sender, newTokens * 199 / 200);
        } else {
            coin.mint(msg.sender, 20000*1e18);
        }
    }

    function removeLiquidity(uint256 amount) public payable nonReentrant {
        require(coin.balanceOf(msg.sender) >= amount, "You don't have enough BCHA");
        uint256 poolShare = amount * availablePool() / coin.totalSupply();
        payable(msg.sender).transfer(poolShare);
        coin.burn(msg.sender, amount);
    }

    // I mean, why not
    receive() external payable {}
    fallback() external payable {}
}