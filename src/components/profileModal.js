import { createInput } from './input.js';
import { createButton } from './button.js';

export function createProfile() { 
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden';

    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-md p-8 rounded-3xl shadow-lg border-2 border-white/10 bg-gradient-to-br from-modal-midOne to-modal-midTwo';

    modalBox.innerHTML = `
    <div class="flex-1">
        <div class="flex flex-row items-center gap-3">
            <button class="close-modal text-sm text-red-500">
                <div class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10">
                    <img src="../assets/public/fechar.svg"/>
                </div>
            </button>

            <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter">Perfil</h1>
        </div>

        <div class="flex items-center w-full justify-around">
            <div class="flex flex-col items-center w-full">
                <img class=" h-[150px] w-[150px] rounded-full m-16" src="./../assets/public/gato_image_test.jpg" alt="">
                <form id="form" class="flex flex-col gap-4 mb-6 w-full">

                </form>
                <div class="flex justify-between w-full gap-4 mb-4" id="buttonContainer">

                </div>
            </div>


            <div class="flex flex-col items-center ">

                

            </div>
        </div>
    </div>
`;

const form = modalBox.querySelector('#form');

const buttonContainer = modalBox.querySelector('#buttonContainer');


const nomeInput = createInput({
    id: 'nome',
    label: 'nome',
    type: 'text',
    placeholder: 'usuario@email.com',
    required: true,
    maxLength: 50,
    onInput: (e) => console.log('Email:', e.target.value)
});
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

const cancelarButton = createButton({
    id: 'cancelar',
    text: 'Cancelar',
    className: 'bg-[#2C3E50] text-[#F1C40F] font-bold py-3 px-6 rounded-xl shadow-md hover:bg-[#34495E] transition w-full',
    type: 'button'
});

const salvarButton = createButton({
    id: 'salvar',
    text: 'Salvar',
    className: 'bg-gradient-to-r from-[#DC7C08] to-[#F2AB1B] text-black p-4 rounded font-bold py-3 px-6 rounded-xl shadow-md hover:bg-[#34495E] transition w-full',
    type: 'button'
});

form.append(nomeInput,emailInput, senhaInput);

buttonContainer.append(cancelarButton, salvarButton);




    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => modal.classList.add('hidden'));

    document.body.appendChild(modal);
    modal.appendChild(modalBox);

    return {
        open: () => modal.classList.remove('hidden'),
        close: () => modal.classList.add('hidden')
    };



}



 
