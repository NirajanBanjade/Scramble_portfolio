// import React, { useState } from "react";
// import "./Navbar1.css";
// import Mobilenav from "./mobilenav/Mobilenav.jsx";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);

//   const toggleMenu = () => {
//     setOpenMenu(!openMenu);
//   };

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
//       <nav className="nav-wrapper">
//         <div className="nav-content">
//           <ul>
//             <li>
//               <a className="nav_item" onClick={() => scrollToSection("home")}>Home</a>
//             </li>
//             <li>
//               <a className="nav_item" onClick={() => scrollToSection("skills")}>Skills</a>
//             </li>
//             <li>
//               <a className="nav_item" onClick={() => scrollToSection("experience")}>Experience</a>
//             </li>
//             <li>
//               <a className="nav_item" onClick={() => scrollToSection("projects")}>Projects</a>
//             </li>
//             <li>
//               <a className="nav_item" onClick={() => scrollToSection("contact")}>Contact</a>
//             </li>
//           </ul>
//           <button className="menu-btn" onClick={toggleMenu}>
//             <span className="material-symbols-outlined" style={{ fontSize: "0.9rem" }}>
//               {openMenu ? "close" : "menu"}
//             </span>
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "./Navbar1.css";
import Mobilenav from "./mobilenav/Mobilenav.jsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((v) => !v);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e, id) => {
    // keep anchors keyboard-accessible while using JS scroll
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <>
      <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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
            <a
                className="nav_item"
                href="#education"
                onClick={(e) => handleNavClick(e, "education")}
              >
                Education
              </a>
            <li>

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

          <button
            className="menu-btn"
            type="button"
            aria-label={openMenu ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
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
