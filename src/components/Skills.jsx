import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'HTML5', level: 85 },
    { name: 'CSS3', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Git', level: 70 },
    { name: 'Responsive Design', level: 75 },
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="sectionTitle">Навыки</h2>
        <div className="skillsList">
          {skills.map((skill, index) => (
            <div key={index} className="skillItem">
              <div className="skillInfo">
                <span className="skillName">{skill.name}</span>
                <span className="skillPercent">{skill.level}%</span>
              </div>
              <div className="skillBar">
                <div
                  className="skillProgress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
