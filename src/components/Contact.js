import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Build Together</h2>
        <p className="contact-intro">
          Aman is always looking for new problems to solve and new people to collaborate with. If you have an idea worth exploring, don't hesitate to reach out to him.
        </p>

        <div className="contact-links">
          <a href="mailto:amansanghi@synatechsolutions.com" className="contact-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Email
          </a>
          <a href="https://www.linkedin.com/in/amansanghi/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
