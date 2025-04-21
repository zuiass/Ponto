const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        send: (channel, data) => {
            const validChannels = [
                'window:minimize', 'window:toggle-maximize', 'window:close'
            ];

            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },

        on: (channel, func) => {
            const validChannels = [
                'window:is-maximized',
                'window:is-fullscreen'
            ];

            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (_, ...args) => func(...args));
            }
        }
    }
});