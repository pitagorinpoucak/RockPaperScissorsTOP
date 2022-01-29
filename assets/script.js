function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 9 + 1);
  switch (randomNumber) {
    case 1:
    case 2:
    case 3:
      return "rock";
    case 4:
    case 5:
    case 6:
      return "paper";
    case 7:
    case 8:
    case 9:
      return "scissors";
  }
}

function gameRound(plSel, compSel) {
  let playerSelection = plSel.toLowerCase();
  let computerSelection = compSel.toLowerCase();
  console.log(playerSelection);
  console.log(computerSelection);
}

gameRound("Rock", "pApeR");
