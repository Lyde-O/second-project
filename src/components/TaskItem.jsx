import React from 'react';

function TaskItem({ task, deleteTask, completeTask }) {

  return (

    <li className={task.completed ? 'completed' : ''}>

  <span className="task-title">{task.title}</span>
  <div className="button-container">
    <div>
    <button style= {{backgroundColor:'skyblue'}} onClick={() => deleteTask(task.id)}>
      Delete
    </button>
    </div>
    {!task.completed && (
      <button style= {{backgroundColor:'lightcoral'}} onClick={() => completeTask(task.id)}>
        Complete
      </button>
    )}
  </div>
</li>
  );
}

export default TaskItem;