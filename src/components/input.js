export function createInput({
    id,
    label,
    placeholder = '',
    type = '',
    value = '',
    onInput = null,
    autocomplete = '',
    required = false,
    disabled = false,
    maxLength = null,
    className = ''
}) {
    const wrapper = document.createElement('div');
    wrapper.className = 'bg-white/5 w-full border border-[#91959D] rounded-xl pt-2';

    const myLabel = document.createElement('label');
    if (id) myLabel.id = id;
    myLabel.className = 'block text-sm text-gray-500 ml-2';
    myLabel.textContent = label;

    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;
    input.autocomplete = autocomplete;
    input.required = required;
    input.disabled = disabled;
    input.maxLength = maxLength;
    input.className = `text-white bg-transparent w-full px-2 py-2 rounded-xl border border-gray-300 focus:outline-none transition ${className}`;

    if (onInput) {
        input.addEventListener('input', onInput);
    }

    wrapper.appendChild(myLabel);
    wrapper.appendChild(input);

    return wrapper;
}