import {
  makeDeck,
  dealCards,
  shuffleCards,
  tallyCombinations,
  checkPayOut,
} from "./helperFunctions.js";

import { payTable, playerData, gamePhase } from "./glolbalParams.js";

import { createMainUI } from "./summoningUI.js";

const initGame = () => {
  document.body.innerHTML = "";
  playerData.phase = gamePhase.BET;
  // create game deck and shuffle cards
  gameDeck = shuffleCards(makeDeck());
  createMainUI(payTable, playerData);
};
initGame();

// Functions for the game states
function betPhaseUpdate(playerBet) {}

// To manage the different stages of the game and implement logic and site display
export const updateGameState = () => {
  if (playerData.phase === gamePhase.BET) {
  }
  if (playerData.phase === gamePhase.DEAL) {
    dealCards(gameDeck, playerData.hand, HAND_SIZE);
    // insert logic for the the card display function
  }
  if (playerData.phase === gamePhase.REPLACE) {
  }
};
