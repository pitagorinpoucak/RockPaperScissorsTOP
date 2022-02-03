let userScore = 0;
let computerScore = 0;
let roundCounter = 0;
game();

function game() {
  const buttons = document.querySelectorAll(".userInput");
  buttons.forEach((button) => button.addEventListener("click", playRound));
}

function playRound(e) {
  let computerSelection = computerPlay();
  console.log(this.id);
  let playerSelection = this.id;
  if (playerSelection === computerSelection) {
    console.log(`Both players chose ${computerSelection}! It's a TIE!`);
    roundCounter++;
  } else {
    console.log(checkForWin(playerSelection, computerSelection));
    if (checkForWin(playerSelection, computerSelection)) {
      userScore++;
      roundCounter++;
    } else {
      computerScore++;
      roundCounter++;
    }
  }
  writePlayerScore(userScore);
  writeComputerScore(computerScore);
  writeRoundCount(roundCounter);
}

function writePlayerScore(score) {
  const playerScoreDiv = document.getElementById("playerScore");
  playerScoreDiv.textContent = score;
}

function writeComputerScore(score) {
  const computerScoreDiv = document.getElementById("computerScore");
  computerScoreDiv.textContent = score;
}
function writeRoundCount(count) {
  const roundCounterDiv = document.getElementById("roundCounter");
  roundCounterDiv.textContent = count;
}

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 5 + 1);
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    case 4:
      return "lizard";
    case 5:
      return "spock";
  }
}
function checkForWin(player, computer) {
  switch (player) {
    case "rock":
      if (computer === "paper" || computer === "spock") {
        return false;
      } else if (computer === "scissors" || computer === "lizard") {
        return true;
      }
    case "paper":
      if (computer === "scissors" || computer === "lizard") {
        return false;
      } else if (computer === "spock" || computer === "rock") {
        return true;
      }
    case "scissors":
      if (computer === "spock" || computer === "rock") {
        return false;
      } else if (computer === "lizard" || computer === "paper") {
        return true;
      }
    case "lizard":
      if (computer === "rock" || computer === "scissors") {
        return false;
      } else if (computer === "spock" || computer === "paper") {
        return true;
      }
    case "spock":
      if (computer === "paper" || computer === "lizard") {
        return false;
      } else if (computer === "rock" || computer === "scissors") {
        return true;
      }
  }
  return "error!";
}

//2. on round start call for pc input
//3. resolve the game
//4. update round counter and score
//5. write information to div
//6. rinse and repeat

//DOM MANIPULATION
/*
function getUserInput() {
  const userInput = document.querySelectorAll("button");
  userInput.forEach(function (element) {
    element.addEventListener("click", function (e) {
      console.log(this.id);
    });  
  });  
  var userInput;
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
