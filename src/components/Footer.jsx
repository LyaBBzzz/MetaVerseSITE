import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Название и Создатель (слева) */}
        <div className="footer-left">
          <div className="footer-logo">METAVERSE</div>
          <div className="footer-credits">
            designed and developed by <span>LyaBBzzz</span>
          </div>
        </div>

        {/* Навигация (по центру) */}
        <div className="footer-center">
          <Link to="/" className="neumorphic-nav-link" style={{ fontSize: '14px' }}>Главная</Link>
          <Link to="/info" className="neumorphic-nav-link" style={{ fontSize: '14px' }}>О вебинаре</Link>
          <a href="/#tariffs" className="neumorphic-nav-link" style={{ fontSize: '14px' }}>О тарифах</a>
        </div>

        {/* Контакты (справа) */}
        <div className="footer-right">
          <span className="footer-contact-label">Связаться:</span>
          <a 
            href="https://t.me/ddddddddd_kkkkkkk" 
            target="_blank" 
            rel="noreferrer" 
            className="footer-tg-link"
          >
            tg: @ddddddddd_kkkkkkk
          </a>
        </div>
      </div>
      
      <div className="footer-fictional-badge">
        * Данное мероприятие является выдуманным
      </div>
    </footer>
  );
};

export default Footer;
