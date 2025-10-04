import React, { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroBackground = document.querySelector('.hero-background');
      if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = (e) => {
    e.preventDefault();
    const journey = document.querySelector('#journey');
    if (journey) {
      journey.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            Engineering Ideas.<br />Building Impact.
          </h1>
          <p className="hero-subtitle">Innovator • Builder • Visionary</p>
          <p className="hero-intro">
            Aman Sanghi is an innovator whose journey spans from building RC planes as a teenager
            to racing solar cars and electric vehicles in college, and now leading the way in
            artificial intelligence with Lemur AI.
          </p>
          <a href="#journey" className="cta-button" onClick={handleCTAClick}>
            Explore My Journey
          </a>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img src="/images/Aman.png" alt="Aman Sanghi" onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }} />
            <span style={{ display: 'none' }}>AS</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
