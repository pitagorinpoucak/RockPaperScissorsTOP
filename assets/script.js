let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;
let tieCounter = 0;
game();

function game() {
  const buttons = document.querySelectorAll(".userInput");
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });
}

//GAME LOGIC

function playRound(e) {
  wipe();
  let computerSelection = computerPlay();
  let playerSelection = this.id;

  document.getElementById(playerSelection).classList.add("chosen");
  document.getElementById(computerSelection + "Comp").classList.add("chosen");

  drawPlayerChoice(playerSelection);
  drawComputerChoice(computerSelection);
  if (playerSelection === computerSelection) {
    writeStatus("TIE");
    tieCounter++;
    document.getElementById("playerChose").style.backgroundColor = "orange";
    document.getElementById("computerChose").style.backgroundColor = "orange";
  } else {
    if (checkForWin(playerSelection, computerSelection)) {
      playerScore++;
      writeStatus("WIN!!");
      document.getElementById("playerChose").style.backgroundColor = "green";
      document.getElementById("computerChose").style.backgroundColor = "red";
    } else {
      computerScore++;
      writeStatus("LOSE!");
      document.getElementById("playerChose").style.backgroundColor = "red";
      document.getElementById("computerChose").style.backgroundColor = "green";
    }
  }
  roundCounter++;

  writeTies(tieCounter);
  writePlayerScore(playerScore);
  writeComputerScore(computerScore);
  writeRoundCount(roundCounter);
  if (playerScore === 5 || computerScore === 5) {
    gameOver();
  }
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

//SCORE KEEPING

function writeStatus(score) {
  const statusDiv = document.getElementById("status");
  statusDiv.classList.add("status");
  statusDiv.textContent = score;

  statusDiv.addEventListener("animationend", (e) => {
    document.getElementById("status").classList.remove("status");
  });
}

function writePlayerScore(score = 0) {
  const playerScoreDiv = document.getElementById("playerScore");
  playerScoreDiv.textContent = score;
}

function writeComputerScore(score = 0) {
  const computerScoreDiv = document.getElementById("computerScore");
  computerScoreDiv.textContent = score;
}
function writeRoundCount(count = 0) {
  const roundCounterDiv = document.getElementById("roundCounter");
  roundCounterDiv.textContent = count;
}
function writeTies(score = 0) {
  const tieDiv = document.getElementById("tieCounter");
  tieDiv.textContent = score;
}

//ANIMATIONS

function buttonShrink(e) {
  const button = document.getElementById(`${this.id}`);
  console.log(button);
}

function wipe() {
  const wiper = document.querySelectorAll(".userInput, .computerInput");
  wiper.forEach((el) => el.classList.remove("chosen"));
}

function gameOver() {
  const ending = document.getElementById("status");

  if (playerScore > computerScore) {
    ending.innerText = "PLAYER WON!!";
    ending.style.backgroundColor = "green";
  } else if (playerScore < computerScore) {
    ending.innerText = "COMPUTER WON";
    ending.style.backgroundColor = "red";
  } else {
    ending.innerText = "IT'S A TIE!";
    ending.style.backgroundColor = "yellow";
  }

  ending.classList.add("finishedGame");
  ending.addEventListener("animationend", reset);
}

function reset(e) {
  document.getElementById("status").addEventListener("click", (e) => {
    window.location.reload();
    /*document
      .getElementById("status")
      .removeEventListener("animationend", reset);
    document.getElementById("status").classList.remove("finishedGame");
    document.getElementById("status").style.backgroundColor = "transparent";*/
  });
}

function drawPlayerChoice(assetId) {
  const playerChose = document.getElementById("playerChose");
  playerChose.innerHTML = `<img src='./assets/${assetId}.svg' alt='${assetId}'>`;
}

function drawComputerChoice(assetId) {
  const computerChose = document.getElementById("computerChose");
  computerChose.innerHTML = `<img src='./assets/${assetId}.svg' alt='${assetId}'>`;
}
