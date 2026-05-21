import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="neumorphic-card hero-section">
      <div className="hero-image-wrapper">
        <div className="animate-fade-in-up delay-200" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <img src="/images/MainPhoto.png" alt="Metaverse Concept" className="hero-image animate-float" />
        </div>
      </div>

      <div className="hero-title-split">
        <div className="title-left animate-fade-in-up">META</div>
        <div className="title-right animate-fade-in-up delay-100">VERSE</div>
      </div>

      <div className="hero-content animate-fade-in-up delay-300">
        <div className="hero-info-box">
          <p className="hero-desc">
            На&nbsp;этом вебинаре мы рассмотрим самые новые и&nbsp;удивительные открытия в&nbsp;метавселенных, которые могут изменить наше понимание Вселенной
          </p>
          <div className="neumorphic-chip">
            <div className="chip-text">
              <span className="chip-label">вебинар пройдет</span>
              <span className="chip-value">09.07.2026</span>
            </div>
            {/* Using a small icon or just pure css */}
            <div className="chip-icon"></div>
          </div>
        </div>

        <div className="hero-action-box">
          <div className="neumorphic-circle-time">
            <span className="time-label">встречаемся в</span>
            <span className="time-value">19:00</span>
          </div>
          <button 
            className="neumorphic-button" 
            onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
