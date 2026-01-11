import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Аскатбек</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Главная</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Навыки</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Проекты</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Контакты</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;