import { cardImageSources } from './cardImageSources';

function createHandUI(handSize = 5) {
  const handContainer = document.createElement('div');
  const handElements = [];
  for (let i = 0; i < handSize; i += 1) {
    const cardElement = document.createElement('div');
    const img = document.createElement('img');
    img.src = cardImageSources.back;

    cardElement.appendChild(img);
    handContainer.appendChild(cardElement);

    handElements.push(cardElement);
  }

  return {
    handContainer,
    handElements,
  };
}

function updateHandUI(handElements = [], handState = []) {
  for (let i = 0; i < handElements.length; i += 1) {
    const cardElement = handElements[i];
    const { suit, rank } = handState[i];

    if (cardElement) {
      const img = document.createElement('img');
      img.src = cardImageSources[suit][rank];

      cardElement.replaceChildren(img);
    }
  }
}

let interval;
(function () {
  // Initialise
  const { handContainer, handElements } = createHandUI();
  document.body.replaceChildren(handContainer);

  const suits = ['diamond', 'clubs', 'spades', 'hearts'];

  clearInterval(interval);
  // Update handstate
  interval = setInterval(() => {
    const handState = [];

    // Randomly generate a hand
    for (let i = 0; i < 5; i += 1) {
      handState.push({
        suit: suits[Math.floor(Math.random() * 4)],
        rank: Math.floor(Math.random() * 13) + 1,
      });
    }

    updateHandUI(handElements, handState);
  }, 1000);
}());
