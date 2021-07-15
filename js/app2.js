'use strict';

// // proof of life
// console.log('hello world');

// // get the users name... make sure this is a valid name
// let userName = prompt('What is your name?');
// console.log(userName);
// // empty string is they don't type anything
// // null if they hit cancel
// while(!userName) {// BANG! (opposite day)
// // while (userName === '' || userName === null){
//   // ask them again
//   userName = prompt('That was not a real name, please try again...\nEnter your name.')
//   // will continue to loop until the conditions are met
// }
// alert('Congratulations, you can read!\nThanks for visiting my site, ' + userName + '.');
// console.log('This is the current user\s name: ' userName);

// // use a comparison operator to check something
// // if my user is not mickey mouse, tell them I am disappointed
// if (userName !== 'Mickey Mouse') {
//   alert('I was hoping you would be someone else');
//   console.log('Not Mickey Mouse');
// }

// revisiting arrays
const snackArray = ['dole whip', 'pickles'];
console.log('this is the current snack array', snackArray);
// prototype is the method in which inheritance occurs in javascript
snackArray.push('popcorn');
// push adds items to the end of the array
// pop removes off from the beginning
snackArray.unshift('mickey pretzel');
// unshift adds to the beginning

// index of
console.log('This is the index of dole whip ', snackArray.indexOf('dole whip'));

// length property
console.log('This is the length of our snack array ', snackArray.length);

// checkout array.splice()

let snackGuess = prompt('can you guess one of my favorite snacks?');
console.log('The user guessed my favorite snack was ', snackGuess);

// is there a way to check? YES! we can itterate through the array and compare the value to each spot in the array

let correctAnswer = false; // flag
for (let i = 0; i < snackArray.length; i++) {
  if (snackGuess === snackArray[i]) {
    alert('Congratulations, you got it!');
    correctAnswer = true;
  }
  if (i === snackArray.length - 1 && !correctAnswer) { // BANG! (opposite day)
    alert('Sorry you got it wrong. Correct answers were: ' + snackArray);
  }
}

let array = ['one', 'two', 'three', 'four', 'five', 'six'];
for (let i = 0; i < Array.length; i++) {
  for (let j = 0; j < 6; j++) {

    debugger;

    let currentArrayVal = array[i];
    console.log(j, array[i]);
  }
}
