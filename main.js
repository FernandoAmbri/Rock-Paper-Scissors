const rpsArr = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
};

const getPlayerChoice = () => {
  const playerChoice = prompt(
    "Enter rock, paper, or scissors to play the game."
  );
  return playerChoice;
};

function startGame() {
  let computerWins = 0;
  let playerWins = 0;
  for (let i = 1; i <= 5; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    if (playerChoice != "") {
      const playerOption = playerChoice.toLowerCase();
      if (rpsArr.includes(playerOption)) {
        const result = playRPS(computerChoice, playerOption);
        if (result === "computer") {
          computerWins += 1;
        }
        if (result === "player") {
          playerWins += 1;
        }
        console.log(
          `Computer choice: ${computerChoice} Player choice: ${playerChoice}`
        );
        console.log(`Winner: ${result}`);
      } else {
        console.log("Invalid option");
      }
    } else {
      console.log("Invalid option");
    }
  }
  if (computerWins === playerWins) {
    return `Tied game! Computer: ${computerWins} Player: ${playerWins}`;
  } else if (computerWins > playerWins) {
    return `Computer is the winner! 
          Computer: ${computerWins} Player: ${playerWins}`;
  } else {
    return `Player is the winner! 
          Computer: ${computerWins} Player: ${playerWins}`;
  }
}

function playRPS(computerOption, playerOption) {
  if (computerOption === playerOption) {
    return "Tied round!";
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

console.log(startGame());
