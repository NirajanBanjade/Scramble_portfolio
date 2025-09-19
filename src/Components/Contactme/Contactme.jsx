import React from 'react';
import "./Contactme.css";
import ScrambleText from '../ScrambleText/ScrambleText';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';

const Contactme = () => {
  return (
    <section className='contact-container'>
      <RevealOnScroll direction="up" delay={0.2}>
        <h5>
          <ScrambleText 
            text="Contact Me" 
            delay={200}
            duration={800}
            triggerOnScroll={true}
          />
        </h5>
      </RevealOnScroll>

      <div className='contact-content'>
        {/* Contact Info Wrapper */}
        <RevealOnScroll direction="left" delay={0.4}>
          <div className="contact-info">
            <RevealOnScroll direction="scale" delay={0.6}>
              <div className="contact-info-card">
                <div className="icon bi bi-linkedin"></div>
                <a href="https://www.linkedin.com/in/nirajan-banjade/" target="_blank" rel="noopener noreferrer" className='contact-link'>
                  LinkedIn
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="scale" delay={0.8}>
              <div className="contact-info-card">
                <div className="icon bi bi-github"></div>
                <a href="https://github.com/NirajanBanjade" target="_blank" rel="noopener noreferrer" className='contact-link'>
                  GitHub
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="scale" delay={1.0}>
              <div className="contact-info-card">
                <div className="icon bi bi-envelope" ></div>
                <a href="mailto:nirajanbanjade321@gmail.com" className='contact-link'>
                  Email Me
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contactme;
