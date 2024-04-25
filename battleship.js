var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;
var allowedGuess = [0,1,2,3,4,5,6]

while (isSunk == false) {
    guess = prompt("Ready, aim, Fire! (enter number between 0-6):");
    if (guess == null){
        alert('GAME OVER!!')
        console.log('canceled')
        break
    } if (!allowedGuess.includes(parseInt(guess))){
        alert('Please enter a valid guess!')
        console.log('not a valid guess')
    } else {
        guesses += 1
        console.log('yeay guesses right!')
    } 
    
    if (guess == location1 || guess == location2 || guess == location3){
        hits += 1
        alert("HIT!")
    } else {
        alert("MISS!")
    }
    
    if (hits == 3) {
        isSunk = !isSunk
        alert('Congratulations!! You sank my battleship!!')
    }
}
var stats = `"You took ${guesses} shoots to sunk a battleships!"\n"which means you shoot accuracy was ${(3/guesses).toFixed(2)}"`;
alert(stats)