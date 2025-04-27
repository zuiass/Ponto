const audio = document.getElementById('background-music');

document.addEventListener('DOMContentLoaded', () => {
    const savedTime = localStorage.getItem('audioCurrentTime');

    if (savedTime) {
        audio.currentTime = parseFloat(savedTime); // Retoma do tempo salvo
    }

    audio.play().catch(err => {
        console.error("Erro ao tentar tocar música:", err);
    });
    
    audio.addEventListener('timeupdate', () => {
        localStorage.setItem('audioCurrentTime', audio.currentTime);
    });
});