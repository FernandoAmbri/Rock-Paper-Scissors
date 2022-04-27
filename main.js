//show options
const computer_option_span = document.querySelector("#computer_option");
const player_option_span = document.querySelector("#player_option");
//show score
const computer_score_span = document.querySelector("#computer_score");
const player_score_span = document.querySelector("#player_score");
//show winner
const winner_span = document.querySelector("#winner_result");
//buttons
const btn_rock = document.querySelector("#rock");
const btn_paper = document.querySelector("#paper");
const btn_scissors = document.querySelector("#scissors");

let computerScore = 0;
let playerScore = 0;

btn_rock.addEventListener("click", () => {
  const playerChoice = btn_rock.id;
  const computerChoice = getComputerChoice();
  showGame(playerChoice, computerChoice);
});

btn_paper.addEventListener("click", () => {
  const playerChoice = btn_paper.id;
  const computerChoice = getComputerChoice();
  showGame(playerChoice, computerChoice);
});

btn_scissors.addEventListener("click", () => {
  const playerChoice = btn_scissors.id;
  const computerChoice = getComputerChoice();
  showGame(playerChoice, computerChoice);
});

const rpsArr = ["rock", "paper", "scissors"];

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

function showWinner(computerPoints, playerPoints) {
  if (playerPoints === 5 && computerPoints === 5) {
    winner_span.textContent = "Tied game!";
    computer_score_span.textContent = "";
    player_score_span.textContent = "";
    playerScore = 0;
    computerScore = 0;
  }
  if (playerPoints === 5) {
    winner_span.textContent = "Player";
    computer_score_span.textContent = "";
    player_score_span.textContent = "";
    playerScore = 0;
    computerScore = 0;
  }
  if (computerPoints === 5) {
    winner_span.textContent = "Computer";
    computer_score_span.textContent = "";
    player_score_span.textContent = "";
    playerScore = 0;
    computerScore = 0;
  }
}
function showGame(playerChoice, computerChoice) {
  if (winner_span.textContent !== "") {
    winner_span.textContent = "";
  }

  computer_option_span.textContent = computerChoice;
  player_option_span.textContent = playerChoice;
  //Llamar a la función para jugar.
  const result = playGame(computerChoice, playerChoice);
  //Actualizar los contadores
  if (result === "computer") {
    computerScore += 1;
  }
  if (result === "player") {
    playerScore += 1;
  }
  //Mostrar el score en el span
  computer_score_span.textContent = computerScore;
  player_score_span.textContent = playerScore;

  showWinner(computerScore, playerScore);
}
