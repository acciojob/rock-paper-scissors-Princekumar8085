//your code here
let gameNumber = 0;
let roundsLeft = 0;
let userPoints = 0;
let computerPoints = 0;
let computerChoose = -1; // Set to -1 for initialization

// Get HTML elements
const gameNumberInput = document.getElementById('game-number');
const playGameButton = document.getElementById('play-game');
const choiceButtons = document.querySelectorAll('.choice');
const computerChooseSpan = document.getElementById('computer-choose');
const roundResultSpan = document.getElementById('round-result');
const roundsLeftSpan = document.getElementById('rounds-left');
const userPointsSpan = document.getElementById('user-points');
const computerPointsSpan = document.getElementById('computer-points');
const gameResultDiv = document.getElementById('game-result');

// Add event listeners
playGameButton.addEventListener('click', startGame);
choiceButtons.forEach(button => button.addEventListener('click', playRound));

// Start game function
function startGame() {
  gameNumber = parseInt(gameNumberInput.value);
  roundsLeft = gameNumber;
  userPoints = 0;
  computerPoints = 0;
  computerChoose = -1;
  roundsLeftSpan.textContent = roundsLeft;
  userPointsSpan.textContent = userPoints;
  computerPointsSpan.textContent = computerPoints;
  gameResultDiv.textContent = '';
}

// Play round function
function playRound(event) {
  if (roundsLeft === 0) {
    return; // Game over
  }

  const userChoose = event.target.dataset.nsTest;
  computerChoose = Math.floor(Math.random() * 3);
  let roundResult = '';

  switch (userChoose) {
    case 'rock':
      switch (computerChoose) {
        case 0:
          roundResult = 'TIE';
          break;
        case 1:
          roundResult = 'LOSE';
          computerPoints++;
          break;
        case 2:
          roundResult = 'WON';
          userPoints++;
          break;
      }
  }