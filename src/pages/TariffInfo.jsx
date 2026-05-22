import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { tariffsData } from '../data/tariffs';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import './TariffInfo.css';

const TariffInfo = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const tariff = tariffsData[id];
  useDocumentTitle(tariff ? `Тариф «${tariff.title}» — MetaVerse` : 'Тариф не найден — MetaVerse');

  if (!tariff) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="animate-fade-in-up tariff-info-container">
      
      {/* Контентная часть (слева) */}
      <section className="tariff-info-content">
        
        <header>
          <h3 className="tariff-info-subtitle">Подробная информация</h3>
          <h1 className="tariff-info-title">Тариф «{tariff.title}»</h1>
        </header>

        <p className="tariff-info-desc">{tariff.desc}</p>

        <article className="neumorphic-card tariff-info-features-card">
          <h4 className="tariff-info-features-title">Что включено:</h4>
          <ul className="tariff-info-features-list">
            {tariff.details.map((item, index) => (
              <li key={index} className="tariff-info-feature-item">
                <span className="tariff-info-feature-bullet">
                  <span className="tariff-info-feature-bullet-inner"></span>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <div style={{ marginTop: '5px' }}>
          <a href="/#tariffs" style={{ textDecoration: 'none' }}>
            <button className="neumorphic-button" style={{ padding: '14px 30px', fontSize: '16px', fontWeight: 'bold' }}>
              Вернуться на главную
            </button>
          </a>
        </div>
      </section>

      {/* Изображение (справа) */}
      <aside className="tariff-info-image-container">
        {/* Неоморфный круг на фоне для эффекта */}
        <div className="neumorphic-card" style={{
          position: 'absolute',
          width: '65%',
          paddingBottom: '65%',
          borderRadius: '50%',
          boxShadow: 'var(--shadow-inset)',
          zIndex: 0
        }}></div>
        <img 
          src={tariff.imgFull} 
          alt={tariff.title} 
          className="animate-float" 
          loading="lazy"
          style={{ 
            width: '100%',
            height: 'auto',
            maxWidth: '105%', 
            position: 'relative', 
            zIndex: 1,
            filter: 'drop-shadow(10px 20px 30px rgba(0,0,0,0.15))',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)',
            maskComposite: 'intersect'
          }} 
        />
      </aside>

    </main>
  );
};

export default TariffInfo;
