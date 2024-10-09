const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;
let taskWindow;
let userInfo = {}; // variavel para armazenar as informações do usuário

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

//criar janela principal

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

// Mostrar as informações do usuário salvas 
ipcMain.on('save-personal-info', (Event, data) =>{
    userInfo = data;
    console.log("Informações do usuário salvas: ", userInfo);
});

// IPC para abrir a janela de tarefas
ipcMain.on('open-task-window', (Event) => {
    if (!taskWindow) {
        createTaskWindow();
        taskWindow.webContents.once('dom-ready', () =>{
            taskWindow.webContents.send('load-user-info', userInfo);

        });
    }
});
