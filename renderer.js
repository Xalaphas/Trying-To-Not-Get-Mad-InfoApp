const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        taskList.appendChild(li);
        taskInput.value = '';
    }
});