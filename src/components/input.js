function criarInput(placeholder, onInput) {
    const input = document.createElement("input");
    input.className = "inputArea";

    input.innerHTML = `
        <input type="text">
    `;

    return input;
}