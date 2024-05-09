import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';
import './index.css'; // Import index.css

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filter, setFilter] = useState('all'); // all, completed, pending
  const [sort, setSort] = useState('none'); // none, priority, dueDate
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('en');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    // Filter tasks based on filter and search term
    let filtered = [...tasks];
    if (filter !== 'all') {
      filtered = filtered.filter(task => (filter === 'completed' && task.completed) || (filter === 'pending' && !task.completed));
    }
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Sort tasks
    if (sort === 'priority') {
      filtered.sort((a, b) => a.priority.localeCompare(b.priority));
    } else if (sort === 'dueDate') {
      filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
    setFilteredTasks(filtered);
  }, [tasks, filter, sort, searchTerm]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="App background-container">
      <TaskForm addTask={addTask} taskToEdit={taskToEdit} language={language} />
      <div className="option-stylings">
        <label>Filter: </label>
        <select className="label-style" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <label>Sort By: </label>
        <select className="label-style" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="none">None</option>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </select>
        <input
          type="text" className="label-style"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label>Language: </label>
        <select className="label-style" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="te">Telugu</option>
          <option value="bn">Bengali</option>
          <option value="kn">Kannada</option>
        </select>
      </div>
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask} />
    </div>
  );
}

export default App;
