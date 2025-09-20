/**Get Computer Selection*/
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) return "Rock";
    if (randomNumber == 2) return "Paper";

    return "Scissors";
}

/**Get Player Selection*/
const buttons = document.querySelectorAll(".game__button");
let playerChoice = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        playerChoice = e.target.textContent.trim();
        console.log("Player choice:", playerChoice);
    });
});

/**Game Logic*/
let round = 0;
let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
    }

    round += 1;
    return round;
}

function playGame() {
    playRound(getComputerChoice(), getHumanChoice());

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore)

    if (humanScore > computerScore) {
        console.log("Humanity Wins!")
    }
    else if (computerScore < humanScore) {
        console.log("Bow down to your AI overlords")
    }
    else {
        console.log("It's a tie. Perhaps we need each other.")
    }
}



/**Output*/
//playGame();