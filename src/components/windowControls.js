export function createWindowControls() {
    return `
        <div id="title-bar" class="flex justify-end items-center bg-gray-800 h-10 select-none" style="-webkit-app-region: drag;">
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

    maxBtn?.addEventListener('click', () => {
        ipcRenderer.send('window:toggle-maximize');
    });

    closeBtn?.addEventListener('click', () => ipcRenderer.send('window:close'));
});