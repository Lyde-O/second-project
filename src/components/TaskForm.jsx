import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [task, setTask] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim() !== '') {
            addTask(task);
            setTask('');
        }
    };


return (
    <form onSubmit={handleSubmit} >
        <div className="Manager">
            <input
                type="text"
                className="Title"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
                Add Task
            </button>
        </div>
    </form>
);
    };
export default TaskForm;





