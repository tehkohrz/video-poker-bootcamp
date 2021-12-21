import {
  makeDeck,
  dealCards,
  shuffleCards,
  tallyCombinations,
  checkPayOut,
} from './helperFunctions.js';

import { gameStartUI, gameBoard } from './summoningUI.js';

let gameDeck = [];
export const handSize = 5;
export let gameState;
export const playerData = {
  name: '',
  currentBet: 0,
  bank: '100',
  hand: undefined,
  // [
  // {
  //   imageRef: 'Spades 8',
  //   name: 'Ace',
  //   rank: 1,
  //   replaceToggle: false,
  //   suit: 'Spades',
  // },
  // {
  //   imageRef: 'Spades 8',
  //   name: '10',
  //   rank: 10,
  //   replaceToggle: false,
  //   suit: 'Spades',
  // },
  // {
  //   imageRef: 'Spades 8',
  //   name: 'King',
  //   rank: 13,
  //   replaceToggle: false,
  //   suit: 'Spades',
  // },
  // {
  //   imageRef: 'Spades 8',
  //   name: 'Queen',
  //   rank: 12,
  //   replaceToggle: false,
  //   suit: 'Spades',
  // },
  // {
  //   imageRef: 'Spades 8',
  //   name: 'Jack',
  //   rank: 11,
  //   replaceToggle: false,
  //   suit: 'Spades',
  // },
  // ],
  handCombos: {},
  revealCount: 0,
};
const betPhase = 'betPhase';
const dealPhase = 'dealPhase';
const replaceCardsPhase = 'replaceCardsPhase';
const payOutPhase = 'payOutPhase';

const initGame = () => {
  gameState = betPhase;
  // create game deck and shuffle cards
  gameDeck = shuffleCards(makeDeck());
  // generates the UI for game
  gameStartUI();
  gameBoard(handSize, true);
};
initGame();

// To manage the different stages of the game and implement logic and site display
export const updateGameState = () => {
  if (gameState === betPhase) {
    document.getElementById('gameToolTip').innerText = 'Cards have been dealt best of luck';
    dealCards(gameDeck, playerData.hand, handSize);
    // remove the board so tha can update but there has to be a better way
    gameBoard(handSize, true);
    document.body.removeChild(document.querySelector('.board'));
    document.getElementById('actionButton').innerText = 'Show hand';
    gameState = dealPhase;
  }
  if (gameState === dealPhase) {
    dealCards(gameDeck, playerData.hand, handSize);
    // insert logic for the the card display function
    gameState = replaceCardsPhase;
  }
  if (gameState === replaceCardsPhase) {
    dealCards(gameDeck, playerData.hand);
    gameState = payOutPhase;
  }
};
