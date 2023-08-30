import React from "react";
import { NavLink } from "react-router-dom";
import "../../../dist-styles/navbar.css";
import CategoriesList from "../CategoriesElements/CategoriesList";

const Navbar = () => {
  return (
    <nav className="navbar-desktop">
      <div className="logo-container">
        <NavLink to={"/"} className="navbar-logo">
          audiophile
        </NavLink>
      </div>
      <CategoriesList 
        listClass = "navbar-categories-list"
        linkClass = "navbar-list-element"
      />
      <div className="cart-button-container">
        <button type="button" className="cart-button"></button>
      </div>
    </nav>
  );
};

export default Navbar;
