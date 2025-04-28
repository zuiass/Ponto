import { createLogin } from '../components/loginModal.js';
import { createRegister } from '../components/registerModal.js';
import { createRecover } from '../components/recoverModal.js';
import { createHistory } from '../components/historyModal.js';

document.addEventListener('DOMContentLoaded', () => {

    const loginModal = createLogin();
    const registerModal = createRegister();
    const recoverModal = createRecover();
    const historyModal = createHistory();

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
    const jogar = document.getElementById('jogar');

    const botoes = document.querySelectorAll('.game-button');
    const gamesHome = [ pondeto, diario, ponteto ];
    const optionsHome = [ history, rank, settings ];


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
                        console.log("Abrindo o jogo Diário");
                        window.location.href = '../pages/diario.html';
                        break;
                    case 'ponteto':
                        console.log("Abrindo o jogo Ponteto");
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
                if (lastFocusedButton === button) {
                    historyModal.open();
                    lastFocusedButton = null;
                    jogar.disabled = true;
                } else {
                    lastFocusedButton = button;
                    button.focus();
                    jogar.disabled = true;
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