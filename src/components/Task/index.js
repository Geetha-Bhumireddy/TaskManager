import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import './index.css';

const Task = ({ task, deleteTask, toggleComplete }) => {
  const { id, title, description, priority, dueDate, completed } = task;

  return (
    <div className="task-item">
        <input type="checkbox" className="task-checkbox" checked={completed} onChange={() => toggleComplete(id)} />
      <div className='task-text-section'>
      <h3 className="task-title">{title}</h3>
      <p className="task-description">{description}</p>
      <p className="task-priority"><span>Priority</span> :{priority}        <span>Due Date</span>: {dueDate} </p>
      
      </div>
      <button className="delete-button" onClick={() => deleteTask(id)}>
      <RiDeleteBin6Line className="delete-icon" />
      </button>
    </div>
  );
};

export default Task;
