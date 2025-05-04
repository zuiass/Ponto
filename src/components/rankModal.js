import '../../database/temporaryUsers.js';

// U S I N G

export function createRank() { 
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden transition-opacity duration-300 ease-out';

    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-md p-8 rounded-3xl shadow-lg border-2 border-white/10 bg-gradient-to-br from-modal-midOne to-modal-midTwo transform transition-all duration-300 ease-out scale-95 opacity-0';

    modalBox.innerHTML = `
        <div class="flex-1">
            <div class="flex flex-row items-center gap-3">
                <button class="close-modal text-sm text-red-500">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10">
                        <img src="../assets/public/fechar.svg"/>
                    </div>
                </button>

                <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter">Ranking</h1>
            </div>
        </div>

        <div class="w-full">
            <div class="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-6"></div>

            <div class="tab-content" id="rank-content">
                <div class="space-y-2" id="rank-list"></div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.appendChild(modalBox);

    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => close());

    function open() {
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.add('opacity-100');
        modalBox.classList.remove('scale-95', 'opacity-0');
        modalBox.classList.add('scale-100', 'opacity-100');
    }
    
    function close() {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        modalBox.classList.remove('scale-100', 'opacity-100');
        modalBox.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    return {
        open,
        close
    }
}