import React from "react";
import "./mobileNav.css";

const Mobilenav = ({ isOpen, toggleMenu }) => {
  
  // Function to scroll to section and close the menu
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu(); // Close menu after clicking
    }
  };

  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
          <ul>
            <li>
              <a className="nav_item" onClick={() => scrollToSection("home")}>Home</a>
            </li>
            <li>
              <a className="nav_item" onClick={() => scrollToSection("skills")}>Skills</a>
            </li>
            <li>
              <a className="nav_item" onClick={() => scrollToSection("experience")}>Experience</a>
            </li>
            <li>
              <a className="nav_item" onClick={() => scrollToSection("projects")}>Projects</a>
            </li>
            <li>
              <a className="nav_item" onClick={() => scrollToSection("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mobilenav;
