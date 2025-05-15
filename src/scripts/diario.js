import { sortearPalavra } from '../scripts/word.js';

// V A R I A B L E S

let currentRow = 0; // linha atual
let currentCol = 0; // coluna atual

const allLines = 6; // todas as linhas
const allColumns = 5; // todas as colunas

const cells = document.querySelectorAll('.cell'); // todas as células
cells[0].classList.add('active');

let activeGame = true; // jogo ativo
const diaryWords = ["TERMO", "BEBER"]; // que sorteio?
const secretWord = diaryWords[Math.floor(Math.random() * diaryWords.length)]; // palavra secreta

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
        cells[index].classList.add('filled');
        currentCol++;

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

    const guess = []; // palpite

    for (let i = 0; i < allColumns; i++) {
        const index = currentRow * allColumns + i;
        guess.push(cells[index].textContent);
    }

    for (let i = 0; i < allColumns; i++) {
        const index = currentRow * allColumns + i;
        const letter = guess[i];
        const cell = cells[index];

        setTimeout(() => {
            if (letter === secretWord[i]) {
                cell.classList.add('correct');
                updateColorCell(letter, 'correct');
            }
            
            else if (secretWord.includes(letter)) {
                cell.classList.add('partial');
                updateColorCell(letra, 'partial');

            }
            
            else {
                cell.classList.add('wrong');
                updateColorCell(letra, 'wrong');
            }
        }, i * 300);
    }
}

// atualizar cor da célula

function updateColorCell(letter, result) {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        if (key.textContent.trim() === letra) {
            if (result === 'correct' || 
                (result === 'partial' && !key.classList.contains('correct')) ||
                (result === 'errada' && !key.classList.contains('correct') && !key.classList.contains('partial'))) {
                
                key.classList.remove('correct', 'partial', 'wrong');
                key.classList.add(result);
            }
        }
    });
}

// U S I N G

document.addEventListener('keydown', (event) => {
    if (!activeGame) return; 
  
    const letter = event.key.toUpperCase();
  
    if (letter.length === 1 && letter >= 'A' && letter <= 'Z') {
      insertLetter(letter);
    } else if (event.key === 'Backspace') {
      deleteLetter();
    } else if (event.key === 'Enter') {
      submitGuess();
    }
});
  