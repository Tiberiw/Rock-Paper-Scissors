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
    return "Rock";
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
    
    let playerScore = 0,
        computerScore = 0;

    let playerChoice;
    let computerChoice;

    let round = 0;
    while(play) {

        // ANNOUNCE THE ROUND
        console.log("ROUND " + ++round + ":")

        computerChoice = getComputerChoice(choices);
        playerChoice = getPlayerChoice(choices);

        if(gameEnd(playerScore,computerScore))
            play = !play;
    }


}

/* Function that returns if a game has ended */
function gameEnd(playerScore, computerScore) {
    return (playerScore === 5 || computerScore === 5);
}