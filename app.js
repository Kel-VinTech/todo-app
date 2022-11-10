let todoArray = [];
const addTask = document.querySelector('.addBtn');
const saveTask = document.querySelector('.saveBtn');
const listBox = document.querySelector('.listBox');
const text = document.querySelector('.text');

addTask.addEventListener('click', function(e){
    e.preventDefault;
    text.innerHTML = text.value;
    let todo = localStorage.getItem("todo");
    // if (todo === null) {
    //     todoArray = [];
    // } else {
    //     todoArray = JSON.parse(todo);
    // }
    // todoArray.push(text.value);
    // text.value = "";
    // localStorage.setItem("todo", JSON.stringify(todoArray));
    console.log(text.value);
    // displayTodo();
});

// function displayTodo(){
//     let todo = localStorage.getItem("todo");
//     if (todo === null) {
//         todoArray = [];
//     } else {
//         todoArray = JSON.parse(todo);
//     }
//     let code = "";
//     todoArray.forEach(list,ind => {
        
//         listBox.innerHTML = code;
//     });
// }