import React, { useState } from 'react';
import colors from '../styles/colors';

const ToDoForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Add Task
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '8px',
    border: `1px solid ${colors.mediumGrey}`,
    borderRadius: '4px',
  },
  button: {
    marginLeft: '10px',
    padding: '8px 16px',
    backgroundColor: '#444',
    color: colors.white,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ToDoForm;
