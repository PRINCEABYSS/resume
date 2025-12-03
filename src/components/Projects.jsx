import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "TechStore",
      subtitle: "Интернет-магазин электроники",
      description: "Совместный проект - полнофункциональный интернет-магазин электроники с современным интерфейсом. Помните, как мы вместе работали над этим проектом?",
      features: [
        "Каталог товаров с категориями и фильтрами",
        "Корзина покупок с реальным обновлением",
        "Система управления состоянием через Context API",
        "Адаптивный дизайн для всех устройств",
        "Модальные окна с анимациями"
      ],
      tech: ["React", "React Router", "Context API", "CSS Modules", "Vite"],
      role: "Frontend Developer",
      status: "Завершен"
    },
    {
      title: "TaskFlow Pro",
      subtitle: "Планировщик задач",
      description: "Приложение для управления задачами с расширенными возможностями организации рабочего процесса.",
      features: [
        "Drag-and-drop для перетаскивания задач",
        "Визуализация прогресса выполнения",
        "Уведомления и напоминания",
        "Экспорт данных в различные форматы",
        "Темная/светлая тема"
      ],
      tech: ["React", "DnD Kit", "Chart.js", "LocalStorage", "SCSS"],
      role: "Frontend Developer",
      status: "В разработке"
    },
    {
      title: "WeatherSphere",
      subtitle: "Прогноз погоды с 3D визуализацией",
      description: "Интерактивное приложение погоды с трехмерной визуализацией атмосферных условий.",
      features: [
        "3D визуализация погодных условий",
        "Прогноз на 7 дней с анимациями",
        "Геолокация и поиск по городам",
        "История просмотров",
        "PWA (Progressive Web App)"
      ],
      tech: ["React", "Three.js", "Weather API", "PWA", "Service Workers"],
      role: "Full Stack Developer",
      status: "В планах"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="sectionHeader">
          <h2 className="sectionTitle">
            <span className="titleNumber">03</span>
            Мои Проекты
          </h2>
          <p className="sectionSubtitle">Реализованные и планируемые работы</p>
        </div>

        <div className="projectsGrid">
          {/* Навигация по проектам */}
          <div className="projectNavigation">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`navButton ${activeProject === index ? "active" : ""}`}
                onClick={() => setActiveProject(index)}
              >
                <span className="navNumber">0{index + 1}</span>
                <span className="navTitle">{project.title}</span>
                <span className="navStatus">{project.status}</span>
              </button>
            ))}
          </div>

          {/* Основная карточка проекта */}
          <div className="projectShowcase">
            <div className="projectCard">

              <div className="projectHeader">
                <div>
                  <h3 className="projectTitle">{projects[activeProject].title}</h3>
                  <p className="projectSubtitle">{projects[activeProject].subtitle}</p>
                </div>

                <div className="projectMeta">
                  <span className="projectRole">{projects[activeProject].role}</span>
                  <span className={`projectStatus ${projects[activeProject].status.toLowerCase().replace(' ', '')}`}>
                    {projects[activeProject].status}
                  </span>
                </div>
              </div>

              <p className="projectDescription">
                {projects[activeProject].description}
              </p>

              <div className="projectDetails">
                <div className="features">
                  <h4>Основные функции:</h4>
                  <ul>
                    {projects[activeProject].features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="featureIcon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="techStack">
                  <h4>Технологии:</h4>
                  <div className="techTags">
                    {projects[activeProject].tech.map((tech, idx) => (
                      <span key={idx} className="techTag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="projectActions">
                <button className="demoButton">
                  <span>Посмотреть демо</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>

                <button className="codeButton">
                  <span>Исходный код</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
