import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "AutoElite",
      subtitle: "Платформа по подбору автомобилей",
      description: "Комплексное решение для выбора и покупки премиальных автомобилей с продвинутой фильтрацией и личным кабинетом.",
      features: ["Умный поиск авто", "Сравнение характеристик", "Интеграция с API дилеров", "Адаптивный каталог"],
      tech: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
      role: "Lead Frontend Developer",
      status: "Завершен",
      demoLink: "https://autoelite-jei6.onrender.com/",
      codeLink: "https://github.com/PRINCEABYSS/AutoElite"
    },
    {
      title: "Nexus Fall",
      subtitle: "Survival Action Game UI",
      description: "Интерфейс экшен-игры нового поколения в постапокалиптическом сеттинге 2078 года.",
      features: ["Динамический индикатор загрузки", "Система ресурсов", "Управление способностями персонажа", "Sci-Fi дизайн"],
      tech: ["React", "Framer Motion", "Canvas", "CSS Grid"],
      role: "UI/UX Developer",
      status: "Завершен",
      demoLink: "https://princeabyss.github.io/NEXUS-FALL/",
      codeLink: "https://github.com/PRINCEABYSS/NEXUS-FALL"
    },
    {
      title: "Space Generator",
      subtitle: "Генератор космических пейзажей",
      description: "Инструмент для создания уникальных визуализаций вселенной с настройкой планет, звезд и туманностей.",
      features: ["Параметрическая генерация", "Экспорт в PNG/SVG", "Настройка плотности объектов", "Real-time превью"],
      tech: ["React", "Three.js", "Math.js", "WebGl"],
      role: "Frontend Developer",
      status: "Завершен",
      demoLink: "https://princeabyss.github.io/Landscape-generator/",
      codeLink: "https://github.com/PRINCEABYSS/Landscape-generator"
    },
    {
      title: "Smart AI Calculator",
      subtitle: "Умный калькулятор с ИИ",
      description: "Интегрированный сервис для решения математических задач с объяснениями от ChatGPT.",
      features: ["Чат с GPT-4", "Решение сложных уравнений", "Пошаговые инструкции", "Хранение истории вычислений"],
      tech: ["React", "OpenAI API", "Axios", "Markdown-render"],
      role: "Full Stack Developer",
      status: "Завершен",
      demoLink: "https://princeabyss.github.io/-alculator/",
      codeLink: "https://github.com/PRINCEABYSS/-alculator"
    },
    {
      title: "Travel Map",
      subtitle: "Карта моих путешествий",
      description: "Интерактивный сервис для фиксации посещенных мест, загрузки фото и ведения дневника воспоминаний.",
      features: ["Интерактивная карта мира", "Загрузка медиафайлов", "Геотаргетинг", "Система категорий мест"],
      tech: ["Leaflet", "React", "Cloudinary", "Firebase"],
      role: "Frontend Developer",
      status: "Завершен",
      demoLink: "https://princeabyss.github.io/-/",
      codeLink: "https://github.com/PRINCEABYSS/-"
    },
    {
      title: "NEON-GAME-ZONE",
      subtitle: "Игровой портал",
      description: "Агрегатор популярных игр с системой фильтрации по жанрам (Экшен, RPG, Стратегии).",
      features: ["Система рейтинга", "Фильтрация в реальном времени", "Карточки с прогрессом игроков", "Микроанимации"],
      tech: ["React", "REST API", "Skeleton Loading"],
      role: "Frontend Developer",
      status: "Завершен",
      demoLink: "https://princeabyss.github.io/NEON-GAME-ZONE/",
      codeLink: "https://github.com/PRINCEABYSS/NEON-GAME-ZONE"
    },
    {
      title: "TechStore Plus",
      subtitle: "Магазин электроники v2.0",
      description: "Обновленная версия магазина с детальными карточками товаров и улучшенным UX выбора характеристик.",
      features: ["Выбор цвета/конфигурации", "Динамическая корзина", "Система отзывов", "Zoom-эффект для фото"],
      tech: ["React", "Context API", "Styled Components", "Vite"],
      role: "Frontend Developer",
      status: "Завершен",
      demoLink: "https://princeabyss.github.io/TechStore/",
      codeLink: "https://github.com/PRINCEABYSS/TechStore"
    }
  ];

  const currentProject = projects[activeProject];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">
            <span className="titleNumber">03</span>
            Портфолио
          </h2>
          <p className="sectionSubtitle">7 уникальных проектов, от ИИ-сервисов до игровых интерфейсов</p>
        </div>

        <div className="projectsGrid">
          <div className="projectNavigation">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`navButton ${activeProject === index ? "active" : ""}`}
                onClick={() => setActiveProject(index)}
              >
                <span className="navNumber">0{index + 1}</span>
                <span className="navTitle">{project.title}</span>
                <span className="navStatus">Live</span>
              </button>
            ))}
          </div>

          <div className="projectShowcase">
            <div className="projectCard fade-in">
              <div className="projectHeader">
                <div>
                  <h3 className="projectTitle">{currentProject.title}</h3>
                  <p className="projectSubtitle">{currentProject.subtitle}</p>
                </div>
                <div className="projectMeta">
                  <span className="projectRole">{currentProject.role}</span>
                </div>
              </div>

              <p className="projectDescription">{currentProject.description}</p>

              <div className="projectDetails">
                <div className="features">
                  <h4>Возможности:</h4>
                  <ul>
                    {currentProject.features.map((f, i) => (
                      <li key={i}><span className="featureIcon">⚡</span> {f}</li>
                    ))}
                  </ul>
                </div>
                <div className="techStack">
                  <h4>Стек:</h4>
                  <div className="techTags">
                    {currentProject.tech.map((t, i) => (
                      <span key={i} className="techTag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="projectActions">
                <a href={currentProject.demoLink} className="demoButton" target="_blank" rel="noreferrer">
                  Демо проекта
                </a>
                <a href={currentProject.codeLink} className="codeButton" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;