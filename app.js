
const addTask = document.querySelector('.addBtn');
const listBox = document.querySelector('#listBox');
const text = document.querySelector('.text');


addTask.addEventListener('click', function(e){
   if(text.value.length == 0) {
        alert("Please Enter a Task")
   } else {
     listBox.innerHTML +=   `<div class = "listBox">
        <span class="taskname" id= "taskname">
            ${text.value}
        </span> 
           <span id="list-item">
           <input type="checkbox" class="check">

             <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
                </button 
           </span>
     </div>`;


     const checkTask = document.querySelectorAll('.listBox input[type="checkbox"]');

     function check(e) {
      console.log(e)
     }
     checkTask.forEach(checkbox => checkbox.addEventListener('click', check));
     

     const removeTask = document.querySelectorAll('.delete');
     for (var i = 0; i<removeTask.length; i++) {
        removeTask[i].onclick = function() {
            this.parentElement.parentElement.remove();
            
        }
    }
   };
});


