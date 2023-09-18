import React, { ReactEventHandler, useEffect, useRef } from "react";
import ConfirmationIcon from "../../images/checkout/icon-order-confirmation.svg";
import "../../dist-styles/cart.css";
import { NavLink } from "react-router-dom";

const ConfirmationModal: React.FC<{
  closeModal: ReactEventHandler;
  openModal: boolean;
}> = ({ closeModal, openModal }) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      className="confirmation-modal-container"
      ref={ref}
      onCancel={closeModal}
    >
      <img
        src={ConfirmationIcon}
        alt="confirmation-icon"
        className="confirmation-icon"
      ></img>
      <h2>PRODUCT ADDED TO THE CART</h2>
      <div className="confirmation-buttons-container">
        <button
          className="confirmation-continue-button"
          type="button"
          onClick={closeModal}
        >
          CONTINUE SHOPPING
        </button>
        <small>OR</small>
        <NavLink to="/checkout" className='confirmation-checkout-button'>CHECKOUT</NavLink>
      </div>
    </dialog>
  );
};

export default ConfirmationModal;
