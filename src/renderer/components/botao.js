function criarBotao(texto, onClick) {
    const botao = document.createElement("button");
    botao.className = "botaoEntrar";

    botao.innerHTML = `
        <div class="shadowEntrar">
            <div class="divTextEntrar">
                <h2>${texto}</h2>
            </div>
        </div>
    `;

    botao.addEventListener("click", onClick);
    return botao;
}

const btn_container = document.querySelector(".btn-container");
btn_container.appendChild(criarBotao("Criar conta"));
btn_container.appendChild(criarBotao("Entrar"));

btn_container.addEventListener("mousedown", () => {
    const som = document.getElementById("som-botao");
    som.currentTime = 0;
    som.play();
});