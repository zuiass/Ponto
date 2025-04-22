import { createInput } from '../components/input.js';
// import { createButton } from '../components/button.js';

const form = document.getElementById('form');

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
    onInput: (e) => console.log(e.target.value)
});

form.append(emailInput, senhaInput);