import { createInput } from './input.js';
import { createButton } from './button.js';

export function createProfile() { 
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden';

    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-md p-8 rounded-3xl shadow-lg border-2 border-white/10 bg-gradient-to-br from-modal-midOne to-modal-midTwo';

    modalBox.innerHTML = `
        <div class="flex-1">
            <div class="flex flex-row items-center pb-6 gap-3">
                <button class="close-modal text-sm text-red-500">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10">
                        <img src="../assets/public/fechar.svg"/>
                    </div>
                </button>

                <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter">Perfil</h1>
            </div>
        </div>
    `;

    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => modal.classList.add('hidden'));

    document.body.appendChild(modal);
    modal.appendChild(modalBox);

    return {
        open: () => modal.classList.remove('hidden'),
        close: () => modal.classList.add('hidden')
    };

}