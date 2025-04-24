export function createLoginModal() {

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center bg-black/50 z-50 hidden';

    modal.innerHTML = `
        <div class="w-full max-w-md p-8 rounded-2xl shadow-lg border-2 border-white/10" style="background: linear-gradient(to bottom, rgba(41,53,70,0.8), rgba(25,33,46,0.8)); backdrop-filter: blur(4px);">
            <div class="flex-1">
                <h1 class="text-4xl font-bold text-yellow-400 mb-8 text-center tracking-tighter">L o g i n</h1>

                <form id="form" class="flex flex-col gap-4 mb-6 w-full">
                    <input type="text" placeholder="Usuário" class="p-2 rounded bg-gray-700 text-white placeholder-gray-400" />
                    <input type="password" placeholder="Senha" class="p-2 rounded bg-gray-700 text-white placeholder-gray-400" />
                </form>

                <div class="text-center mt-4">
                    <span class="text-sm text-gray-400">Esqueceu a senha? </span>
                    <a href="#" class="text-blue-500">Recuperar</a>
                </div>
                <div class="flex justify-between gap-4 mb-4 mt-6">
                    <button class="bg-gray-600 px-4 py-2 rounded text-white">Cadastrar</button>
                    <button class="bg-blue-600 px-4 py-2 rounded text-white">Entrar</button>
                </div>
                <div class="text-center mt-2">
                    <button class="close-modal text-sm text-red-400">Cancelar</button>
                </div>
                <audio id="som-botao" src="../assets/Button - Sound Effect.mp3" preload="auto"></audio>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-modal');
    closeButton.addEventListener('click', () => modal.classList.add('hidden'));

    return {
        open: () => modal.classList.remove('hidden'),
        close: () => modal.classList.add('hidden')
    };

}  