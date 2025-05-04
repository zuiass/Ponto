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

    // Função para renderizar o ranking
    function renderRanking() {
        const container = modalBox.querySelector('#rank-list');
        container.innerHTML = '';  // Limpa o conteúdo do ranking antes de adicionar os novos dados

        const sorted = [...usuarios].sort((a, b) => b.pontos - a.pontos);  // Ordena os usuários por pontos de forma decrescente

        sorted.forEach((user, index) => {
            const div = document.createElement('div');
            let bg = 'bg-slate-800/30';
            let text = 'text-slate-200';
            let border = '';
            let positionClass = 'bg-slate-700';

            // Define a cor de fundo e a classe para cada posição
            if (index === 0) {
                bg = 'bg-gradient-to-r from-yellow-500/20 to-yellow-500/5';
                text = 'text-slate-200';
                positionClass = 'bg-yellow-500 text-slate-900';
            } else if (index === 1) {
                bg = 'bg-gradient-to-r from-slate-400/20 to-slate-400/5';
                positionClass = 'bg-slate-400 text-slate-900';
            } else if (index === 2) {
                bg = 'bg-gradient-to-r from-amber-700/20 to-amber-700/5';
                positionClass = 'bg-amber-700 text-slate-900';
            }

            // Exemplo especial se o nome for "Você"
            if (user.apelido === 'Você') {
                bg = 'bg-gradient-to-r from-cyan-500/20 to-cyan-500/5';
                border = 'border border-cyan-500/30';
                positionClass = 'bg-cyan-600 text-slate-900';
                text = 'text-cyan-400';
            }

            div.className = `${bg} ${border} p-3 rounded-lg flex items-center justify-between ${text}`;
            div.innerHTML = `
                <div class="flex items-center">
                    <div class="w-8 h-8 rounded-full ${positionClass} flex items-center justify-center font-bold mr-3">${index + 1}</div>
                    <span>${user.apelido}</span>
                </div>
                <span class="font-bold">${user.pontos} pts</span>
            `;
            container.appendChild(div);
        });
    }

    // Função de fechar o modal
    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => close());

    // Função para abrir o modal
    function open() {
        renderRanking();  // Atualiza o ranking toda vez que o modal abrir
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.add('opacity-100');
        modalBox.classList.remove('scale-95', 'opacity-0');
        modalBox.classList.add('scale-100', 'opacity-100');
    }

    // Função para fechar o modal
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