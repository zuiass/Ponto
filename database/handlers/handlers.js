const { ipcMain } = require('electron');
const { buscarPessoas } = require('../queries/queries.js');

ipcMain.handle('buscar-dados', async () => {
  return await buscarPessoas();
});