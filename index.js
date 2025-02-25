const buttons = document.querySelectorAll("button.play");
const resetButton = document.querySelector("#reset")
const resultsDiv = document.querySelector("#results");
const playerSpan = document.querySelector("#player-score");
const computerSpan = document.querySelector("#computer-score");
const scores = { player: 0, computer: 0};

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function declareWinner() {
  resultsDiv.textContent = scores.player > scores.computer
    ? `Final Results: 🎉 You win ${scores.player} to ${scores.computer}!`
    : `Final Results: 😞 You lose ${scores.player} to ${scores.computer}!`;

  resultsDiv.style.color = scores.player > scores.computer ? "green" : "red";

  // Disable buttons after game ends
  buttons.forEach(button => button.disabled = true);
}

function updateScoreDisplay() {
  playerSpan.textContent = scores.player;
  computerSpan.textContent = scores.computer;
}

function playRound(playerChoice, computerChoice) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  let message, color;

  if (playerChoice === computerChoice) {
    message = `It's a tie! You both chose ${playerChoice}.`;
    color = "yellow";
  } else if (winConditions[playerChoice] === computerChoice) {
    message = `You win! Your ${playerChoice} beats the computer's ${computerChoice}.`;
    color = "green";
    scores.player++;
  } else {
    message = `You lose! The computer's ${computerChoice} beats your ${playerChoice}.`;
    color = "red";
    scores.computer++;
  }

  resultsDiv.textContent = message;
  resultsDiv.style.color = color;
  updateScoreDisplay();

  if (scores.player === 5 || scores.computer === 5) {
    declareWinner();
  }
}

function resetGame() {
  scores.player = 0;
  scores.computer = 0;
  updateScoreDisplay();
  resultsDiv.textContent = "Choose your weapon!";
  resultsDiv.style.color = "beige";

  // Re-enable buttons for a new game
  buttons.forEach(button => button.disabled = false);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (scores.player < 5 && scores.computer < 5) {
      playRound(button.id, getComputerChoice());
    }
  })
});

resetButton.addEventListener("click", resetGame);