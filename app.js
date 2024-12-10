console.log("Hello World");
//get computer choice
function getComputerChoice() {
  let counter = Math.random();
  if (counter <= 0.33) {
    return "rock";
  } else if (counter > 0.33 && counter <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
//logic to get human choice
function getHumanChoice() {
  let choice;
  while (true) {
    choice = prompt("Rock, paper or scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    }
    alert("Error: Invalid input. Please enter rock, paper, or scissors.");
  }
}

let humanScore = 0;
let computerScore = 0;
//play round function

function playRound(a, b) {
  if (
    (a == "paper" && b == "rock") ||
    (a == "rock" && b == "scissors") ||
    (a == "scissors" && b == "paper")
  ) {
    console.log("Human wins");
    humanScore++;
  } else if (
    (b == "paper" && a == "rock") ||
    (b == "rock" && a == "scissors") ||
    (b == "scissors" && a == "paper")
  ) {
    console.log("Computer wins");
    computerScore++;
  } else if (a === b) {
    console.log("Its a tie");
  }
}
//play game to 5 rounds
function playGame() {
  //playRound function
  while (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore === 5) {
      console.log("Congrats human you win this time!!");
      break;
    }
    if (computerScore === 5) {
      console.log("This is the start of computer domination!!");
      break;
    }
  }
}

playGame();
