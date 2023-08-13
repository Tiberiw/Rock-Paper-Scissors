/* Function that returns a random number between 0 and 2 */
function getRandom() {
    return (Math.floor(Math.random() * 10) ) % 3;
}

/* Function that returns the computer's random choice */
function getComputerChoice(choices) {
    return choices[getRandom()];
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

/* Function that validates the players choice */
function valid(choice, choices) {
    if(choice === "" || choice == null)
        return false;
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    for(let i = 0; i < choices.length; i++)
        if(choices[i] === choice)
            return true;
    
    return false;
}

/* Function that simmulates one game */
function playRound(playerSelection,computerSelection) {
    
    let message = "";

    let winner = calculateWinner(playerSelection,computerSelection);

    if(winner === "Computer")
        message += "You lost! " + computerSelection + " beats " + playerSelection;
    else if(winner === "Player")
        message += "You won! " + playerSelection + " beats " + computerSelection;
    else
        message += "It's a tie!"

    return message;
}

/* Function that calculates the winner of a round */
function calculateWinner(playerSelection,computerSelection) {

    if(playerSelection === computerSelection)
        return "Tie";

    if ((playerSelection === "Rock" && computerSelection === "Paper") || 
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock"))
        return "Computer";

    return "Player";
}


/* Function that simulates the entire game */
function game() {

    let choices = ["Rock", "Paper", "Scissors"];


    /* First to five */
    let play = true;
    
    let Score = {
        playerScore : 0,
        computerScore : 0
    };

    let playerChoice;
    let computerChoice;

    let round = 0;
    let roundWinner;
    while(play) {

        // ANNOUNCE THE ROUND
        console.log("SCORE : \n HUMAN " + Score.playerScore + " VS COMPUTER " + Score.computerScore);
        console.log("ROUND " + ++round + ":")

        computerChoice = getComputerChoice(choices);
        playerChoice = getPlayerChoice(choices);

        // play the round and get the winner message.
        roundWinner = playRound(playerChoice,computerChoice);

        updateScore(roundWinner,Score);

        //ANNOUNCE THE ROUND WINNER
        displayRoundWinner(roundWinner);

        if(gameEnd(Score.playerScore,Score.computerScore))
            play = !play;
        
    }

    //ANNDOUNCE THE FINAL WINNER
    displayFinnalWinner(Score);

    regame();
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
    let winMessage = roundWinner.split("!")[0];

    if(winMessage === "You won")
        Score.playerScore++;
    else if(winMessage === "You lost")
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
    let replay = prompt("Do you want to replay?","Yes/No");

    if(replay == null)
        return;

    replay = replay.toLowerCase();
    replay = replay.charAt(0).toUpperCase() + replay.slice(1);
    if(replay === "Yes")
        game();
}