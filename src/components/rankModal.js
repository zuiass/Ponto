export function createRank() { 
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden';

    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-md p-8 rounded-3xl shadow-lg border-2 border-white/10 bg-gradient-to-br from-modal-midOne to-modal-midTwo';

    modalBox.innerHTML = `
        <div class="flex-1">
            <div class="flex flex-row items-center pb-6 gap-3">
                <button class="close-modal text-sm text-red-500">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10">
                        <img src="../assets/public/fechar.svg"/>
                    </div>
                </button>

                <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter">Ranking</h1>
            </div>
        </div>

        <div class="w-full">
        <!-- Divider with gradient -->
        <div class="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-6"></div>

        <!-- Rank tab content -->
        <div class="tab-content" id="rank-content">
          <div class="space-y-2">
            <!-- Top 3 with medals -->
            <div class="bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 p-3 rounded-lg text-slate-200 flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-slate-900 font-bold mr-3">1</div>
                <span>João Pedro</span>
              </div>
              <span class="font-bold text-yellow-400">1250 pts</span>
            </div>
            
            <div class="bg-gradient-to-r from-slate-400/20 to-slate-400/5 p-3 rounded-lg text-slate-200 flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center text-slate-900 font-bold mr-3">2</div>
                <span>Maria Silva</span>
              </div>
              <span class="font-bold text-slate-300">980 pts</span>
            </div>
            
            <div class="bg-gradient-to-r from-amber-700/20 to-amber-700/5 p-3 rounded-lg text-slate-200 flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-slate-900 font-bold mr-3">3</div>
                <span>Carlos Eduardo</span>
              </div>
              <span class="font-bold text-amber-700">875 pts</span>
            </div>
            
            <!-- Other rankings -->
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold mr-3">4</div>
                <span>Ana Beatriz</span>
              </div>
              <span>720 pts</span>
            </div>
            
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold mr-3">5</div>
                <span>Lucas Mendes</span>
              </div>
              <span>695 pts</span>
            </div>
            
            <!-- Your position highlighted -->
            <div class="bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 p-3 rounded-lg text-slate-200 flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center font-bold mr-3">8</div>
                <span>Você</span>
              </div>
              <span class="font-bold text-cyan-400">540 pts</span>
            </div>
          </div>
        </div>
  
        <!-- Ponto tab content -->
        <div class="tab-content hidden" id="ponto-content">
          <div class="space-y-2">
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center">
              <div class="h-2 w-2 rounded-full bg-yellow-400 mr-3"></div>
              Peppa
            </div>
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center">
              <div class="h-2 w-2 rounded-full bg-yellow-400 mr-3"></div>
              Bujão
            </div>
          </div>
        </div>
  
        <!-- Ponteto tab content -->
        <div class="tab-content hidden" id="ponteto-content">
          <div class="space-y-2">
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center">
              <div class="h-2 w-2 rounded-full bg-yellow-400 mr-3"></div>
              Peppa
            </div>
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center">
              <div class="h-2 w-2 rounded-full bg-yellow-400 mr-3"></div>
              Bujão
            </div>
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center">
              <div class="h-2 w-2 rounded-full bg-yellow-400 mr-3"></div>
              Nitro
            </div>
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center">
              <div class="h-2 w-2 rounded-full bg-yellow-400 mr-3"></div>
              Natal
            </div>
          </div>
        </div>
  
        <!-- Pondeto tab content -->
        <div class="tab-content hidden" id="pondeto-content">
          <div class="space-y-2">
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center">
              <div class="h-2 w-2 rounded-full bg-yellow-400 mr-3"></div>
              Nitro
            </div>
            <div class="bg-slate-800/30 p-3 rounded-lg text-slate-200 flex items-center">
              <div class="h-2 w-2 rounded-full bg-yellow-400 mr-3"></div>
              Peppa
            </div>
          </div>
        </div>
      </div>
    `;

    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => modal.classList.add('hidden'));

    document.body.appendChild(modal);
    modal.appendChild(modalBox);

    return {
        open: () => modal.classList.remove('hidden'),
        close: () => modal.classList.add('hidden')
    };

}