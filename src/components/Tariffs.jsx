import React from 'react';
import { Link } from 'react-router-dom';
import './Tariffs.css';

const Tariffs = () => {
  const tariffs = [
    {
      id: 1,
      title: "Базовый",
      desc: "Узнаете о самых новых открытиях в метавселенных и прослушаете лекцию",
      img: "/images/1.png"
    },
    {
      id: 2,
      title: "Продвинутый",
      desc: "Разберетесь что такое метавселенные и как они образуются",
      img: "/images/3.png"
    },
    {
      id: 3,
      title: "Премиум",
      desc: "Получите ответы на свои вопросы о метавселенных и сможете задать вопросы",
      img: "/images/2.png"
    }
  ];

  return (
    <div className="tariffs-section" id="tariffs">
      <div className="neumorphic-card about-card animate-fade-in-up">
        <div className="about-content">
          <h2 className="section-title">ДЛЯ КОГО:</h2>
          <p className="section-desc">
            Для всех, кто интересуется наукой, физикой и космологией, и хочет узнать больше о метавселенных и их значении для нашего понимания Вселенной.
          </p>
        </div>
      </div>

      <div className="tariffs-grid">
        {tariffs.map((tariff, index) => (
          <div key={tariff.id} className={`animate-fade-in-up delay-${(index + 1) * 100}`} style={{ display: 'flex' }}>
            <Link to={`/tariffs/${tariff.id}`} className="neumorphic-card tariff-card" style={{ flex: 1 }}>
              <h3 className="tariff-title">{tariff.title}</h3>
              <p className="tariff-desc">{tariff.desc}</p>
              <div className={`tariff-image-wrapper tariff-image-wrapper-${tariff.id}`}>
                <img src={tariff.img} alt={tariff.title} className="tariff-image" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tariffs;
