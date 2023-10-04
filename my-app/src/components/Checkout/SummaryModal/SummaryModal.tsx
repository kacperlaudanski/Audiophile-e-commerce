import { ReactEventHandler, useEffect, useRef, useState } from "react";
import ConfirmationIcon from "../../../images/checkout/icon-order-confirmation.svg";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../../context/CartContext";
import { scrollPageToTop } from "../../../utilities/pageScrolling";
import { calculateGrandTotal } from "../../../utilities/grandTotalCounter";
import "../../../dist-styles/summary-modal.css";

interface Modal {
  openModal: boolean;
  closeModal: ReactEventHandler;
}

const SummaryModal: React.FC<Modal> = ({ openModal, closeModal }) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const [isShowMoreActive, setShowMore] = useState(false);
  const navigate = useNavigate();

  const {
    cartItems,
    renderCheckoutItems,
    totalPrice,
    removeAllItems,
  } = useShoppingCart();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);
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
          <div className="order-list-left">
            {isShowMoreActive
              ? renderCheckoutItems(false)
              : renderCheckoutItems(true)}
            <div className="show-more-btn-container">
              {cartItems.length > 1 && (
                <button
                  onClick={() => {
                    setShowMore((prevVal) => !prevVal);
                  }}
                >
                  {isShowMoreActive
                    ? "Show less"
                    : `Show ${cartItems.length - 1} more`}
                </button>
              )}
            </div>
          </div>
          <div className="order-list-right">
            <span className="order-list-grand-total">GRAND TOTAL</span>
            <span className="order-list-total-price">
              $ {calculateGrandTotal(totalPrice)}
            </span>
          </div>
        </div>
        <button
          className="back-to-home-btn"
          onClick={() => {
            navigate("/");
            scrollPageToTop();
            removeAllItems();
          }}
        >
          BACK TO HOME
        </button>
      </div>
    </dialog>
  );
};

export default SummaryModal;
