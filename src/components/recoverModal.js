import { createInput } from '../components/input.js';
import { createButton } from '../components/button.js';

export function createRecover() {

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden';

    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-md p-8 rounded-3xl shadow-lg border-2 border-white/10 bg-gray-800';

    modalBox.innerHTML = `
        <div class="flex-1">
            <div class="flex flex-row items-center pb-6 gap-3">
                <button class="close-modal text-sm text-red-500">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10">
                        <img src="../assets/public/fechar.svg"/>
                    </div>
                </button>

                <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter">Recuperar senha</h1>
            </div>

            <form id="form" class="flex flex-col gap-4 mb-6 w-full">
                <!-- Inputs -->
            </form>

            <div id="buttonContainer" class="flex justify-between gap-4 mb-4 mt-6">
                <!-- Botões -->
            </div>
            <audio id="som-botao" src="../assets/Button - Sound Effect.mp3" preload="auto"></audio>
        </div>
    `;

    const form = modalBox.querySelector('#form');
    const buttonContainer = modalBox.querySelector('#buttonContainer');

    const emailInput = createInput({
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'usuario@email.com',
        required: true,
        maxLength: 50,
        onInput: (e) => console.log('Email:', e.target.value)
    });

    const enviarButton = createButton({
        id: 'enviar',
        text: 'Enviar',
        className: '',
        type: 'submit'
    });

    form.append(emailInput);
    buttonContainer.append(enviarButton);

    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => modal.classList.add('hidden'));

    modal.appendChild(modalBox);
    document.body.appendChild(modal);

    return {
        open: () => modal.classList.remove('hidden'),
        close: () => modal.classList.add('hidden')
    };

}