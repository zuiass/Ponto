const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        minWidth: 750,
        minHeight: 550,
        frame: false,
        icon: path.join(__dirname, './src/assets/ponto.png'),
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        }
    });

    ipcMain.on('window:minimize', () => {
        win.minimize();
    });

    ipcMain.on('window:toggle-maximize', () => {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    });

    ipcMain.on('window:close', () => {
        win.close();
    });

    win.loadFile('./src/pages/home.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});