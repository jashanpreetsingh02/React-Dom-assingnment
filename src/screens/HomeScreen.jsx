import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate(); // Hook to navigate to different pages

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <MainLayout pageTitle="Home Page - To-Do App">
      <p style={{ marginBottom: '20px', color: '#555' }}>
        Welcome to the Home Page! Manage your tasks efficiently by adding new tasks below.
      </p>
      <ToDoForm onAddTask={addTask} />
      <ToDoList tasks={tasks} />
      <button
        style={styles.aboutButton}
        onClick={() => navigate('/about')}
      >
        About the Page
      </button>
    </MainLayout>
  );
};

const styles = {
  aboutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default HomeScreen;
