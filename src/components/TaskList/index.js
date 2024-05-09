import React from 'react';
import Task from '../Task';
import './index.css';

const TaskList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <div className="task-list">
      <h2 className="task-list-title">Task List</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask} />
      ))}
    </div>
  );
};

export default TaskList;
