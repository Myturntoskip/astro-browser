const { app, BrowserWindow } = require('electron');
const path = require('path');

// SOLUÇÃO PARA O GLITCH: Desativa a aceleração por hardware da GPU antes do app iniciar
app.disableHardwareAcceleration();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  // CONFIGURAÇÃO EXTRA ANTI-GLITCH: Ignora a lista negra de GPUs do Chromium
  app.commandLine.appendSwitch('ignore-gpu-blocklist');
  
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

