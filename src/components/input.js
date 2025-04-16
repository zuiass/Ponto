function criarInput(placeholder, onInput) {
    const input = document.createElement("div");
    input.className = "inputArea";

    input.innerHTML = `
        <div class="shadowInput">
            <div class="divInput">
                <input class="inputTexto" placeholder="${placeholder}">
            </div>
        </div>
    `;
    
    return input;
}