const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        minWidth: 700,
        minHeight: 550,
        frame: false,
        icon: path.join(__dirname, './src/assets/icons/logo(1).ico'),
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        }
    });

    win.loadFile('./src/pages/ponto.html');

    ipcMain.on('window:minimize', () => {
        win.minimize();
    });

    win.on('enter-full-screen', () => {
        win.webContents.send('window:is-fullscreen', true);
    });
    
    win.on('leave-full-screen', () => {
        win.webContents.send('window:is-fullscreen', false);
    });
    
    ipcMain.on('window:toggle-maximize', () => {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    });

    win.on('maximize', () => {
        win.webContents.send('window:is-maximized', true);
    });
    
    win.on('unmaximize', () => {
        win.webContents.send('window:is-maximized', false);
    });    

    ipcMain.on('window:close', () => {
        win.close();
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});