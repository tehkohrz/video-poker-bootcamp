import { cardImageSources } from './cardImageSrc';
import { updateGameState } from './gameIncantation';
import { gamePhase, payTable, playerData } from './glolbalParams';

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
// Renders Elements into the website
export function renderElement(parentElement, childElement) {
  parentElement.replaceChildren(childElement);
}

// @param payTable {object} containing the winning odds for each hand
// @param playerData {object} used for the current bet and bank information
// @para handSize {number} determines the no of cards to be dealt

export function createMainUI(payTable, playerData, handSize) {
  // Main container to hold the whole UI and center it to the screen
  const mainContainer = createContainer('main');
  // title name of the game
  const titleName = createContainer('title');
  titleName.innerText = '♠️ Video Poker ♠️';
  mainContainer.appendChild(titleName);
  // paytable that will show the odds and update as you increase the bet
  // two columns on with the Header and odd that changes based on the bet amount
  const payTableContainer = createContainer('payTableMain', 'payTableMain');
  const payTableUI = generatePayTable(payTable);
  renderElement(payTableContainer, payTableUI);
  mainContainer.appendChild(payTableContainer);
  // table board for the cards to be render
  const tableContainer = createContainer('tableMain', 'tableMain');
  const cardTableUI = generateCardTable(handSize);
  tableContainer.appendChild(cardTableUI);
  mainContainer.appendChild(tableContainer);
  document.body.appendChild(mainContainer);
  // Msg container for the game messages
  const msgControlContainer = createContainer('msgControlMain');
  mainContainer.appendChild(msgControlContainer);
  const msgContainer = createContainer('msgMain');
  const gamePhaseMsg = generateGameMsg(playerData.phase);
  const gameToolTip = generateToolTip(playerData.phase);
  msgContainer.appendChild(gamePhaseMsg);
  msgContainer.appendChild(gameToolTip);
  msgControlContainer.appendChild(msgContainer);
  // Control container for the bank info, bet info, bet input and the button control
  const controlContainer = createContainer('controlMain');
  const consoleUI = createConsoleUI();
  controlContainer.appendChild(consoleUI);
  msgControlContainer.appendChild(controlContainer);
  mainContainer.appendChild(msgControlContainer);
  document.body.appendChild(mainContainer);
}

// Create elements for each card to be appended into the table
// @param handState {array} of
// card {object} const card = {
//   name: cardName,
//   suit: currentSuit,
//   rank: rankCounter,
//   faceDown: true,
//   replaceToggle: false,
// };
export function createCardElements(handState) {
  const tableBackground = createContainer('tableBackground');
  for (let i = 0; i < handState.length; i += 1) {
    // deconstruct the card object
    const { suit, rank, faceDown } = handState[i];
    const cardImage = document.createElement('img');
    cardImage.className = 'card';
    cardImage.id = i;
    console.log('card ID', cardImage.id);
    // rend the back of the card if the card has not been revealed
    if (faceDown) {
      cardImage.src = cardImageSources.back;
      // event listener for reveal
      cardImage.addEventListener('click', makeCardAction(handState, cardImage));
    } else {
      cardImage.src = cardImageSources[suit][rank];
      cardImage.onclick = makeCardAction(handState, cardImage);
    }
    tableBackground.appendChild(cardImage);
  }
  return tableBackground;
}
// Function attached to the card changes depending on the gamePhase
// To reveal the card or to select for replacement
// @param handState {array} of {objects}, global variable holding the hand of cards
// @param cardImage {ref to DOM}
// @returns  {function} to be added into event listener
function makeCardAction(handState, cardImage) {
  function cardAction(event) {
    const index = cardImage.id;
    const card = handState[index];
    // To reveal the card during the deal phase and card is face down
    if (card.faceDown === true) {
      card.faceDown = false;
      cardImage.src = cardImageSources[card.suit][card.rank];
      updateGameState();
    }
    // To highlight the card when it has been selected for replace
    else if (playerData.phase === gamePhase.REPLACE) {
      if (card.replaceToggle) {
        cardImage.className = 'card';
        card.replaceToggle = false;
      }
      // card now being selected for replacing
      else {
        cardImage.className = 'cardHighlighted';
        card.replaceToggle = true;
      }
    }
  }
  return cardAction;
}

// Generates an empty table for the cards
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
  // if (betAmount < 1) {
  //   betAmount = 1;
  // }
  // cycle through the keys in the paytable to generate the rows in the payTable
  const keyValues = Object.entries(payTable);
  for (let i = 0; i < keyValues.length; i += 1) {
    const [key, value] = keyValues[i];
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

// Creates the msg box and renders the msg according to the gamephase
function generateGameMsg(currentGamePhase) {
  const gamePhaseMsg = createContainer('gamePhaseContainer');
  if (currentGamePhase == gamePhase.BET) {
    gamePhaseMsg.innerText = 'Welcome to Video Poke! Place your bets!';
  }
  if (currentGamePhase == gamePhase.DEAL) {
    gamePhaseMsg.innerText = 'Cards have been dealt. Best of luck!';
  }
  if (currentGamePhase == gamePhase.REPLACE) {
    gamePhaseMsg.innerText = 'You may choose to replace any number of cards.';
  }
  if (currentGamePhase == gamePhase.PAY) {
    gamePhaseMsg.innerText = 'You have won or lost. Click to start a new round.';
  }
  return gamePhaseMsg;
}

function generateToolTip(currentGamePhase) {
  const gameToolTip = createContainer('gameToolTipContainer');
  if (currentGamePhase == gamePhase.BET) {
    gameToolTip.innerText = 'Select using the buttons or enter your bet.';
  }
  if (currentGamePhase == gamePhase.DEAL) {
    gameToolTip.innerText = 'Click on each card to reveal your hand.';
  }
  if (currentGamePhase == gamePhase.REPLACE) {
    const cards = Object.entries(playerData.hand);
    let cardsSelected = 0;
    for (let i = 0; i < card.length; i += 1) {
      if (cards[i].replaceToggle) {
        cardsSelected += 1;
      }
    }
    if (cardsSelected === 0) {
      gameToolTip.innerText = 'You have not selected any cards to replace.';
    } else {
      gameToolTip.innerText = `You have selected ${cardsSelected} cards to replace.`;
    }
  }
  if (currentGamePhase == gamePhase.PAY) {
    gameToolTip.innerText = 'You have won or lost. Click to start a new round.';
  }
  return gameToolTip;
}

function createConsoleUI() {
  // main container split into two sub containers for info and buttons
  const consoleUI = createContainer('consoleMain');
  const infoContainer = createContainer('infoContainer');
  const bankContainer = createContainer('bankContainer');
  // container for player current bank roll
  const bankTitle = createContainer('subTitle');
  bankTitle.innerText = 'BANK';
  const bankAmount = createContainer('number', 'bankAmount');
  bankAmount.innerText = playerData.currentBet;
  bankContainer.appendChild(bankTitle);
  bankContainer.appendChild(bankAmount);
  // container for player cuurent bet amount
  const betContainer = createContainer('betContainer');
  const betTitle = createContainer('subTitle');
  betTitle.innerText = 'BET';
  const betAmount = createContainer('number', 'betAmount');
  betAmount.innerText = playerData.currentBet;
  betContainer.appendChild(betTitle);
  betContainer.appendChild(betAmount);
  infoContainer.appendChild(bankContainer);
  infoContainer.appendChild(betContainer);
  consoleUI.appendChild(infoContainer);
  // container for interactive UI elements
  const buttonMain = createContainer('buttonMain');
  // inputbox to enter bet amount
  const inputBox = document.createElement('input');
  inputBox.id = 'inputBox';
  inputBox.placeholder = 'Input bet here.';
  inputBox.type = 'number';
  inputBox.min = 1;
  // auto updates the bet table while you input the value
  inputBox.onchange = (event) => {
    const currentBetAmount = document.getElementById('inputBox').value;
    const payTableUI = generatePayTable(payTable, currentBetAmount);
    const payTableMain = document.getElementById('payTableMain');
    renderElement(payTableMain, payTableUI);
  };
  buttonMain.appendChild(inputBox);
  consoleUI.appendChild(buttonMain);
  // plus minus button
  const plusMinusContainer = createContainer('plusMinus');
  const plusButton = createContainer('subButton');
  plusButton.innerText = '+';
  const minusButton = createContainer('subButton');
  minusButton.innerText = '-';
  plusButton.onclick = (event) => {
    document.getElementById('inputBox').value = Number(document.getElementById('inputBox').value) + 1;
    inputBox.onchange();
  };

  minusButton.onclick = (event) => {
    document.getElementById('inputBox').value = Number(document.getElementById('inputBox').value) - 1;
    inputBox.onchange();
  };
  plusMinusContainer.appendChild(plusButton);
  plusMinusContainer.appendChild(minusButton);
  buttonMain.appendChild(plusMinusContainer);
  // confirm button
  const mainButton = createContainer('button');
  return consoleUI;
}
