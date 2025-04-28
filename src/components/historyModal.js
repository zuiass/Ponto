export function createHistory() {

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden';

    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-md p-8 rounded-3xl shadow-lg border-2 border-white/10 bg-gradient-to-br from-modal-midOne to-modal-midTwo';
  
  modalBox.innerHTML = `
    <div class="w-full">

      <div class="flex items-center justify-between mb-6">
        <button class="close-modal text-sm text-red-500">
            <div class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10">
                <img src="../assets/public/fechar.svg"/>
            </div>
        </button>

        <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter flex-1 mr-10">Histórico</h1>
      </div>

      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="bg-slate-800/50 rounded-xl p-3 text-center transition-transform hover:scale-105 hover:bg-slate-800/80">
          <span class="text-3xl font-bold text-red-500 block">250</span>
          <span class="text-sm text-slate-300">Erros</span>
        </div>
        
        <div class="bg-slate-800/50 rounded-xl p-3 text-center transition-transform hover:scale-105 hover:bg-slate-800/80">
          <span class="text-3xl font-bold text-green-500 block">1000</span>
          <span class="text-sm text-slate-300">Acertos</span>
        </div>
        
        <div class="bg-slate-800/50 rounded-xl p-3 text-center transition-transform hover:scale-105 hover:bg-slate-800/80">
          <span class="text-3xl font-bold text-amber-500 block">100</span>
          <span class="text-sm text-slate-300">Tentativas</span>
        </div>
      </div>

      <!-- Divider with gradient -->
      <div class="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-6"></div>

      <!-- Tabs navigation -->
      <div class="flex mb-4 bg-slate-800/30 rounded-lg p-1">
        <button class="tab-button flex-1 py-2 px-4 rounded-md text-slate-300 transition-colors text-center" data-tab="ponto">Ponto</button>
        <button class="tab-button flex-1 py-2 px-4 rounded-md text-slate-300 transition-colors text-center" data-tab="ponteto">Ponteto</button>
        <button class="tab-button flex-1 py-2 px-4 rounded-md text-slate-300 transition-colors text-center" data-tab="pondeto">Pondeto</button>
      </div>

      <!-- Tab content -->
      <div class="tab-content" id="ponto-content">
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

  document.body.appendChild(modal);
  modal.appendChild(modalBox);

  const closeButton = modalBox.querySelector('.close-modal');
  closeButton.addEventListener('click', () => close());

  const tabButtons = modalBox.querySelectorAll('.tab-button');
  const tabContents = modalBox.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('bg-slate-700', 'text-white'));

      button.classList.add('bg-slate-700', 'text-white');

      tabContents.forEach(content => content.classList.add('hidden'));

      const tabId = button.getAttribute('data-tab');
      const tabContent = modalBox.querySelector(`#${tabId}-content`);
      tabContent.classList.remove('hidden');
    });
  });

  tabButtons[0].classList.add('bg-slate-700', 'text-white');

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

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  return {
    open,
    close
  };
}