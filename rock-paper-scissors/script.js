const GAME_OPTION = ['rock', 'paper', 'scissor'];
const GAME_MESSAGE = 'Welcome to Rock-Paper-Scissor\nPlay against a computer and see who wins!\n'

let getComputerChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

let playRound = (player, computer) => {
  player = player.toLocaleLowerCase();
  let roundOutcome = 0;
  if ((player == 'rock' && computer == 'scissor') || (player == 'paper' && computer == 'rock') || (player == 'scissor' && computer == 'rock')) {
    roundOutcome += 1;
  }
  return roundOutcome;
};

let game = (rounds) => {
  let playerScore = 0;
  let computerScore = 0;
  const WIN_MESSAGE = "Player wins!";
  const LOSE_MESSAGE = "You lose. Computer wins!";
  for (let i = 0; i < rounds; i++) {
    let playerMessage = prompt('Please enter either rock, paper or scissors');
    let gameResult = playRound(playerMessage, getComputerChoice(GAME_OPTION));
    if (gameResult >= 1) {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  }
  let finalScore = `Final Score\nPlayer: ${playerScore} Computer: ${computerScore}`;
  if (playerScore > computerScore) {
    console.log(WIN_MESSAGE);
  } else {
    console.log(LOSE_MESSAGE);
  }
  return finalScore;
}

//GAME MODE
console.log(GAME_MESSAGE);
console.log(game(5));