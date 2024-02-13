// 1. add event listener  for add/submit button

const todos = [];

// title: string, completed: boolean

function addToDo() {
    const inputToDoElement = document.querySelector("#input-todo");
    const title = inputToDoElement.value; 
    
    todos.push({ title, completed: false });

    renderTodos();

}

function deleteTodo(index) {
    todos.splice(index, 1);

renderTodos();
}

function toggleTodo(index) {
    if (todos[index].completed === true) {
        todos[index].completed = false
    } else {
        todos[index].completed = true
    };
    renderTodos();
};

function renderTodos() {
    const todoListElement = document.querySelector("#todoList");
    todoListElement.innerHTML = "";
    todos.forEach((todo, index) => {
        const listElement = document.createElement("li");
        listElement.innerHTML = `
            <p>${todo.title}</p>
           <p>${todo.completed ? "completed" : "pending"}</p>
           <button onclick="deleteTodo(${index})">Delete</button>
           <button onclick="toggleTodo(${index})">toggle</button>
        `
        todoListElement.appendChild(listElement);
        });
}
renderTodos();

// 3. if there is a value we create new task.