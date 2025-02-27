import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Styles.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ankit Rawat</h1>
      <div className="NavLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
