export function createWindowControls() {
    return `
        <div id="title-bar" class="fixed top-0 left-0 right-0 flex justify-end items-center bg-gray-800 h-10 select-none" style="-webkit-app-region: drag; z-index: 1000;">
            <div id="window-controls" class="flex gap-[1px] pr-[1px]" style="-webkit-app-region: no-drag;">
                <button id="minimize" class="hover:bg-gray-600 px-4 py-2 flex justify-center" title="Minimizar">
                    <img src="../assets/public/minimize.svg">
                </button>
        
                <button id="maximize" class="hover:bg-gray-600 px-4 py-2 flex justify-center" title="Maximizar">
                    <img src="../assets/public/maximize.svg" id="maximize-icon">
                </button>
        
                <button id="close" class="hover:bg-red-600 px-4 py-2 flex justify-center" title="Fechar">
                    <img src="../assets/public/close.svg">
                </button>
            </div>
        </div>  
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', createWindowControls());

    const { ipcRenderer } = window.electron;

    const minBtn = document.getElementById('minimize');
    const maxBtn = document.getElementById('maximize');
    const maxIcon = document.getElementById('maximize-icon');
    const closeBtn = document.getElementById('close');

    minBtn?.addEventListener('click', () => ipcRenderer.send('window:minimize'));
    maxBtn?.addEventListener('click', () => ipcRenderer.send('window:toggle-maximize'));
    closeBtn?.addEventListener('click', () => ipcRenderer.send('window:close'));

    window.electron.ipcRenderer.on('window:is-maximized', (isMaximized) => {
        const icon = document.getElementById('maximize-icon');
        const maximize = document.getElementById('maximize'); 

        if (!icon) return;

        if (isMaximized) {
            icon.src = '../assets/public/restore.svg';
            maximize.title = 'Restaurar';
        } else {
            icon.src = '../assets/public/maximize.svg';
            maximize.title = 'Maximizar';
        }
    });

    const titleBar = document.getElementById('title-bar');

    window.electron.ipcRenderer.on('window:is-fullscreen', (isFullscreen) => {
        if (isFullscreen) {
            titleBar.style.display = 'none';
        } else {
            titleBar.style.display = 'flex';
        }
    });
});