import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TariffInfo.css';

const TariffInfo = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const tariffsData = {
    1: {
      title: "Базовый",
      desc: "Узнаете о самых новых открытиях в метавселенных и прослушаете лекцию.",
      details: [
        "Доступ к основной лекции вебинара",
        "Презентация от спикеров",
        "Общие материалы курса",
        "Идеальный старт для новичков"
      ],
      img: "/images/TarifBase.png"
    },
    2: {
      title: "Продвинутый",
      desc: "Разберетесь, что такое метавселенные и как они образуются шаг за шагом.",
      details: [
        "Все материалы базового тарифа",
        "Дополнительные практические занятия",
        "Детальный разбор реальных кейсов",
        "Доступ к закрытому чату участников"
      ],
      img: "/images/TarifProd.png"
    },
    3: {
      title: "Премиум",
      desc: "Получите ответы на любые свои вопросы о метавселенных от профессионалов.",
      details: [
        "Индивидуальные консультации с лектором",
        "Личная проверка домашних заданий",
        "Именной сертификат о прохождении",
        "Личное менторство на всех этапах"
      ],
      img: "/images/TarifPrem.png"
    }
  };

  const tariff = tariffsData[id] || tariffsData[1];

  return (
    <div className="animate-fade-in-up tariff-info-container">
      
      {/* Контентная часть (слева) */}
      <div className="tariff-info-content">
        
        <div>
          <h3 style={{ color: 'var(--accent-red)', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '5px' }}>
            Подробная информация
          </h3>
          <h1 style={{ fontSize: '42px', color: 'var(--text-dark)', margin: '0', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Тариф «{tariff.title}»
          </h1>
        </div>

        <p style={{ fontSize: '18px', color: 'var(--text-light)', lineHeight: '1.4', margin: '0' }}>
          {tariff.desc}
        </p>

        <div className="neumorphic-card" style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px', boxShadow: 'var(--shadow-inset)' }}>
          <h4 style={{ fontSize: '20px', color: 'var(--text-dark)', margin: '0' }}>Что включено:</h4>
          <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tariff.details.map((item, index) => (
              <li key={index} style={{ fontSize: '16px', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ 
                  display: 'inline-block', 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-color)', 
                  boxShadow: 'var(--shadow-outset-sm)',
                  flexShrink: 0,
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-red)' }}></span>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '5px' }}>
          <a href="/#tariffs" style={{ textDecoration: 'none' }}>
            <button className="neumorphic-button" style={{ padding: '14px 30px', fontSize: '16px', fontWeight: 'bold' }}>
              Вернуться на главную
            </button>
          </a>
        </div>
      </div>

      {/* Изображение (справа) */}
      <div className="tariff-info-image-container">
        {/* Неоморфный круг на фоне для эффекта */}
        <div className="neumorphic-card" style={{
          position: 'absolute',
          width: '65%',
          paddingBottom: '65%', /* Создает квадрат */
          borderRadius: '50%',
          boxShadow: 'var(--shadow-inset)',
          zIndex: 0
        }}></div>
        <img src={tariff.img} alt={tariff.title} className="animate-float" style={{ 
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
        }} />
      </div>

    </div>
  );
};

export default TariffInfo;
