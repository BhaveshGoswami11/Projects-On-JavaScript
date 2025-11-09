let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let numGuesses = 1;
let playGame = true;

// EVENT LISTENER
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

// VALIDATION
function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        displayResults("⚠ Enter a number between 1 and 100!");
    } else {
        previousGuess.push(guess);

        if (numGuesses === 10) {
            displayGuesses(guess);
            displayResults(`❌ Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
            numGuesses++;
        }
    }
}

// CHECK GUESS
function checkGuess(guess) {
    let diff = Math.abs(guess - randomNumber);

    if (guess === randomNumber) {
        displayResults("🎉 Correct! You guessed it!");
        endGame();
    } 
    else if (diff <= 5) {
        displayResults("🔥 SUPER HOT! Very close!");
    }
    else if (diff <= 10) {
        displayResults("♨️ Getting warm!");
    }
    else if (guess < randomNumber) {
        displayResults("⬆ Too low!");
    }
    else {
        displayResults("⬇ Too high!");
    }
}

// DISPLAY PREVIOUS GUESSES
function displayGuesses(guess) {
    userInput.value = "";
    guessSlot.textContent += `${guess}, `;
    remaining.textContent = ` ${10 - numGuesses}`;
}

// RESULT DISPLAY
function displayResults(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// END GAME
function endGame() {
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">🔄 New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

// NEW GAME RESET
function newGame() {
    const newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        previousGuess = [];
        numGuesses = 1;
        guessSlot.textContent = '';
        remaining.textContent = '10';
        lowOrHi.textContent = '';
        userInput.value = "";
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
