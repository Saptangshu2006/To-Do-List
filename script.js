const addBtn = document.getElementById('add-btn');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  newTaskInput.value = '';
});