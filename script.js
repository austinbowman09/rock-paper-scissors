console.log("First player to reach three points wins the game!")

let round = 1;
let roundsToWin = 3;
let playerPoints = 0;
let computerPoints = 0;
let keepGoing = true;

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        let roundWinner = playRound(button.id);
        updateScore(roundWinner);
    });
});

function updateScore(roundWinner) {
    if (roundWinner == "Player") { 
        playerPoints++;
        console.log("Player wins the round!");
        console.log("");
    } else if (roundWinner == "Computer") {
        computerPoints++;
        console.log("Computer wins the round!");
        console.log("");
    } else if (roundWinner === "Tie") {
        console.log("Tie. Play again.");
        console.log("");
    }

    if (playerPoints >= roundsToWin) {
        keepGoing = false;
        console.log("The player has won the game!")
        console.log(`Final score: ${playerPoints} to ${computerPoints} (player / computer)`)
    } else if (computerPoints >= roundsToWin) {
        keepGoing = false;
        console.log("The computer has won the game!")
        console.log(`Final score: ${playerPoints} to ${computerPoints} (player / computer)`)
    }
};


function playRound(choice) {
    let playerChoice = choice;
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
