document.addEventListener('DOMContentLoaded', () => {
    let currentRow = 0;
    let currentCol = 0;
  
    const allLines = 6;
    const allColumns = 5;
  
    const cells = document.querySelectorAll('.cell');
    cells[0].classList.add('active');
  
    let activeGame = true;
    const diaryWords = ["TERMO", "BEBER"];
    const secretWord = diaryWords[Math.floor(Math.random() * diaryWords.length)];
  
    function updateCell() {
      cells.forEach(cell => cell.classList.remove('active'));
      const index = currentRow * allColumns + currentCol;
      cells[index].classList.add('active');
    }
  
    function insertLetter(letter) {
      const index = currentRow * allColumns + currentCol;
  
      if (index < cells.length && currentCol < allColumns) {
        cells[index].textContent = letter;
        cells[index].classList.add('filled');
        currentCol++;
  
        if (currentCol < allColumns) {
          updateCell();
        }
      }
    }
  
    function deleteLetter() {
      if (currentCol > 0) {
        currentCol--;
        const index = currentRow * allColumns + currentCol;
        cells[index].textContent = "";
        cells[index].classList.remove('filled');
        updateCell();
      }
    }
  
    function submitGuess() {
        if (currentCol < allColumns) {
          animationShakeRows();
          showMessage("Complete a palavra!");
          return;
        }
      
        const guess = [];
      
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
            } else if (secretWord.includes(letter)) {
              cell.classList.add('partial');
              updateColorCell(letter, 'partial');
            } else {
              cell.classList.add('wrong');
              updateColorCell(letter, 'wrong');
            }
          }, i * 300);
        }
      
        // ⬇️ Avançar para a próxima linha após as animações terminarem
        setTimeout(() => {
          currentRow++;
          currentCol = 0;
      
          if (currentRow >= allLines) {
            showMessage(`Fim de jogo! A palavra era ${secretWord}`);
            activeGame = false;
          } else {
            updateCell();
          }
        }, allColumns * 300 + 200);
    }   
    
    function showMessage(msg) {
        const toast = document.getElementById('toastMessage');
        toast.textContent = msg;
        toast.classList.remove('hidden');
        toast.classList.add('fade-in');
      
        setTimeout(() => {
          toast.classList.add('hidden');
          toast.classList.remove('fade-in');
        }, 2000); // dura 2 segundos
    }
    
    function animationShakeRows() {
        for (let i = 0; i < allColumns; i++) {
          const index = currentRow * allColumns + i;
          const cell = cells[index];
      
          cell.classList.add('animate-float');
      
          // Remove após a animação de 3s
          setTimeout(() => {
            cell.classList.remove('animate-float');
          }, 3000); // igual à duração da animação
        }
    } 

    function updateColorCell(letter, result) {
      const keys = document.querySelectorAll('.key');
  
      keys.forEach(key => {
        if (key.textContent.trim() === letter) {
          if (
            result === 'correct' ||
            (result === 'partial' && !key.classList.contains('correct')) ||
            (result === 'wrong' && !key.classList.contains('correct') && !key.classList.contains('partial'))
          ) {
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
});  