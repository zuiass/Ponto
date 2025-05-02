import { createButton } from '../components/button.js';

export function createInstructions() {

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 hidden';

    const modalBox = document.createElement('div');
    modalBox.className = 'modal-content text-white bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-md w-full mx-4 border border-slate-700 shadow-xl';

    modalBox.innerHTML = `
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Como Jogar</h2>
        </div>
        
        <div class="space-y-4">
            <p class="text-slate-300">Adivinhe a palavra em 6 tentativas.</p>
            <p class="text-slate-300">Cada tentativa deve ser uma palavra válida de 5 letras.</p>
            <p class="text-slate-300">Após cada tentativa, a cor das letras mudará para mostrar o quão perto você está da resposta.</p>
            
            <div class="border-t border-slate-700 pt-4 mt-6">
                <p class="font-bold mb-4 text-white">Exemplos</p>
                
                <div class="flex items-center space-x-4 mb-4">
                    <div class="cell correct w-10 h-10 rounded-lg shadow-cell flex justify-center items-center text-xl font-bold border-2 border-green-500">P</div>
                    <p class="text-slate-300">A letra P está na palavra e na posição correta.</p>
                </div>
                
                <div class="flex items-center space-x-4 mb-4">
                    <div class="cell partial w-10 h-10 rounded-lg shadow-cell flex justify-center items-center text-xl font-bold border-2 border-amber-500">O</div>
                    <p class="text-slate-300">A letra O está na palavra, mas na posição errada.</p>
                </div>
                
                <div class="flex items-center space-x-4">
                    <div class="cell wrong w-10 h-10 rounded-lg shadow-cell flex justify-center items-center text-xl font-bold border-2 border-slate-500">N</div>
                    <p class="text-slate-300">A letra N não está na palavra.</p>
                </div>
            </div>
        </div>

        <button id="startPlaying" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg mt-6 transition-all transform hover:-translate-y-1 shadow-lg">
            Entendi!
        </button>
    `;

    document.body.appendChild(modal);
    modal.appendChild(modalBox);

    return {
        open: () => modal.classList.remove('hidden'),
        close: () => modal.classList.add('hidden')
    };
}