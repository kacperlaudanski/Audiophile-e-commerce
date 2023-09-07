import React from "react";
import "../../dist-styles/checkout.css";
import CheckoutInput from "../Elements/Input/CheckoutInput";
import RadioInput from "../Elements/Input/RadioCheckoutInput";

const CheckoutForm = () => {
  return (
    <form className="checkout-form-container">
      <h1>CHECKOUT</h1>
      <section className="checkout-form-section">
        <h5 className="checkout-form-section-title">BILLING DETAILS</h5>
        <div className="billing-details-container">
          <CheckoutInput
            inputLabel="Name"
            inputPlaceholder="Alexei Ward"
            inputId="name"
            inputType="text"
          />
          <CheckoutInput
            inputLabel="Email Address"
            inputPlaceholder="alexei@gmail.com"
            inputId="email"
            inputType="text"
          />
          <CheckoutInput
            inputLabel="Phone Number"
            inputPlaceholder="+1 202-555-0136"
            inputId="phone-number"
            inputType="text"
          />
        </div>
      </section>
      <section className="checkout-form-section">
        <h5 className="checkout-form-section-title">SHIPPING INFO</h5>
        <div className="shipping-info-container">
          <CheckoutInput
            inputLabel="Address"
            inputPlaceholder="1137 Williams Avenue"
            inputId="address"
            inputType="text"
          />
          <CheckoutInput
            inputLabel="ZIP Code"
            inputPlaceholder="10001"
            inputId="zip-code"
            inputType="text"
          />
          <CheckoutInput
            inputLabel="City"
            inputPlaceholder="Ney York"
            inputId="city"
            inputType="text"
          />
          <CheckoutInput
            inputLabel="Country"
            inputPlaceholder="United States"
            inputId="country"
            inputType="text"
          />
        </div>
      </section>
      <section className="checkout-form-section">
        <h5 className="checkout-form-section-title">PAYMENT DETAILS</h5>
        <div className="payment-details-container">
          <RadioInput radioInputId="e-money" radioInputLabel="e-Money" />
          <RadioInput radioInputId="cash-on-delivery" radioInputLabel="Cash on Delivery" />
          <CheckoutInput
            inputLabel="e-Money Number"
            inputPlaceholder="238521993"
            inputId="e-money-number"
            inputType="text"
          />
          <CheckoutInput
            inputLabel="e-Money PIN"
            inputPlaceholder="6891"
            inputId="e-money-pin"
            inputType="text"
          />
        </div>
      </section>
    </form>
  );
};

export default CheckoutForm;
