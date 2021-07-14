'use strict';

console.log('hello world!');

// ask a few questions and use if statements (conditional statements) or switch statements to reply with a unique alert;

// 1 == '1'; - truthy same value but not same type
// 1 === '1' - falsey not the same type even though the value is the same

// Greeting
let userName = prompt('Hello! What is your name?');
let alertReturnName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
alert('Welcome to my page, ' + alertReturnName + '! 👋\nThanks for coming by!\nLet\'s play a guessing game.');
console.log(alertReturnName);
// document.write(userName);


// Live Question
let liveOrig = prompt('Would you guess that I live in Chicago?');
// console.log(liveOrig);

let live = liveOrig.toLowerCase();
// console.log(live);

if (live === 'yes' || live === 'y') {
  alert('Wrong, but I used to! I actually live in Seattle now.');
} else if (live === 'no' || live === 'n') {
  alert('That\'s right! I recently moved and now live in Seattle.');
} else {
  alert('Sorry, I didn\'t get that.');
}


// Dog Question
let dogOrig = prompt('Do I have a dog?');
// console.log(dogOrig);

let dog = dogOrig.toLowerCase();
// console.log(dog);

if (dog === 'yes' || dog === 'y') {
  alert('Incorrect. I am a cat dad. But maybe in the future?');
} else if (dog === 'no' || dog === 'n') {
  alert('Correct! No dogs here. Just a couple of jerk cats.');
} else {
  alert('Sorry, I didn\'t get that.');
}


// Movie Question
let movieOrig = prompt('Is my favorite movie Star Wars?');
// console.log(movieOrig);

let movie = movieOrig.toLowerCase();
// console.log(movie);

if (movie === 'yes' || movie === 'y') {
  alert('Nope, it\'s actually The Matrix, and Blade Runner is a close second. Don\'t hate!');
} else if (movie === 'no' || movie === 'n') {
  alert('You\'re right! My favorite movie has always been The Matrix,\n and I CANNOT WAIT for the new one.');
} else {
  alert('Sorry, I didn\'t get that.');
}


// Florist Question
let floristOrig = prompt('Was I ever a florist?');
// console.log(floristOrig);

let florist = floristOrig.toLowerCase();
// console.log(florist);

if (florist === 'yes' || florist === 'y') {
  alert('Correct! Fun random fact, I worked as a floral designer for a while way back in my early twenties.');
} else if (florist === 'no' || florist === 'n') {
  alert('Fun little tidbit, I actually WAS a floral designer for a while way back in my early twenties.');
} else {
  alert('Sorry, I didn\'t get that.');
}


// Funny Question
let funnyOrig = prompt('Am I funny?');
// console.log(funnyOrig);

let funny = funnyOrig.toLowerCase();
// console.log(funny);

if (funny === 'yes' || funny === 'y') {
  alert('Why thank you, I am quite flattered that you think so.');
} else if (funny === 'no' || funny === 'n') {
  alert('To quote The Dude, "Well, you know, that\'s just like your opinion, man."');
} else {
  alert('Sorry, I didn\'t get that.');
}


// Thanks for playing.
alert('Thanks for playing, ' + alertReturnName + '! \nHope to see you again soon!');
// console.log(alertReturnName);



// switch statement for many options

// let funLevel = prompt('scale of 1-3, how fun?');
// console.log(typeof funLevel);

// let funLevelNumber = parseInt(funLevel);
// make default if they don't give us a number
// let funLevelNumber = Number(funLevel);
// isNaN()

// debugger;
// switch (funLevel) {
//   case '1':
//     alert('you should try again');
//     break; // break out of the block here!
//   case '2':
//     alert('Should not have had the Turkey Leg!');
//     break;
//   case '3':
//     alert('Awesome, we should go together');
//     break;
//   case NaN:
//     alert('you silly monkey');
//     break;
//   default:
//     alert('Let me help you plan your next trip');
// }
