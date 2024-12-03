import React from 'react';
import colors from '../styles/colors';

const MainLayout = ({ children, pageTitle }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>{pageTitle}</h1>
      </header>
      <main>{children}</main>
      <footer style={styles.footer}>
        <p>© 2024 Jashanpreet Singh</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: colors.lightGrey,
    color: colors.black,
  },
  header: {
    padding: '10px 20px',
    backgroundColor: colors.mediumGrey,
    textAlign: 'center',
    borderBottom: `1px solid ${colors.darkGrey}`,
  },
  footer: {
    marginTop: 'auto',
    padding: '10px 20px',
    backgroundColor: colors.mediumGrey,
    textAlign: 'center',
    borderTop: `1px solid ${colors.darkGrey}`,
  },
};

export default MainLayout;
