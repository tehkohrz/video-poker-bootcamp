export const gamePhase = {
  BET: "BET_PHASE",
  DEAL: "DEAL_CARDS",
  REPLACE: "REPLACE_CARDS",
  PAY: "PAYOUT_PHASE",
  RESTART: "RESTART",
};
export const payTable = {
  "Royal Flush": 800,
  "Straights Flush": 50,
  "Four Of Kind": 25,
  "Full House": 9,
  Flush: 6,
  Straights: 4,
  Triples: 3,
  Pair: 2,
};

export const HAND_SIZE = 5;
export const playerData = {
  phase: "",
  name: "",
  currentBet: 0,
  bank: "100",
  //undefined,
  hand: [
    {
      faceDown: false,
      name: "Ace",
      rank: 2,
      replaceToggle: false,
      suit: "Spades",
    },
    {
      name: "10",
      faceDown: true,
      rank: 10,
      replaceToggle: false,
      suit: "Spades",
    },
    {
      name: "King",
      faceDown: true,
      rank: 13,
      replaceToggle: false,
      suit: "Spades",
    },
    {
      name: "Queen",
      faceDown: true,
      rank: 12,
      replaceToggle: false,
      suit: "Spades",
    },
    {
      name: "Jack",
      faceDown: true,
      rank: 11,
      replaceToggle: false,
      suit: "Spades",
    },
  ],
  handCombos: {},
  revealCount: 0,
};
