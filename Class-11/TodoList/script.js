const todoInp = document.querySelector('input[type="text"]');
const addBtn = document.querySelector('button');
const list = document.getElementById('list');

addBtn.onclick = function () {
    // Reading the value from the input element
    const newTodoText = todoInp.value;

    // We are checking if string is not empty
    if (newTodoText.trim().length == 0) {
        return;
    }

    // creating a new li and adding it to a list
    const todo = document.createElement('li');
    todo.innerText = newTodoText;
    list.append(todo);

    // Clear the input once todo is added
    todoInp.value = "";
}