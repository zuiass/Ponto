export function createInput({ id, label, placeholder = '', type = 'text', value = '', onInput = null }) {

    const wrapper = document.createElement('div');
    wrapper.className = 'w-full';

    const labelEl = document.createElement('label');
    labelEl.htmlFor = id;
    labelEl.className = 'block text-sm font-medium text-gray-700 mb-1';
    labelEl.textContent = label;
  
    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;
    input.className = 'w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition';
  
    if (onInput) {
      input.addEventListener('input', onInput);
    }
  
    wrapper.appendChild(labelEl);
    wrapper.appendChild(input);
  
    return wrapper;
}