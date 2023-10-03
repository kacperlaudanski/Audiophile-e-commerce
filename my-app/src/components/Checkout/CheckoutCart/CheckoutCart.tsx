import { useState } from "react";
import { useShoppingCart } from "../../../context/CartContext";
import PricingTable from "./CheckoutPricingTable";
import SummaryModal from "../SummaryModal";
import "../../../dist-styles/checkout-cart.css";

const CheckoutCart: React.FC<{ isButtonDisabled: boolean }> = (props) => {
  const { renderCheckoutItems } = useShoppingCart();
  const [openModal, setModalState] = useState(false);

  return (
    <>
      <div className="checkout-cart-container">
        <h4>SUMMARY</h4>
        <div className="checkout-items-container">{renderCheckoutItems()}</div>
        <PricingTable />
        <button
          className="checkout-buy-btn"
          type="button"
          onClick={() => {
            setModalState(true);
          }}
          disabled={props.isButtonDisabled}
        >
          BUY NOW
        </button>
      </div>
      <SummaryModal
        closeModal={() => setModalState(false)}
        openModal={openModal}
      />
    </>
  );
};

export default CheckoutCart;
