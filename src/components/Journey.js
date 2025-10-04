import React, { useEffect, useRef } from 'react';

function Journey() {
  const timelineRef = useRef([]);

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

    const elements = timelineRef.current;

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="journey" className="journey">
      <div className="container">
        <h2 className="section-title">Journey of an Innovator</h2>

        <div className="timeline-item fade-in" ref={el => timelineRef.current[0] = el}>
          <div className="timeline-content">
            <div className="timeline-text">
              <h3>Pre-College</h3>
              <p>
                Aman's journey in engineering began with a desire to create solutions that mattered.
                When he noticed a trash problem in his neighborhood, he built a{' '}
                <strong>simple robot with a vision of cleaner pathways</strong>. It was far from perfect,
                but it was his first real project, and it left him hooked.
              </p>
              <p>
                His passion for problem-solving grew from there. In 2019, after the <strong>Nirbhaya case</strong>,
                Aman felt compelled to address the issue of safety. He considered self-defense devices
                like tasers, but realized they were often inconvenient to carry and could easily run
                out of charge. That insight inspired him to design a{' '}
                <strong>shoe with a built-in taser</strong>, powered by the energy generated with every step.
                This ensured the device was always charged and ready in an emergency.
              </p>
              <p>
                It was through this project that Aman realized he wanted to be an{' '}
                <strong>engineer with purpose</strong>, using innovation to create meaningful change in the world.
              </p>
            </div>
            <div className="timeline-visual">
              <div className="visual-placeholder">
                <img src="/images/Shoe_project.png" alt="Electricity Generating Shoe" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.placeholder-fallback').style.display = 'flex';
                }} />
                <div className="placeholder-fallback" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="placeholder-icon">👟</div>
                  <p>Electricity Generating Shoe</p>
                </div>
              </div>
              <div className="visual-placeholder robot-image">
                <img src="/images/robot.png" alt="Path Cleaning Robot" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.placeholder-fallback').style.display = 'flex';
                }} />
                <div className="placeholder-fallback" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="placeholder-icon">🤖</div>
                  <p>Path Cleaning Robot</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item fade-in" ref={el => timelineRef.current[1] = el}>
          <div className="timeline-content reverse">
            <div className="timeline-text">
              <h3>College Years</h3>
              <p>
                At the <strong>University of Wisconsin–Madison</strong>, Aman found a new passion: cars.
                What began as solving everyday problems grew into a fascination with performance and sustainability.
              </p>
              <p>
                He co-created a <strong>solar-powered car</strong> with a small team of peers, taking on a
                complex challenge that required collaboration and technical skill. The car competed at the{' '}
                <strong>Formula Sun Grand Prix</strong>, where the team won the{' '}
                <strong>Rookie of the Year Award</strong>.
              </p>
              <p>
                He also contributed to building an <strong>electric race car</strong>, working on electronics,
                battery systems, and lightweight design to advance clean transportation.
              </p>
              <p>
                Alongside these projects, Aman spent much of his time on software. He began with embedded coding
                and gradually became deeply invested in artificial intelligence. What started as curiosity grew
                into a drive to use AI to solve real-world problems.
              </p>
            </div>
            <div className="timeline-visual">
              <div className="visual-placeholder">
                <img src="/images/Solar_car.jpeg" alt="Solar Car" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.placeholder-fallback').style.display = 'flex';
                }} />
                <div className="placeholder-fallback" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="placeholder-icon">🏎️</div>
                  <p>Solar Car</p>
                </div>
              </div>
              <div className="visual-placeholder">
                <img src="/images/electric_car.jpeg" alt="Electric Car" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.placeholder-fallback').style.display = 'flex';
                }} />
                <div className="placeholder-fallback" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="placeholder-icon">⚡</div>
                  <p>Electric Race Car</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item fade-in" ref={el => timelineRef.current[2] = el}>
          <div className="timeline-content">
            <div className="timeline-text">
              <h3>Today</h3>
              <p>
                Today, Aman is focused on transforming industries by helping business owners integrate
                AI into their workflows. Through his work at <strong>Synatech</strong>, he is building tools
                and strategies that make artificial intelligence accessible, practical, and impactful
                for organizations of all sizes.
              </p>
              <p>
                At the same time, he is passionate about reshaping the consulting industry. Traditional
                consulting often struggles with inefficiencies. Consultants spend long hours preparing
                proposals that rarely convert, and there is frequently a disconnect between what clients
                envision and what consultants deliver.
              </p>
              <p>
                This challenge inspired <strong>Lemur AI</strong>, a platform Aman is building alongside
                his work at Synatech to help consultants understand their clients' vision more clearly,
                allowing them to write winning proposals in minutes instead of days.
              </p>
            </div>
            <div className="timeline-visual">
              <a href="https://www.synatechsolutions.com" target="_blank" rel="noopener noreferrer" className="visual-placeholder ai-visual">
                <img src="/images/synatech.png" alt="Synatech Solutions" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.placeholder-fallback').style.display = 'flex';
                }} />
                <div className="placeholder-fallback" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="placeholder-icon">🏢</div>
                  <p>Synatech Solutions</p>
                </div>
              </a>
              <a href="https://thelemur.ai" target="_blank" rel="noopener noreferrer" className="visual-placeholder ai-visual">
                <img src="/images/lemur.png" alt="Lemur AI" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.placeholder-fallback').style.display = 'flex';
                }} />
                <div className="placeholder-fallback" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="placeholder-icon">🧠</div>
                  <p>Lemur AI</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
