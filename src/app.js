import Hangman from './hangman';
import getPuzzle from './request';

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game1.statusMessage;
   
    const puzzleArr = game1.puzzle.split('');
    puzzleArr.forEach(letter => {
        const newSpan = document.createElement('span');
        newSpan.innerHTML = letter;
        puzzleEl.appendChild(newSpan);
    });   
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();
