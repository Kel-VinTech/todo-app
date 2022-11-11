
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
           <span id="list-item">
           <input type="checkbox" class="check">

             <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
                </button 
           </span>
     </div>`;


     const checkTask = document.querySelector('.check').addEventListener('click', e => {
        if(e.target.checked) {
            console.log()
        }
     });
     const removeTask = document.querySelectorAll('.delete');
     for (var i = 0; i<removeTask.length; i++) {
        removeTask[i].onclick = function() {
            this.parentElement.parentElement.remove();
            
        }
    }
   };
});


