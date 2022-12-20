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

const container = document.querySelector('#container');
const something = document.createElement('div');
something.textContent = "something";
container.appendChild(something);

let plyr = 0;
let cmptr = 0;
let counter=0;

let playerSelection;

let result;

function selector (para) {
    playerSelection=para;
    playRound();
    console.log(result);
    keepScore();
    return;
}

document.getElementById("roc").addEventListener("click", () =>{
    selector("rock")
})
document.getElementById("pap").addEventListener("click", ()=>{
    selector("paper");
})
document.getElementById("sci").addEventListener("click", ()=>{
    selector("scissors");
})


//Function to call out the result of matches.//
function playRound () {

    //Asking for player's selection//
    //let playerSelection = (prompt("Rock, paper, scissors?")).toLowerCase();
    console.log(playerSelection);

    let computerSelection = getComputerSelection();
    console.log(computerSelection);


    if ((computerSelection === "paper") && (playerSelection === "rock")) {
        cmptr++;
        result = "You lose, paper beats rock!";
    }
    else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        cmptr++;
        result = "You lose, rock beats scissors!";
    }

    else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        cmptr++;
        result = "You lose, scissors beats paper!";
    }
    
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        plyr++;
        result = "You won, rock beats scissors!";
    }
    
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        plyr++;
        result = "You won, scissors beats paper!";
    }
    else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        plyr++;
        result = "You won, paper beats rock!";
    }
    else {
        counter++;
        result = "No winner!";
    }
}


//Function to count score//
function keepScore () {    
    if (plyr+cmptr+counter !==5) {
        const score = document.createElement('div');
        score.classList.add('score');
        score.textContent = "You are:"+plyr+""+"Computer:"+cmptr;
        container.appendChild(score);
    }    
    else if ((plyr+cmptr+counter ===5)&& plyr>cmptr){
        const score = document.createElement('div');
        score.classList.add('score');
        score.textContent = "You won! You are:"+plyr+""+"Computer:"+cmptr;
        container.appendChild(score);
    }
    else if (plyr<cmptr){
        const score = document.createElement('div');
        score.classList.add('score');
        score.textContent = "You lost! You are:"+plyr+""+"Computer:"+cmptr;
        container.appendChild(score);
    }
    else {
        const score = document.createElement('div');
        score.classList.add('score');
        score.textContent = "Draw! You are:"+plyr+""+"Computer:"+cmptr;
        container.appendChild(score);
    }
    return;
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