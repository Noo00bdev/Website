

/*
let name = prompt("What is your name?");

function greet(n) {
        alert(`Hello, ${n}!`);
}
greet(name);

*/
/*
function getRandomInt(max) {
  return Math.floor(Math.random() * max); // Generates a random integer from 0 to max-1
}
let i = 0;
let number = getRandomInt(11);
console.log(number);
function guess(){
    let guess = prompt("Guess a number between 0 and 10")*1;
    return guess;
}
while (i < 3) {
    let userGuess = guess();
    Isright(userGuess, number);
    i++;
    if (Isright(userGuess, number)) {
        console.log("You guessed it right!");
        break;
    } 
}
function Isright(guess, number) {
    if (guess === number) {
        return true;
    }
}
*/
function Ispremier(n){
    if (n < 2) {
        console.log("The number is not prime " + n);
    } else if( n % 1== 0 && n % n === 0) {
        console.log("The number is prime " + n);
    }
}
let i = 0 ;
while (i < 3) {
    Ispremier(i);
    i++;
}