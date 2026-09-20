const { app, BrowserWindow } = require('electron');
const path = require('path');

// DETEÇÃO DE SISTEMA: Só desativa a aceleração por hardware se for Linux
if (process.platform === 'linux') {
  app.disableHardwareAcceleration();
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    // Define o ícone nativo da janela dependendo do sistema operativo
    icon: process.platform === 'win32' 
      ? path.join(__dirname, 'icon.ico') 
      : path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  });

  mainWindow.maximize();
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  if (process.platform === 'linux') {
    app.commandLine.appendSwitch('ignore-gpu-blocklist');
  }
  
  createWindow();

  // No Mac, reabre a janela ao clicar no ícone do dock se não houver janelas abertas
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Comportamento multiplataforma de encerramento
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


