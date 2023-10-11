import { ReactEventHandler, ReactNode, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";
import "../../dist-styles/cart.css";

interface CartModal {
  openModal: boolean;
  closeModal: ReactEventHandler;
  children: ReactNode;
}

const CartModal: React.FC<CartModal> = ({
  openModal,
  closeModal,
  children,
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

  const {
    cartItemsAmount,
    removeAllItems,
    cartItems,
    totalPrice,
    totalPriceHandler,
  } = useShoppingCart();

  useEffect(() => {
    totalPriceHandler();
  }, [cartItems]);

  return (
    <dialog ref={ref} onCancel={closeModal} className="cart-dialog-container">
      <div className="cart-modal-container">
        <div className="cart-top">
          <h3>CART ({cartItemsAmount})</h3>
          <button className="cart-remove-btn" onClick={removeAllItems}>
            Remove all
          </button>
        </div>
        <div className="cart-content-container">{children}</div>
        <div className="cart-bottom">
          <div className="cart-price-container">
            <h4>TOTAL</h4>
            <span className="cart-total-price">$ {totalPrice}</span>
          </div>
          {cartItems.length > 0 && (
            <button
              className="cart-checkout-btn"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              CHECKOUT
            </button>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default CartModal;
