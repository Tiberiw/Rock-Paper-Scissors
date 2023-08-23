/* Function that returns a random number between 0 and 2 */
function getRandom() {
    return (Math.floor(Math.random() * 10) ) % 3;
}

/* Function that returns the computer's random choice */
function getComputerChoice() {
    return getRandom();
}

/* Function that returns the player's choice */
function getPlayerChoice(choices) {

    let choice = null;
    while(!valid(choice,choices)) {
        choice = prompt("Choose : Rock / Paper / Scissors")
    }
    
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    return choice;
}

/* Function that simmulates one game */
function playRound(playerSelection,computerSelection) {
    
    const choices = ["Rock", "Paper", "Scissors"];
    let winner = calculateWinner(playerSelection,computerSelection);
    updateScore(winner,Score);


    let message = "";

    if(winner === "Computer")
        message += "You lost! " + choices[computerSelection] + " beats " + choices[playerSelection];
    else if(winner === "Player")
        message += "You won! " + choices[playerSelection] + " beats " + choices[computerSelection];
    else
        message += "It's a tie!"

    displayRoundWinner(message);

}

/* Function that calculates the winner of a round 

    return : "Tie" / "Computer" / "Player"
*/
function calculateWinner(playerSelection,computerSelection) {

    if(playerSelection === computerSelection)
        return "Tie";

    if ((playerSelection === 0 && computerSelection === 1) || 
        (playerSelection === 1 && computerSelection === 2) ||
        (playerSelection === 2 && computerSelection === 0))
        return "Computer";

    return "Player";
}


/* Function that simulates the entire game */
function setUp() {    

    Score.playerScore = 0;
    Score.computerScore = 0;
    round = 0;

}

/* Function that returns if a game has ended */
function gameEnd(playerScore, computerScore) {
    return (playerScore === 5 || computerScore === 5);
}

/* Function that displays the round winner */
function displayRoundWinner(roundWinner) {
    console.log(roundWinner);
}

function updateScore(roundWinner,Score) {

    if(roundWinner === "Player")
        Score.playerScore++;
    else if(roundWinner === "Computer")
        Score.computerScore++;
}

/* Function that displays the finnal winner */
function displayFinnalWinner(Score) {

    let winMessage = "";
    if (Score.playerScore === 5)
        winMessage += "You are the final winner!";
    else
        winMessage += "Computer is the final winner!";

    console.log(winMessage);
}

/* Function to ask the player of one more game */
function regame() {
    setUp();
}


const rockButton = document.querySelector('button.rock');
const paperButton = document.querySelector('button.paper');
const scissorsButton = document.querySelector('button.scissors');
const title = document.querySelector('h2.result');
const description = document.querySelector('p.description');
const playerScore = document.querySelector('span.playerscore');
const computerScore = document.querySelector('span.computerscore');
const playerChoiceImg = document.querySelector('.playerside img');
const computerChoiceImg = document.querySelector('.computerside img');

const rockPlayerImg = document.createElement('img');
rockPlayerImg.setAttribute('src','./images/rocks.png');
rockPlayerImg.setAttribute('alt','Rock Image');
const rockComputerImg = document.createElement('img');
rockComputerImg.setAttribute('src','./images/rocks.png');
rockComputerImg.setAttribute('alt','Rock Image');



let Score = {
    playerScore : 0,
    computerScore : 0
};

let playerChoice;
let computerChoice;

let round = 0;
let roundWinner;


rockButton.addEventListener('click', () => {

    playerChoice = 0;
    computerChoice = getComputerChoice();
    playRound(playerChoice,computerChoice);

    console.log("SCORE : \n HUMAN " + Score.playerScore + " VS COMPUTER " + Score.computerScore);
    console.log("ROUND " + ++round + ":")

    if(gameEnd(Score.playerScore,Score.computerScore)) {
        displayFinnalWinner(Score);
        regame();
    }
        

    

});
paperButton.addEventListener('click', () => {

    playerChoice = 1;
    computerChoice = getComputerChoice();
    playRound(playerChoice,computerChoice);

    console.log("SCORE : \n HUMAN " + Score.playerScore + " VS COMPUTER " + Score.computerScore);
    console.log("ROUND " + ++round + ":")

    if(gameEnd(Score.playerScore,Score.computerScore)) {
        displayFinnalWinner(Score);
        regame();
    }
        

    

});
scissorsButton.addEventListener('click', () => {



    playerChoice = 2;
    computerChoice = getComputerChoice();
    playRound(playerChoice,computerChoice);
    console.log("SCORE : \n HUMAN " + Score.playerScore + " VS COMPUTER " + Score.computerScore);
    console.log("ROUND " + ++round + ":")

    if(gameEnd(Score.playerScore,Score.computerScore)) {
        displayFinnalWinner(Score);
        regame();
    }
        

    

});


setUp();