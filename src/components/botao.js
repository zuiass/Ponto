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

btn_container.addEventListener("mousedown", () => {
    const som = document.getElementById("som-botao");
    som.currentTime = 0;
    som.play();
});