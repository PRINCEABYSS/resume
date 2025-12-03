import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Мурзалиев Аскатбек Абдилакимович. Все права защищены.</p>
        <p>Портфолио начинающего Frontend-разработчика</p>
      </div>
    </footer>
  );
}

export default Footer;
