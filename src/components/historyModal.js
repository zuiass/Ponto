export function createHistory() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-50 hidden';
  
    const modalBox = document.createElement('div');
    modalBox.className = 'w-full max-w-md p-8 rounded-3xl shadow-lg border-2 border-white/10 bg-gradient-to-br from-modal-midOne to-modal-midTwo';
      
    modalBox.innerHTML = `
      <div className="max-w-md mx-auto">
      
        <div class="flex flex-row items-center pb-6 gap-3">
          <button class="close-modal text-sm text-red-500">
            <div class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10">
              <img src="../assets/public/fechar.svg"/>
            </div>
          </button>
  
          <h1 class="text-3xl font-bold text-yellow-400 text-center tracking-tighter">Histórico</h1>
        </div>
  
        <div className="bg-[#1e2a3e] rounded-3xl p-8 text-white shadow-lg"> 
  
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-red-600">250</p>
              <p className="text-gray-300 mt-1">Erros</p>
            </div>
  
            <div className="text-center">
              <p className="text-4xl font-bold text-green-500">1000</p>
              <p className="text-gray-300 mt-1">Acertos</p>
            </div>
  
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-400">100</p>
              <p className="text-gray-300 mt-1">Tentativas</p>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-gray-400 mb-3">Ponto</p>
              <p className="text-white">Peppa</p>
              <p className="text-white">Bujão</p>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-3">Ponteto</p>
              <p className="text-white">Peppa</p>
              <p className="text-white">Bujão</p>
              <p className="text-white">Nitro</p>
              <p className="text-white">Natal</p>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-3">Pondeto</p>
              <p className="text-white">Nitro</p>
              <p className="text-white">Peppa</p>
            </div>
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