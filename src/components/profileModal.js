import { createInput } from './input.js';
import { createButton } from './button.js';

export function createProfile() { 
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 hidden transition-opacity duration-300 opacity-0';

    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-3xl p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 transform transition-all duration-300 scale-95 opacity-0';

    modalBox.innerHTML = `
        <div class="flex flex-row items-center gap-3 mb-6">
            <button class="close-modal flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
                <img src="../assets/public/fechar.svg" />
            </button>
            <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter flex-1 mr-10">Perfil</h1>
        </div>

        <div class="flex flex-col md:flex-row gap-6 justify-around">
            <div class="flex flex-col items-center w-[40%]">
                <div class="mb-6 relative">
                    <img class="h-24 w-24 rounded-full object-cover border-2 border-white/20" src="./../assets/public/fotoTeste.jpg">

                    <button class="absolute bottom-0 right-0 bg-yellow-500 rounded-full p-1 hover:bg-yellow-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-900">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                        </svg>
                    </button>
                </div>
                
                <form id="profile-form" class="flex flex-col gap-4 w-full"></form>
                <div class="flex justify-between w-full gap-4 mt-6" id="button-container"></div>
            </div>
            
            <div class="flex flex-col gap-4 w-[40%]">
                <button id="dark-mode-toggle" class="flex items-center justify-between bg-yellow-500 text-slate-900 p-4 rounded-xl hover:bg-yellow-600 transition-colors">
                    <span class="font-medium">Modo escuro</span>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                    </div>
                </button>

                <button id="logout-button" class="flex items-center justify-between bg-slate-700 text-white p-4 rounded-xl hover:bg-slate-600 transition-colors mt-2">
                    <span class="font-medium">Sair da conta</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                </button>
                
                <button id="delete-account-button" class="flex items-center justify-between bg-slate-700 text-white p-4 rounded-xl hover:bg-red-900/50 transition-colors mt-2">
                    <span class="font-medium">Excluir conta</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.appendChild(modalBox);

    const form = modalBox.querySelector('#profile-form');
    const buttonContainer = modalBox.querySelector('#button-container');

    const nomeInput = createInput({
        id: 'nome',
        label: 'Nome',
        type: 'text',
        placeholder: `${nome}`,
        value: `${nome}`,
        required: true,
        maxLength: 50
    });

    const emailInput = createInput({
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: `${email}`,
        value: `${email}`,
        required: true,
        maxLength: 50
    });

    const senhaInput = createInput({
        id: 'senha',
        label: 'Senha',
        type: 'password',
        placeholder: `${senha}`,
        value: `${senha}`,
        required: true,
        maxLength: 20
    });

    const cancelButton = createButton({
        id: 'cancelar',
        text: 'Cancelar',
        className: 'bg-[#2C3E50] text-[#F1C40F] font-bold py-3 px-6 rounded-xl shadow-md hover:bg-[#34495E] transition w-full',
        type: 'button'
    });

    const saveButton = createButton({
        id: 'salvar',
        text: 'Salvar',
        className: 'bg-gradient-to-r from-[#DC7C08] to-[#F2AB1B] text-black p-4 rounded font-bold py-3 px-6 rounded-xl shadow-md hover:bg-[#34495E] transition w-full',
        type: 'button'
    });

    form.append(nomeInput, emailInput, senhaInput);
    buttonContainer.append(cancelButton, saveButton);

    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => close());

    const darkModeToggle = modalBox.querySelector('#dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        const status = modalBox.querySelector('#dark-mode-status');

        if (status.textContent === 'Ativado') {
            status.textContent = 'Desativado';
            darkModeToggle.classList.remove('bg-yellow-500', 'hover:bg-yellow-600');
            darkModeToggle.classList.add('bg-slate-600', 'hover:bg-slate-500');
        } else {
            status.textContent = 'Ativado';
            darkModeToggle.classList.remove('bg-slate-600', 'hover:bg-slate-500');
            darkModeToggle.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
        }
    });

    const logoutButton = modalBox.querySelector('#logout-button');
    const deleteAccountButton = modalBox.querySelector('#delete-account-button');

    function open() {
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.add('opacity-100');
        modalBox.classList.remove('scale-95', 'opacity-0');
        modalBox.classList.add('scale-100', 'opacity-100');
    }

    function close() {
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
