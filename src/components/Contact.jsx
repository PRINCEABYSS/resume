import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-header fade-in">
          <h2 className="section-title neonGlow">Связаться со мной</h2>
          <p className="section-subtitle">Готов к новым проектам и интересным предложениям</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card fade-in">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>princeabbys12@gmail.com</p>
            <a href="mailto:princeabbys12@gmail.com" className="contact-link">Написать письмо</a>
          </div>

          <div className="contact-card fade-in">
            <div className="contact-icon">📱</div>
            <h3>Телефон</h3>
            <p>+996-552-236-611</p>
            <a href="tel:+996552236611" className="contact-link">Позвонить</a>
          </div>

          <div className="contact-card fade-in">
            <div className="contact-icon">💻</div>
            <h3>GitHub</h3>
            <p>@PRINCEABYSS</p>
            <a 
              href="https://github.com/PRINCEABYSS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              Открыть профиль
            </a>
          </div>

          <div className="contact-card fade-in">
            <div className="contact-icon">📍</div>
            <h3>Локация</h3>
            <p>Кыргызстан, Бишкек</p>
            <span className="location-tag">GMT+6</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;