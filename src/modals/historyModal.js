export function createHistory() {
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

        <div class="w-full h-auto flex items-center justify-center mr-12">
          <h1 class="text-3xl font-bold text-yellow-500 dark:text-yellow-400 tracking-tighter">Histórico</h1>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div class="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-600 to-transparent my-5">
        <!-- # -->
      </div>

      <div class="grid grid-cols-3 gap-4 mb-5">
        <div class="dark:bg-transparent rounded-xl p-3 text-center transition-transform hover:scale-105">
          <span class="text-3xl font-bold text-red-600 dark:text-red-500 block">0</span>
          <span class="text-sm text-gray-600 dark:text-slate-300">Erros</span>
        </div>
        
        <div class="dark:bg-transparent rounded-xl p-3 text-center transition-transform hover:scale-105">
          <span class="text-3xl font-bold text-green-600 dark:text-green-500 block">0</span>
          <span class="text-sm text-gray-600 dark:text-slate-300">Acertos</span>
        </div>
        
        <div class="dark:bg-transparent rounded-xl p-3 text-center transition-transform hover:scale-105">
          <span class="text-3xl font-bold text-amber-600 dark:text-amber-500 block">0</span>
          <span class="text-sm text-gray-600 dark:text-slate-300">Tentativas</span>
        </div>
      </div>

      <div class="flex bg-gray-100 dark:bg-white/5 rounded-full p-1">
        <button class="tab-button flex-1 py-2 px-4 rounded-full text-gray-600 dark:text-slate-300 transition-colors text-center" data-tab="ponto">Ponto</button>
        <button class="tab-button flex-1 py-2 px-4 rounded-full text-gray-600 dark:text-slate-300 transition-colors text-center" data-tab="ponteto">Ponteto</button>
        <button class="tab-button flex-1 py-2 px-4 rounded-full text-gray-600 dark:text-slate-300 transition-colors text-center" data-tab="pondeto">Pondeto</button>
      </div>

      <div class="tab-content space-y-2" id="ponto-content">
        <div class="p-3 rounded-xl text-gray-800 dark:text-slate-200 flex items-center dark:bg-transparent">
          <div class="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-3"></div>
          Peppa
        </div>

        <div class="p-3 rounded-xl text-gray-800 dark:text-slate-200 flex items-center dark:bg-transparent">
          <div class="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-3"></div>
          Kayke
        </div>

        <div class="p-3 rounded-xl text-gray-800 dark:text-slate-200 flex items-center dark:bg-transparent">
          <div class="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-3"></div>
          Bosta
        </div>
      </div>

      <div class="tab-content hidden space-y-2" id="ponteto-content">
        <div class="p-3 rounded-xl text-gray-800 dark:text-slate-200 flex items-center dark:bg-transparent">
          <div class="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-3"></div>
          Peppa
        </div>

        <div class="p-3 rounded-xl text-gray-800 dark:text-slate-200 flex items-center dark:bg-transparent">
          <div class="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-3"></div>
          Bosta
        </div>

        <div class="p-3 rounded-xl text-gray-800 dark:text-slate-200 flex items-center dark:bg-transparent">
          <div class="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-3"></div>
          Nitro
        </div>

        <div class="p-3 rounded-xl text-gray-800 dark:text-slate-200 flex items-center dark:bg-transparent">
          <div class="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-3"></div>
          Natal
        </div>
      </div>

      <div class="tab-content hidden space-y-2" id="pondeto-content">
        <div class="p-3 rounded-xl text-gray-800 dark:text-slate-200 flex items-center dark:bg-transparent">
          <div class="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-3"></div>
          Nitro
        </div>

        <div class="p-3 rounded-xl text-gray-800 dark:text-slate-200 flex items-center dark:bg-transparent">
          <div class="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400 mr-3"></div>
          Peppa
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

  tabContents.forEach(content => {
    content.classList.add('max-h-32', 'overflow-y-auto', 'min-h-32');
  });

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('bg-gray-300', 'text-gray-800', 'dark:bg-slate-700', 'dark:text-white'));
      button.classList.add('bg-gray-300', 'text-gray-800', 'dark:bg-slate-700', 'dark:text-white');

      tabContents.forEach(content => content.classList.add('hidden'));
      const tabId = button.getAttribute('data-tab');
      const tabContent = modalBox.querySelector(`#${tabId}-content`);
      tabContent.classList.remove('hidden');
    });
  });

  tabButtons[0].classList.add('bg-gray-300', 'text-gray-800', 'dark:bg-slate-700', 'dark:text-white');

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
  };
}