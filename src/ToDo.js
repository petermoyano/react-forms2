import React from "react";

function ToDo({removeToDo, task, id }) {

    return (
        <>
            <li id={id} key={id} >{task}<button onClick={() => removeToDo(id)}>X</button></li>
        </>

    )

}

export default ToDo;