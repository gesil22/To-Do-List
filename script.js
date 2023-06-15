// Get the input field and the task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = taskText;
    li.onclick = toggleTask;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// Toggle the completed status of a task
function toggleTask() {
  this.classList.toggle('completed');
}
