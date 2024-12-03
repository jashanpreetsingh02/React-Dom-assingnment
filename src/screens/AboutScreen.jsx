import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [message, setMessage] = useState('');

  const showEasterEgg = () => setMessage('You found the Easter Egg! 🎉');

  return (
    <MainLayout pageTitle="About Page - To-Do App">
      <p style={{ marginBottom: '10px', color: '#555' }}>
        This app is built to help you manage your tasks effortlessly. Add tasks on the Home Page and track your to-dos.
      </p>
      <p style={{ color: '#555' }}>Author: Jashanpreet Singh</p>
      <p style={{ color: '#555' }}>Date: {new Date().toLocaleDateString()}</p>
      <button style={styles.button} onClick={showEasterEgg}>
        Jashanpreet Singh
      </button>
      {message && <p style={styles.easterEgg}>{message}</p>}
    </MainLayout>
  );
};

const styles = {
  button: {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  easterEgg: {
    marginTop: '10px',
    color: '#008000',
  },
};

export default AboutScreen;
