// Get a random index ranging from 0 (inclusive) to max (exclusive).
const getRandomIndex = (max) => Math.floor(Math.random() * max);

// Shuffle an array of cards
export const shuffleCards = (cards) => {
  // Loop over the card deck array once
  for (let currentIndex = 0; currentIndex < cards.length; currentIndex += 1) {
    // Select a random index in the deck
    const randomIndex = getRandomIndex(cards.length);
    // Select the card that corresponds to randomIndex
    const randomCard = cards[randomIndex];
    // Select the card that corresponds to currentIndex
    const currentCard = cards[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cards[currentIndex] = randomCard;
    cards[randomIndex] = currentCard;
  }
  // Return the shuffled deck

  return cards;
};

//creating a deck as an array
/*each card element is an object
*Card = {
  name: cardName,
  suit: currentSuit,
  rank: rankCounter,
  color: suitColor,}
  @return array of card that comprises the deck
  */
export const makeDeck = () => {
  // Initialise an empty deck array
  const newDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  const suits = ["Hearts", "Diamond", "Clubs", "Spades"];

  // Loop over the suits array
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    const currentSuit = suits[suitIndex];
    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (let rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      let cardName = `${rankCounter}`;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName === "1") {
        cardName = "Ace";
      } else if (cardName === "11") {
        cardName = "Jack";
      } else if (cardName === "12") {
        cardName = "Queen";
      } else if (cardName === "13") {
        cardName = "King";
      }

      // Create a new card with the current name, suit, and rank
      const card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        imageRef: `${currentSuit} ${cardName}`,
        replaceToggle: false,
      };

      // Add the new card to the deck
      newDeck.push(card);
    }
  }

  // Return the completed card deck
  return newDeck;
};

/*Dealing of card into the hand and to replace cards that have been removed
@ param deck {array} array containing the full deck ofcards
@ param hand {array} containing the cards on the player's hand
@ param noOfCards {number} number of cards to be dealt out - used this to scale for diff sized hands for diff games
*/
export const dealCards = (deck, hand, noOfCards = 0) => {
  //deals the set number of cards to an empty hand
  if (!hand) {
    //problem of variable hand being null hence unable to push and needs dealtHand
    let dealtHand = [];
    for (let i = 0; i < noOfCards; i += 1) {
      dealtHand.push(deck.pop());
    }
    return dealtHand;
  }
  // fills the empty gaps in the hand
  else {
    for (let i = 0; i < hand.length; i += 1) {
      if (hand[i].replaceToggle == true) {
        console.log("card", hand[i]);
        hand[i] = null; // i dont know what my console is showing me wtf
        hand[i] = deck.pop();
      }
    }
  }
};

//tally up the player's hand and return the tallied object
//@param hand {array} containing the cards {onject}
//@param attribute {string} the attribute within the card object that you want to tally like suit or cardname
//@return tally{object} containing all the cards within hand and the count of cards
//test vairables
const tallyHand = (hand, attribute) => {
  let tally = {};
  for (let i = 0; i < hand.length; i += 1) {
    let tallyTarget = hand[i][attribute];
    if (tallyTarget in tally) {
      tally[tallyTarget] += 1;
    } else {
      tally[tallyTarget] = 1;
    }
  }
  return tally;
};

//tally the rank and suits to use as logic for win checks\
//Checking for the different combinations and resolving for the highest combination
//@param hand {array} of cards {object} storing the properties of the cards
//@return handCombos {oject} of the different conbinations of the hand such as pairs, triples, four of a kind, straights, flush and royal flush
//return to be def into the player.combinations {object} for payout logic
export const tallyCombinations = (hand) => {
  let handCombos = {};
  // tally for card ranks to check for straights
  let rankTally = tallyHand(hand, "rank");
  let rank = [];

  for (let key in rankTally) {
    //object properties that are indices are sorted numerically
    rank.push(key);
  }
  //for ace is rank 1 in royal flush cant compare numerically (1,10,11,12,13,14) so count 4 straigtcounts, there are other ways to do this
  //other combination to note is  1,2,3,4,5
  if (rank[0] === "1") {
    rank.push(14);
  }
  // Checking for pairs, triples and four of a kind
  handCombos.straights = straightsCheck(rank);
  //checking for other combinations
  for (let key in rankTally) {
    let value = rankTally[key];
    if (value > 1) {
      if (value === 2) {
        handCombos.pair = true;
      }
      S;
      if (value === 3) {
        handCombos.triple = true;
      }
      s;
      if (value === 4) {
        handCombos.fourOfKind = true;
      }
    }
  }
  // tally for card suits to check for flush
  let suitTally = tallyHand(hand, "suit");
  for (let key in suitTally) {
    if (suitTally[key] == 5) {
      handCombos.flush = true;
    }
  }
  //check for royal flush 1) straights, 2)flush & starts at 10 to Ace but the first card in rank is ace (rank = 1)
  //reset straight and flush checks incase if error pops in payout portion
  if (handCombos.straights && handCombos.flush && rank[0] === "1") {
    handCombos.royal = true;
    handCombos.straights = false;
    handCombos.flush = false;
  }
  if (handCombos.straights && handCombos.flush) {
    handCombos.straights = false;
    handCombos.flush = false;
    handCombos.straightFlush = true;
  }
  //check for full house and eliminate the rest of the conditions
  if (handCombos.pair && handCombos.triple) {
    handCombos.fullHouse = true;
    handCombos.pair = false;
    handCombos.triple = false;
  }
  return handCombos;
};

//checking for straights
//@param rank {array} array of the card ranks in {string}
//@return true if the cards are straights
function straightsCheck(rank) {
  let straightCount = 0;
  //count for 4 consecutive straights checks
  for (let i = 0; i < rank.length - 1; i += 1) {
    if (rank[i + 1] - rank[i] == 1) {
      straightCount += 1;
    }
  }
  if (straightCount === 4) {
    return true;
  }
}

//set the payout odds for payment of bet
//pays ass long as you have pairs
//@param combination{object} of combinations that the player hand has
//@return payOutOdds {number} odds to be multipled with the bet amount

export const checkPayOut = (handCombos) => {
  let winningOdds = 0;
  let payTable = {
    royal: 800,
    straightFlush: 50,
    fourOfKind: 25,
    fullHouse: 9,
    flush: 6,
    straights: 4,
    triple: 3,
    pair: 2,
  };
  for (let key in handCombos) {
    if (handCombos[key]) {
      winningOdds = payTable[key];
    }
  }
  console.log("winningOdds", winningOdds);
  return winningOdds;
};
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
let testVariable = [
  {
    imageRef: "Spades 8",
    name: "Ace",
    rank: 1,
    replaceToggle: false,
    suit: "Spades",
  },
  {
    imageRef: "Spades 8",
    name: "10",
    rank: 10,
    replaceToggle: false,
    suit: "Spades",
  },
  {
    imageRef: "Spades 8",
    name: "King",
    rank: 13,
    replaceToggle: false,
    suit: "Spades",
  },
  {
    imageRef: "Spades 8",
    name: "Queen",
    rank: 12,
    replaceToggle: false,
    suit: "Spades",
  },
  {
    imageRef: "Spades 8",
    name: "Jack",
    rank: 11,
    replaceToggle: false,
    suit: "Spades",
  },
];
/*@@@@@@@@@@@@@@@@@@@@@@@@@*/
checkPayOut(tallyCombinations(testVariable));
