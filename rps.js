//computers play//
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

//randomly generating a move for the computer//
function getComputerSelection() {
    
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

let counter;

//Function to call out the result of matches.//
function playRound () {

    //Asking for player's selection//
    let playerSelection = (prompt("Rock, paper, scissors?")).toLowerCase();
    console.log(playerSelection);

    let computerSelection = getComputerSelection();
    console.log(computerSelection);


    if ((computerSelection === "paper") && (playerSelection === "rock")) {
        counter = 0;
        return("You lose, paper beats rock!");
    }
    else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        counter = 0;
        return("You lose, rock beats scissors!");
    }

    else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        counter = 0;
        return("You lose, scissors beats paper!");
    }
    
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        counter = 1;
        return("You won, rock beats scissors!");
    }
    
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        counter = 1;
        return("You won, scissors beats paper!");
    }
    else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        counter = 1;
        return("You won, paper beats rock!");
    }
    else return("No winner!")

}

//Function to count score//
function score () {
    let plyr=0;
    let cmptr=0;
    if (counter > 0) {
        plyr++;
    }
    
    else cmptr++;
    return("You:"+plyr+" "+"Computer:"+cmptr);
}

function game() {
    for (i=0; i<5; i++) {
        playRound();
        score();
    }
}