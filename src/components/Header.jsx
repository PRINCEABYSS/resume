import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    transform: `translateY(${Math.min(scrollY * 0.5, 100)}px)`,
    opacity: 1 - Math.min(scrollY / 300, 0.3)
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="container">
        <div className="glowEffect"></div>

        <h1 className="name">
          <span className="firstName">Мурзалиев</span>
          <span className="fullName">Аскатбек Абдилакимович</span>
        </h1>

        <div className="titleContainer">
          <div className="titleGlow"></div>
          <p className="title">Начинающий Frontend-разработчик (Junior)</p>
          <p className="subtitle">React • JavaScript • Modern Web</p>
        </div>

        <div className="scrollIndicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="scrollText">Scroll</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
