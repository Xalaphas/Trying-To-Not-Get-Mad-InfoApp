const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const goQuestion = document.getElementById('go-question');

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

goQuestion.addEventListener('click', () => {
    window.location.href = 'question.html';
});

document.getElementById('personal-question-form').addEventListener('submit', (Event) => {
    Event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const professional = document.getElementById('professional').value;
    const hobbie = document.getElementById('hobbie');
});