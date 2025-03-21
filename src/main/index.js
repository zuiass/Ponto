const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: '../../public/icon.svg',
    autoHideMenuBar: true,
    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // Adicionado para garantir que o nodeIntegration funcione corretamente
    }
  });
  
  win.loadFile(path.join(__dirname, '../renderer/pages/login.html')); // Corrigido o caminho do arquivo HTML
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});