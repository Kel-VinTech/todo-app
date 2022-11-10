let todoArray = [];
const addTask = document.querySelector('.addBtn');
const saveTask = document.querySelector('.saveBtn');

addTask.addEventListener('click', function(e){
    e.preventDefault;
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }
});
