//computers play//
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function getComputerSelection() {
    
    //randomly generating a move for the computer//

    let a = Math.floor(Math.random() * 30)
    console.log(a);
    
    if (a < 10) {
        return(rock);
    }
    else if (a > 20){
        return(paper);
    }
    else return(scissors);
}

let computerSelection = getComputerSelection();

console.log(computerSelection);

function playRound (playerSelection) {
    if ((computerSelection === "paper") && (playerSelection === "rock")) {
        return("You lose, paper beats rock!");
    }
    else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        return("You lose, rock beats scissors!");
    }

    else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        return("You lose, scissors beats paper!");
    }
    
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        return("You won, rock beats scissors!");
    }
    
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        return("You won, scissors beats paper!");
    }
    else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        return("You won, paper beats rock!");
    }
    else return("No winner!")

}
