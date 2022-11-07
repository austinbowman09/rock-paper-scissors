console.log("First player to reach three points wins the game!")

let round = 1;
let playerPoints = 0;
let computerPoints = 0;
let keepGoing = true;
let roundWinner;

while (keepGoing === true) {
    console.log("");
    console.log(`Round: ${round}`)
    console.log(`The score is ${playerPoints} to ${computerPoints} (player / computer)`)
    roundWinner = playRound();

    if (roundWinner === "Player") {
        playerPoints++
        console.log("Player wins the round!");
    } else if (roundWinner === "Computer") {
        computerPoints++
        console.log("Computer wins the round!");
    } else if (roundWinner === "Tie") {
        console.log("Tie. Play again.");
    }

    if (playerPoints >= 3) {
        keepGoing = false;
        console.log("");
        console.log("The player has won the game!")
        console.log(`Final score: ${playerPoints} to ${computerPoints} (player / computer)`)
    } else if (computerPoints >= 3) {
        keepGoing = false;
        console.log("");
        console.log("The computer has won the game!")
        console.log(`Final score: ${playerPoints} to ${computerPoints} (player / computer)`)
    }
    round++
}

function playRound () {

    let playerChoice = makeLowerCase(getPlayerChoice());
    let computerChoice = makeLowerCase(getComputerChoice());
    let winner;

    if (!((playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") && (computerChoice === "rock" || computerChoice === "paper" ||computerChoice === "scissors"))) {
        console.error("Choices are invalid. Only accepts rock, paper, or scissors.");
    }

    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            winner = "Tie";
        } else if (computerChoice === "paper") {
            winner = "Computer";
        } else if (computerChoice === "scissors") {
            winner = "Player";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            winner = "Player";
        } else if (computerChoice === "paper") {
            winner = "Tie";
        } else if (computerChoice === "scissors") {
            winner = "Computer";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            winner = "Computer";
        } else if (computerChoice === "paper") {
            winner = "Player";
        } else if (computerChoice === "scissors") {
            winner = "Tie";
        }
    }

    console.log(`Player chose ${playerChoice}.`);
    console.log(`Computer chose ${computerChoice}.`)
    return winner;
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
