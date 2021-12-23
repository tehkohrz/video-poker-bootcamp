// function to build the containters
function createContainer(className, id) {
  const container = document.createElement('div');
  if (className) {
    container.classList.add(className);
  }
  if (id) {
    container.id = id;
  }
  return container;
}

// @param payTable {object} containing the winning odds for each hand
// @param playerData {object} used for the current bet and bank information
// @para handSize {number} determines the no of cards to be dealt

export function createMainUI(payTable, playerData, handSize) {
  // Main container to hold the whole UI and center it to the screen
  const mainContainer = createContainer('main');
  document.body.appendChild(mainContainer);
  // title name of the game
  const titleName = createContainer('title');
  titleName.innerText = '♠️ Video Poker ♠️';
  mainContainer.appendChild(titleName);
  // paytable that will show the odds and update as you increase the bet
  // two columns on with the Header and odd that changes based on the bet amount
  const payTableContainer = createContainer('payTableMain');
  const payTableUI = generatePayTable(payTable);
  renderPayTableUI(payTableContainer, payTableUI);
  mainContainer.appendChild(payTableContainer);
  // table board for the cards to be render
  const tableContainer = createContainer('tableMain');
  const cardTableUI = generateCardTable(handSize);
  document.body.appendChild(mainContainer);
}

// Create elements for each card to be appended into the table
function createCardElements() {

}

// Generates the tables with the container with the cards
function generateCardTable(handSize) {
  const cardTableUI = createContainer('tableBackground');
  for (let i = 0; i < handSize; i += 1) {
    const cardShadowElements = createContainer('cardShadow');
    cardTableUI.appendChild(cardShadowElements);
  }
  return cardTableUI;
}

// Generates the paytable for update to the UI
// @param betAmount {number} default = 1, to calculate the expected winnings
// @param payTable {object} containing the odds of the game used to generate the pay table
// @return all elements of the paytable
function generatePayTable(payTable, betAmount = 1) {
  const payTableInfo = createContainer('payTable');
  // cycle through the keys in the paytable to generate the rows in the payTable
  const keyValues = Object.entries(payTable);
  for (let i = 0; i < keyValues.length; i += 1) {
    const [key, value] = keyValues[i];
    console.log(key, value);
    const tableRow = createContainer('payTableRows');
    const tableHeaderCol = createContainer('payTableHeaderCol');
    tableHeaderCol.innerText = key;
    const tableOddsCol = createContainer('payTableOddsCol');
    // Calculate the the payout amount according to the bet amount
    tableOddsCol.innerText = value * betAmount;
    tableRow.appendChild(tableHeaderCol);
    tableRow.appendChild(tableOddsCol);
    payTableInfo.appendChild(tableRow);
  }
  return payTableInfo;
}

// Renders payTable Elements into the website
function renderPayTableUI(parentElement, payTableElements) {
  parentElement.replaceChildren(payTableElements);
}

// // function initialises the container for game information display and messages
// export const gameStartUI = () => {
//   // main container for the whole

//   // title of the gameSite
//   const gameTitleContainer = document.createElement('div');
//   gameTitleContainer.classList.add('title');
//   gameTitleContainer.innerText = '♠️ Video Poker ♠️';
//   document.body.appendChild(gameTitleContainer);
//   // Main Game information Container
//   const gameInfoContainer = document.createElement('div');
//   gameInfoContainer.classList.add('row');
//   document.body.appendChild(gameInfoContainer);
//   // Game info top row for: Gamestate, bank roll, bet amount
//   const gameInfoTop = document.createElement('div');
//   gameInfoTop.classList.add('splitRow');
//   // gameInfoTop.classList.add("gameInfo");
//   gameInfoContainer.appendChild(gameInfoTop);
//   // Game state message box
//   const gameStateBox = document.createElement('div');
//   gameStateBox.classList.add('gameStateBox');
//   gameStateBox.innerText = "Welcome to Video Poker! Let's play cards!";
//   gameInfoTop.appendChild(gameStateBox);
//   // Name titles for cells
//   const cellName = document.createElement('div');
//   cellName.innerText = 'Bank:';
//   cellName.classList.add('cellName');
//   gameInfoTop.appendChild(cellName);
//   // Player bank roll display
//   const playerBankRoll = document.createElement('div');
//   playerBankRoll.classList.add('numbersInfo');
//   playerBankRoll.id = 'playerBankRoll';
//   playerBankRoll.innerText = playerData.bank;
//   gameInfoTop.appendChild(playerBankRoll);
//   // Player bet amount
//   const cellName2 = document.createElement('div');
//   cellName2.innerText = 'Bet:';
//   cellName2.classList.add('cellName');
//   gameInfoTop.appendChild(cellName2);
//   const playerBet = document.createElement('div');
//   playerBet.id = 'playerBet';
//   playerBet.classList.add('numbersInfo');
//   playerBet.innerText = playerData.currentBet;
//   gameInfoTop.appendChild(playerBet);
//   // Game info bottom row
//   const gameInfoBtm = document.createElement('div');
//   gameInfoBtm.classList.add('splitRow');
//   // gameInfoBtm.classList.add("gameInfo");
//   gameInfoContainer.appendChild(gameInfoBtm);
//   // game information ie cards selected for replacement
//   const gameToolTip = document.createElement('div');
//   gameToolTip.id = 'gameToolTip';
//   gameToolTip.innerText = 'Place your bet to start';
//   gameInfoBtm.appendChild(gameToolTip);
//   // Input box for bet
//   const betInput = document.createElement('input');
//   betInput.id = 'betInput';
//   betInput.placeholder = 'Bet Amount';
//   betInput.classList.add('showed');
//   gameInfoBtm.appendChild(betInput);
//   // Button to trigger next event in the game state
//   const actionButton = document.createElement('div');
//   actionButton.id = 'actionButton';
//   actionButton.innerText = 'Place bet!';
//   // adding the function that will link back to the game logic
//   actionButton.addEventListener('click', makeButtonAction(betInput, playerBet, playerBankRoll));
//   gameInfoBtm.appendChild(actionButton);
// };

// // function for the button to take in bets or confirm replacement
// // @param betInput {DOM} to log the player bet
// // @param playerBet {DOM} to update the bet into the UI
// // @param playerBankRoll {DOM} to update the updated bankroll into the UI
// function makeButtonAction(betInput, playerBet, playerBankRoll) {
//   function buttonAction(event) {
//     // action for gamestate at betting phase
//     if (gameState === 'betPhase') {
//       // check for invaide inputs
//       if (betInput.value > 0 && betInput.value <= playerData.bank) {
//         playerData.currentBet = betInput.value;
//         playerBet.innerText = playerData.currentBet;
//         playerData.bank -= playerData.currentBet;
//         playerBankRoll.innerText = playerData.bank;
//         console.log('here', playerData.currentBet);
//         updateGameState();
//       } else {
//         document.getElementById('gameToolTip').innerText = 'Please input a number.';
//       }
//     }
//     if (gameState === 'dealPhase') {

//     }
//   }
//   return buttonAction;
// }

// // Function starts the Gameboard for the card
// // creating the card elements for the images to be fed into
// // @param handSize {number} number of cards to be dealt
// export function gameBoard(handSize, dealt, hideHand = true) {
//   const cardBoard = document.createElement('div');
//   cardBoard.classList.add('board');
//   document.body.appendChild(cardBoard);
//   for (let i = 0; i < handSize; i += 1) {
//     const card = document.createElement('div');
//     cardBoard.appendChild(card);
//     if (dealt && hideHand) {
//       const cardImage = document.createElement('img');
//       cardImage.classList.add('card');
//       cardImage.src = './assets/Cards Pack/PNG/Medium/Back Red 1.png';
//       card.appendChild(cardImage);
//       cardImage.addEventListener('click', makeCardAction(i));
//     }
//     // added function to be used for show hand function, render all cards straight
//     else if (!hideHand) {
//       const cardImage = document.createElement('img');
//       cardImage.classList.add('card');
//       cardImage.src = `./assets/Cards Pack/PNG/Medium/${playerData.hand[i]}.png`;
//       card.appendChild(cardImage);
//       cardImage.addEventListener('click', makeCardAction(i));
//       playerData.revealCount += 1;
//     } else {
//       card.className = 'cardShadow';
//     }
//   }
// }

// function makeCardAction(index) {
//   function cardAction(event) {
//     // card reveal on click and log reveal count to move to next phase when all cards revealed
//     if (gameState === 'dealPhase') {
//       const cardPath = playerData.hand[index].imageRef;
//       cardImage.scr = `./assets/Cards Pack/PNG/Medium/${cardPath}.png`;
//       playerData.revealCount += 1;
//       if (playerData.revealCount === handSize) {
//         updateGameState();
//       }
//     }
//   }
//   return cardAction;
// }
