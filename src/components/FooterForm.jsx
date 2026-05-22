import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './FooterForm.css';

const FooterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [errorField, setErrorField] = useState(''); // 'name' или 'email'
  
  const [formRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;

    if (!name.trim()) {
      setError('Пожалуйста, введите ваше имя');
      setErrorField('name');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Пожалуйста, введите корректный e-mail адрес');
      setErrorField('email');
      return;
    }

    setError('');
    setErrorField('');
    setIsLoading(true);

    // Симуляция запроса на сервер
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      e.target.reset(); // Очищаем форму
    }, 1000);
  };

  const handleInputChange = () => {
    // Убираем ошибку, если пользователь начал печатать
    if (error) {
      setError('');
      setErrorField('');
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <section 
        ref={formRef} 
        className={`neumorphic-card footer-section ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
        id="enroll-form"
      >
        <div className="footer-image-wrapper">
          <img src="/images/picForEnd.png" alt="Footer Cyber Portrait" className="footer-image" loading="lazy" />
        </div>
        
        <div className="footer-form-wrapper">
          <header className="form-header">
            <h2 className="form-title">Заполните форму</h2>
            <p className="form-desc">и&nbsp;мы пришлем вам доступ к&nbsp;вебинару на&nbsp;почту в&nbsp;ближайшие сутки</p>
          </header>
          
          <form className="footer-form" onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <input 
                type="text" 
                name="name" 
                className={`neumorphic-input ${errorField === 'name' ? 'input-error' : ''}`} 
                placeholder="Введите свое имя"
                onChange={handleInputChange}
              />
            </div>
            
            <div className="input-group">
              <input 
                type="email" 
                name="email" 
                className={`neumorphic-input ${errorField === 'email' ? 'input-error' : ''}`} 
                placeholder="Введите свой e-mail"
                onChange={handleInputChange}
              />
            </div>

            {error && <p style={{ color: 'var(--accent-red)', fontSize: '14px', margin: '0', textAlign: 'center' }}>{error}</p>}
            
            <button 
              type="submit" 
              className="neumorphic-button form-submit"
              disabled={isLoading}
              style={isLoading ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
            >
              {isLoading ? 'Отправка...' : 'Записаться'}
            </button>
          </form>
        </div>
      </section>

      {isSubmitted && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content neumorphic-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="form-title" style={{ fontSize: '32px' }}>Запись прошла успешно!</h2>
            <p className="form-desc" style={{ marginBottom: '30px' }}>Мы свяжемся с&nbsp;вами в&nbsp;ближайшее время и&nbsp;пришлем доступ.</p>
            <button className="neumorphic-button" onClick={closeModal}>Отлично</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterForm;
