let currentRound = 1;
let roundsToWin = 5;
let playerPoints = 0;
let computerPoints = 0;

const roundText = document.querySelector("#round");
const roundWinnerText = document.querySelector("#round-winner");
const currentScoreText = document.querySelector("#score");
const gameWinnerText = document.querySelector("#winner");
const playerChoiceText = document.querySelector("#player-choice");
const computerChoiceText = document.querySelector("#computer-choice");

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        let roundWinner = playRound(button.id);
        updateScore(roundWinner);
    });
});

const newGameButton = document.querySelector("#new-game");
newGameButton.addEventListener("click", resetPage);

function resetPage() {
    currentRound = 1;
    playerPoints = 0;
    computerPoints = 0;
    roundText.textContent = "Round: 1"
    playerChoiceText.textContent = "";
    computerChoiceText.textContent = "";
    roundWinnerText.textContent = "";
    currentScoreText.textContent = "Current Score: ";
    gameWinnerText.textContent = "Winner: ";
    buttons.forEach(button => {
        button.classList.remove("disabled");
    });
};

function endGame() {
    buttons.forEach(button => {
        button.classList.add("disabled");
    });
};

function updateScore(roundWinner) {
    roundText.textContent = `Round: ${currentRound++}`;
    if (roundWinner == "Player") { 
        playerPoints++;
        roundWinnerText.textContent = "Player wins the round!";
    } else if (roundWinner == "Computer") {
        computerPoints++;
        roundWinnerText.textContent = "Computer wins the round!";
    } else if (roundWinner === "Tie") {
        roundWinnerText.textContent = "Tie. Play again.";
    }
    currentScoreText.textContent = `Current Score: ${playerPoints} to ${computerPoints} (player / computer)`;

    if (playerPoints >= roundsToWin) {
        gameWinnerText.textContent = "Winner: Player wins!"
        endGame();
    } else if (computerPoints >= roundsToWin) {
        gameWinnerText.textContent = "Winner: Computer wins!"
        endGame();
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
    playerChoiceText.textContent = `Player chose ${playerChoice}.`;
    computerChoiceText.textContent = `Computer chose ${computerChoice}.`;
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
