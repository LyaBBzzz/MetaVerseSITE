import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Hero from '../components/Hero';
import Tariffs from '../components/Tariffs';
import FooterForm from '../components/FooterForm';

const Home = () => {
  const location = useLocation();
  useDocumentTitle('MetaVerse | Курс по метавселенным');

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        sessionStorage.setItem('homeScrollPos', window.scrollY);
        timeoutId = null;
      }, 150);
    };

    if (!location.hash) {
      const pos = sessionStorage.getItem('homeScrollPos');
      if (pos) {
        window.scrollTo(0, parseInt(pos, 10));
      } else {
        window.scrollTo(0, 0);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Tariffs />
      <FooterForm />
    </>
  );
};

export default Home;
