import React from 'react';
import { Link } from 'react-router-dom';
import { tariffsData } from '../data/tariffs';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Tariffs.css';

const Tariffs = () => {
  const tariffs = Object.values(tariffsData);
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [gridRef, isGridVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section className="tariffs-section" id="tariffs">
      <article 
        ref={headerRef} 
        className={`neumorphic-card about-card ${isHeaderVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="about-content">
          <h2 className="section-title">ДЛЯ КОГО:</h2>
          <p className="section-desc">
            Для всех, кто интересуется наукой, физикой и&nbsp;космологией, и&nbsp;хочет узнать больше о&nbsp;метавселенных и&nbsp;их значении для нашего понимания Вселенной.
          </p>
        </div>
        <img
          src="/images/Butterfly.png"
          alt="Декоративная бабочка"
          className="about-flowers"
          loading="lazy"
        />
      </article>

      <div className="tariffs-grid" ref={gridRef}>
        {tariffs.map((tariff, index) => (
          <article 
            key={tariff.id} 
            className={`${isGridVisible ? 'animate-fade-in-up' : 'opacity-0'} delay-${(index + 1) * 100}`} 
            style={{ display: 'flex' }}
          >
            <Link to={`/tariffs/${tariff.id}`} className="neumorphic-card tariff-card" style={{ flex: 1 }}>
              <h3 className="tariff-title">{tariff.title}</h3>
              <p className="tariff-desc">{tariff.shortDesc}</p>
              <div className={`tariff-image-wrapper tariff-image-wrapper-${tariff.id}`}>
                <img src={tariff.imgShort} alt={tariff.title} className="tariff-image" loading="lazy" />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tariffs;
