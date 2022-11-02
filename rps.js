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
let playerSelection =  (prompt("Rock, paper, or scissors","Choose your destiny.")).toLowerCase;



