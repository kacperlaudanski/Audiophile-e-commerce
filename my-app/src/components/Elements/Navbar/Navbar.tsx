import { useState } from "react";
import { useShoppingCart } from "../../../context/CartContext";
import { NavLink } from "react-router-dom";
import CartModal from "../../Cart/CartModal";
import CategoriesNavList from "../CategoriesElements/CategoriesNavList";
import EmptyCart from "../../Cart/EmptyCart";
import "../../../dist-styles/navbar.css";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const { renderCartItems, cartItems } = useShoppingCart();

  return (
    <nav className="navbar-desktop">
      <div className="navbar-logo-container">
        <NavLink to={"/"} className="navbar-logo">
          audiophile
        </NavLink>
      </div>
      <CategoriesNavList listClass="navbar-categories-list" />
      <div className="cart-button-container">
        <button
          type="button"
          className="cart-button"
          onClick={() => setModal(true)}
        ></button>
      </div>
      <CartModal closeModal={() => setModal(false)} openModal={modal}>
        {cartItems.length > 0 ? renderCartItems() : <EmptyCart />}
      </CartModal>
    </nav>
  );
};

export default Navbar;
