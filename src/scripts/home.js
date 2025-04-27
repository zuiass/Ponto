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

    const pondeto = document.getElementById('pondeto');
    const diario = document.getElementById('diario');
    const ponteto = document.getElementById('ponteto');

    const history = document.getElementById('history');
    const rank = document.getElementById('rank');
    const settings = document.getElementById('settings');

    const botoes = document.querySelectorAll('.game-button');

    const buttonsHome = [
        pondeto, diario, ponteto, history, rank, settings
    ];

    botoes.forEach((botao, index) => {
        setTimeout(() => {
            botao.classList.remove('opacity-0', 'scale-125');
            botao.classList.add('opacity-100', 'scale-100');
        }, 100 + (index * 150));
    });

    if (recoverButton) {
        recoverButton.addEventListener('click', () => {
            loginModal.close();
            recoverModal.open();
        });
    }

    if (enterPage) {
        enterPage.addEventListener('click', () => {
            registerModal.close();
            loginModal.open();
        });
    }

    if (registerPage) {
        registerPage.addEventListener('click', () => {
            loginModal.close();
            registerModal.open();
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            loginModal.open();
        });
    }

    let lastFocusedButton = null;

    buttonsHome.forEach((button) => {
        if (button) {
            button.addEventListener('click', () => {
                if (lastFocusedButton === button) {
                    loginModal.open();
                    lastFocusedButton = null;
                } else {
                    lastFocusedButton = button;
                    button.focus();
                }
            });
        }
    });

    document.addEventListener('click', (event) => {
        const isGameButton = event.target.closest('.game-button');

        if (!isGameButton) {
            document.querySelectorAll('.game-button').forEach(button => {
                button.blur();
            });
            lastFocusedButton = null;
        }
    });

});