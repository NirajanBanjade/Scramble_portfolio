import React, { useState } from "react";
import "./Navbar1.css";
import Mobilenav from "./mobilenav/Mobilenav.jsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "0.9rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
