import React, { useState } from 'react';
import './index.css';

const TaskForm = ({ addTask, taskToEdit, language }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [formTouched, setFormTouched] = useState(false);

  const translations = {
    en: {
      title: "Title",
      description: "Description",
      priority: "Priority",
      dueDate: "Due Date",
      addTask: "Add Task",
      updateTask: "Update Task"
    },
    fr: {
      title: "Titre",
      description: "Description",
      priority: "Priorité",
      dueDate: "Date d'échéance",
      addTask: "Ajouter une tâche",
      updateTask: "Mettre à jour la tâche"
    },
    te: {
      title: "శీర్షిక",
      description: "వివరణ",
      priority: "ప్రాధాన్యత",
      dueDate: "చివరి తేదీ",
      addTask: "టాస్క్ జోడించు",
      updateTask: "టాస్క్ నవీకరించు"
    },
    bn: {
      title: "শিরোনাম",
      description: "বিবরণ",
      priority: "অগ্রাধিকার",
      dueDate: "নির্ধারিত তারিখ",
      addTask: "টাস্ক যোগ করুন",
      updateTask: "টাস্ক আপডেট করুন"
    },
    kn: {
      title: "ಶೀರ್ಷಿಕೆ",
      description: "ವಿವರಣೆ",
      priority: "ಪ್ರಾಧಾನ್ಯತೆ",
      dueDate: "ಮುಕ್ತಾಯ ದಿನಾಂಕ",
      addTask: "ಕಾರ್ಯ ಸೇರಿಸಿ",
      updateTask: "ಕಾರ್ಯ ನವೀಕರಿಸಿ"
    }
    // Add translations for other languages as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTouched(true);

    if (!title.trim()) {
      return;
    }

    if (!description.trim()) {
      return;
    }

    if (!priority) {
      return;
    }

    if (!dueDate) {
      return;
    }

    addTask({ title, description, priority, dueDate });
    setTitle('');
    setDescription('');
    setPriority('');
    setDueDate('');
    setFormTouched(false);
  };

  return (
    <div className="task-form">
      <h2 className="task-form-title">{taskToEdit ? translations[language].updateTask : translations[language].addTask}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="task-form-label">{translations[language].title}:</label>
          <input type="text" className="task-form-input" value={title} onChange={(e) => setTitle(e.target.value)} />
          {formTouched && !title.trim() && <p className="error-message red">*{translations[language].title} is required</p>}
        </div>
        <div className="form-group">
          <label className="task-form-label">{translations[language].description}:</label>
          <input type="text" className="task-form-input" value={description} onChange={(e) => setDescription(e.target.value)} />
          {formTouched && !description.trim() && <p className="error-message red">*{translations[language].description} is required</p>}
        </div>
        <div className="form-group">
          <label className="task-form-label">{translations[language].priority}:</label>
          <select className="task-form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {formTouched && !priority && <p className="error-message red">*{translations[language].priority} is required</p>}
        </div>
        <div className="form-group">
          <label className="task-form-label">{translations[language].dueDate}:</label>
          <input type="date" className="task-form-input" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          {formTouched && !dueDate && <p className="error-message red">*{translations[language].dueDate} is required</p>}
        </div>
        <button className="task-form-button" type="submit">{taskToEdit ? translations[language].updateTask : translations[language].addTask}</button>
      </form>
    </div>
  );
};

export default TaskForm;
