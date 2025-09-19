import React from "react";
import "./mobileNav.css";

const Mobilenav = ({ isOpen, toggleMenu }) => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    toggleMenu(); // close the drawer after navigating
  }
  
  // Function to scroll to section and close the menu
  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     toggleMenu(); // Close menu after clicking
  //   }
  // };

  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
        <ul>
            <li>
              <a
                className="nav_item"
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav_item"
                href="#skills"
                onClick={(e) => handleNavClick(e, "skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="nav_item"
                href="#experience"
                onClick={(e) => handleNavClick(e, "experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="nav_item"
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="nav_item"
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mobilenav;
