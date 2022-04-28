//show options
const computer_option_span = document.querySelector("#computer_option");
const player_option_span = document.querySelector("#player_option");
//show score
const computer_score_span = document.querySelector("#computer_score");
const player_score_span = document.querySelector("#player_score");
//show winner
const winner_span = document.querySelector("#winner_result");
const spanArr = document.querySelectorAll("span");
//buttons
const buttons = document.querySelectorAll("button");
const btn_restart = document.querySelector("#restart");

const rpsArr = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
};

function playGame(computerOption, playerOption) {
  if (computerOption === playerOption) {
    return "tied round!";
  } else if (
    (computerOption === rpsArr[0] && playerOption === rpsArr[2]) ||
    (computerOption === rpsArr[1] && playerOption === rpsArr[0]) ||
    (computerOption === rpsArr[2] && playerOption === rpsArr[1])
  ) {
    return "computer";
  } else {
    return "player";
  }
}

function startGame(playerChoice, computerChoice) {
  if (computerScore < 5 && playerScore < 5) {
    computer_option_span.textContent = computerChoice;
    player_option_span.textContent = playerChoice;

    const result = playGame(computerChoice, playerChoice);

    if (result === "computer") {
      computerScore += 1;
    }
    if (result === "player") {
      playerScore += 1;
    }
    computer_score_span.textContent = computerScore;
    player_score_span.textContent = playerScore;

    showWinner(computerScore, playerScore);
  }
}

function restartGame() {
  spanArr.forEach((span) => {
    span.textContent = "";
  });
  playerScore = 0;
  computerScore = 0;
}

function showWinner(computerPoints, playerPoints) {
  if (playerPoints === 5 && computerPoints === 5) {
    winner_span.textContent = "Tied Game!";
  }
  if (playerPoints === 5) {
    winner_span.textContent = "Player";
  }
  if (computerPoints === 5) {
    winner_span.textContent = "Computer";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id !== "restart") {
      const playerChoice = button.id;
      const computerChoice = getComputerChoice();
      startGame(playerChoice, computerChoice);
    }
  });
});

btn_restart.addEventListener("click", () => {
  if (computerScore >= 5 || playerScore >= 5) {
    restartGame();
  }
});
