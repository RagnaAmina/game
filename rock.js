

const displayResult = document.getElementById('results');
const computerChoice = document.getElementById('computer-choice');
const randomNumber = Math.round(Math.random() *(2));
const userChoice =  document.getElementById('user-choice');
const possibleChoices  = document.querySelectorAll('.choices');

possibleChoices.forEach( possibleChoices => possibleChoices.addEventListener('click', (e) => {
 userChoice = e.target.id ; 
 userChoice.innerText = userChosen;
 computerChoice.innerText = computerChosen;
 document.write(displayResult);

}));

console.log(randomNumber)

function generatedComputerChoice() {
    if (randomNumber === 0) {
        return computerChoice = "rock";
    } else if ( randomNumber === 1) {
        return computerChoice = "paper";
    }else if ( randomNumber === 2) {
        return computerChoice = "scissors";
} console.log("randomNumber");
console.log("computerChoice");

function displayResult() {
    if (computerChoice  === userChoice) {
        return result ='There was a tie';
    } else  if( computerChoice === 'rock' && userChoice === 'paper') {
     return result = 'you lost';
    } else  if( computerChoice === 'rock' && userChoice === 'scissors') {
        return result = 'you lost';
    } else  if( computerChoice === 'rock' && userChoice === 'lizard') {
        return result = 'you lost';


    } else  if( computerChoice === 'paper' && userChoice === 'rock') {
        return result = 'you lost';
    } else  if( computerChoice === 'paper' && userChoice === 'scissors') {
        return result = 'you win';


    } else  if( computerChoice === 'scissors' && userChoice === 'rock') {
        return result = 'you win';
    } else  if( computerChoice === 'scissors' && userChoice === 'paper') {
        return result = 'you lost';
    
    } else  if( computerChoice === 'lizard' && userChoice === 'spock') {
        return result = 'you win';
    } else  if( computerChoice === 'lizard' && userChoice === 'paper') {
        return result = 'you win';


    } else  if( computerChoice === 'spock' && userChoice === 'rock') {
        return result = 'you win';
    } else  if( computerChoice === 'spock' && userChoice === 'scissors') {
        return result = 'you win';
    }}}; 

    console.log(displayResult);