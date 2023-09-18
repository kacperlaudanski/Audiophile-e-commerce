import React from "react";
import "../../dist-styles/checkout.css";
import { useShoppingCart } from "../../context/CartContext";
import PricingTable from "./CheckoutPricingTable";

const CheckoutCart: React.FC = (props) => {
  const { cartItems, renderCheckoutItems } = useShoppingCart();

  return (
    <React.Fragment>
      <div className="checkout-cart-container">
        <h4>SUMMARY</h4>
        <div className="checkout-items-container">{renderCheckoutItems()}</div>
        <PricingTable /> 
        <button className="checkout-buy-btn" type="button">BUY NOW</button>
      </div>
    </React.Fragment>
  );
};

export default CheckoutCart;
