import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WebinarInfo from './pages/WebinarInfo';
import TariffInfo from './pages/TariffInfo';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<WebinarInfo />} />
          <Route path="/tariffs/:id" element={<TariffInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
