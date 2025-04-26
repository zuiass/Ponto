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