import React, { ReactEventHandler, useEffect, useRef } from "react";
import ConfirmationIcon from "../../images/checkout/icon-order-confirmation.svg";
import "../../dist-styles/checkout.css";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";


interface Modal {
  openModal: boolean;
  closeModal: ReactEventHandler;
}

const SummaryModal: React.FC<Modal> = ({ openModal, closeModal }) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  const { cartItems, renderCheckoutItems, totalPrice } = useShoppingCart();

  const shippingCost = 50; 
  const grandTotal = totalPrice + shippingCost;

  return (
    <dialog className="summary-modal-dialog" ref={ref} onCancel={closeModal}>
      <div className="summary-modal-container">
        <img
          src={ConfirmationIcon}
          alt="confirmation-icon"
          className="summary-confirmation-icon"
        ></img>
        <h1>
          THANK YOU <br />
          FOR YOUR ORDER
        </h1>
        <small>You will recieve an email confirmation shortly.</small>
        <div className="summary-order-list">
          <div className="order-list-left">{renderCheckoutItems()}</div>
          <div className="order-list-right">
            <span className="order-list-grand-total">GRAND TOTAL</span>
            <span className="order-list-total-price">$ {grandTotal}</span>
          </div>
        </div>
        <NavLink to="/" className="back-to-home-btn">
          BACK TO HOME
        </NavLink>
      </div>
    </dialog>
  );
};

export default SummaryModal;
