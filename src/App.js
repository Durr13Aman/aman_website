import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth reveal on page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);

    console.log('%c🚀 Aman Sanghi Portfolio', 'color: #00ff88; font-size: 20px; font-weight: bold;');
    console.log('%cEngineering Ideas. Building Impact.', 'color: #00ff88; font-size: 14px;');
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Journey />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
