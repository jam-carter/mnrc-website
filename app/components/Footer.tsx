"use client"
import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    console.log('scrollToTop function called'); // Added console log
    document.body.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Morley Noranda Recreation Club</p>
        <button onClick={scrollToTop} className={styles.topButton}>
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;