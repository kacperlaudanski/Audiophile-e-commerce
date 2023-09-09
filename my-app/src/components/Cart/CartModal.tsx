import React, { ReactEventHandler, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../dist-styles/cart.css";

interface Modal {
  openModal: boolean;
  closeModal: ReactEventHandler;
  children: any;
  // itemsNumber: number;
  //totalPrice: string;
}

const CartModal: React.FC<Modal> = ({
  openModal,
  closeModal,
  children /*itemsNumber, totalPrice*/,
}) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);
  return (
    <dialog ref={ref} onCancel={closeModal}>
      <div className="cart-modal-container">
        <div className="cart-top">
          <h3>CART(1)</h3>
          <button className="cart-remove-btn">Remove all</button>
        </div>
        <div className="cart-content-container">{children}</div>
        <div className="cart-bottom">
          <div className="cart-price-container">
            <h4>TOTAL</h4>
            <span className="cart-total-price">$ 5559</span>
          </div>
          <NavLink className="checkout-btn" to="/checkout" onClick={closeModal}>
            CHECKOUT
          </NavLink>
        </div>
      </div>
    </dialog>
  );
};

export default CartModal;
