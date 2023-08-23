import React from "react";
import { NavLink } from "react-router-dom";
import "../../../dist-styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-desktop">
      <div className="logo-container">
        <NavLink to={"/"} className="navbar-logo">
          audiophile
        </NavLink>
      </div>
      <ul className="categories-list">
        <li>
          <NavLink to={"/"} className="navbar-list-element">HOME</NavLink>
        </li>
        <li>
          <NavLink to={"/headphones"} className="navbar-list-element">HEADPHONES</NavLink>
        </li>
        <li>
          <NavLink to={"/speakers"} className="navbar-list-element">SPEAKERS</NavLink>
        </li>
        <li>
          <NavLink to={"/earphones"} className="navbar-list-element">EARPHONES</NavLink>
        </li>
      </ul>
      <div className="cart-button-container">
        <button type="button" className="cart-button">
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
