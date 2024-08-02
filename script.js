function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  if (randomIndex == 3) randomIndex = 2;
  return choices[randomIndex];
}

function getHumanChoice() {
  const choice = prompt(
    "Please enter your choice: rock, paper, or scissors"
  ).toLowerCase();
  if (["rock", "paper", "scissors"].includes(choice)) {
    return choice;
  } else {
    console.log("Invalid choice, please try again.");
    return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log(
    `Human choice: ${humanChoice}, Computer choice: ${computerChoice}`
  );

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}.`
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice}.`
    );
    computerScore++;
  }
}

function playGame() {
  // Reset scores
  humanScore = 0;
  computerScore = 0;

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Declare the final winner
  if (humanScore > computerScore) {
    console.log(
      `You win the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lose the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`
    );
  } else {
    console.log(
      `The game is a tie! Final Score - Human: ${humanScore}, Computer: ${computerScore}`
    );
  }
}

// Start the game automatically when the script runs
playGame();
