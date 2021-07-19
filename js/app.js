'use strict';

console.log('hello world!');

// Greeting
let userName = prompt('Hello! What is your name?');
while (userName === '' || userName === null) {
  userName = prompt('That was not a real name, please try again...\nEnter your name.');
}
// will continue to loop until the conditions are met
let alertReturnName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
alert('Welcome to my page, ' + alertReturnName + '! 👋\nThanks for coming by!\nLet\'s play a guessing game.');
console.log('The user\'s name is ' + alertReturnName);

let score = 0;


// Live Question
function liveFunc() {
  let liveOrig = prompt('Would you guess that I live in Chicago?');
  // console.log(liveOrig);

  let live = liveOrig.toLowerCase();
  console.log('Your answer: ' + live);

  if (live === 'yes' || live === 'y') {
    alert('Wrong, but I used to! I actually live in Seattle now.');
  } else if (live === 'no' || live === 'n') {
    alert('That\'s right! I recently moved and now live in Seattle.');
    score++;
  } else {
    alert('Sorry, I didn\'t get that.');
  }
}

liveFunc();

// Dog Question
function dogFunc() {
  let dogOrig = prompt('Do I have a dog?');
  // console.log(dogOrig);

  let dog = dogOrig.toLowerCase();
  console.log('Your answer: ' + dog);

  if (dog === 'yes' || dog === 'y') {
    alert('Incorrect. I am a cat dad. But maybe in the future?');
  } else if (dog === 'no' || dog === 'n') {
    alert('Correct! No dogs here. Just a couple of jerk cats.');
    score++;
  } else {
    alert('Sorry, I didn\'t get that.');
  }
}

dogFunc();

// Veggie Question
function veggieFunc() {
  let veggieOrig = prompt('Is my favorite vegetable mushrooms?');
  // console.log(veggieOrig);

  let veggie = veggieOrig.toLowerCase();
  console.log('Your answer: ' + veggie);

  if (veggie === 'yes' || veggie === 'y') {
    alert('Correct! Mushrooms are delicious.');
    score++;
  } else if (veggie === 'no' || veggie === 'n') {
    alert('Wrong, it actually IS mushrooms!\nMmmmmm delicious mushrooms...');
  } else {
    alert('Sorry, I didn\'t get that.');
  }
}

veggieFunc();

// Florist Question
function floristFunc() {
  let floristOrig = prompt('Was I ever a florist?');
  // console.log(floristOrig);

  let florist = floristOrig.toLowerCase();
  console.log('Your answer: ' + florist);

  if (florist === 'yes' || florist === 'y') {
    alert('Correct! Fun random fact, I worked as a floral designer for a while way back in my early twenties.');
    score++;
  } else if (florist === 'no' || florist === 'n') {
    alert('Fun little tidbit, I actually WAS a floral designer for a while way back in my early twenties.');
  } else {
    alert('Sorry, I didn\'t get that.');
  }
}

floristFunc();

// Funny Question
function funnyFunc() {
  let funnyOrig = prompt('Am I funny?');
  // console.log(funnyOrig);

  let funny = funnyOrig.toLowerCase();
  console.log('Your answer: ' + funny);

  if (funny === 'yes' || funny === 'y') {
    alert('Why thank you, I am quite flattered that you think so.');
  } else if (funny === 'no' || funny === 'n') {
    alert('To quote The Dude, "Well, you know, that\'s just like your opinion, man."');
    score++;
  } else {
    alert('Sorry, I didn\'t get that.');
  }
}

funnyFunc();

// Guess a number between 1 and 20
function numberFunc() {
  let correctNumberAnswer = 12;
  let count = 4;
  for (let i = 0; i < count; i++) {
    console.log(i);
    let userNumberGuess = prompt('Can you guess the lucky number from my childhood?\nIt\'s between 1 and 20.');
    let intUserNumber = parseInt(userNumberGuess);
    console.log('Your answer: ' + intUserNumber);
    while (userNumberGuess <= 0 || userNumberGuess > 20) {
      userNumberGuess = alert('The number is between 1 and 20!');
    }

    if (intUserNumber === correctNumberAnswer) {
      alert('You got it!\nGrowing up, I was always number 12 when I played sports.');
      score++;
      break;
    } else if (userNumberGuess < correctNumberAnswer && i < 3) {
      alert('A little more...');
    } else if (userNumberGuess > correctNumberAnswer && i < 3) {
      alert('A little less...');
    } else if (!intUserNumber) {
      alert('You know that\'s not a number...');
    }
    if (intUserNumber !== correctNumberAnswer && i === 3) {
      alert('Sorry, you didn\'t get it.\nMy lucky number was ' + correctNumberAnswer + '.');
    }
  }
}

numberFunc();

// Movie Array
function movieFunc() {
  const movieArray = ['the matrix', 'blade runner', 'beyond the black rainbow', 'lord of the rings', 'the big lebowski', 'the weather man', 'and the cable guy.'];

  let guesses = 6;
  let correctMovie = false; //flag

  for (let movieGuessCount = 0; movieGuessCount < 6; movieGuessCount++) {
    // starts loop
    // prompt user for guess
    let userMovieGuess = prompt('Do you think you could guess one of my favorite movies?\nYou have ' + guesses + ' attempts left.');
    console.log('Your answer: ' + userMovieGuess);
    // check for correct answers
    for (let i = 0; i < movieArray.length; i++) {
      if (userMovieGuess === movieArray[i]) {
        alert('Wow, you got one!');
        correctMovie = true; //flag
        score++;
        break;
      }
    }

    if (correctMovie) {
      alert('Nice guessing! Here are some of my favorites: ' + movieArray);
      break;
    }
    // if wrong on attempts 5-2, tell them to try again
    if (!correctMovie && guesses <= 6 && guesses > 1) {
      alert('No dice! Try again.');
    }

    //reveal answers if wrong on last guess
    if (!correctMovie && guesses === 1) {
      alert('Sorry, you didn\'t guess any movies correctly. Some of my favorites include ' + movieArray);
    }
    guesses--; //decrement breaks the loop
  }
}

movieFunc();

// Thanks for playing, number of correct answers
alert('Thanks for playing, ' + alertReturnName + '! 🎉\nYou got ' + score + ' correct answers out of 7!\nHope to see you again soon!');
console.log(alertReturnName);

