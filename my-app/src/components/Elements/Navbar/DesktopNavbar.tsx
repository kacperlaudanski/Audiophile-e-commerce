import { useState } from "react";
import { useShoppingCart } from "../../../context/CartContext";
import { NavLink } from "react-router-dom";
import CartModal from "../../Cart/CartModal";
import CategoriesNavList from "../CategoriesElements/CategoriesNavList";
import EmptyCart from "../../Cart/EmptyCart";
import NavbarCartButton from "./NavbarCartButton";
import "../../../dist-styles/navbar.css";

const DesktopNavbar = () => {
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
      <NavbarCartButton setModal={setModal}/>
      <CartModal closeModal={() => setModal(false)} openModal={modal}>
        {cartItems.length > 0 ? renderCartItems() : <EmptyCart />}
      </CartModal>
    </nav>
  );
};

export default DesktopNavbar;
