import { ReactEventHandler, useEffect, useRef } from "react";
import ConfirmationIcon from "../../images/checkout/icon-order-confirmation.svg";
import "../../dist-styles/cart.css";
import { scrollPageToTop } from "../../utilities/pageScrolling";
import { useNavigate } from "react-router-dom";

interface ConfirmationModal {
  openModal: boolean;
  closeModal: ReactEventHandler;
}

const ConfirmationModal: React.FC<ConfirmationModal> = ({
  openModal,
  closeModal,
}) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const navigate = useNavigate();

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
        <button
          className="confirmation-checkout-button"
          onClick={() => {
            navigate("/checkout");
            scrollPageToTop();
          }}
        >
          GO TO CHECKOUT
        </button>
      </div>
    </dialog>
  );
};

export default ConfirmationModal;