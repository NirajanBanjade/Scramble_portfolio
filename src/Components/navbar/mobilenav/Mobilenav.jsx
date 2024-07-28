import React from 'react'
import logo from "../logoo.jpg"
import './mobileNav.css';

const Mobilenav = ({isOpen, toggleMenu}) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : " "}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          {/* <img className="mylogo" src={logo} alt="" /> no display of logo */}
          <ul>
            <li>
              <a className="nav_item">Home</a>
            </li>
            <li>
              <a className="nav_item">Education</a>
            </li>
            <li>
              <a className="nav_item">Work-Experience</a>
            </li>
            <li>
              <a className="nav_item">Projects</a>
            </li>
            <button className="hire" onClick={()=>{}}>Hire Me</button>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Mobilenav;