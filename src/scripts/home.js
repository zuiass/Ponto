import { createLogin } from '../components/loginModal.js';
import { createRegister } from '../components/registerModal.js';
import { createRecover } from '../components/recoverModal.js';

window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    music.volume = 1;
});

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
    const botoes = document.querySelectorAll('.game-button');

    botoes.forEach((botao, index) => {
        setTimeout(() => {
            botao.classList.remove('opacity-0', 'scale-125');
            botao.classList.add('opacity-100', 'scale-100');
        }, 100 + (index * 150));
    });
});