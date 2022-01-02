import {
  makeDeck,
  dealCards,
  shuffleCards,
  tallyCombinations,
  checkPayOut,
} from './helperFunctions.js';

import {
  payTable, playerData, gamePhase, HAND_SIZE, gameDeck,
} from './glolbalParams.js';

import {
  createMainUI,
  updateGameState,
} from './summoningUI.js';
import { cardImageSources } from './cardImageSrc.js';

const initGame = () => {
  document.body.innerHTML = '';
  playerData.phase = gamePhase.BET;
  // create game deck and shuffle cards
  playerData.deck = shuffleCards(makeDeck());
  createMainUI(payTable, playerData, HAND_SIZE);
  const mainButton = document.getElementById('mainButton');
  mainButton.onclick = updateGameState;
};
initGame();
