import React, { useState, useEffect } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">AMAN SANGHI</div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>Home</a>
          <a href="#journey" onClick={(e) => handleLinkClick(e, '#journey')}>Journey</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a>
          <a href="#philosophy" onClick={(e) => handleLinkClick(e, '#philosophy')}>Philosophy</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
        </div>
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
