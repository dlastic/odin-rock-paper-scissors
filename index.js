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

console.log(getHumanChoice())