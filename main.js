// Randomly generates a choice for the copmputer
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1)
    console.log(choice)
    
    switch(choice) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Input rock, paper or scissors: ", "rock")
    choice.toLowerCase()
    return choice
}

function playRound(humanSecletion, computerSelection) { 
    let result = 0;   
    if(humanSecletion == "rock" || "paper" || "scissors") {
        if(humanSecletion == computerSelection) {
            result = "draw"
        } else if(humanSecletion == "rock") {
            result = computerSelection == "paper" ? "loss" : "win"
        } else if(humanSecletion == "paper") {
            result = computerSelection == "rock" ? "win" : "loss"
        } else {
            result = computerSelection == "rock" ? "loss" : "win"
            }
        console.log("Your selection: " + humanSecletion)
        console.log("Computer selection: " + computerSelection)
        console.log("You " + result)
        } else {
            console.log("Please enter a valid number!")
        }
    }

function playGame() {
    humanScore = getHumanChoice()
    computerScore = getComputerChoice()

    playRound(humanScore, computerScore)
    
    humanScore = getHumanChoice()
    computerScore = getComputerChoice()

    playRound(humanScore, computerScore)
    
    humanScore = getHumanChoice()
    computerScore = getComputerChoice()

    playRound(humanScore, computerScore)
    
    humanScore = getHumanChoice()
    computerScore = getComputerChoice()

    playRound(humanScore, computerScore)
    
    humanScore = getHumanChoice()
    computerScore = getComputerChoice()

    playRound(humanScore, computerScore)

}

playGame()