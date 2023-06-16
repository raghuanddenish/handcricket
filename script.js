var userScore = 0;
var computerScore = 0;
var userTurn = true;
var gameOver = false;
var prevChoice = null;

function play(userChoice) {
  if (gameOver) return;

  var computerChoice = Math.floor(Math.random() * 6) + 1;

  if (userTurn) {
    if (prevChoice !== null && userChoice === prevChoice) {
      gameOver = true;
      document.getElementById("message").textContent = "You chose " + userChoice + ".";
      document.getElementById("message").textContent += " You're out!";
      document.getElementById("message").textContent += " Game over. Computer wins!";
      return;
    }

    userScore += userChoice;
    document.getElementById("message").textContent = "You chose " + userChoice + ".";
    document.getElementById("message").textContent += " Computer chose " + computerChoice + ".";
    document.getElementById("message").textContent += " Your score: " + userScore + ".";
  } else {
    if (prevChoice !== null && computerChoice === prevChoice) {
      gameOver = true;
      document.getElementById("message").textContent = "You chose " + userChoice + ".";
      document.getElementById("message").textContent += " Computer chose " + computerChoice + ".";
      document.getElementById("message").textContent += " Computer is out!";
      if (userScore > computerScore) {
        document.getElementById("message").textContent += " Game over. You win!";
      } else if (userScore < computerScore) {
        document.getElementById("message").textContent += " Game over. Computer wins!";
      } else {
        document.getElementById("message").textContent += " Game over. It's a tie!";
      }
      return;
    }

    computerScore += computerChoice;
    document.getElementById("message").textContent = "You chose " + userChoice + ".";
    document.getElementById("message").textContent += " Computer chose " + computerChoice + ".";
    document.getElementById("message").textContent += " Computer score: " + computerScore + ".";
  }

  prevChoice = userTurn ? userChoice : computerChoice;

  userTurn = !userTurn;
}
