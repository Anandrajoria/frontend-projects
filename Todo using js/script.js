document.querySelector('#push').onclick=function
(){
    if(document.querySelector('#new_task input').
    value.length==0){
    alert("please enter a task")
    }else{
        document.querySelector('#tasks').innerHTML+=
        `<div class="task">
            <span id="taskname">
            ${document.querySelector("#new_task input").value}
            </span>
            <button class='delete'>
                <i class="far fa-trash-alt"></i>
            </button>
        </div>`;

        var cur_task=document.querySelectorAll('.delete')
        for(let i=0;i<cur_task.length;i++){
            cur_task[i].onclick=function(){
                this.parentNode.remove();
            }
        }
    }
    let tasks=document.querySelectorAll(".task")
    for(let i=0;i<tasks.length;i++){
        tasks[i].onclick=function(){
            this.classList.toggle('completed')
        }
    }

    document.querySelector("#new_task input").
    value="";
}

