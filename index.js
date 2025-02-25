const buttons = document.querySelectorAll("button");
const resultsDiv = document.querySelector("#results");
const playerSpan = document.querySelector("#player-score");
const computerSpan = document.querySelector("#computer-score");
let scores = { human: 0, computer: 0};

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);

  return choices[index];
}

function getHumanChoice() {
  let validChoices = ["rock", "paper", "scissors"];
  let choice;

  do {
    choice = prompt("Choose an object (rock, paper or scissors): ");

    // Check if the user canceled the prompt
    if (!choice) {
      console.log("No input provided. Defaulting to 'rock'.");
      choice = "rock";
    }

    choice = choice.toLowerCase();

    if (!validChoices.includes(choice)) {
      console.log("Invalid choice. Please select rock, paper, or scissors.");
    }
  } while (!validChoices.includes(choice));
  
  return choice;
}

function declareWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    resultsDiv.textContent = `Final Results: 🎉 You win ${humanScore} to ${computerScore}!`;
  } else {
    resultsDiv.textContent = `Final Results: 😞 You lose ${humanScore} to ${computerScore}!`;
  }
}

function playRound(humanChoice, computerChoice, scores) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = "It's a tie!";
  } else if (winConditions[humanChoice] === computerChoice) {
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    scores.human++;
    playerSpan.textContent = `${scores.human}`;
  } else {
    resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    scores.computer++;
    computerSpan.textContent = `${scores.computer}`;
  }

  if (scores.human === 5 || scores.computer === 5) {
    declareWinner(scores.human, scores.computer);
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => playRound(button.id, getComputerChoice(), scores))
});