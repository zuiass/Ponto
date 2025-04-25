const entrarBtn = createButton({
    text: 'Entrar',
    className: 'bg-gradient-to-r from-[#DC7C08] to-[#F2AB1B] text-black p-4 rounded font-bold py-3 px-6 rounded-xl shadow-md hover:bg-[#34495E] transition w-full',
    type: 'submit'
    
});

form.appendChild(entrarBtn);

const cadastrarBtn = createButton({
    text: 'Cadastrar',
    className: 'bg-[#2C3E50] text-[#F1C40F] font-bold py-3 px-6 rounded-xl shadow-md hover:bg-[#34495E] transition w-full',
    onClick: () => {
        window.location.href = '../pages/cadastro.html';
    }
});

container.appendChild(cadastrarBtn);

container.addEventListener("mousedown", () => {
    somBotao.currentTime = 0;
    somBotao.play();
});

entrarBtn.addEventListener("mousedown", () => {
    somBotao.currentTime = 0;
    somBotao.play();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Dados do formulário:', data);
    window.location.href = '../pages/home.html';
});