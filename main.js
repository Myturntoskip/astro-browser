const { app, BrowserWindow } = require('electron');
const path = require('path');

// DETEÇÃO DE SISTEMA: Só desativa a aceleração por hardware se for Linux (Ubuntu)
if (process.platform === 'linux') {
  app.disableHardwareAcceleration();
}

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

  // Abre sempre em ecrã inteiro maximizado
  mainWindow.maximize();

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  // Ajuste extra para Linux
  if (process.platform === 'linux') {
    app.commandLine.appendSwitch('ignore-gpu-blocklist');
  }
  
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

