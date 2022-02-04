let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;
let tieCounter = 0;
game();

function game() {
  const buttons = document.querySelectorAll(".userInput");
  buttons.forEach((button) => button.addEventListener("click", playRound));
}

function playRound(e) {
  let computerSelection = computerPlay();
  let playerSelection = this.id;
  drawPlayerChoice(playerSelection);
  drawComputerChoice(computerSelection);
  if (playerSelection === computerSelection) {
    writeStatus("TIE");
    tieCounter++;
  } else {
    if (checkForWin(playerSelection, computerSelection)) {
      playerScore++;
      writeStatus("WIN!!");
    } else {
      computerScore++;
      writeStatus("LOSE!");
    }
  }
  roundCounter++;

  writeTies(tieCounter);
  writePlayerScore(playerScore);
  writeComputerScore(computerScore);
  writeRoundCount(roundCounter);
}

function drawPlayerChoice(assetId) {
  const playerChose = document.getElementById("playerChose");
  playerChose.innerHTML = `<img src='./assets/${assetId}.svg' alt='${assetId}'>`;
}

function drawComputerChoice(assetId) {
  const computerChose = document.getElementById("computerChose");
  computerChose.innerHTML = `<img src='./assets/${assetId}.svg' alt='${assetId}'>`;
}

function writeStatus(score) {
  const statusDiv = document.getElementById("status");
  statusDiv.textContent = score;
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
function writeTies(score) {
  const tieDiv = document.getElementById("tieCounter");
  tieDiv.textContent = score;
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
