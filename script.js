function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

let humanScore, computerScore, rounds;
humanScore = computerScore = rounds = 0;

const beatMap = new Map([
  ["rock", "paper"],
  ["paper", "scissors"],
  ["scissors", "rock"],
]);

const roundResult = document.createElement("div");
const scores = document.createElement("div");
const gameResult = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(roundResult);
body.appendChild(scores);
body.appendChild(gameResult);

function playRound(humanChoice, computerChoice) {
  gameResult.textContent = "";
  message = "";
  if (humanChoice === computerChoice) {
    message = `Tie! You both played ${humanChoice}.`;
  } else if (beatMap.get(humanChoice) === computerChoice) {
    computerScore++;
    message = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
    rounds += 1;
  } else {
    humanScore++;
    message = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    rounds += 1;
  }
  
  roundResult.textContent = message;
  scores.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}.`;
  
  if (rounds >= 5) {
    roundResult.textContent = "";
    if (computerScore > humanScore) {
      gameResult.textContent = "Game Over!! Computer Wins :( Try again!";
    } else {
      gameResult.textContent = "Congrats!! You win!! Feel free to play again :)";
    }

    rounds = humanScore = computerScore = 0;
  }
}

console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`);

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
