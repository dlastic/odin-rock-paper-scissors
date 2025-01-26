function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);

  return choices[index];
}

function getHumanChoice() {
  let invalidChoice = true;
  while (invalidChoice) {
    choice = prompt("Choose an object (rock, paper or scissors): ");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      invalidChoice = false;
    }
  }
  
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("It is a tie!");
    return;
  }
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      console.log("You lose! Paper beats Rock");
      return;
    }
    if (computerChoice === "scissors") {
      humanScore++;
      console.log("You win! Rock beats Scissors");
      return;
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      console.log("You lose! Scissors beats Paper");
      return;
    }
    if (computerChoice === "rock") {
      humanScore++;
      console.log("You win! Paper beats Rock");
      return;
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      console.log("You lose! Rock beats Scissors");
      return;
    }
    if (computerChoice === "paper") {
      humanScore++;
      console.log("You win! Scissors beat Paper");
      return;
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);

