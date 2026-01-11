import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Удобные иконки
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Эффект для изменения фона при скролле (Rule: useEffect)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-logo"></div>

        {/* Кнопка бургера для мобильных (Rule: Event Handling) */}
        <div className="nav-burger" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Ссылки навигации (Rule: Mobile First/Responsive) */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
            Главная
          </NavLink>
          <NavLink to="/skills" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
            Навыки
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
            Проекты
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
            Контакты
          </NavLink>
          
          {/* Кнопка призыва к действию (Rule: Advanced CSS) */}
          <button className="nav-btn">Нанять меня</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;