export function createWindowControls() {
    return `
      <div id="window-controls" class="flex justify-end bg-gray-800 text-white px-2 py-1 select-none">
        <button id="min-btn" class="hover:bg-gray-600 px-3 py-1">—</button>
        <button id="max-btn" class="hover:bg-gray-600 px-3 py-1">[]</button>
        <button id="close-btn" class="hover:bg-red-600 px-3 py-1">×</button>
      </div>
    `;
}

import { createWindowControls } from '../components/windowControls.js';
createWindowControls();