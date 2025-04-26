import { createLogin } from '../components/loginModal.js';
import { createRegister } from '../components/registerModal.js';
import { createRecover } from '../components/recoverModal.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginModal = createLogin();
    const registerModal = createRegister();
    const recoverModal = createRecover();

    const loginButton = document.getElementById('abrir-login');
    const registerPage = document.getElementById('registerPage');
    const enterPage = document.getElementById('enterPage');
    const recoverButton = document.getElementById('recuperar'); 
    
    recoverButton.addEventListener('click', () => {
        loginModal.close();
        recoverModal.open();
    });

    enterPage.addEventListener('click', () => {
        registerModal.close();
        loginModal.open();
    });

    registerPage.addEventListener('click', () => {
        loginModal.close();
        registerModal.open();
    });

    loginButton.addEventListener('click', () => {
        loginModal.open();
    });
});

window.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe "game-button"
    const botoes = document.querySelectorAll('.game-button');

    botoes.forEach((botao, index) => {
        setTimeout(() => {
            // Remove as classes de invisibilidade e tamanho grande
            botao.classList.remove('opacity-0', 'scale-125');
            // Adiciona as classes que deixam o botão visível e no tamanho correto
            botao.classList.add('opacity-100', 'scale-100');
        }, 100 + (index * 150)); // Delay entre os botões para a animação em cascata
    });
});