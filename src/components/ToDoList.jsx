import React from 'react';
import colors from '../styles/colors';

const ToDoList = ({ tasks }) => {
  return (
    <ul style={styles.list}>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <li key={index} style={styles.item}>
            {task}
          </li>
        ))
      ) : (
        <li style={styles.empty}>No tasks added yet!</li>
      )}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    padding: '10px',
    marginBottom: '5px',
    backgroundColor: colors.white,
    border: `1px solid ${colors.mediumGrey}`,
    borderRadius: '4px',
  },
  empty: {
    color: colors.darkGrey,
    textAlign: 'center',
  },
};

export default ToDoList;
