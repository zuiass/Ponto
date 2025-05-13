export function createRank() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-black/20 dark:bg-white/5 backdrop-blur-sm z-50 hidden transition-opacity duration-300 ease-out';
  
    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-md p-8 rounded-3xl shadow-lg border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-gradient-to-br dark:from-modal-midOne dark:to-modal-midTwo transform transition-all duration-300 ease-out scale-95 opacity-0';
  
    modalBox.innerHTML = `
      <div class="flex-1">
        <div class="flex flex-row items-center">
          <button class="close-modal">
            <div class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
              <img src="../assets/public/fechar.svg" class="brightness-0 dark:brightness-100"/>
            </div>
          </button>
  
          <div class="w-full flex items-center justify-center mr-12">
            <h1 class="text-3xl font-bold text-yellow-500 dark:text-yellow-400 tracking-tighter">Ranking</h1>
          </div>
        </div>
      </div>
  
      <div class="w-full">
        <div class="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-600 to-transparent my-6"></div>
  
        <div class="tab-content space-y-2" id="rank-content">
          <div class="bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 p-3 rounded-lg !text-gray-800 dark:!text-slate-200 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center !text-slate-900 font-bold mr-3">1</div>
              <span class="!text-gray-800 dark:!text-slate-200">João Pedro</span>
            </div>
            <span class="font-bold !text-yellow-500 dark:!text-yellow-400">1250 pts</span>
          </div>
  
          <div class="bg-gradient-to-r from-gray-400/20 to-gray-400/5 p-3 rounded-lg !text-gray-800 dark:!text-slate-200 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full bg-gray-400 dark:bg-slate-400 flex items-center justify-center !text-slate-900 font-bold mr-3">2</div>
              <span class="!text-gray-800 dark:!text-slate-200">Maria Silva</span>
            </div>
            <span class="font-bold !text-gray-500 dark:!text-slate-300">980 pts</span>
          </div>
  
          <div class="bg-gradient-to-r from-amber-600/20 to-amber-600/5 p-3 rounded-lg !text-gray-800 dark:!text-slate-200 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full bg-amber-600 dark:bg-amber-700 flex items-center justify-center !text-slate-900 font-bold mr-3">3</div>
              <span class="!text-gray-800 dark:!text-slate-200">Carlos Eduardo</span>
            </div>
            <span class="font-bold !text-amber-600 dark:!text-amber-700">875 pts</span>
          </div>
  
          <div class="bg-gray-100 dark:bg-slate-800/30 p-3 rounded-lg !text-gray-800 dark:!text-slate-200 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full bg-gray-500 dark:bg-slate-700 flex items-center justify-center !text-gray-100 dark:!text-slate-200 font-bold mr-3">4</div>
              <span class="!text-gray-800 dark:!text-slate-200">Ana Beatriz</span>
            </div>
            <span class="font-bold !text-gray-600 dark:!text-slate-200">720 pts</span>
          </div>
  
          <div class="bg-gray-100 dark:bg-slate-800/30 p-3 rounded-lg !text-gray-800 dark:!text-slate-200 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full bg-gray-500 dark:bg-slate-700 flex items-center justify-center !text-gray-100 dark:!text-slate-200 font-bold mr-3">5</div>
              <span class="!text-gray-800 dark:!text-slate-200">Lucas Mendes</span>
            </div>
            <span class="font-bold !text-gray-600 dark:!text-slate-200">695 pts</span>
          </div>
  
          <div class="bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 p-3 rounded-lg !text-gray-800 dark:!text-slate-200 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full bg-cyan-600 dark:bg-cyan-600 flex items-center justify-center !text-gray-100 dark:!text-slate-200 font-bold mr-3">8</div>
              <span class="!text-gray-800 dark:!text-slate-200">Você</span>
            </div>
            <span class="font-bold !text-cyan-500 dark:!text-cyan-400">540 pts</span>
          </div>
        </div>
      </div>
    `;
  
    document.body.appendChild(modal);
    modal.appendChild(modalBox);
  
    const closeButton = modalBox.querySelector('.close-modal');
    closeButton.addEventListener('click', () => close());
  
    // Verifica o tema ao abrir o modal
    function open() {
      // Força a verificação do tema
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
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
    };
  }