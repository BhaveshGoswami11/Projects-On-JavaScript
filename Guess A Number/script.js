let randomNumber = parseInt(Math.random()*100 + 1);
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

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
       
        
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    // function to validate user input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        previousGuess.push(guess);
        if (numGuesses === 10) {
            displayGuesses(guess);
            displayResults(`Game Over! The number was ${randomNumber}`, 'error');
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
            numGuesses++;
        }
    }
}
    function checkGuess(guess) {
        // function to check the user's guess against the random number
        if (guess === randomNumber) {
            displayResults(`Congratulations! You guessed it right!`);
            endGame();
        } else if (guess < randomNumber) {
            displayResults(`Your guess is too low!`);
        } else if (guess > randomNumber) {
            displayResults(`Your guess is too high!`);
        } else if (guess >= randomNumber + 10 || guess <= randomNumber - 10) {
            displayResults(`You're getting warmer!`);
        }
    }
    function displayGuesses(guess) {
        // function to display previous guesses
        userInput.value = '';
        guessSlot.innerHTML += `${guess},  `;
        remaining.innerHTML = `You have ${10 - numGuesses} guesses left.`;
    }
    function displayResults(message) {
        // function to display results to the user
        lowOrHi.innerHTML = `<h2>${message}</h2>`;

    }

    function endGame() {
        // function to end the game and offer a restart
        userInput.value = '';
        userInput.setAttribute('disabled', '');
        submit.setAttribute('disabled', '');
        p.classList.add('button');
        p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
        startOver.appendChild(p);
        playGame = false;
        newGame();
    }

    function newGame() {
        // function to reset the game state for a new game
        const newGameButton = document.getElementById('newGame');
        newGameButton.addEventListener('click', function () {
            randomNumber = parseInt(Math.random() * 100 + 1);
            previousGuess = [];
            numGuesses = 1;
            guessSlot.innerHTML = '';
            remaining.innerHTML = '';
            lowOrHi.innerHTML = '';
            userInput.removeAttribute('disabled');
            submit.removeAttribute('disabled');
            startOver.removeChild(p);
            playGame = true;
        });

    }
