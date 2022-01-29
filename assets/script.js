function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 9 + 1);
  switch (randomNumber) {
    case 1:
    case 2:
    case 3:
      return "Rock";
    case 4:
    case 5:
    case 6:
      return "Paper";
    case 7:
    case 8:
    case 9:
      return "Scissors";
  }
}

function playRound(plSel, compSel) {
  let playerSelection = plSel.toLowerCase();
  let computerSelection = compSel.toLowerCase();

  if (playerSelection === computerSelection) {
    return `Both players chose ${compSel}! It's a TIE!`;
  }
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        return "You LOSE! Paper beats Rock.";
      } else {
        return "You WIN! Rock beats Scissors.";
      }
    case "paper":
      if (computerSelection === "scissors") {
        return "You LOSE! Scissors cuts Paper.";
      } else {
        return "You WIN! Paper covers Rock.";
      }
    case "scissors":
      if (computerSelection === "rock") {
        return "You LOSE! Rock crushes Scissors.";
      } else {
        return "You WIN! Scissors cut Paper.";
      }
    default:
  }
}

function checkInput(input) {
  let bool = true;
  inputLower = input.toLowerCase();

  while (bool) {
    if (
      inputLower === "rock" ||
      inputLower === "paper" ||
      inputLower === "scissors"
    ) {
      return inputLower;
    } else {
      inputLower = prompt(
        "Please input correct expression: Rock/Paper/Scissors. Case doesn't matter"
      ).toLowerCase();
    }
  }
}

function game() {
  alert(
    "Welcome to Rock/Paper/Scissors! First player to reach 5 wins is the winner!"
  );
  let playerWinCounter = 0;
  let compWinCounter = 0;
  let round = 1;

  while (playerWinCounter < 5 && compWinCounter < 5) {
    console.log(`Round ${round}:`);
    round++;
    let playerInput = prompt("Rock/Paper/Scissors?");
    let gameStatus = playRound(checkInput(playerInput), computerPlay());

    if (gameStatus.includes("WIN")) {
      playerWinCounter++;
    } else if (gameStatus.includes("LOSE")) {
      compWinCounter++;
    }
    console.log(gameStatus);
    console.log(`
    Player score: ${playerWinCounter}
    Computer score: ${compWinCounter}
    `);
  }

  if (playerWinCounter > compWinCounter) {
    alert("Congratulations!! You are the WINNER!!");
  } else {
    alert("We're terribly sorry. You LOOSE!");
  }
}

game();
