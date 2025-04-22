import { createInput } from '../components/input.js';
import { createButton } from '../components/button.js';

const form = document.getElementById('form');

const emailInput = createInput({ id: 'email', label: 'Email', placeholder: 'Digite seu email' });
const senhaInput = createInput({ id: 'senha', label: 'Senha', type: 'password' });
const submitBtn = createButton({ text: 'Entrar', onClick: () => {} });

form.append(emailInput, senhaInput, submitBtn);