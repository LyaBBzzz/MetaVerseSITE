import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="neumorphic-card header-container">
      <div className="header-logo">
        <Link to="/" className="logo-text">METAVERSE</Link>
      </div>
      <nav className="header-nav">
        <Link 
          to="/" 
          className={`neumorphic-nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Главная
        </Link>
        <Link 
          to="/info" 
          className={`neumorphic-nav-link ${location.pathname === '/info' ? 'active' : ''}`}
        >
          О вебинаре
        </Link>
        <a 
          href="/#tariffs" 
          className="neumorphic-nav-link"
        >
          О тарифах
        </a>
      </nav>
    </header>
  );
};

export default Header;
