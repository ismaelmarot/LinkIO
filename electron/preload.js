const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  links: {
    getAll: () => ipcRenderer.invoke('links:getAll'),
    get: (id) => ipcRenderer.invoke('links:get', id),
    create: (data) => ipcRenderer.invoke('links:create', data),
    update: (id, data) => ipcRenderer.invoke('links:update', id, data),
    delete: (id) => ipcRenderer.invoke('links:delete', id),
  },
});