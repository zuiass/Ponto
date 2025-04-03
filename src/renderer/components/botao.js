function criarBotao(texto, onClick) {
    const botao = document.createElement("button");
    botao.className = "botaoEntrar";

    botao.innerHTML = `
        <div class="shadowEntrar">
            <div class="divTextEntrar">
                <h1>${texto}</h1>
            </div>
        </div>
    `;

    botao.addEventListener("click", onClick);
    return botao;
}

const container = document.querySelector(".btn-container");
container.appendChild(criarBotao("Criar conta"));
container.appendChild(criarBotao("Entrar"));