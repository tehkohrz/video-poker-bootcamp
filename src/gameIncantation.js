import {
  makeDeck,
  dealCards,
  shuffleCards,
  tallyCombinations,
  checkPayOut,
} from "./helperFunctions.js";

import { payTable, playerData, gamePhase, HAND_SIZE } from "./glolbalParams.js";

import {
  createMainUI,
  createCardElements,
  renderElement,
} from "./summoningUI.js";
let gameDeck = [];

const initGame = () => {
  document.body.innerHTML = "";
  playerData.phase = gamePhase.BET;
  // create game deck and shuffle cards
  gameDeck = shuffleCards(makeDeck());
  createMainUI(payTable, playerData, HAND_SIZE);
  const updateHand = createCardElements(playerData.hand);
  renderElement(document.getElementById("tableMain"), updateHand);
};
initGame();

// Functions for the game states
function betPhaseUpdate(playerBet) {}

// To manage the different stages of the game and implement logic and site display
export const updateGameState = () => {
  if (playerData.phase === gamePhase.BET) {
    playerData.phase = gamePhase.DEAL;
  }
  if (playerData.phase === gamePhase.DEAL) {
    dealCards(gameDeck, playerData.hand, HAND_SIZE);
    const cardTable = createCardElements(playerData.hand);
    document.getElementById("tableMain").replaceChildren(cardTable);
    // insert logic for the the card display function
  }
  if (playerData.phase === gamePhase.REPLACE) {
  }
};
