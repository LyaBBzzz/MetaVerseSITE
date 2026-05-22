import React from 'react';
import '../components/Tariffs.css'; // Reuse some typography styles
import './WebinarInfo.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const WebinarInfo = () => {
  useDocumentTitle('О вебинаре — MetaVerse');

  return (
    <main className="neumorphic-card animate-fade-in-up webinar-container">
      
      {/* Контентная часть */}
      <section className="webinar-content">
        <h1 className="title-large webinar-title">
          О ВЕБИНАРЕ
        </h1>
        
        <div className="webinar-content-list">
          <article className="neumorphic-card webinar-info-card">
            <h2 className="webinar-info-subtitle">Что такое Метавселенная?</h2>
            <p className="webinar-info-text">
              Метавселенная — это постоянно действующее виртуальное пространство, в&nbsp;котором люди могут взаимодействовать друг с&nbsp;другом и&nbsp;с&nbsp;цифровыми объектами через свои аватары, с&nbsp;помощью технологий виртуальной реальности.
            </p>
          </article>

          <article className="neumorphic-card webinar-info-card">
            <h2 className="webinar-info-subtitle">Темы лекций</h2>
            <ul className="webinar-info-list">
              <li>История возникновения концепции виртуальных миров</li>
              <li>Экономика метавселенных: NFT, криптовалюты и виртуальная недвижимость</li>
              <li>Технологии: VR, AR, нейроинтерфейсы</li>
              <li>Будущее: как изменится наша работа и&nbsp;повседневная жизнь</li>
            </ul>
          </article>

          <article className="neumorphic-card webinar-info-card">
            <h2 className="webinar-info-subtitle">Спикер</h2>
            <p className="webinar-info-text">
              Ведущий эксперт по&nbsp;виртуальным технологиям и&nbsp;исследованию метавселенных, автор научных статей и&nbsp;книг по&nbsp;цифровой экономике будущего.
            </p>
          </article>
        </div>
      </section>

      {/* Изображение */}
      <aside className="webinar-image-container">
        <div className="neumorphic-card" style={{
          position: 'absolute',
          width: '80%',
          paddingBottom: '80%',
          borderRadius: '50%',
          boxShadow: 'var(--shadow-inset)',
          zIndex: 0
        }}></div>
        <img 
          src="/images/AboutVebinar.png" 
          alt="О вебинаре" 
          className="animate-float" 
          loading="lazy"
          style={{ 
            width: '100%',
            height: 'auto',
            maxWidth: '110%', 
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

export default WebinarInfo;
