const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');

let audioWindow;

function createWindow() {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { x, y, width, height } = primaryDisplay.workArea;

    const win = new BrowserWindow({
        x,
        y,
        width: 700,
        height: 700,
        minWidth: 700,
        minHeight: 700,
        frame: false,
        autoHideMenuBar: true,
        icon: path.join(__dirname, './src/assets/icons/logo(2).ico'),

        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        }
    });

    win.loadFile('./src/pages/home.html');

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

    audioWindow.loadFile('./src/scripts/audioPlayer.html');

    win.on('closed', () => {
        app.quit();
    });

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

// win.webContents.on('before-input-event', (event, input) => {
//     const isReload = (input.control || input.meta) && input.key.toLowerCase() === 'r';
//     if (isReload) {
//         event.preventDefault();
//     }
// });