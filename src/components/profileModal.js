import { createInput } from './input.js';
import { createButton } from './button.js';

// R E T U R N

export function createProfile() { 
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden transition-opacity duration-300 ease-out';

    const modalBox = document.createElement('div');
    modalBox.className = 'h-auto w-auto p-8 rounded-3xl shadow-lg border-2 border-white/10 bg-gradient-to-br from-modal-midOne to-modal-midTwo transform transition-all duration-300 ease-out scale-95 opacity-0';

    modalBox.innerHTML = `
        <div class="flex flex-row items-center gap-3 mb-6">
            <button class="close-modal flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
                <img src="../assets/public/fechar.svg" />
            </button>

            <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter flex-1 mr-10">Perfil</h1>
        </div>

        <div class="flex flex-col gap-8 justify-beetwen items-center">
            <div class="flex flex-row w-full justify-around items-center">
                <button class="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
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
        text: 'Cancelar',
        className: 'border-2 border-button-stroke bg-gradient-to-br from-bg-button-normalMidOne to-bg-button-normalMidTwo text-[#F1C40F] text-bold py-2 px-2 rounded-xl shadow-md hover:bg-[#34495E] transition w-full',
        type: 'button'
    });

    const saveButton = createButton({
        id: 'salvar',
        text: 'Salvar',
        className: 'bg-gradient-to-br from-[#DC7C08] to-[#F2AB1B] text-semibold p-4 rounded py-3 px-2 rounded-xl shadow-md text-[#392404] hover:bg-[#34495E] transition w-full',
        type: 'button'
    });

    form.append(nomeInput, emailInput, senhaInput);
    buttonContainer.append(cancelButton, saveButton);

    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => close());

    // const darkModeToggle = modalBox.querySelector('#dark-mode-toggle');

    // darkModeToggle.addEventListener('click', () => {
    //     const status = modalBox.querySelector('#dark-mode-status');

    //     if (status.textContent === 'Ativado') {
    //         status.textContent = 'Desativado';
    //         darkModeToggle.classList.remove('bg-yellow-500', 'hover:bg-yellow-600');
    //         darkModeToggle.classList.add('bg-slate-600', 'hover:bg-slate-500');
    //     } else {
    //         status.textContent = 'Ativado';
    //         darkModeToggle.classList.remove('bg-slate-600', 'hover:bg-slate-500');
    //         darkModeToggle.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
    //     }
    // });

    // const logoutButton = modalBox.querySelector('#logout-button');
    // const deleteAccountButton = modalBox.querySelector('#delete-account-button');

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