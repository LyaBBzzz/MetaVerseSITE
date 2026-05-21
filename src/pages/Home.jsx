import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Tariffs from '../components/Tariffs';
import FooterForm from '../components/FooterForm';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('homeScrollPos', window.scrollY);
    };

    if (!location.hash) {
      const pos = sessionStorage.getItem('homeScrollPos');
      if (pos) {
        window.scrollTo(0, parseInt(pos, 10));
      } else {
        window.scrollTo(0, 0);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
