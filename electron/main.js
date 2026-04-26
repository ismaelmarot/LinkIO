const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const database = require('../backend/src/db/database');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 430,
    height: 932,
    title: 'LinkIO',
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const isDev = !app.isPackaged;

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {
    const indexPath = path.join(__dirname, '../frontend/build/index.html');
    mainWindow.loadFile(indexPath);
  }

  const menuTemplate = [
    {
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectall' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        { role: 'close' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function setupIpcHandlers() {
  ipcMain.handle('links:getAll', async () => {
    try {
      return database.getAllLinks();
    } catch (error) {
      console.error('Error getting all links:', error);
      return [];
    }
  });

  ipcMain.handle('links:get', async (_, id) => {
    try {
      return database.getLinkById(id);
    } catch (error) {
      console.error('Error getting link:', error);
      return null;
    }
  });

  ipcMain.handle('links:create', async (_, linkData) => {
    try {
      return database.createLink(linkData);
    } catch (error) {
      console.error('Error creating link:', error);
      throw error;
    }
  });

  ipcMain.handle('links:update', async (_, id, updates) => {
    try {
      return database.updateLink(id, updates);
    } catch (error) {
      console.error('Error updating link:', error);
      throw error;
    }
  });

  ipcMain.handle('links:delete', async (_, id) => {
    try {
      return database.deleteLink(id);
    } catch (error) {
      console.error('Error deleting link:', error);
      throw error;
    }
  });
}

app.whenReady().then(async () => {
  await database.initDatabase();
  setupIpcHandlers();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('quit', () => {
  database.closeDatabase();
});