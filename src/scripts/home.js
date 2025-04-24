import { createLoginModal } from '../components/loginModal.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginModal = createLoginModal();

    const loginButton = document.getElementById('abrir-login');
    loginButton.addEventListener('click', () => {
        loginModal.open();
    });
});