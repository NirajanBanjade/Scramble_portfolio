import React from 'react';
import "./Contactme.css";
import Contactinfocard from './Contactinfocard/Contactinfocard';
import Contactform from './Contactform/Contactform';

const Contactme = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex:1}}>

                <Contactinfocard iconClass="bi bi-envelope"
                text = "nirajanbanjade321@gmail.com"/>    
            </div>
            <div style={{flex:1}}>
            <Contactinfocard  iconClass="bi bi-github"
                text="https://github.com/NirajanBanjade"/>
            </div>
            <div className='contact-form' style={{flex:1}}>
              <Contactform/>
            </div>
        </div>
    </section>
  )
}

export default Contactme