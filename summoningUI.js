import { gameState, playerData, updateGameState } from "./gameIncantation.js";

// container for game information display and messages
export const gameStartUI = () => {
  // title of the gameSite
  const gameTitleContainer = document.createElement("div");
  gameTitleContainer.classList.add("title");
  gameTitleContainer.innerText = "♠️ Video Poker ♠️";
  document.body.appendChild(gameTitleContainer);
  // Main Game information Container
  const gameInfoContainer = document.createElement("div");
  gameInfoContainer.classList.add("row");
  document.body.appendChild(gameInfoContainer);
  // Game info top row for: Gamestate, bank roll, bet amount
  const gameInfoTop = document.createElement("div");
  gameInfoTop.classList.add("splitRow");
  // gameInfoTop.classList.add("gameInfo");
  gameInfoContainer.appendChild(gameInfoTop);
  // Game state message box
  const gameStateBox = document.createElement("div");
  gameStateBox.classList.add("gameStateBox");
  gameStateBox.innerText = "Welcome to Video Poker! Let's play cards!";
  gameInfoTop.appendChild(gameStateBox);
  //Name titles for cells
  const cellName = document.createElement("div");
  cellName.innerText = "Bank:";
  cellName.classList.add("cellName");
  gameInfoTop.appendChild(cellName);
  // Player bank roll display
  const playerBankRoll = document.createElement("div");
  playerBankRoll.classList.add("numbersInfo");
  playerBankRoll.id = "playerBankRoll";
  playerBankRoll.innerText = "100";
  gameInfoTop.appendChild(playerBankRoll);
  // Player bet amount
  const cellName2 = document.createElement("div");
  cellName2.innerText = "Bet:";
  cellName2.classList.add("cellName");
  gameInfoTop.appendChild(cellName2);
  const playerBet = document.createElement("div");
  playerBet.id = "playerBet";
  playerBet.classList.add("numbersInfo");
  playerBet.innerText = "0";
  gameInfoTop.appendChild(playerBet);
  // Game info bottom row
  const gameInfoBtm = document.createElement("div");
  gameInfoBtm.classList.add("splitRow");
  // gameInfoBtm.classList.add("gameInfo");
  gameInfoContainer.appendChild(gameInfoBtm);
  // game information ie cards selected for replacement
  const gameToolTip = document.createElement("div");
  gameToolTip.id = "gameToolTip";
  gameToolTip.innerText = "Place your bet to start";
  gameInfoBtm.appendChild(gameToolTip);
  // Input box for bet
  const betInput = document.createElement("input");
  betInput.id = "betInput";
  betInput.classList.add("showed");
  gameInfoBtm.appendChild(betInput);
  // Button to trigger next event in the game state
  const actionButton = document.createElement("div");
  actionButton.id = "actionButton";
  actionButton.innerText = "Place bet!";
  // adding the function that will link back to the game logic
  // actionButton.addEventListener('click', gameLogic);
  gameInfoBtm.appendChild(actionButton);
};

// Gameboard for the card
// @param handSize {number} number of cards to be dealt
export function gameBoard(handSize, dealt) {
  const cardBoard = document.createElement("div");
  cardBoard.classList.add("board");
  document.body.appendChild(cardBoard);
  for (let i = 0; i < handSize; i += 1) {
    let card = document.createElement("div");
    cardBoard.appendChild(card);
    if (dealt) {
      let cardImage = document.createElement("img");
      cardImage.src = "./assets/Cards Pack/PNG/Medium/Back Red 1.png";
      card.appendChild(cardImage);
      cardImage.addEventListener("click", makeCardAction(i));
    } else {
      card.className = "cardShadow";
    }
  }
}

function makeCardAction(index) {
  function cardAction(event) {
    let state = gameState;
    console.log("gameState", gameState);
    let cardPath = playerData.hand[index].imageRef;
    // cardImage.scr =
    updateGameState();
    console.log("gameState", gameState);
  }
  return cardAction;
}
