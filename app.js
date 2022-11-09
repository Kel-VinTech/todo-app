let todoArray = [];
const addTask = document.querySelector('.addBtn');

addTask.addEventListener("click", (e)) {
    e.preventDefault;
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }
}