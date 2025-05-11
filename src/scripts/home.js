// M O D U L E S //

import { createLogin } from '../modals/loginModal.js';
import { createRecover } from '../modals/recoverModal.js';
import { createRegister } from '../modals/registerModal.js';

import { createHistory } from '../modals/historyModal.js';
import { createProfile } from '../modals/profileModal.js';
import { createRank } from '../modals/rankModal.js';

// S C R I P T S //

document.addEventListener('DOMContentLoaded', () => {

    const loginModal = createLogin();
    const registerModal = createRegister();
    const recoverModal = createRecover();
    const historyModal = createHistory();
    const profileModal = createProfile();
    const rankModal = createRank();

    const loginButton = document.getElementById('abrir-login');
    const registerPage = document.getElementById('registerPage');
    const enterPage = document.getElementById('enterPage');
    const recoverButton = document.getElementById('recuperar');

    const botoes = document.querySelectorAll('.game-button');

    const pondeto = document.getElementById('pondeto');
    const diario = document.getElementById('diario');
    const ponteto = document.getElementById('ponteto');

    const history = document.getElementById('history');
    const rank = document.getElementById('rank');
    const settings = document.getElementById('settings');
    const jogar = document.getElementById('jogar');

    const gamesHome = [pondeto, diario, ponteto];
    const optionsHome = [history, rank, settings];

    let lastFocusedButton = null;

    if (jogar) {
        jogar.disabled = true;
    
        jogar.addEventListener('click', () => {
            if (lastFocusedButton) {
                switch (lastFocusedButton.id) {
                    case 'pondeto':
                        window.location.href = '../pages/pondeto.html';
                        break;
                    case 'diario':
                        window.location.href = '../pages/diario.html';
                        break;
                    case 'ponteto':
                        window.location.href = '../pages/ponteto.html';
                        break;
                    default:
                        return;
                }
            }
        });
    }
    

    botoes.forEach((botao, index) => {
        setTimeout(() => {
            botao.classList.remove('opacity-0', 'scale-125');
            botao.classList.add('opacity-100', 'scale-100');
        }, 100 + (index * 150));
    });

    gamesHome.forEach((button) => {
        if (button) {
            button.addEventListener('click', () => {
                lastFocusedButton = button;
                button.focus();
                jogar.disabled = false;
            });
        }
    });

    optionsHome.forEach((button) => {
        if (button) {
            button.addEventListener('click', () => {
                jogar.disabled = true;

                switch (button.id) {
                    case 'history':
                        historyModal.open();
                        break;
                    case 'rank':
                        rankModal.open();
                        break;
                    case 'settings':
                        profileModal.open();
                        break;
                    default:
                        return;
                }
                
                lastFocusedButton = button;
                button.focus();
            });
        }
    });

    document.addEventListener('click', (e) => {
        const isGameButton = e.target.closest('.game-button');

        if (!isGameButton) {
            document.querySelectorAll('.game-button').forEach(button => {
                button.blur();
            });
            lastFocusedButton = null;
            jogar.disabled = true;
        }
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
});