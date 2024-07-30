import React from 'react';
import "./Contactinfocard.css";
const Contactinfocard = ({iconClass,text}) => {
  return (
    <div className='contact-details'>
        <div className='icon'>
           <i className={`${iconClass} fs-2`}></i>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Contactinfocard