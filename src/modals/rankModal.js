// R E T U R N

export function createRank() { 
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden transition-opacity duration-300 ease-out';

    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-md p-8 rounded-3xl shadow-lg border-2 border-white/10 bg-gradient-to-br from-modal-midOne to-modal-midTwo transform transition-all duration-300 ease-out scale-95 opacity-0';

    modalBox.innerHTML = `
        <div class="flex-1">
            <div class="flex flex-row items-center">
                <button class="close-modal text-sm text-red-500">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10">
                        <img src="../assets/public/fechar.svg"/>
                    </div>
                </button>

                <div class="w-full flex items-center justify-center mr-12">
                    <h1 class="text-3xl font-bold text-yellow-400 tracking-tighter">Ranking</h1>
                </div>
            </div>
        </div>

        <div class="w-full">
            <div class="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-6">
                <!-- # -->
            </div>

            <div class="tab-content" id="rank-content">
                <div class="space-y-2">
                    <div class="bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 p-3 rounded-lg text-slate-200 flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-slate-900 font-bold mr-3">
                                1
                            </div>
                            
                            <span>João Pedro</span>
                        </div>

                        <span class="font-bold text-yellow-400">1250 pts</span>
                    </div>
                
                    <div class="bg-gradient-to-r from-slate-400/20 to-slate-400/5 p-3 rounded-lg text-slate-200 flex items-center justify-between">
                        <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center text-slate-900 font-bold mr-3">
                            2
                        </div>

                        <span>Maria Silva</span>
                    </div>

                    <span class="font-bold text-slate-300">980 pts</span>
                </div>
                
                <div class="bg-gradient-to-r from-amber-700/20 to-amber-700/5 p-3 rounded-lg text-slate-200 flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-slate-900 font-bold mr-3">
                            3
                        </div>

                        <span>Carlos Eduardo</span>
                    </div>

                    <span class="font-bold text-amber-700">875 pts</span>
                </div>

                <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold mr-3">
                            4
                        </div>

                        <span>Ana Beatriz</span>
                    </div>

                    <span>720 pts</span>
                </div>
                
                <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold mr-3">
                            5
                        </div>

                        <span>Lucas Mendes</span>
                    </div>

                    <span>695 pts</span>
                </div>

                <div class="bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 p-3 rounded-lg text-slate-200 flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center font-bold mr-3">
                            8
                        </div>

                        <span>Você</span>
                    </div>

                    <span class="font-bold text-cyan-400">540 pts</span>
                </div>
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