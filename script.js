let choice = ['Rock', 'Paper', 'Scissors'];
let playerSelection = '';
let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let number = Math.floor(Math.random() * choice.length);
  return choice[number];
}

function playerChoice() {
  return (playerSelection = prompt('Rock, Paper, or Scissors'));
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log(`It's a tie!`);
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')
  ) {
    playerScore += 1;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Rock')
  ) {
    computerScore += 1;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log('ERROR');
  }
}

function game() {
  for (i = 1; i <= 5; i++) {
    computerSelection = computerPlay();
    playerselection = playerChoice();
    if (i < 5) {
      playRound(playerSelection, computerSelection);
    } else {
      if (playerScore > computerScore) {
        console.log('You WON the game! Congrats!');
      } else if (computerScore > playerScore) {
        console.log('You LOST the game! Better luck next time!');
      } else {
        console.log('You and the computer TIED! Try again!');
      }
    }
    computerPlay();
  }
}

game();
