import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import ToDo from "./ToDo";
import {v4} from 'uuid';

function TodoList (){
    const INITIAL_STATE = [{id: v4(), task: "Do laundry", key: v4()}];
    const [ToDos, setToDos] = useState(INITIAL_STATE);
    const addToDo = (task, id) => {
        setToDos(ToDos => [...ToDos, {
            id,
            task,
            key: id
        }])
    }
    // ToDos is an array of objects => [{ToDo1}, {ToDo2}, ...]
/*     const editTodo = (id, editedTask) =>{
        setToDos(ToDos => ToDos.map((ToDo) => {
            if(ToDo.id === id){
                ToDo.task = editedTask
                return ToDo;
            }
            return ToDo;
        }))
    } */
    const removeToDo = (id) => {
        setToDos(ToDos => ToDos.filter(function(ToDo){ return ToDo.id !== id }))
    };
    console.log(ToDos);	
    return (<>
    <NewTodoForm addToDo={addToDo} />
    <ul>
        {ToDos.map(t => <ToDo 
            id={t.id} 
            task={t.task}
            removeToDo={removeToDo}
            />)}
    </ul>
    </>)
}  

export default TodoList;