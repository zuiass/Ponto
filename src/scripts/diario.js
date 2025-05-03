let currentRow = 0;
let currentCol = 0;
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const rows = 6;
const cols = 5;

cells[0].classList.add('active');

document.querySelectorAll('.close-stats-modal').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('statsModal').classList.add('hidden');
    });
});

document.querySelector('.back-button').addEventListener('click', () => {
    window.location.href = '../pages/home.html';
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyContent = key.textContent.trim();
        
        if (!gameActive) return;
        
        if (keyContent === 'ENTER') {
            submitGuess();
        } else if (key.id === 'backspace') {
            deleteLetter();
        } else if (keyContent.length === 1 && currentCol < cols) {
            const cellIndex = currentRow * cols + currentCol;
            if (cellIndex < cells.length) {
                cells[cellIndex].textContent = keyContent;
                cells[cellIndex].classList.add('filled');
                
                currentCol++;
                
                if (currentCol < cols) {
                    const nextCellIndex = currentRow * cols + currentCol;
                    cells.forEach(cell => cell.classList.remove('active'));
                    cells[nextCellIndex].classList.add('active');
                }
            }
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (!gameActive) return;
    
    if (e.key === 'Enter') {
        submitGuess();
    } else if (e.key === 'Backspace') {
        deleteLetter();
    } else if (/^[a-zA-Z]$/.test(e.key) && currentCol < cols) {
        const cellIndex = currentRow * cols + currentCol;
        if (cellIndex < cells.length) {
            cells[cellIndex].textContent = e.key.toUpperCase();
            cells[cellIndex].classList.add('filled');
            
            currentCol++;
            
            if (currentCol < cols) {
                const nextCellIndex = currentRow * cols + currentCol;
                cells.forEach(cell => cell.classList.remove('active'));
                cells[nextCellIndex].classList.add('active');
            }
        }
    }
});

function submitGuess() {
    if (currentCol < cols) {
        shakeRow();
        document.getElementById('gameStatus').textContent = "Complete a palavra!";
        setTimeout(() => {
            document.getElementById('gameStatus').textContent = "Adivinhe a palavra de 5 letras";
        }, 2000);
        return;
    }
    
    const results = ['correct', 'partial', 'wrong'];
    
    for (let i = 0; i < cols; i++) {
        const cellIndex = currentRow * cols + i;
        const cell = cells[cellIndex];
        
        setTimeout(() => {
            const result = results[Math.floor(Math.random() * results.length)];
            cell.classList.add(result);
            
            const letter = cell.textContent;
            updateKeyColor(letter, result);
        }, i * 300);
    }
    
    setTimeout(() => {
        currentRow++;
        currentCol = 0;
        
        if (currentRow >= rows) {
            gameActive = false;
            document.getElementById('gameStatus').textContent = "Fim de jogo! A palavra era: PONTO";
            
            setTimeout(() => {
                document.getElementById('statsModal').classList.remove('hidden');
            }, 1500);
            return;
        }
        
        cells.forEach(cell => cell.classList.remove('active'));
        const nextCellIndex = currentRow * cols;
        cells[nextCellIndex].classList.add('active');
    }, cols * 300 + 300);
}

function deleteLetter() {
    if (currentCol > 0) {
        currentCol--;
        const cellIndex = currentRow * cols + currentCol;
        cells[cellIndex].textContent = '';
        cells[cellIndex].classList.remove('filled');
        
        cells.forEach(cell => cell.classList.remove('active'));
        cells[cellIndex].classList.add('active');
    }
}

function shakeRow() {
    for (let i = 0; i < cols; i++) {
        const cellIndex = currentRow * cols + i;
        cells[cellIndex].classList.add('animate-bounce-slow');
        
        setTimeout(() => {
            cells[cellIndex].classList.remove('animate-bounce-slow');
        }, 500);
    }
}

function updateKeyColor(letter, result) {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        if (key.textContent.trim() === letter) {
            if (result === 'correct' || 
                (result === 'partial' && !key.classList.contains('correct')) ||
                (result === 'wrong' && !key.classList.contains('correct') && !key.classList.contains('partial'))) {
                
                key.classList.remove('correct', 'partial', 'wrong');
                key.classList.add(result);
            }
        }
    });
}

// T E S T I N G

// const tamanhoPalavra = 5;
// const tentativasMaximas = 6;
// const celulas = document.querySelectorAll(".cell");

// let linhaAtual = 0;
// let colunaAtual = 0;

// // Armazena as letras digitadas
// const palpites = Array.from({ length: tentativasMaximas }, () => Array(tamanhoPalavra).fill(""));

// // Escuta o teclado físico
// document.addEventListener("keydown", (evento) => {
//     const tecla = evento.key.toUpperCase();

//     // Se for uma letra de A-Z
//     if (/^[A-Z]$/.test(tecla)) {
//         if (colunaAtual < tamanhoPalavra) {
//             const indice = linhaAtual * tamanhoPalavra + colunaAtual;
//             celulas[indice].textContent = tecla;
//             celulas[indice].classList.add("preenchida");
//             palpites[linhaAtual][colunaAtual] = tecla;
//             colunaAtual++;
//         }
//     }

//     // Se for a tecla Backspace (apagar)
//     else if (evento.key === "Backspace") {
//         if (colunaAtual > 0) {
//             colunaAtual--;
//             const indice = linhaAtual * tamanhoPalavra + colunaAtual;
//             celulas[indice].textContent = "";
//             celulas[indice].classList.remove("preenchida");
//             palpites[linhaAtual][colunaAtual] = "";
//         }
//     }

//     // Se for Enter (enviar palpite)
//     else if (evento.key === "Enter") {
//         if (colunaAtual === tamanhoPalavra) {
//             const tentativa = palpites[linhaAtual].join("");

//             // Aqui você pode verificar se a palavra está correta
//             // e aplicar estilos como .correta, .parcial ou .errada

//             linhaAtual++;
//             colunaAtual = 0;
//         }
//     }
// });