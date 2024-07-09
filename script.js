document.addEventListener('DOMContentLoaded',function(){
    const todoform = document.getElementById('form1');
    const todolist = document.getElementById('todolist');
    const todoinput = document.getElementById('todo-inputs');

    todoform.addEventListener('submit',function(e){
       e.preventDefault();
       const newtext  = todoinput.value.trim();
       
       if(newtext!== ''){
        const newitem = document.createElement('li');

        const newspan = document.createElement('span');
        newspan.textContent = newtext;
        newitem.appendChild(newspan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent='Delete task';
        newitem.appendChild(deleteButton);

        deleteButton.addEventListener('click',function(){
            newitem.removeChild(newitem);
        });

        newitem.addEventListener('click',function(){
            newitem.classList.toggle('completed');
        });

        todolist.appendChild(newitem);

        todoinput.value='';
        todoinput.focus();
       }
    });
});