import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: "Core Frontend",
    description: "Разработка сложной бизнес-логики и архитектуры приложений",
    skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Redux Toolkit', 'Next.js']
  },
  {
    category: "Styling & UI",
    description: "Работа с современными методологиями и библиотеками компонентов",
    skills: ['CSS / SCSS', 'Tailwind CSS', 'Styled Components', 'Framer Motion', 'Material UI']
  },
  {
    category: "Visualization",
    description: "Создание интерактивных графиков и 3D-интерфейсов",
    skills: ['Three.js', 'Canvas API', 'SVG Animation', 'WebGl']
  },
  {
    category: "Workflow",
    description: "Инструменты сборки, тестирования и контроля версий",
    skills: ['Vite', 'Git / GitHub', 'REST API', 'Postman', 'Firebase']
  }
];

function SkillsPage() {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title neonGlow">Frontend Expertise</h2>
          <p className="skills-subtitle">
            Мой технологический стек сфокусирован на создании быстрых, масштабируемых и отзывчивых веб-приложений.
          </p>
        </div>
        
        <div className="skills-grid-modern">
          {skillGroups.map((group, i) => (
            <div key={i} className="skill-category-card fade-in">
              <div className="category-label">{group.category}</div>
              <p className="category-desc">{group.description}</p>
              <div className="tags-container">
                {group.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;