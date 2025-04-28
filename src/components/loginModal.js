import { createInput } from '../components/input.js';
import { createButton } from '../components/button.js';

export function createLogin() {

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

                <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter">L o g i n</h1>
            </div>

            <form id="form" class="flex flex-col gap-4 mb-6 w-full">
                <!-- Inputs -->
            </form>

            <div class="text-center mt-4">
                <span class="text-sm text-gray-400">Esqueceu a senha? </span>
                <button id="recuperar" class="text-blue-500">Recuperar</button>
            </div>

            <div id="buttonContainer" class="flex justify-between gap-4 mb-4 mt-6">
                <!-- Botões -->
            </div>
            <audio id="audio" src="../assets/public/buttonSound.mp3" preload="auto"></audio>
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

    const senhaInput = createInput({
        id: 'senha',
        label: 'Senha',
        type: 'password',
        placeholder: 'suasenha123',
        required: true,
        maxLength: 20,
        onInput: (e) => console.log('Senha:', e.target.value)
    });

    const cadastrarButton = createButton({
        id: 'registerPage',
        text: 'Cadastrar',
        className: '',
        type: 'button'
    });

    const entrarButton = createButton({
        id: 'entrar',
        text: 'Entrar',
        className: '',
        type: 'button'
    });

    form.append(emailInput, senhaInput);
    buttonContainer.append(cadastrarButton, entrarButton);

    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => modal.classList.add('hidden'));

    modal.appendChild(modalBox);
    document.body.appendChild(modal);

    return {
        open: () => modal.classList.remove('hidden'),
        close: () => modal.classList.add('hidden')
    };

}