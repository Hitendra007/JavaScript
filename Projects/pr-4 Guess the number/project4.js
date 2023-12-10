// Generate a random number between 1 and 100
let randNum = parseInt(Math.random() * 100) + 1;
console.log(randNum);

// DOM elements
let guessedNum = document.querySelector('#guessField');
let submit = document.querySelector('#subt');
let guesses = document.querySelector('.guesses');
let guessesRemain = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

// Create a paragraph element for displaying messages
let p = document.createElement('p');

// Array to store previous guesses
let prevguess = [];
let numGuess = 1; // Initialize the number of guesses
let playGame = true; // Flag to control the game state

// Event listener for the "Submit" button
if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(guessedNum.value);
        validateGuess(guess);
    });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid Number');
    } else if (guess < 1) {
        alert('Please enter a Number greater than or equal to 1');
    } else if (guess > 100) {
        alert('Please enter a Number less than or equal to 100');
    } else {
        prevguess.push(guess);
        if (numGuess == 11) {
            displayguess(guess);
            displayMsg(`Game over. Random number was ${randNum}`);
            endGame();
        } else {
            displayguess(guess);
            checkGuess(guess);
        }
    }
}

// Function to check if the guess is correct
function checkGuess(guess) {
    if (guess === randNum) {
        displayMsg(`You Guessed it right`);
        endGame();
    } else if (guess < randNum) {
        displayMsg(`Number is TOO Low`);
    } else if (guess > randNum) {
        displayMsg(`Number is TOO High`);
    }
}

// Function to display the guess
function displayguess(guess) {
    guessedNum.value = '';
    guesses.innerHTML += ` ${guess}`;
    numGuess++;
    guessesRemain.innerHTML = `${11 - numGuess}`;
}

// Function to display messages
function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game
function endGame() {
    guessedNum.value = '';
    guessedNum.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

// Event listener for the "Start New Game" button
function newGame() {
    startOver.addEventListener('click', function (e) {
        if (e.target.id === 'newGame') {
            randNum = parseInt(Math.random() * 100) + 1;
            prevguess = [];
            numGuess = 1;
            guesses.innerHTML = '';
            guessesRemain.innerHTML = `${11 - numGuess}`;
            guessedNum.removeAttribute('disabled');
            lowOrHi.innerHTML = '';
            startOver.removeChild(p);
            playGame = true;
        }
    });
}
