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
    else {
        counter = 2;
        return("No winner!");
    }
}

let plyr = 0;
let cmptr = 0;

//Function to count score//
function keepScore () {    
    if (counter === 1) {
        plyr++;
    }
    
    else if (counter === 0) {
        cmptr++;
    }    
    else return;
}
//final function to start a game of n rounds//
function game(n) {
    for (let i=0; i<n; i++) {
        playRound();
        keepScore();
        console.log("You:"+plyr+" "+"Computer:"+cmptr);
    }
    return(console.log("Final score! "+"You:"+plyr+" "+"Computer:"+cmptr));
}