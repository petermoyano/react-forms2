import React, { useState } from "react";
import { v4 } from 'uuid';

function NewTodoForm({addToDo}) {
    const initialState = {};
    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({[name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(formData.task, v4())
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Create a new task</label>
            <input id="task" type="text" name="task" value={formData.task} onChange={handleChange} />
            <button type="submit">submit</button>
        </form>
    </>
}

export default NewTodoForm;