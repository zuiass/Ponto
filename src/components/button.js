export function createButton({ 
    text = '',
    className = '',
    type = 'button',
    onClick
}) {
    const button = document.createElement("button");
    button.innerText = text;
    button.className = className;
    button.type = type;

    if (onClick) {
        button.addEventListener("click", onClick);
    }

    return button;
}