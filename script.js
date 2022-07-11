const choice = ['Rock', 'Paper', 'Scissors'];
let playerSelection = '';
let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;
document.getElementById(
  'score'
).innerHTML = `${playerScore} - ${computerScore}`;

document.getElementById(
  'message'
).innerHTML = `First to score 5 wins the game!`;

// adds visual scoreboard
const player = document.querySelector('#player');
const computer = document.querySelector('#comp');
const message = document.querySelector('#message');

function updateScore() {
  document.getElementById(
    'score'
  ).innerHTML = `${playerScore} - ${computerScore}`;
}
// function to choose Rock, Paper, or Scissors for computer
function computerPlay() {
  let number = Math.floor(Math.random() * choice.length);
  return choice[number];
}

function playerChoice() {
  return (playerSelection = prompt('Rock, Paper, or Scissors'));
}

// function to establish game logic
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    document.getElementById('message').innerHTML = `You tied this round!`;
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')
  ) {
    playerScore += 1;
    document.getElementById(
      'message'
    ).innerHTML = `You won this round! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Rock')
  ) {
    computerScore += 1;
    document.getElementById(
      'message'
    ).innerHTML = `You lost this round! ${computerSelection} beats ${playerSelection}`;
  } else {
    console.log('ERROR');
  }
}

function wonGame() {
  document.getElementById('message').innerHTML = `Congrats! You won the game!`;
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
  reset.disabled = false;
}

function lostGame() {
  document.getElementById('message').innerHTML = `Oh no! You lost the game!`;
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
  reset.disabled = false;
}

// buttons that allow player to make a choice
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playerSelection = 'Rock';
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateScore();
  if (playerScore == 5) {
    wonGame();
  } else if (computerScore == 5) {
    lostGame();
  }
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playerSelection = 'Paper';
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateScore();
  if (playerScore == 5) {
    wonGame();
  } else if (computerScore == 5) {
    lostGame();
  }
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playerSelection = 'Scissors';
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateScore();
  if (playerScore == 5) {
    wonGame();
  } else if (computerScore == 5) {
    lostGame();
  }
});

// adds ability to reset/replay the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  updateScore();
  document.getElementById(
    'message'
  ).innerHTML = `First to score 5 wins the game!`;
  reset.disabled = true;
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  resetGame();
});

updateScore();

reset.disabled = true;
