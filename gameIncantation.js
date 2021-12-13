import { makeDeck, dealCards, shuffleCards, tallyCombinations, checkPayOut} from "./helperFunctions";

let gameDeck = [];
let handSize = 5;
let gameState;
let playerData = {
  name: "",
  currentBet: 0,
  bank: "100",
  hand: undefined,
  handCombos:,
  hand
};
const betPhase = "betPhase";
const dealPhase = "dealPhase";
const replaceCardsPhase = "replaceCardsPhase";
const payOutPhase = "payOutPhase";

const initGame = () => {
  gameState = betPhase;
  //create game deck and shuffle cards
  gameDeck = shuffleCards(makeDeck());
  //generates the UI for game
};
initGame();

//To manage the different stages of the game and implement logic and site display
const gameStageManager = ()=>{
  if(gameState == betPhase){
    gameState = dealPhase;
  }
  if(gameState == dealPhase){
    dealCards(gameDeck, playerData.hand, handSize);
    //insert logic for the the card display function
    gameState = replaceCardsPhase;
  }
  if(gameState == replaceCardsPhase){
    dealCards(gameDeck, playerData.hand);
    gameState = payOutPhase;
  }
}
