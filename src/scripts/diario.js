import { sortearPalavra } from '../scripts/word.js';

// V A R I A B L E S

let currentRow = 0;
let currentCol = 0;

const allLines = 6;
const allColumns = 5;

const cells = document.querySelectorAll('.cell');
cells[0].classList.add('active');

let activeGame = true;
let correctWord = 'PONTO';

// F U N C T I O N S

//atualizar célula

function updateCell() {
    cells.forEach(cell => cell.classList.remove('active'));
    const index = currentRow * allColumns + currentCol;
    cells[index].classList.add('active');
}

// inserir uma letra

function insertLetter(letter) {
    const index = currentRow * allColumns + currentCol;

    if (index < cells.length) {
        cells[index].textContent = letter;
        cells[index].classList.add('filled');   // "filled" = "preenchida"
        colunaAtual++;

        if (currentCol < allColumns) {
            updateCell();
        }
    }
}

// apagar letra

function deleteLetter() {
    if (currentCol > 0) {
        currentCol--;

        const index = currentRow * allColumns + currentCol;
        cells[index].textContent = "";
        cells[index].classList.remove('filled');
        updateCell();
    }
}

// enviar palpite

function submitGuess() {
    if (currentCol < allColumns) {
        animationShakeRows();
        showMessage("Complete a palavra!");
        return;
    }

    const results = ['correct', 'partial', 'wrong'];
}