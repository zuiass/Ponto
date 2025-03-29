const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
let janela;

function criarJanela() {
  janela = new BrowserWindow({
    width: 800,
    height: 500,
    minWidth: 800,
    minHeight: 500,
    simpleFullscreen: true,
    icon: path.join(__dirname, '../../public/typeGame.ico'),
    autoHideMenuBar: true,
    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  
  janela.maximize();
  janela.loadFile(path.join(__dirname, '../renderer/pages/login.html'));
}

ipcMain.on('mudar-pagina', (event, pagina) => {
  janela.loadFile(path.join(__dirname, `../renderer/pages/${pagina}.html`));
});

app.whenReady().then(() => {
  criarJanela();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) criarJanela();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});