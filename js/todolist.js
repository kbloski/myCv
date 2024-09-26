class TodoList{
    constructor(){
        this.listElement = document.getElementById('todolist')
    }

    appendNote( note ){
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerText = note;

        this.listElement.appendChild( li )
    }
}
const todoList = new TodoList();
const taskList = [
    'Zainteresowania',
    'Doświadczenie',

]

for( const task of taskList){
    todoList.appendNote( task)
}