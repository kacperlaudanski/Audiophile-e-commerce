import CategoriesNavList from "../CategoriesElements/CategoriesNavList";
import { useState } from "react";
import { useShoppingCart } from "../../../context/CartContext";
import { NavLink } from "react-router-dom";
import CartModal from "../../Cart/CartModal";
import EmptyCart from "../../Cart/EmptyCart";
import NavbarCartButton from "./NavbarCartButton";
import { slide as Menu } from "react-burger-menu";
import '../../../dist-styles/burger-menu.css'; 
import "../../../dist-styles/navbar.css";

const MobileNavbar = () => {
  const [modal, setModal] = useState(false);
  const { renderCartItems, cartItems } = useShoppingCart();

  return (
    <nav className="navbar-mobile">
      <div className="navbar-mobile-logo-list">
        <Menu>
          <CategoriesNavList listClass="navbar-mobile-list" />
        </Menu>
        <NavLink to={"/"} className="navbar-logo">
          audiophile
        </NavLink>
      </div>
      <NavbarCartButton setModal={setModal} />
      <CartModal closeModal={() => setModal(false)} openModal={modal}>
        {cartItems.length > 0 ? renderCartItems() : <EmptyCart />}
      </CartModal>
    </nav>
  );
};

export default MobileNavbar;
