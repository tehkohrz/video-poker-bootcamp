import { cardImageSources } from './cardImageSrc';
import {
  gamePhase, payTable, playerData, HAND_SIZE,
} from './glolbalParams';
import {
  makeDeck,
  dealCards,
  shuffleCards,
  tallyCombinations,
  checkPayOut, resetRound,
} from './helperFunctions.js';

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
  const msgContainer = createContainer('msgMain', 'msgMain');
  const gamePhaseMsg = generateGameMsg();
  const gameToolTip = generateToolTip();
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

function checkHandShown() {
  for (let key = 0; key < playerData.hand.length; key += 1) {
    if (playerData.hand[key].faceDown == true) {
      return false;
    }
  }
  return true;
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
    if (card.faceDown === true) {
      card.faceDown = false;
      cardImage.src = cardImageSources[card.suit][card.rank];
    }
    // To reveal the card during the deal phase and card is face down
    if (playerData.phase == gamePhase.DEAL || playerData.phase == gamePhase.PAY) {
      updateElements();
      if (checkHandShown()) {
        updateGameState();
      } }
    // To highlight the card when it has been selected for replace
    else if (playerData.phase === gamePhase.REPLACE) {
      if (card.replaceToggle) {
        cardImage.className = 'card';
        card.replaceToggle = false;
      }
      // card now being selected for replacing
      else {
        console.log('card', card);
        cardImage.className = 'cardHighlighted';
        card.replaceToggle = true;
      }
      updateElements();
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
  if (betAmount < 1) {
    betAmount = 1;
  }
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
function generateGameMsg() {
  const gamePhaseMsg = createContainer('gamePhaseContainer');
  if (playerData.phase == gamePhase.BET) {
    gamePhaseMsg.innerText = 'Welcome to Video Poke! Place your bets!';
  }
  if (playerData.phase == gamePhase.DEAL) {
    gamePhaseMsg.innerText = 'Cards have been dealt. Best of luck!';
  }
  if (playerData.phase == gamePhase.REPLACE) {
    gamePhaseMsg.innerText = 'You may choose to replace any number of cards.';
  }
  if (playerData.phase == gamePhase.PAY) {
    gamePhaseMsg.innerText = 'Calculating payout amount.';
  }
  if (playerData.phase == gamePhase.RESTART) {
    if (playerData.winningOdds == 0) {
      gamePhaseMsg.innerText = 'You have lost. Better luck next time.';
    }
    else {
      gamePhaseMsg.innerText = `You have won ${playerData.winAmount}!`;
    }
  }
  if (playerData.phase == gamePhase.GAMEOVER) {
    gamePhaseMsg.innerText = 'You are broke! Hope you had fun playing!';
  }
  return gamePhaseMsg;
}

function generateToolTip() {
  const gameToolTip = createContainer('gameToolTipContainer', 'gameToolTip');
  if (playerData.phase == gamePhase.BET) {
    gameToolTip.innerText = 'Select using the buttons or enter your bet.';
  }
  if (playerData.phase == gamePhase.DEAL) {
    gameToolTip.innerText = 'Click on each card to reveal your hand.';
  }
  if (playerData.phase == gamePhase.REPLACE) {
    const cards = playerData.hand;
    let cardsSelected = 0;
    for (let i = 0; i < cards.length; i += 1) {
      if (cards[i].replaceToggle) {
        cardsSelected += 1;
        console.log('cards selected', cardsSelected);
      }
    }
    if (cardsSelected === 0) {
      gameToolTip.innerText = 'You have not selected any cards to replace.';
    } else {
      gameToolTip.innerText = `You have selected ${cardsSelected} cards to replace.`;
    }
  }
  if (playerData.phase == gamePhase.PAY) {
    gameToolTip.innerText = 'Reveal any new cards you have.';
  }
  if (playerData.phase == gamePhase.RESTART) {
    gameToolTip.innerText = 'Click the button to continue to the next round.';
  }
  if (playerData.phase == gamePhase.GAMEOVER) {
    gameToolTip.innerText = 'Refresh the page to play again.';
  }
  return gameToolTip;
}

// updates the game messsages
function updateMessages() {
  const msgMain = createContainer('msgMain');
  const updatedGameMsg = generateGameMsg();
  const updatedToolTip = generateToolTip();
  msgMain.appendChild(updatedGameMsg);
  msgMain.appendChild(updatedToolTip);
  return msgMain;
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
  bankAmount.innerText = playerData.bank;
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
  inputBox.addEventListener('input', (event) => {
    const currentBetAmount = document.getElementById('inputBox').value;
    const payTableUI = generatePayTable(payTable, currentBetAmount);
    const payTableMain = document.getElementById('payTableMain');
    renderElement(payTableMain, payTableUI);
  });
  inputBox.addEventListener('change', (event) => {
    const currentBetAmount = document.getElementById('inputBox').value;
    const payTableUI = generatePayTable(payTable, currentBetAmount);
    const payTableMain = document.getElementById('payTableMain');
    renderElement(payTableMain, payTableUI);
  });
  buttonMain.appendChild(inputBox);
  // plus minus button
  const plusMinusContainer = createContainer('plusMinus');
  const plusButton = createContainer('subButton');
  plusButton.innerText = '+';
  const minusButton = createContainer('subButton');
  minusButton.innerText = '-';
  plusButton.onclick = (event) => {
    if (playerData.phase === gamePhase.BET) {
      const currentBetAmount = document.getElementById('inputBox');
      if (Number(currentBetAmount.value) <= playerData.bank) {
        currentBetAmount.value = Number(currentBetAmount.value) + 1;
        const payTableUI = generatePayTable(payTable, currentBetAmount.value);
        const payTableMain = document.getElementById('payTableMain');
        renderElement(payTableMain, payTableUI);
      }
    }
  };

  minusButton.onclick = (event) => {
    if (playerData.phase === gamePhase.BET) {
      const currentBetAmount = document.getElementById('inputBox');
      if (Number(currentBetAmount.value) > 0) {
        currentBetAmount.value = Number(currentBetAmount.value) - 1;
        const payTableUI = generatePayTable(payTable, currentBetAmount.value);
        const payTableMain = document.getElementById('payTableMain');
        renderElement(payTableMain, payTableUI);
      }
    }
  };
  plusMinusContainer.appendChild(plusButton);
  plusMinusContainer.appendChild(minusButton);
  buttonMain.appendChild(plusMinusContainer);
  // confirm button
  const mainButton = createContainer('mainButton', 'mainButton');
  mainButton.innerText = 'Confirm Bet';
  buttonMain.appendChild(mainButton);
  consoleUI.appendChild(buttonMain);
  return consoleUI;
}

function updateInfoContainers(bet, bank) {
  document.getElementById('betAmount').innerText = bet;
  document.getElementById('bankAmount').innerText = bank;
}

// reveals all the hands and rend the picture
function showHand() {
  playerData.hand.forEach((element) => {
    element.faceDown = false;
    updateElements();
  });
}

// one function to update all the UI elements
function updateElements() {
  if (!playerData.hand) {
    renderElement(document.getElementById('tableMain'), generateCardTable(HAND_SIZE));
  } else
  { renderElement(
    document.getElementById('tableMain'),
    createCardElements(playerData.hand),
  ); }
  renderElement(document.getElementById('msgMain'), updateMessages());
  updateInfoContainers(playerData.currentBet, playerData.bank);
  updateMainButton();
}

// changes the text on the main button
function updateMainButton() {
  const button = document.getElementById('mainButton');
  switch (playerData.phase) {
    case gamePhase.BET:
      button.innerText = 'Confirm Bet';
      break;
    case gamePhase.DEAL:
      button.innerText = 'Show Hand!';
      break;
    case gamePhase.REPLACE:
      button.innerText = 'Replace Cards';
      break;
    case gamePhase.PAY:
      button.innerText = 'Get Payout';
      break;
    case gamePhase.RESTART:
      button.innerText = 'Next Round';
      break;
    default: button.innerText = 'Confirm';
  }
}

// To manage the different stages of the game and implement logic and site display
export const updateGameState = () => {
  const inputBox = document.getElementById('inputBox');
  const gameToolTip = document.getElementById('gameToolTip');
  switch (playerData.phase) {
    // bet phase before the cards are dealt
    case gamePhase.BET:
      if (Number(inputBox.value) > playerData.bank) {
        gameToolTip.innerText = 'You do not have sufficient funds.';
        inputBox.value = '';
        break;
      }
      if (Number(inputBox.value) < 1) {
        gameToolTip.innerText = 'Please enter a valid amount.';
        inputBox.value = '';
        break;
      }
      // log the player current bet and bank
      playerData.currentBet = Number(inputBox.value);
      playerData.bank -= playerData.currentBet;
      inputBox.value = '';
      updateInfoContainers(playerData.currentBet, playerData.bank);
      // deal cards and render onto screen
      playerData.hand = dealCards(playerData.deck, playerData.hand, HAND_SIZE);
      playerData.phase = gamePhase.DEAL;
      // update messages
      updateElements();
      break;
      // deal phase where the player has veen dealt his hand and to reveal the cards
    case gamePhase.DEAL:
      showHand();
      playerData.phase = gamePhase.REPLACE;
      updateElements();
      break;
      // player choosing the cards to be replaced
    case gamePhase.REPLACE:
      // dealing new cards for reveal
      dealCards(playerData.deck, playerData.hand);
      playerData.phase = gamePhase.PAY;
      updateElements();
      break;
    case gamePhase.PAY:
      showHand();
      playerData.handCombos = tallyCombinations(playerData.hand);
      playerData.winningOdds = checkPayOut(playerData.handCombos, playerData.currentBet);
      playerData.winAmount = playerData.winningOdds * playerData.currentBet;
      console.log('handcombination', playerData.handCombos);
      console.log('Winning Odds', playerData.winningOdds);
      playerData.phase = gamePhase.RESTART;
      updateElements();
      break;
    case gamePhase.RESTART:
      resetRound();
      playerData.deck = shuffleCards(makeDeck());
      playerData.phase = gamePhase.BET;
      if (playerData.bank == 0) {
        playerData.phase = gamePhase.GAMEOVER;
      }
      updateElements();
      break;
    default:
  }
};
