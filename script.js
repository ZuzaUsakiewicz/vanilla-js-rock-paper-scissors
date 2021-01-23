const buttons = document.querySelectorAll(".btn");
const scoreTable = document.querySelector("#score");
const comp = document.querySelector("#comp");
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let round = 0;

buttons.forEach((btn) => btn.addEventListener("click", gamePlay));

function computerRandom() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function gamePlay(e) {
  if (computerScore === 5 || playerScore === 5) {
    alert("game over");
    window.location.reload();
  } else {
    let playerSelection = e.target.id;
    let computerSelection = computerRandom();
    comp.innerHTML = `Comp choose: ${computerSelection} You choose: ${playerSelection}`;
    console.log(computerSelection);
    if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore++;
    } else if (playerSelection === computerSelection) {
      computerScore;
      playerScore;
    } else {
      playerScore++;
    }
  }
  scoreTable.innerHTML = `Computer: ${computerScore} You: ${playerScore}`;
}
