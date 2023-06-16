var userScore = 0;
var computerScore = 0;
var userTurn = true;
var gameOver = false;

function play(userChoice) {
  if (gameOver) return;

  var computerChoice = Math.floor(Math.random() * 6) + 1;
  var total = userChoice + computerChoice;

  if (userTurn) {
    userScore += userChoice;
    document.getElementById("message").textContent = "You chose " + userChoice + ".";
    document.getElementById("message").textContent += " Computer chose " + computerChoice + ".";
    document.getElementById("message").textContent += " Your score: " + userScore + ".";
  } else {
    computerScore += computerChoice;
    document.getElementById("message").textContent = "You chose " + userChoice + ".";
    document.getElementById("message").textContent += " Computer chose " + computerChoice + ".";
    document.getElementById("message").textContent += " Computer score: " + computerScore + ".";
  }

  if (userChoice === computerChoice) {
    gameOver = true;
    if (userTurn) {
      document.getElementById("message").textContent += " You're out!";
      document.getElementById("message").textContent += " Game over. Computer wins!";
    } else {
      document.getElementById("message").textContent += " Computer is out!";
      if (userScore > computerScore) {
        document.getElementById("message").textContent += " Game over. You win!";
      } else if (userScore < computerScore) {
        document.getElementById("message").textContent += " Game over. Computer wins!";
      } else {
        document.getElementById("message").textContent += " Game over. It's a tie!";
      }
    }
  } else if (userTurn && total > computerScore) {
    gameOver = true;
    document.getElementById("message").textContent += " You win!";
  } else if (!userTurn && total > userScore) {
    gameOver = true;
    document.getElementById("message").textContent += " Computer wins!";
  }

  userTurn = !userTurn;
}
