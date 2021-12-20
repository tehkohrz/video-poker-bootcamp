import { gameState, playerData, updateGameState } from './gameIncantation.js';

// function initialises the container for game information display and messages
export const gameStartUI = () => {
  // title of the gameSite
  const gameTitleContainer = document.createElement('div');
  gameTitleContainer.classList.add('title');
  gameTitleContainer.innerText = '♠️ Video Poker ♠️';
  document.body.appendChild(gameTitleContainer);
  // Main Game information Container
  const gameInfoContainer = document.createElement('div');
  gameInfoContainer.classList.add('row');
  document.body.appendChild(gameInfoContainer);
  // Game info top row for: Gamestate, bank roll, bet amount
  const gameInfoTop = document.createElement('div');
  gameInfoTop.classList.add('splitRow');
  // gameInfoTop.classList.add("gameInfo");
  gameInfoContainer.appendChild(gameInfoTop);
  // Game state message box
  const gameStateBox = document.createElement('div');
  gameStateBox.classList.add('gameStateBox');
  gameStateBox.innerText = "Welcome to Video Poker! Let's play cards!";
  gameInfoTop.appendChild(gameStateBox);
  // Name titles for cells
  const cellName = document.createElement('div');
  cellName.innerText = 'Bank:';
  cellName.classList.add('cellName');
  gameInfoTop.appendChild(cellName);
  // Player bank roll display
  const playerBankRoll = document.createElement('div');
  playerBankRoll.classList.add('numbersInfo');
  playerBankRoll.id = 'playerBankRoll';
  playerBankRoll.innerText = playerData.bank;
  gameInfoTop.appendChild(playerBankRoll);
  // Player bet amount
  const cellName2 = document.createElement('div');
  cellName2.innerText = 'Bet:';
  cellName2.classList.add('cellName');
  gameInfoTop.appendChild(cellName2);
  const playerBet = document.createElement('div');
  playerBet.id = 'playerBet';
  playerBet.classList.add('numbersInfo');
  playerBet.innerText = playerData.currentBet;
  gameInfoTop.appendChild(playerBet);
  // Game info bottom row
  const gameInfoBtm = document.createElement('div');
  gameInfoBtm.classList.add('splitRow');
  // gameInfoBtm.classList.add("gameInfo");
  gameInfoContainer.appendChild(gameInfoBtm);
  // game information ie cards selected for replacement
  const gameToolTip = document.createElement('div');
  gameToolTip.id = 'gameToolTip';
  gameToolTip.innerText = 'Place your bet to start';
  gameInfoBtm.appendChild(gameToolTip);
  // Input box for bet
  const betInput = document.createElement('input');
  betInput.id = 'betInput';
  betInput.placeholder = 'Bet Amount';
  betInput.classList.add('showed');
  gameInfoBtm.appendChild(betInput);
  // Button to trigger next event in the game state
  const actionButton = document.createElement('div');
  actionButton.id = 'actionButton';
  actionButton.innerText = 'Place bet!';
  // adding the function that will link back to the game logic
  actionButton.addEventListener('click', makeButtonAction(betInput, playerBet, playerBankRoll));
  gameInfoBtm.appendChild(actionButton);
};

// function for the button to take in bets or confirm replacement
// @param betInput {DOM} to log the player bet
// @param playerBet {DOM} to update the bet into the UI
// @param playerBankRoll {DOM} to update the updated bankroll into the UI
function makeButtonAction(betInput, playerBet, playerBankRoll) {
  function buttonAction(event) {
    // action for gamestate at betting phase
    if (gameState === 'betPhase') {
      // check for invaide inputs
      if (betInput.value > 0 && betInput.value <= playerData.bank) {
        playerData.currentBet = betInput.value;
        playerBet.innerText = playerData.currentBet;
        playerData.bank -= playerData.currentBet;
        playerBankRoll.innerText = playerData.bank;
        console.log('here', playerData.currentBet);
        updateGameState();
      } else {
        document.getElementById('gameToolTip').innerText = 'Please input a number.';
      }
    }
    if (gameState === 'dealPhase') {

    }
  }
  return buttonAction;
}

// Function starts the Gameboard for the card
// creating the card elements for the images to be fed into
// @param handSize {number} number of cards to be dealt
export function gameBoard(handSize, dealt, hideHand = true) {
  const cardBoard = document.createElement('div');
  cardBoard.classList.add('board');
  document.body.appendChild(cardBoard);
  for (let i = 0; i < handSize; i += 1) {
    const card = document.createElement('div');
    cardBoard.appendChild(card);
    if (dealt && hideHand) {
      const cardImage = document.createElement('img');
      cardImage.classList.add('card');
      cardImage.src = './assets/Cards Pack/PNG/Medium/Back Red 1.png';
      card.appendChild(cardImage);
      cardImage.addEventListener('click', makeCardAction(i));
    }
    // added function to be used for show hand function, render all cards straight
    else if (!hideHand) {
      const cardImage = document.createElement('img');
      cardImage.classList.add('card');
      cardImage.src = `./assets/Cards Pack/PNG/Medium/${playerData.hand[i]}.png`;
      card.appendChild(cardImage);
      cardImage.addEventListener('click', makeCardAction(i));
      playerData.revealCount += 1;
    } else {
      card.className = 'cardShadow';
    }
  }
}

function makeCardAction(index) {
  function cardAction(event) {
    // card reveal on click and log reveal count to move to next phase when all cards revealed
    if (gameState === 'dealPhase') {
      const cardPath = playerData.hand[index].imageRef;
      cardImage.scr = `./assets/Cards Pack/PNG/Medium/${cardPath}.png`;
      playerData.revealCount += 1;
      if (playerData.revealCount === handSize) {
        updateGameState();
      }
    }
  }
  return cardAction;
}
