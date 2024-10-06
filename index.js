const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;
let taskWindow;

// Cria a janela principal
function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        },
        title: 'Trying To Not Get Mad',
    });
    
    // Carrega o arquivo HTML principal
    mainWindow.loadFile('index.html');
    mainWindow.maximize();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// Cria a janela de tarefas
function createTaskWindow() {
    taskWindow = new BrowserWindow({
        height: 500,
        width: 600,
        parent: mainWindow, // Define a janela principal como pai
        modal: true, // Torna a janela modal
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        },
    });

    taskWindow.loadFile('taskWindow.html');
    taskWindow.on('close', () => {
        taskWindow = null;
    });
}

// Inicializa o app
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

// IPC para abrir a janela de tarefas
ipcMain.on('open-task-window', () => {
    if (!taskWindow) {
        createTaskWindow();
    }
});
