export function createButton({ text, className, type = 'button', onClick }) {
    const button = document.createElement("button");
    button.className = className;
    button.type = type;

    button.innerHTML = `
        <div class="shadowEntrar">
            <div class="divTextEntrar">
                <h2>${text}</h2>
            </div>
        </div>
    `;

    if (onClick) {
        button.addEventListener("click", onClick);
    }

    return button;
}