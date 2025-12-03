import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="sectionTitle">Контакты</h2>
        <div className="contactInfo">
          <div className="contactItem">
            <h3>Email</h3>
            <p>princeabbys12@gmail.com</p>
          </div>

          <div className="contactItem">
            <h3>Телефон</h3>
            <p>+996-552-236-611</p>
          </div>

          <div className="contactItem">
            <h3>GitHub</h3>
            <p>
              <a 
                href="https://github.com/PRINCEABYSS" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                github.com/Prince
              </a>
            </p>
          </div>

          <div className="contactItem">
            <h3>Местоположение</h3>
            <p>Кыргызстан</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
