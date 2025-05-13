export function createButton({

    id, 
    className = '',
    text = '',
    textClass = '',
    type = 'button'

}) {

    const button = document.createElement("button");
    const span = document.createElement("h3");
    
    if (id) button.id = id;
    button.className = className;
    button.type = type;
    
    span.innerText = text;
    span.className = textClass;

    button.appendChild(span);
    return button;
}