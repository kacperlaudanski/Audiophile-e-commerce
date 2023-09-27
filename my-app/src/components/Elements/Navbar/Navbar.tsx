import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../dist-styles/navbar.css";
import CartModal from "../../Cart/CartModal";
import CategoriesList from "../CategoriesElements/CategoriesList";
import { useShoppingCart } from "../../../context/CartContext";
import EmptyCart from "../../Cart/EmptyCart";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const {renderCartItems, cartItems} = useShoppingCart(); 

  return (
    <nav className="navbar-desktop">
      <div className="logo-container">
        <NavLink to={"/"} className="navbar-logo">
          audiophile
        </NavLink>
      </div>
      <CategoriesList
        listClass="navbar-categories-list"
      />
      <div className="cart-button-container">
        <button
          type="button"
          className="cart-button"
          onClick={() => setModal(true)}
        ></button>
      </div>
      <CartModal closeModal={() => setModal(false)} openModal={modal}>
        {cartItems.length > 0 ? renderCartItems(): <EmptyCart />}
      </CartModal>
    </nav>
  );
};

export default Navbar;
