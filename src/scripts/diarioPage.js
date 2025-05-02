import { createInstructions } from '../components/instructionsModal.js';

// S C R I P T S //

window.addEventListener('DOMContentLoaded', () => {

    const instructionsModal = createInstructions();

    document.querySelector('.hint-button').addEventListener('click', () => {
        instructionsModal.open();
    });

    document.getElementById('startPlaying').addEventListener('click', () => {
        instructionsModal.close();
    });

});