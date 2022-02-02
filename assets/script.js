//DOM MANIPULATION

function getUserInput() {
  /*const userInput = document.querySelectorAll("button");
  userInput.forEach(function (element) {
    element.addEventListener("click", function (e) {
      console.log(this.id);
    });
  });*/
  let userInput;
  const button = document.querySelectorAll(".userInput");
  for (let i = 0; i < button.length; i++) {
    userInput = button[i].addEventListener("click", setUserInput);
  }
  console.log(userInput);
}

function setUserInput(e) {
  return this.id;
}

getUserInput();
//GAME LOGIC
/*
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 5 + 1);
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    case 4:
      return "Lizard";
    case 5:
      return "Spock";
  }
}

function checkForWin(player, computer) {
  switch (player) {
    case "rock":
      if (computer === "paper") {
        return "You LOSE! Paper beats Rock.";
      } else if (computer === "scissors") {
        return "You WIN! Rock beats Scissors.";
      } else if (computer === "lizard") {
        return "You WIN! Rock crushes Lizard";
      } else if (computer === "spock") {
        return "You LOSE! Spock vaporizes Rock.";
      }
    case "paper":
      if (computer === "scissors") {
        return "You LOSE! Scissors cuts Paper.";
      } else if (computer === "lizard") {
        return "You LOSE! Lizard eats Paper.";
      } else if (computer === "spock") {
        return "You WIN! Paper disproves Spock.";
      } else if (computer === "rock") {
        return "You WIN! Paper covers Rock.";
      }
    case "scissors":
      if (computer === "lizard") {
        return "You WIN! Scissors decapitate Lizard";
      } else if (computer === "spock") {
        return "You LOSE! Spock smashes Scissors.";
      } else if (computer === "rock") {
        return "You LOSE! Rock crushes Scissors.";
      } else if (computer === "paper") {
        return "You WIN! Scissors cuts Paper.";
      }
    case "lizard":
      if (computer === "spock") {
        return "You WIN! Lizard poisons Spock.";
      } else if (computer === "rock") {
        return "You LOSE! Rock crushes Lizard.";
      } else if (computer === "paper") {
        return "You WIN! Lizard eats Paper.";
      } else if (computer === "scissors") {
        return "You LOSE! Scissors decapitates Lizard.";
      }
    case "spock":
      if (computer === "rock") {
        return "You WIN! Spock vaporizes Rock.";
      } else if (computer === "paper") {
        return "You LOSE! Paper disproves Spock.";
      } else if (computer === "scissors") {
        return "You WIN! Spock smashes Scissors.";
      } else if (computer === "lizard") {
        return "You LOSE! Lizard poisons Spock.";
      }
  }
  return "error!";
}

function playRound(plSel, compSel) {
  let playerSelection = plSel.toLowerCase();
  let computerSelection = compSel.toLowerCase();

  if (playerSelection === computerSelection) {
    return `Both players chose ${compSel}! It's a TIE!`;
  } else {
    return checkForWin(playerSelection, computerSelection);
  }
}

function checkInput(input) {
  let bool = true;
  inputLower = input.toLowerCase();

  while (bool) {
    if (
      inputLower === "rock" ||
      inputLower === "paper" ||
      inputLower === "scissors" ||
      inputLower === "lizard" ||
      inputLower === "spock"
    ) {
      return inputLower;
    } else {
      // inputLower = prompt(
      //   "Please input correct expression: Rock/Paper/Scissors. Case doesn't matter"
      // ).toLowerCase();
    }
  }
}

function game() {
  //alert(
  // "Welcome to Rock/Paper/Scissors/Lizard/Spock! First player to reach 5 wins is the winner!"
  //);
  let playerWinCounter = 0;
  let compWinCounter = 0;
  let round = 1;

  while (playerWinCounter < 5 && compWinCounter < 5) {
    console.log(`Round ${round}:`);
    round++;
    let playerInput = prompt("Rock/Paper/Scissors/Lizard/Spock?");
    let gameStatus = playRound(checkInput(playerInput), computerPlay());

    if (gameStatus.includes("WIN")) {
      playerWinCounter++;
    } else if (gameStatus.includes("LOSE")) {
      compWinCounter++;
    }
    /*console.log(gameStatus);
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
  getUserInput();
}

game();
*/
