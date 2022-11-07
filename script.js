/* 
Pseudocode:

Start a new game

Ask the user for a choice (rock, paper, or scissors). 
Make everything lower case (so that the choice is case insensitive)
Store the result.

Generate a random choice for the computer.

Compare the two choices and determine a winner. This is one round.

Create a "game" function to loop through five rounds. 

*/


for (let i = 0; i < 5; i++) {

    let currentRound = i+1;
    let playerChoice = "rock";
    // let computerChoice = "scissors";
    
    console.log(`Round: ${currentRound}`)
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log("");
    }
    
function playRound (playerChoice, computerChoice) {
    playerChoice = makeLowerCase(playerChoice);
    computerChoice = makeLowerCase(computerChoice);

    let playerWins

    if (!((playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") && (computerChoice === "rock" || computerChoice === "paper" ||computerChoice === "scissors"))) {
        console.error("Choices are invalid. Only accepts rock, paper, or scissors.");
    }

    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            playerWins = "tie";
        } else if (computerChoice === "paper") {
            playerWins = false;
        } else if (computerChoice === "scissors") {
            playerWins = true;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            playerWins = true;
        } else if (computerChoice === "paper") {
            playerWins = "tie";
        } else if (computerChoice === "scissors") {
            playerWins = false;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            playerWins = false;
        } else if (computerChoice === "paper") {
            playerWins = true;
        } else if (computerChoice === "scissors") {
            playerWins = "tie";
        }
    }

    console.log(`Player chose ${playerChoice}.`);
    console.log(`Computer chose ${computerChoice}.`)

    if (playerWins === true) {
        return "Player Wins!";
    } else if (playerWins === false) {
        return "Computer Wins!";
    } else if (playerWins === "tie") {
        return "Tie. No Winner.";
    }
}

function makeLowerCase(anyCaseString) {
    let lowerCaseString = anyCaseString.toLowerCase();
    return lowerCaseString;
}

function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice;
}

function getComputerChoice () {
    let randomNum = Math.random()*100

    if (randomNum < 33) {
        computerChoice = "rock";
    } else if (randomNum < 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}
