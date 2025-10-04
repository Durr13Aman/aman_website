import React, { useEffect, useRef } from 'react';

function Projects() {
  const projectRefs = useRef([]);

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

    const elements = projectRefs.current;

    elements.forEach((el, index) => {
      if (el) {
        el.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const projects = [
    {
      icon: '🧠',
      title: 'Lemur AI',
      description:
        "Aman's flagship AI project, creating a company brain that retains knowledge, preserves reasoning, and helps teams make smarter decisions."
    },
    {
      icon: '☀️',
      title: 'Solar Car Project',
      description:
        'A full-scale solar-powered car built and raced at the Formula Sun Grand Prix, earning Rookie of the Year recognition.'
    },
    {
      icon: '⚡',
      title: 'Electric Race Car',
      description:
        'A high-performance electric vehicle project, advancing sustainable transportation with cutting-edge engineering.'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card fade-in"
              ref={el => projectRefs.current[index] = el}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
