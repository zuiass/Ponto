function criarInput(placeholder, ) {
    const input = document.createElement("div");
    input.className = "inputArea";

    input.innerHTML = `
        <div></div>
    `;

    return input;
}