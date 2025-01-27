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
  console.log("\n--- Final Results ---")
  if (humanScore > computerScore) {
    console.log(`🎉 You win ${humanScore} to ${computerScore}!`);
  } else if (humanScore < computerScore) {
    console.log(`😞 You lose ${humanScore} to ${computerScore}!`);
  } else {
    console.log(`🤝 It is a tie (${humanScore} to ${computerScore})!`)
  }
}

function playRound(humanChoice, computerChoice, scores) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (winConditions[humanChoice] === computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    scores.human++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    scores.computer++;
  }
}

function playGame() {
  let scores = { human: 0, computer: 0};

  for (let i = 0; i < 5; i++) {
    console.log(`\n--- Round ${i + 1} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    playRound(humanChoice, computerChoice, scores);
  }

  declareWinner(scores.human, scores.computer);
}

playGame()