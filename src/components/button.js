export function createButton({
    id, 
    text = '',
    className = '',
    type = 'button',
    onClick
}) {
    const button = document.createElement("button");
    if (id) button.id = id;
    button.innerText = text;
    button.className = className;
    button.type = type;
    if (onClick) button.addEventListener("click", onClick);

    return button;
}