import React, { useState } from 'react';
import './FooterForm.css';

const FooterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="neumorphic-card footer-section" id="enroll-form">
        <div className="footer-image-wrapper animate-fade-in-up">
          <img src="/images/picForEnd.png" alt="Footer Cyber Portrait" className="footer-image" />
        </div>
        
        <div className="footer-form-wrapper animate-fade-in-up delay-200">
          <div className="form-header">
            <h2 className="form-title">Заполните форму</h2>
            <p className="form-desc">и&nbsp;мы пришлем вам доступ к&nbsp;вебинару на&nbsp;почту в&nbsp;ближайшие сутки</p>
          </div>
          
          <form className="footer-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" className="neumorphic-input" placeholder="Введите свое имя" required />
            </div>
            
            <div className="input-group">
              <input type="email" className="neumorphic-input" placeholder="Введите свой e-mail" required />
            </div>
            
            <button type="submit" className="neumorphic-button form-submit">Записаться</button>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content neumorphic-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="form-title" style={{ fontSize: '32px' }}>Запись прошла успешна!</h2>
            <p className="form-desc" style={{ marginBottom: '30px' }}>Мы свяжемся с&nbsp;вами в&nbsp;ближайшее время и&nbsp;пришлем доступ.</p>
            <button className="neumorphic-button" onClick={closeModal}>Отлично</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterForm;
