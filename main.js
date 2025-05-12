const { app, BrowserWindow } = require('electron');
const { ipcMain, screen } = require('electron');
const path = require('path');
const connection = require('./database/connection/connection.js');

let audioWindow;

function createWindow() {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.workArea;
    
    const win = new BrowserWindow({
        width: 700,
        height: 700,
        minWidth: 700,
        minHeight: 700,
        frame: false,
        autoHideMenuBar: true,
        icon: path.join(__dirname, './src/assets/icons/logo.ico'),
        // devTools: false,

        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        }
    });

    win.loadFile('./src/pages/home.html');

    win.on('maximize', () => win.webContents.send('window:is-maximized', true));
    win.on('unmaximize', () => win.webContents.send('window:is-maximized', false));
    win.on('enter-full-screen', () => win.webContents.send('window:is-fullscreen', true));
    win.on('leave-full-screen', () => win.webContents.send('window:is-fullscreen', false));

    ipcMain.on('window:minimize', () => win.minimize());

    ipcMain.on('window:toggle-maximize', () => {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    });

    ipcMain.on('window:close', () => win.close());

    ipcMain.handle('window:get-state', () => {
        return {
            isMaximized: win.isMaximized(),
            isFullscreen: win.isFullScreen(),
        };
    });

    audioWindow = new BrowserWindow({
        width: 0,
        height: 0,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: false
        }
    });

    audioWindow.loadFile('./src/pages/audioPlayer.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});