import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <section className="mainContent">
      <div className="container">
        <h2 className="sectionTitle">Обо мне</h2>

        <div className="content">
          <p>
            Начинающий Frontend-разработчик с фокусом на React.js. Имею практический опыт
            создания веб-приложений, стремлюсь к постоянному развитию и изучению новых технологий.
          </p>

          <p>
            Умею работать в команде, быстро обучаюсь новым технологиям и подходам к разработке.
            Ищу возможность применить свои навыки в реальных проектах и развиваться как профессионал.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
