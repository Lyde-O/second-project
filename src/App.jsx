import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import DeletedTask from './components/DeletedTask';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const addTask = (task) => {
    const newTask = {
      id: Math.random().toString(),
      title: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  const deleteTasks = (id) => {
    const deletedTask = tasks.find((task) => task.id === id);
    setDeletedTasks([...deletedTasks, deletedTask]);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };
  return (
    <div>
      <div>
        <div className='task-container'>
          <h1>Task Manager</h1>
          <TaskForm addTask={addTask} />
          
        </div>
      </div>
      <div className='task-result'>
      <TaskList
            tasks={tasks}
            deleteTask={deleteTasks}
            completeTask={completeTask}
          />
          <DeletedTask deletedTasks={deletedTasks} />
        </div>
    </div>
  );
}
export default App;