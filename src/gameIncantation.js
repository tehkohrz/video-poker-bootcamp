import { cardImageSources, SUIT } from './cardImageSources';

const suits = Object.values(SUIT);

function createHandUI(handState = [], onCardClick = (cardIndex) => { console.log(`Clicked on ${cardIndex}th card.`); }) {
  const handContainer = document.createElement('div');
  handContainer.classList.add('board');

  for (let i = 0; i < handState.length; i += 1) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('cardShadow');

    const img = document.createElement('img');

    const {
      suit, rank, faceDown,
    } = handState[i];
    img.src = suit && rank && !faceDown ? cardImageSources[suit][rank] : cardImageSources.back;

    cardElement.appendChild(img);
    cardElement.onclick = () => onCardClick(i);
    handContainer.appendChild(cardElement);
  }

  return handContainer;
}

function renderHandUI(handContainer) {
  document.body.replaceChildren(handContainer);
}

function randomlyGenerateHand(faceDown = true) {
  const handState = [];

  for (let i = 0; i < 5; i += 1) {
    handState.push({
      suit: suits[Math.floor(Math.random() * 4)],
      rank: Math.floor(Math.random() * 13) + 1,
      faceDown,
    });
  }

  return handState;
}

(() => {
  // Initialise
  const handState = randomlyGenerateHand();
  const handContainer = createHandUI(handState, function onCardClick(index) {
    handState[index].faceDown = !handState[index].faceDown;
    renderHandUI(createHandUI(handState, onCardClick));
  });
  renderHandUI(handContainer);
})();
