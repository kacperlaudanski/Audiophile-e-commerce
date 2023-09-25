import React, {useState} from "react";
import "../../dist-styles/checkout-cart.css";
import { useShoppingCart } from "../../context/CartContext";
import PricingTable from "./CheckoutPricingTable";
import SummaryModal from "./SummaryModal";

const CheckoutCart: React.FC<{isButtonDisabled: boolean}> = (props) => {
  const { cartItems, renderCheckoutItems } = useShoppingCart();
  const [openModal, setModalState] = useState(false); 

  return (
    <React.Fragment>
      <div className="checkout-cart-container">
        <h4>SUMMARY</h4>
        <div className="checkout-items-container">{renderCheckoutItems()}</div>
        <PricingTable /> 
        <button className="checkout-buy-btn" type="button" onClick={() => {
            setModalState(true)
        }} disabled={props.isButtonDisabled}>BUY NOW</button>
      </div>
      <SummaryModal closeModal={() => setModalState(false)} openModal={openModal}/> 
    </React.Fragment>
  );
};

export default CheckoutCart;
