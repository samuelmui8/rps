function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    const choice = prompt("Enter choice: (rock, paper or scissors): ").toLocaleLowerCase()
    if (!["rock", "paper", "scissors"].includes(choice)) {
        console.error("Invalid Choice");
    }
    return choice;
}

function playGame() {
    let humanScore, computerScore;
    humanScore = computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Tie! You both played ${humanChoice}.`);
            return;
        }
        const beatMap = new Map([["rock", "paper"], ["paper", "scissors"], ["scissors", "rock"]]);
        if (beatMap.get(humanChoice) === computerChoice) {
            computerScore++;
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
            
        } else {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`);
    
}