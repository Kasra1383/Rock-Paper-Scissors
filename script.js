
const choices = ["rock", "paper", "scissors"]

function game() {
    for(i=0; i<4;i++) {
        round()
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice() {
    let x = window.prompt("Write Rock, Paper, or Scissors")
    return x.toLowerCase()
}

function round() {
    const playerChoice = getPlayerChoice()
    const computerChoice = getComputerChoice()
    const winner = checkWinner(playerChoice, computerChoice)
    console.log(playerChoice)
    console.log(computerChoice)
    console.log(winner)
}

function checkWinner(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        return ("tie")
    } else if (
        computerChoice === "rock" && playerChoice === "scissors" ||
        computerChoice === "paper" && playerChoice === "rock" ||
        computerChoice === "scissors" && playerChoice === "paper") {
        return ("Computer wins!")
    } else {
        return ("Player wins!")
    }
}

console.log(game())



/* 
get computer choice
get player choice
determine winner
play 5 rounds
display computer choice, player choice, winner of round, winner of game
*/
