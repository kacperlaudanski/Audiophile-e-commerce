import React, { useReducer, useState } from "react";
import "../../dist-styles/checkout.css";
import CheckoutInput from "../Elements/Input/CheckoutInput";
import RadioInput from "../Elements/Input/RadioCheckoutInput";
import CheckoutReducer from "./checkout-reducer";
import { checkValidation, conditions } from "../../utilities/validation";

const DEFAULT_VALUES = {
  name: null,
  email: null,
  phoneNumber: null,
  address: null,
  zip: null,
  city: null,
  country: null,
};

const [state, setValidationState] = useState({
  name: true, 
  email: true, 
  phoneNumber: true, 
  address: true, 
  zip: true, 
  city: true, 
  country: true, 
  eMoneyNumber: true,
  eMoneyPin: true
})

function emailHandler(event: React.ChangeEvent) {}

function phoneNumberHandler(event: React.ChangeEvent) {}

function addressHandler(event: React.ChangeEvent) {}

function zipHandler(event: React.ChangeEvent) {}

function cityHandler(event: React.ChangeEvent) {}

function countryHandler(event: React.ChangeEvent) {}

function eMoneyNumberHandler(event: React.ChangeEvent) {}

function eMoneyPinHandler(event: React.ChangeEvent) {}

const CheckoutForm = () => {
  const [state, dispatch] = useReducer(CheckoutReducer, DEFAULT_VALUES);

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.name, setValidationState((prev) => ({...prev, name: false})))
    dispatch({type: 'NAME', payload: event.target.value})
  }

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
            onChange={nameHandler}
          />
          <CheckoutInput
            inputLabel="Email Address"
            inputPlaceholder="alexei@gmail.com"
            inputId="email"
            inputType="text"
            onChange={emailHandler}
          />
          <CheckoutInput
            inputLabel="Phone Number"
            inputPlaceholder="+1 202-555-0136"
            inputId="phone-number"
            inputType="text"
            onChange={phoneNumberHandler}
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
            onChange={addressHandler}
          />
          <CheckoutInput
            inputLabel="ZIP Code"
            inputPlaceholder="10001"
            inputId="zip-code"
            inputType="text"
            onChange={zipHandler}
          />
          <CheckoutInput
            inputLabel="City"
            inputPlaceholder="Ney York"
            inputId="city"
            inputType="text"
            onChange={cityHandler}
          />
          <CheckoutInput
            inputLabel="Country"
            inputPlaceholder="United States"
            inputId="country"
            inputType="text"
            onChange={countryHandler}
          />
        </div>
      </section>
      <section className="checkout-form-section">
        <h5 className="checkout-form-section-title">PAYMENT DETAILS</h5>
        <div className="payment-details-container">
          <RadioInput radioInputId="e-money" radioInputLabel="e-Money" />
          <RadioInput
            radioInputId="cash-on-delivery"
            radioInputLabel="Cash on Delivery"
          />
          <CheckoutInput
            inputLabel="e-Money Number"
            inputPlaceholder="238521993"
            inputId="e-money-number"
            inputType="text"
            onChange={eMoneyNumberHandler}
          />
          <CheckoutInput
            inputLabel="e-Money PIN"
            inputPlaceholder="6891"
            inputId="e-money-pin"
            inputType="text"
            onChange={eMoneyPinHandler}
          />
        </div>
      </section>
    </form>
  );
};

export default CheckoutForm;
