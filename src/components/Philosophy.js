import React, { useEffect, useRef } from 'react';

function Philosophy() {
  const contentRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const element = contentRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <div className="philosophy-content fade-in" ref={contentRef}>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
