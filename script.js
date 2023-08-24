/* Function that returns a random number between 0 and 2 */
function getRandom() {
    return (Math.floor(Math.random() * 10) ) % 3;
}

/* Function that returns the computer's random choice */
function getComputerChoice() {
    return getRandom();
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

    winMessage = "";
    if (Score.playerScore === 5)
        winMessage += "You are the final winner!";
    else
        winMessage += "Computer is the final winner! You lost!";

    title.textContent = winMessage;
    description.textContent = "Play again?";
}








function startGame() {
    createPage();
    setUp();
}

function createPage() {
    document.body.innerHTML = "";
    const divHeader = document.createElement('div');
    divHeader.textContent = "Rock, Paper, Scissors";
    divHeader.classList.add('header');
    body.appendChild(divHeader);

    const divContent = document.createElement('div');
    divContent.classList.add('content');

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    const divInformation = document.createElement('div');
    divInformation.classList.add('information');
    title.textContent = "Choose your weapon!";
    title.classList.add('result');
    description.textContent = "- First to score 5 points wins -";
    description.classList.add('description');
    divInformation.appendChild(title);
    divInformation.appendChild(description);
    divContainer.appendChild(divInformation);

    const divScoreboard = document.createElement('div');
    divScoreboard.classList.add('scoreboard');
    parentPlayer.classList.add('playerside');
    parentPlayer.innerHTML = "";
    divPlayer.innerHTML = "";
    divPlayer.classList.add('player');
    const avatarImgPlayer = document.createElement('img');
    avatarImgPlayer.setAttribute('src','./images/man.png');
    avatarImgPlayer.setAttribute('alt','man-icon');
    const pScorePlayer = document.createElement('p');
    pScorePlayer.classList.add('description');
    pScorePlayer.textContent = "Score: ";
    playerScore.classList.add('playerscore');
    playerScore.textContent = "0";
    pScorePlayer.appendChild(playerScore);
    divPlayer.appendChild(avatarImgPlayer);
    divPlayer.appendChild(pScorePlayer);
    parentPlayer.appendChild(divPlayer);
    const playerChoiceImg = document.createElement('img');
    playerChoiceImg.setAttribute('src','./images/loading.gif');
    playerChoiceImg.setAttribute('alt','Loading Gif');
    parentPlayer.appendChild(playerChoiceImg);
    divScoreboard.appendChild(parentPlayer);

    /* COMPUTERSIDE */
    parentComputer.classList.add('computerside');
    parentComputer.innerHTML = "";
    const computerChoiceImg = document.createElement('img');
    computerChoiceImg.setAttribute('src','./images/check.png');
    computerChoiceImg.setAttribute('alt','Check Icon');
    parentComputer.appendChild(computerChoiceImg);
    divComputer.innerHTML = "";
    divComputer.classList.add('computer');
    const avatarImgComputer = document.createElement('img');
    avatarImgComputer.setAttribute('src','./images/robot.png');
    avatarImgComputer.setAttribute('alt','Robot Icon');
    const pScoreComputer = document.createElement('p');
    pScoreComputer.textContent = "Score: ";
    pScoreComputer.classList.add('description');
    computerScore.textContent = "0";
    computerScore.classList.add('computerscore');
    pScoreComputer.appendChild(computerScore);
    divComputer.appendChild(avatarImgComputer);
    divComputer.appendChild(pScoreComputer);
    parentComputer.appendChild(divComputer);
    divScoreboard.appendChild(parentComputer);
    divContainer.appendChild(divScoreboard);

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons');

    rockButton.classList.add('rock');
    rockButton.innerHTML = "";
    const imgRockButton = document.createElement('img');
    imgRockButton.setAttribute('src','./images/rocks.png');
    imgRockButton.setAttribute('alt','rock');
    rockButton.appendChild(imgRockButton);

    paperButton.classList.add('paper');
    paperButton.innerHTML = "";
    const imgPaperButton = document.createElement('img');
    imgPaperButton.setAttribute('src','./images/parchment.png');
    imgPaperButton.setAttribute('alt','paper');
    paperButton.appendChild(imgPaperButton);

    scissorsButton.classList.add('scissors');
    scissorsButton.innerHTML = "";
    const imgScissorsButton = document.createElement('img');
    imgScissorsButton.setAttribute('src','./images/scissors.png');
    imgScissorsButton.setAttribute('alt','scissors');
    scissorsButton.appendChild(imgScissorsButton);

    divButtons.appendChild(rockButton);
    divButtons.appendChild(paperButton);
    divButtons.appendChild(scissorsButton);
    divContainer.appendChild(divButtons);
    divContent.appendChild(divContainer);
    body.appendChild(divContent);

    /* FOOTER */
    const divFooter = document.createElement('div');
    divFooter.textContent = "&copy Copyright Tiberiu Amarie - 2023";
    divFooter.classList.add('footer');
    body.appendChild(divFooter); 

}

function regame() {
    body.innerHTML = "";
    playButton.textContent = "PLAY AGAIN";
    body.appendChild(divHome);

    const result = document.querySelector('.result');
    result.textContent = winMessage;

    const info = document.querySelector('.information');
    const oldDesc = info.lastElementChild;
    info.removeChild(oldDesc);

    /* add a flex */
    const divResult = document.createElement('div');
    divResult.classList.add('buttons');
    divResult.appendChild(divPlayer);
    divResult.appendChild(divComputer);
    info.appendChild(divResult);

}

const body = document.querySelector('body');


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


let winMessage = "";

let Score = {
    playerScore : 0,
    computerScore : 0
};

let playerChoice;
let computerChoice;

let round = 0;
let roundWinner;

const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const playerScore = document.createElement('span');
const computerScore = document.createElement('span');
const title = document.createElement('h2');
const description = document.createElement('p');
const parentPlayer = document.createElement('div');
const parentComputer = document.createElement('div');



const playButton = document.querySelector('.playbutton');
const divHome = document.querySelector('.home');
const divInformationHome = document.querySelector('.information');

const divPlayer = document.createElement('div');
const divComputer = document.createElement('div');



playButton.addEventListener('click', () => {
    startGame()
});


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