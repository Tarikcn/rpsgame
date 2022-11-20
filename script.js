// Variables that don't change - STATIC
var choices = ['r', 'p', 's'];
var winningConditions = ['pr', 'rs', 'sp'];
// Stat variables that will change - DYNAMIC
var wins = 0, losses = 0, ties = 0;

while (true) {
  var compChoice = choices[Math.floor(Math.random() * choices.length)];
  var userChoice = prompt('Choose Rock(r), paper(p) or scissors(s)?');
  var result = userChoice + compChoice;

  alert(`The computer chose ${compChoice}`);

  if (compChoice === userChoice) {
    ties++;
    alert('You tied.');
  } else if (winningConditions.includes(result)) {
    wins++;
    alert('You won!');
  } else {
    losses++;
    alert('You lost...');
  }
  // alert('Wins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties);
  alert(`Wins: ${wins}\nLosses: ${losses}\nTies:${ties}`);

  var continuePlaying = confirm('Would you like to continue playing?');

  if (continuePlaying === false) {
    document.body.innerText = 'Thanks for playing!';
    break;
  }
}