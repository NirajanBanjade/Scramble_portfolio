import React from "react";
import './Navbar1.css';
import logoo from './logoo.jpg';
import Mobilenav from "./mobilenav/Mobilenav.jsx";
import { useState } from "react";
const Navbar = ()=>{

    const [openMenu,setOpenMenu] = useState(false);

    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    }
    return(
        <>
            <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu}/>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="mylogo" src={logoo} alt="NoImage"/>

                    <ul>
                        <li>
                           <a className="nav_item">Home</a> 
                        </li>
                        <li>
                           <a  className="nav_item">Skills</a> 
                        </li>
                        <li>
                           <a  className="nav_item">Work-Experience</a> 
                        </li>
                        <li>
                           <a className="nav_item">Projects</a> 
                        </li>
                        <button className="hire">Hire Me</button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className ={"material-symbols-outlined"}
                        style={{fontSize:"0.9rem"}}>
                        {openMenu ? "close" : "menu"}
                        </span>
                        </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;