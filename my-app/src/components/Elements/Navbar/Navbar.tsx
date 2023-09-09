import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../dist-styles/navbar.css";
import CartModal from "../../Cart/CartModal";
import CategoriesList from "../CategoriesElements/CategoriesList";
import CartItem from "../../Cart/CartItem";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [cartItems, setCartItem] = useState([]); 

  return (
    <nav className="navbar-desktop">
      <div className="logo-container">
        <NavLink to={"/"} className="navbar-logo">
          audiophile
        </NavLink>
      </div>
      <CategoriesList
        listClass="navbar-categories-list"
        linkClass="navbar-list-element"
      />
      <div className="cart-button-container">
        <button
          type="button"
          className="cart-button"
          onClick={() => setModal(true)}
        ></button>
      </div>
      <CartModal closeModal={() => setModal(false)} openModal={modal}>
        <CartItem />
      </CartModal>
    </nav>
  );
};

export default Navbar;
