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

export const gameDeck = [];
export const HAND_SIZE = 5;
export const playerData = {
  phase: "",
  name: "",
  currentBet: 0,
  bank: "100",
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
