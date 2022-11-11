
const addTask = document.querySelector('.addBtn');
const listBox = document.querySelector('#listBox');
const text = document.querySelector('.text');


addTask.addEventListener('click', function(e){
   if(text.value.length == 0) {
        alert("Please Enter a Task")
   } else {
     listBox.innerHTML +=   `<div class = "listBox">
        <span id= "taskname">
            ${text.value}
        </span> 
           <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
           </button>
     </div>`;
    
     const removeTask = document.querySelectorAll('.delete');
     for (var i = 0; i<removeTask.length; i++) {
        removeTask[i].onclick = function() {
            this.parentNode.remove();
        }
    }
   };
});


