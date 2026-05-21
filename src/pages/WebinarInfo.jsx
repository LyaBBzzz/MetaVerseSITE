import React from 'react';
import '../components/Tariffs.css'; // Reuse some typography styles

const WebinarInfo = () => {
  return (
    <div className="neumorphic-card animate-fade-in-up" style={{ minHeight: '600px', padding: '60px', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
      
      {/* Контентная часть */}
      <div style={{ flex: '1 1 500px' }}>
        <h1 className="title-large" style={{ fontSize: '60px', marginBottom: '40px', color: 'var(--text-dark)', textShadow: 'none' }}>
          О ВЕБИНАРЕ
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="neumorphic-card" style={{ boxShadow: 'var(--shadow-inset)', background: 'transparent' }}>
            <h2 style={{ color: 'var(--accent-red)', marginBottom: '15px' }}>Что такое Метавселенная?</h2>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
              Метавселенная — это постоянно действующее виртуальное пространство, в котором люди могут взаимодействовать друг с другом и с цифровыми объектами через свои аватары, с помощью технологий виртуальной реальности.
            </p>
          </div>

          <div className="neumorphic-card" style={{ boxShadow: 'var(--shadow-inset)', background: 'transparent' }}>
            <h2 style={{ color: 'var(--accent-red)', marginBottom: '15px' }}>Темы лекций</h2>
            <ul style={{ color: 'var(--text-light)', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>История возникновения концепции виртуальных миров</li>
              <li>Экономика метавселенных: NFT, криптовалюты и виртуальная недвижимость</li>
              <li>Технологии: VR, AR, нейроинтерфейсы</li>
              <li>Будущее: как изменится наша работа и повседневная жизнь</li>
            </ul>
          </div>

          <div className="neumorphic-card" style={{ boxShadow: 'var(--shadow-inset)', background: 'transparent' }}>
            <h2 style={{ color: 'var(--accent-red)', marginBottom: '15px' }}>Спикер</h2>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
              Ведущий эксперт по виртуальным технологиям и исследованию метавселенных, автор научных статей и книг по цифровой экономике будущего.
            </p>
          </div>
        </div>
      </div>

      {/* Изображение */}
      <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <div className="neumorphic-card" style={{
          position: 'absolute',
          width: '80%',
          paddingBottom: '80%',
          borderRadius: '50%',
          boxShadow: 'var(--shadow-inset)',
          zIndex: 0
        }}></div>
        <img src="/images/AboutVebinar.png" alt="О вебинаре" className="animate-float" style={{ 
          maxWidth: '110%', 
          position: 'relative', 
          zIndex: 1,
          filter: 'drop-shadow(10px 20px 30px rgba(0,0,0,0.15))',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskComposite: 'source-in',
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)',
          maskComposite: 'intersect'
        }} />
      </div>

    </div>
  );
};

export default WebinarInfo;
