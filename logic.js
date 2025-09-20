/**Choices & Scores */
let playerChoice = "";
let computerChoice = "";

let round = 0;
let playerScore = 0;
let computerScore = 0;
let tie = 0;

/**Get Computer Selection*/
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) return "rock";
    if (randomNumber == 2) return "paper";

    return "scissors";
}

/**Game Round Logic*/
function playRound(computerChoice, playerChoice) {
    if (playerScore < 5 && computerScore < 5) {
        if (playerChoice === 'rock' && computerChoice === 'paper') {
            computerScore += 1;
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            playerScore += 1;
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            playerScore += 1;
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
        } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
            computerScore += 1;
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            playerScore += 1;
        }
        else {
            tie += 1;
        }
        round += 1;
    }
    else {
        if (playerScore > computerScore) {
            winner.textContent = "Winner: Player Wins !!!";
        }
        else {
            winner.textContent = "Winner: Computer Wins!!!";
        }
    }
}

/**Get Player Selection & Play A Game*/
const buttons = document.querySelectorAll(".game__button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerChoice = e.target.textContent.trim().toString().toLowerCase();
        computerChoice = getComputerChoice();
        playRound(computerChoice, playerChoice);
        updateScores();
    })
})

/** Display  & Update Scores */
const compScore = document.querySelector(".score__computer");
const userScore = document.querySelector(".score__player");
const tiedScore = document.querySelector(".score__tied");
const roundTotal = document.querySelector(".score__round");
const winner = document.querySelector(".score__output");

function updateScores() {
    compScore.textContent = `Computer Score: ${computerScore}`;
    userScore.textContent = `Player Score: ${playerScore}`;
    tiedScore.textContent = `Tied Score: ${tie}`;
    roundTotal.textContent = `Total Rounds: ${round}`;
}