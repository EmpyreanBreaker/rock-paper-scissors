/**Choices & Scores */
let playerChoice = "";
let computerChoice = "";

let round = 1;
let playerScore = 0;
let computerScore = 0;

/**Get Computer Selection*/
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) return "rock";
    if (randomNumber == 2) return "paper";

    return "scissors";
}

/**Get Player Selection & Play A Game*/
const buttons = document.querySelectorAll(".game__button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerChoice = e.target.textContent.trim().toString().toLowerCase();
        computerChoice = getComputerChoice();
        console.log(`Player Choice: ${playerChoice}`);
        console.log(`Computer Choice: ${computerChoice}`);
        playRound(computerChoice, playerChoice);
        updateScores();
    })
})

/**Game Round */
function playRound(computerChoice, playerChoice) {
    if (playerScore !== 5 && compScore !== 5) {
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
    }
    round += 1;
}

/** Display  & Update Scores */
const compScore = document.querySelector(".score__computer");
const userScore = document.querySelector(".score__player");

function updateScores() {
    compScore.textContent = `Computer Score: ${computerScore}`;
    userScore.textContent = `Player Score: ${playerScore}`;
}
const results = document.querySelector(".score__output");


function playGame() {

    // Play the game till someone has five points
    playRound(getComputerChoice());

    // console.log("Player Score: " + playerScore);
    // console.log("Computer Score: " + computerScore)

    // if (playerScore > computerScore) {
    //     console.log("Humanity Wins!")
    // }
    // else if (computerScore < playerScore) {
    //     console.log("Bow down to your AI overlords")
    // }
    // else {
    //     console.log("It's a tie. Perhaps we need each other.")
    // }
}