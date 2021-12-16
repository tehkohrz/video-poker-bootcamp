// container for game information display and messages
const gameStartUI = ()=>{
    // title of the gameSite
    const gameTitleContainer = document.createElement('div');
    gameTitleContainer.classList.add('title');
    gameTitleContainer.innerText = '♠️Video Poker♠️';
    document.body.appendChild(gameTitleContainer);
    // Main Game information Container
    const gameInfoContainer = document.createElement('div');
    gameInfoContainer.classList.add('row');
    document.body.appendChild(gameInfoContainer);
    // Game info top row for: Gamestate, bank roll, bet amount
    const gameInfoTop = document.createElement('div');
    gameInfoTop.classList.add('row');
    gameInfoTop.classList.add('gameInfo');
    gameInfoContainer.appendChild(gameInfoTop);
    // Game state message box
    const gameStateBox = document.createElement('div');
    gameStateBox.classList.add('gameStateBox');
    gameStateBox.innerText = 'Welcome to Video Poker! Let\'s play cards!';
    gameInfoTop.appendChild(gameStateBox);
    // Player bank roll display
    const playerBankRoll = document.createElement('div');
    playerBankRoll.classList.add('numbersInfo');
    playerBankRoll.id = 'playerBankRoll';
    playerBankRoll.innerText = '100';
    gameInfoTop.appendChild(playerBankRoll);
    // Player bet amount
    const playerBet = document.createElement('div');
    playerBet.id = 'playerBet';
    playerBet.classList.add('numbersInfo');
    playerBet.innerText = '0';
    gameInfoTop.appendChild(playerBet);
    // Game info bottom row
    const gameInfoBtm = document.createElement('div');
    gameInfoBtm.classList.add('row');
    gameInfoBtm.classList.add('gameInfo');
    gameInfoContainer.appendChild(gameInfoBtm);
    // game information ie cards selected for replacement
    const gameToolTip = document.createElement('div');
    gameToolTip.id = 'gameToolTip';
    gameToolTip.innerText = 'Place your bet to start';
    gameInfoBtm.appendChild(gameToolTip);
    // Button to trigger next event in the game state
    const actionButton = document.createElement('div');
    actionButton.id = 'actionButton';
    // adding the function that will link back to the game logic
    // actionButton.addEventListener('click', gameLogic);
    gameInfoBtm.appendChild(actionButton);
};

//# sourceMappingURL=gameSite.da5cc68a.js.map
