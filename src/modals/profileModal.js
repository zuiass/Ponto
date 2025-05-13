import { createInput } from '../components/input.js';
import { createButton } from '../components/button.js';

// R E T U R N

export function createProfile() { 
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden transition-opacity duration-300 ease-out';

    const modalBox = document.createElement('div');
    modalBox.className = 'h-auto w-auto p-8 rounded-3xl shadow-lg border-2 border-white/10 dark:bg-gradient-to-br dark:from-modal-midOne dark:to-modal-midTwo bg-white transform transition-all duration-300 ease-out scale-95';

    modalBox.innerHTML = `
        <div class="flex flex-row items-center gap-3 mb-6">
            <button class="close-modal flex items-center justify-center w-10 h-10 rounded-full dark:hover:bg-white/10 hover:bg-black/10 transition-colors">
                <img src="../assets/public/fechar.svg" class="dark:brightness-100 invert-0 brightness-0"/>
            </button>

            <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter flex-1 mr-10">Perfil</h1>
        </div>

        <div class="flex flex-col gap-8 justify-beetwen items-center">
            <div class="flex flex-row w-full justify-around items-center">
                <button class="toggle-theme w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                    <img src="../assets/public/darkMode.svg" />
                </button>

                <div class="relative">
                    <img class="h-24 w-24 rounded-full object-cover border-2 border-white/20" src="./../assets/public/fotoTeste.jpg">

                    <button class="absolute bottom-0 right-0 bg-yellow-500 rounded-full p-1 hover:bg-yellow-600 transition-colors">
                        <img src="../assets/public/addPhoto.svg" />
                    </button>
                </div>

                <button class="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                    <img src="../assets/public/logout.svg" class="w-6 h-6" />
                </button>
            </div>

            <form id="profile-form" class="flex flex-col h-auto gap-4 w-[350px]">
                <!-- #Inputs -->
            </form>

            <div class="flex justify-between w-full gap-5" id="button-container">
                <!-- #Buttons -->
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
        className: 'border-[1px] dark:border-button-stroke border-gray-300 dark:bg-gradient-to-br dark:from-bg-button-normalMidOne dark:to-bg-button-normalMidTwo bg-white py-2 px-2 rounded-xl shadow-md dark:hover:bg-[#34495E] hover:bg-gray-200 transition w-full',
        text: 'Cancelar',
        textClass: 'font-medium text-[#F1C40F] text-lg',
        type: 'button'
    });

    const saveButton = createButton({
        id: 'salvar',
        className: 'border-[1px] border-yellow-500 bg-gradient-to-br from-button-gradientMidOne to-button-gradientMidTwo p-4 rounded py-3 px-2 rounded-xl shadow-md hover:bg-[#34495E] transition w-full',
        text: 'Salvar',
        textClass: 'font-medium text-black/75 text-lg',
        type: 'button'
    });

    form.append(nomeInput, emailInput, senhaInput);
    buttonContainer.append(cancelButton, saveButton);

    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => close());

    document.querySelector(".toggle-theme").addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
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
    }

}