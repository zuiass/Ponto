import { createButton } from '../components/button.js';

// F U N C T I O N S

export function createInstructions() {
    const modal = document.createElement('div');
    modal.className = `
        fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 hidden
        transition-opacity duration-300 opacity-0
    `;

    const modalBox = document.createElement('div');
    modalBox.className = `
        text-white bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-md w-full mx-4 
        border border-slate-700 shadow-xl
        transition-all duration-300 transform scale-95 opacity-0
    `;

    modalBox.innerHTML = `
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
                Como jogar?
            </h2>
        </div>
        
        <div class="space-y-4">
            <p class="text-slate-300">Adivinhe uma palavra de 5 letras em 6 tentativas.</p>
            <p class="text-slate-300">Após cada tentativa, a cor das letras mudará para mostrar o quão perto você está da resposta.</p>
            
            <div class="border-t border-slate-700 pt-4 mt-6">
                <p class="font-bold mb-4 text-white">Exemplos</p>
                
                <div class="flex items-center space-x-4 mb-4">
                    <div class="bg-gradient-to-br from-green-600 to-green-700 w-10 h-10 rounded-lg shadow-cell flex justify-center items-center text-xl font-bold border-2 border-green-500">P</div>
                    <p class="text-slate-300">A letra P está na palavra e na posição correta.</p>
                </div>
                
                <div class="flex items-center space-x-4 mb-4">
                    <div class="bg-gradient-to-br from-orange-600 to-orange-700 w-10 h-10 rounded-lg shadow-cell flex justify-center items-center text-xl font-bold border-2 border-amber-600">O</div>
                    <p class="text-slate-300">A letra O está na palavra, mas na posição errada.</p>
                </div>
                
                <div class="flex items-center space-x-4">
                    <div class="bg-gradient-to-br from-slate-600 to-slate-700 w-10 h-10 rounded-lg shadow-cell flex justify-center items-center text-xl font-bold border-2 border-slate-500">N</div>
                    <p class="text-slate-300">A letra N não está na palavra.</p>
                </div>
            </div>
        </div>

        <div class="button-container w-full h-auto">
            <!-- Entendi! -->
        </div>
    `;

    const buttonContainer = modalBox.querySelector('.button-container');

    const buttonEntendi = createButton({
        id: 'startPlaying',
        text: 'Entendi!',
        className: 'w-full bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-400 hover:to-yellow-500 text-white font-medium text-lg py-3 px-4 rounded-xl mt-6 transition-all transform shadow-lg',
        type: 'button'
    });

    buttonContainer.appendChild(buttonEntendi);
    document.body.appendChild(modal);
    modal.appendChild(modalBox);

    modalBox.querySelector('#startPlaying').addEventListener('click', () => {
        close();
    });

    // A N I M A T I O N S

    function open() {
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.add('opacity-100');
        modalBox.classList.remove('scale-95', 'opacity-0');
        modalBox.classList.add('scale-100', 'opacity-100');
    }

    function close() {
        void modalBox.offsetWidth;
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        modalBox.classList.remove('scale-100', 'opacity-100');
        modalBox.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    return {
        open,
        close
    };
}

// E V E N T S  /  U S I N G

window.addEventListener('DOMContentLoaded', () => {
    const instructionsModal = createInstructions();
    const hintButton = document.querySelector('.hint-button');

    if (hintButton) {
        hintButton.addEventListener('click', () => {
            instructionsModal.open();
        });
    }
});