const { ipcRenderer } = require("electron");

//abrir janela de criação de tarefas
document.getElementById('create-task').addEventListener('click', () => {
    ipcRenderer.send('open-task-window');
});

//lógica do formulário
document.getElementById('personal-info-form')?.addEventListener('submit', (Event) => {
    Event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;
    const hobbie = document.getElementById('hobbie').value;

    // Aqui você pode exibir uma mensagem ou manipular os dados conforme necessário
    console.log(`Nome: ${name}, Idade: ${age}, Profissão: ${profession}`);

    // Enviar as informações para o back-end se necessário
});

document.getElementById('create-task-list').addEventListener('click', function() {
    // Lógica para criar a lista de tarefas
    const taskList = document.getElementById('task-list');
    const task = document.createElement('li');
    task.textContent = 'Nova Tarefa';
    taskList.appendChild(task);
    alert('Lista de Tarefas Criada!');
    // Aqui você pode adicionar a funcionalidade de abrir a janela ou criar a lista
    createTaskWindow();
});
