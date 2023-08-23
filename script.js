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

    console.log(playerSelection);
    console.log(computerSelection);

    const oldPlayerChoice = parentPlayer.lastElementChild;
    const oldComputerChoice = parentComputer.firstElementChild;

    let newPlayerChoice = null;
    let newComputerChoice = null;

    if(playerSelection === 0)
        newPlayerChoice = rockPlayerImg;
    if(computerSelection === 0)
        newComputerChoice = rockComputerImg;

    if(playerSelection === 1)
        newPlayerChoice = paperPlayerImg;
    if(computerSelection === 1)
        newComputerChoice = paperComputerImg;

    if(playerSelection === 2)
        newPlayerChoice = scissorsPlayerImg;
    if(computerSelection === 2)
        newComputerChoice = scissorsComputerImg;

    console.log(parentPlayer);
    console.log(parentComputer);
    console.log(oldComputerChoice);
    console.log(oldPlayerChoice);
    console.log(newPlayerChoice);
    console.log(newComputerChoice);
    parentPlayer.replaceChild(newPlayerChoice,oldPlayerChoice);
    parentComputer.replaceChild(newComputerChoice,oldComputerChoice);
    
    const choices = ["Rock", "Paper", "Scissors"];
    let winner = calculateWinner(playerSelection,computerSelection);
    updateScore(winner,Score);


    let titleW = "";
    let descriptionW = "";

    if(winner === "Computer") {
        titleW += "You lost!";
        descriptionW += choices[computerSelection] + " beats " + choices[playerSelection];
    }
    else if(winner === "Player") {
        titleW += "You won!";
        descriptionW += choices[playerSelection] + " beats " + choices[computerSelection];
    }
    else {
        titleW += "It's a tie!"
        descriptionW += choices[computerSelection] + " ties " + choices[playerSelection];

    }
        

    displayRoundWinner(titleW,descriptionW);

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

    playerScore.textContent = Score.playerScore = 0;
    computerScore.textContent = Score.computerScore = 0;
    round = 0;
}

/* Function that returns if a game has ended */
function gameEnd(playerScore, computerScore) {
    return (playerScore === 5 || computerScore === 5);
}

/* Function that displays the round winner */
function displayRoundWinner(titleW,descriptionW) {
    title.textContent = titleW;
    description.textContent = descriptionW;
    console.log(titleW);
    console.log(descriptionW);
}

function updateScore(roundWinner,Score) {

    if(roundWinner === "Player")
        Score.playerScore++;
    else if(roundWinner === "Computer")
        Score.computerScore++;

    playerScore.textContent = Score.playerScore;
    computerScore.textContent = Score.computerScore;
}

/* Function that displays the finnal winner */
function displayFinnalWinner(Score) {

    let winMessage = "";
    if (Score.playerScore === 5)
        winMessage += "You are the final winner!";
    else
        winMessage += "Computer is the final winner!";

    title.textContent = winMessage;
    description.textContent = "Play again?";
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

const paperPlayerImg = document.createElement('img');
paperPlayerImg.setAttribute('src','./images/parchment.png');
paperPlayerImg.setAttribute('alt','Paper Image');
const paperComputerImg = document.createElement('img');
paperComputerImg.setAttribute('src','./images/parchment.png');
paperComputerImg.setAttribute('alt','Paper Image');

const scissorsPlayerImg = document.createElement('img');
scissorsPlayerImg.setAttribute('src','./images/scissors.png');
scissorsPlayerImg.setAttribute('alt','Scissors Image');
const scissorsComputerImg = document.createElement('img');
scissorsComputerImg.setAttribute('src','./images/scissors.png');
scissorsComputerImg.setAttribute('alt','Scissors Image');


const parentPlayer = document.querySelector('.playerside');
const parentComputer = document.querySelector('.computerside');



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