import React from 'react';
import "./Contactform.css";
const Contactform = () => {
  return (
    <div className="contact-form-content">
        <form className='for'>
    
            <input type="text" name ="name" placeholder='Full Name'/>


            <input type="text" name="email" placeholder='Email'/>
            <textarea type ="text" name="message" placeholder= "Message for me" rows={5}/>
            <button>SEND</button>
        </form>
    </div>
  )
}

export default Contactform