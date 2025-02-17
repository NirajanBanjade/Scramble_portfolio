import React from 'react';
import "./Contactme.css";
import Contactinfocard from './Contactinfocard/Contactinfocard';
import Contactform from './Contactform/Contactform';

const Contactme = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>

      <div className='contact-content'>
        {/* Contact Info Wrapper */}
        <div className="contact-info">
          <Contactinfocard
            iconClass="bi bi-linkedin"
            text={<a href="https://www.linkedin.com/in/nirajan-banjade/" target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          />
          <Contactinfocard
            iconClass="bi bi-github"
            text={<a href="https://github.com/NirajanBanjade" target="_blank" rel="noopener noreferrer">Github</a>}
          />
          <Contactinfocard 
            iconClass="bi bi-envelope"
            text={<a href="mailto:nirajanbanjade321@gmail.com">nirajanbanjade321@gmail.com</a>}
          />
        </div>

      </div>
    </section>
  );
};

export default Contactme;
