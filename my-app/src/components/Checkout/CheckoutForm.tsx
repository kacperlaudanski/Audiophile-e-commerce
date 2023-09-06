import React from "react";
import "../../dist-styles/checkout.css";
import CheckoutInput from "../Elements/Input/CheckoutInput";

const CheckoutForm = () => {
  return (
    <form className="checkout-form-container">
      <h1>CHECKOUT</h1>
      <h5 className="checkout-form-section-title">BILLING DETAILS</h5>
      <div className="billing-details-container">
        
        <CheckoutInput
          inputLabel="Name"
          inputPlaceholder="Name"
          inputId="name"
          inputType="text"
        />
        <CheckoutInput
          inputLabel="Name"
          inputPlaceholder="Name"
          inputId="name"
          inputType="text"
        />
        <CheckoutInput
          inputLabel="Name"
          inputPlaceholder="Name"
          inputId="name"
          inputType="text"
        />
      </div>
      <div className="shipping-info-container"></div>
      <div className="payment-details-container"></div>
    </form>
  );
};

export default CheckoutForm;
