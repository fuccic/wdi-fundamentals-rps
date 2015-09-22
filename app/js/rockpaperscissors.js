////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
   if (playerMove === 'rock' && computerMove === "scissors") {
       winner = 'player';
   } else if (playerMove === 'scissors' && computerMove === 'paper') {
       winner = 'player';
   } else if (playerMove === 'paper' && computerMove === 'rock') {
       winner = 'player';
   } else if (playerMove === computerMove) {
       winner = 'tie';
   } else {
       winner = 'computer';
   }
   return winner;
}
function playToFive() {
   console.log("Let's play Rock, Paper, Scissors");
   var playerWins = 0;
   var computerWins = 0;
   while (playerWins < 5 && computerWins < 5) {
       var playerMove = getPlayerMove();
       var computerMove = getComputerMove();
       var winner = getWinner(playerMove, computerMove);
       console.log("Player played " + playerMove + " and Computer played " + computerMove + "!");
       if (winner === 'player') {
           console.log("Player won that round!");
           playerWins += 1;
       } else if (winner === 'computer') {
           console.log("Computer won that round!");
           computerWins += 1;
       } else {
           console.log("That round was a tie!");
       }
       console.log("The score is Player: " + playerWins + " to Computer: " + computerWins + "!");
   }
   return [playerWins, computerWins];
}
playToFive();
