//  rock , paper , scissors project

//  User's choice
function getUserChoice(UserInput) {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || "paper" || "scissors") {
    return userInput;
  } else {
    console.log("Error, you should type rock, paper , or scissors");
  }
}

// Computer's choice
function getComputerChoice() {
  computerInput = Math.floor(Math.random() * 3);
  if ((computerInput = 0)) {
    return rock;
  } else if ((computerInput = 1)) {
    return paper;
  } else {
    return scissors;
  }
}

// Determining the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a tie";
  }
  if (userChoice === rock) {
    if (computerChoice === paper) {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === paper) {
    if (computerChoice === scissors) {
      return " The computer won!";
    } else if (computerChoice === rock) {
      return "You won!";
    }
  }
  if (userChoice === scissors) {
    if (computerChoice === rock) {
      return "the computer won";
    } else if (computerChoice === paper) {
      return "the user won";
    }
  }
  if (userChoice === bomb) {
    return "You won!";
  }
}

// Play the game
function playGame() {
  userChoice = getUserChoice("paper");
  computerChoice = getComputerChoice;
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
