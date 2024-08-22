import React from "react";
import "./Navbar1.css";
import logoo from "./logoo.jpg";
import Mobilenav from "./mobilenav/Mobilenav.jsx";
import { useState } from "react";
import ban2 from "./Ban2.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="mylogo" src={logoo} alt="Logo" />

          <ul>
            <li>
              <a className="nav_item">Home</a>
              {/* <Link to="/Home" className="nav_item">Home</Link> */}
            </li>
            <li>
              <a className="nav_item">Skills</a>
              {/* <Link to="/Skills" className="nav_item">Skills</Link>  */}
            </li>
            <li>
              <a className="nav_item">Experience</a>
              {/* <Link to="/Work-Experience" className="nav_item">Work-Experience</Link>  */}
            </li>
            <li>
              <a className="nav_item">Contact</a>
              {/* <Link to="/Projects" className="nav_item">Projects</Link>  */}
            </li>
            <button className="hire">Hire Me</button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "0.9rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
