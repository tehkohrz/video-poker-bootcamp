import { makeDeck, dealCards, initHand, shuffleCards } from "./helperFunctions";

let gameDeck = [];
let handSize = 5;
let gameState;
let playerData = {
  name: "",
  currentBet: 0,
  bank: "100",
  hand: undefined,
};
const betPhase = "betPhase";
const dealPhase = "dealPhase";
const payOutPhase = "payOutPhase";

const initGame = () => {
  gameState = betPhase;
  //create game deck and shuffle cards
  gameDeck = shuffleCards(makeDeck());
  //generates the UI for game
};

initGame();
