
const choices = ["rock", "paper", "scissors"]

function game() {
    if (getPlayerChoice() === undefined) {
        return ("Fine, don't play then.")
    } else {
        for(i=0; i<4;i++) {
            round()
        }
    }

}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

/*function getPlayerChoice() {
    let x = window.prompt("Write Rock, Paper, or Scissors")
    if(x === null){
        return
    } else {
        return x.toLowerCase()
    }
}*/
let playerChoice = ""
function round() {

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

let playerChoices = []
let computerChoices = []
let roundWins = []

function fullGame() {
    for (i = 0; i < 5; i++) {
        computerChoices.push(getComputerChoice())
    }

    for (i = 0; i < 5; i++) {
        roundWins.push(checkWinner(playerChoices[i], computerChoices[i]))
    }

    console.log(playerChoices)
    console.log(computerChoices)
    console.log(roundWins)

    playerChoices.length = 0
    computerChoices.length = 0
    roundWins.length = 0
}



const gameContainer = document.querySelector(".game")

const playerChoicesDisplay = document.createElement('div')
playerChoicesDisplay.classList.add("playerChoicesDisplay")

gameContainer.appendChild(playerChoicesDisplay)

const computerChoicesDisplay = document.createElement('div')
computerChoicesDisplay.classList.add("computerChoicesDisplay")

gameContainer.appendChild(computerChoicesDisplay)

const scissorsButton = document.querySelector("#scissors")

scissorsButton.addEventListener('click', e => {
    playerChoices.push("scissors")
    if (playerChoices.length === 5){
        fullGame()
    }
})

const paperButton = document.querySelector("#paper")

paperButton.addEventListener('click', e => {
    playerChoices.push("paper")
    if (playerChoices.length === 5){
        fullGame()
    }
})

const rockButton = document.querySelector("#rock")

rockButton.addEventListener('click', e => {
    playerChoices.push("rock")
    if (playerChoices.length === 5){
        fullGame()
    }
    playerChoicesDisplay.textContent = playerChoices.toString()
    computerChoicesDisplay.textContent = computerChoices.toString()
})


/* 
get computer choice
get player choice
determine winner
play 5 rounds
display computer choice, player choice, winner of round, winner of game
*/
