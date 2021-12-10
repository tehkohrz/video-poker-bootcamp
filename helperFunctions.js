//test vairables
let testVariable = [
  {
    imageRef: "Spades 8",
    name: "8",
    rank: 8,
    replaceToggle: false,
    suit: "Spades",
  },
  {
    imageRef: "Spades 8",
    name: "2",
    rank: 7,
    replaceToggle: false,
    suit: "Diamond",
  },
  {
    imageRef: "Spades 8",
    name: "King",
    rank: 5,
    replaceToggle: false,
    suit: "Clubs",
  },
  {
    imageRef: "Spades 8",
    name: "4",
    rank: 4,
    replaceToggle: false,
    suit: "Spades",
  },
  {
    imageRef: "Spades 8",
    name: "6",
    rank: 6,
    replaceToggle: false,
    suit: "Hearts",
  },
];

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

//tally the names and suits to use as logic for win checks
const tallyCombinations = (hand) => {
  let handCombos = {};
  // tally for card ranks to check for straights
  let rankTally = tallyHand(hand, "rank");
  let rank = [];
  for (let x in rankTally) {
    //object properties that are indices are sorted numerically
    rank.push(x);
  }
  rank = [3, 4, 5, 6, 7];
  for (let i = 0; i < rank.length - 1; i += 0) {
    if (rank[i + 1] - rank[i] == 1) {
      handCombos.straights = true;
      console.log("handcombo", handCombos.straights);
    } else {
      handCombos.straights = false;
    }
  }
  // console.log("straights", handCombos.straights);
  // tally for card suits to use for flush
  let suitTally = tallyHand(hand, "suit");
};

//Runs through the tally object to look for pairs, triples and associated combinations
const checkWinCombination = () => {
  //count for pairs
  //count for triples
  //count for four of a kind
  //pair and triple = full house
  //double pair
  //flush (same suit)
  //straights consecutive number
  //royal flush straight start 10 ends at Ace
};

function testingFunction() {
  let testDeck = shuffleCards(makeDeck());
  let testHand; // initHand(5);
  testHand = dealCards(testDeck, testHand, 5);
  dealCards(testDeck, testHand);
  tallyCombinations(testVariable);
}
testingFunction();
