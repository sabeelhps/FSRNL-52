const todoInp = document.getElementById('todo-inp');
const todoBtn = document.getElementById('todo-btn');
const list = document.getElementById('list');
const form = document.querySelector('form');

// Utilities methods----

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}
  
// ----------------------- Todos Methods--------
const todos = JSON.parse(localStorage.getItem('todos') || '[]');

function initTodos() {
    refreshTodos();
}

function addTodo(todo) {
    todos.push(todo);
    refreshTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(id) {
    const index = todos.findIndex((todo) => todo.id == id);   
    if (index === -1) {
        return;
    }
    todos.splice(index, 1);
    refreshTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
}

function markCompleted(id) {
    const todo = todos.find((todo) => todo.id == id);   
    if (!todo) {
        return;
    }
    todo.completed = !todo.completed;
    console.log(todos);
    refreshTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
}

// UI Methods : Deals with DOM

function refreshTodos() {

    while (list.firstChild) {
        list.firstChild.remove();
    }

    for (let todo of todos) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteIcon = document.createElement('i');
        const checkedIcon = document.createElement('i');
        const iconsContainer = document.createElement('span');
    
        span.innerText = todo.task;
        li.setAttribute('id', todo.id);

        // set the bootstrap classses
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        deleteIcon.classList.add('bi', 'bi-trash');
        checkedIcon.classList.add('bi', 'bi-check-circle', 'me-3');

        // Handling mark completed style on span containing todo text
        // This should be optimised
        if (todo.completed && !span.classList.contains('completed')) {
            span.classList.add('completed');
        } else if (!todo.completed && span.classList.contains('completed')) {
            span.classList.remove('completed');
        }else{
            // No ops
        }

        iconsContainer.append(checkedIcon, deleteIcon);
        li.append(span);
        li.append(iconsContainer);

        list.append(li);
    }
}

// Listeners

// Add todo Input listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputText = event.target.elements["todo-inp"].value;
    addTodo({ id: uuidv4(), task: inputText, completed: false });
    event.target.elements["todo-inp"].value = "";
});


// Delete todo listener
list.addEventListener('click', (event) => {
    const isTrashIconClicked = event.target.classList.contains('bi-trash');
    const todoId = event.target.parentElement.parentElement.getAttribute('id');
    if (isTrashIconClicked) {
        deleteTodo(todoId);
    } else {
        markCompleted(todoId);
    }    
});

// Initialise the todos and display them to the UI
initTodos();


