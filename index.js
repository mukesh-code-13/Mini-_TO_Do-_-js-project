const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos));

const render = () => {
    list.innerHTML = '';
    todos.forEach((todo, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
      <span>${todo}</span>
      <button onclick="removeTodo(${i})">❌</button>
    `;
        list.appendChild(li);
    });
};

const addTodo = (e) => {
    e.preventDefault();
    todos.push(input.value);
    input.value = '';
    saveTodos();
    render();
};

const removeTodo = (i) => {
    todos.splice(i, 1);
    saveTodos();
    render();
};

form.addEventListener('submit', addTodo);
render();
