import React, { useEffect, useReducer, useState } from "react";
import "../../dist-styles/checkout-form.css";
import CheckoutInput from "../Elements/Input/CheckoutInput";
import RadioInput from "../Elements/Input/RadioCheckoutInput";
import { checkValidation, conditions } from "../../utilities/validation";
import CashPaymentInfo from "./CashPaymentInfo";
import { CheckoutReducer, DEFAULT_VALUES_TYPE } from "./checkout-reducer";

const DEFAULT_VALUES: DEFAULT_VALUES_TYPE = {
  name: null,
  email: null,
  phoneNumber: null,
  address: null,
  zip: null,
  city: null,
  country: null,
  eMoneyNumber: null,
  eMoneyPin: null,
};

const CheckoutForm: React.FC<{setValidation: React.Dispatch<React.SetStateAction<boolean>>}> = ({setValidation}) => {
  const [state, dispatch] = useReducer(CheckoutReducer, DEFAULT_VALUES);

  const [nameState, setNameState] = useState(true);
  const [emailState, setEmailState] = useState(true);
  const [phoneNumberState, setPhoneNumberState] = useState(true); 
  const [addressState, setAddressState] = useState(true);
  const [zipState, setZipState] = useState(true);
  const [cityState, setCityState] = useState(true);
  const [countryState, setCountryState] = useState(true);
  const [eMoneyNumberState, setEMoneyNrState] = useState(true);
  const [eMoneyPinState, setEMoneyPinState] = useState(true);

  const [isEMoneyChecked, setEMoneyCheck] = useState(false);
  const [isCashChecked, setCashCheck] = useState(false);

  function confirmValidation(){
    if(nameState && emailState && phoneNumberState && addressState && zipState && cityState && countryState && eMoneyNumberState && eMoneyPinState){
      setValidation(false); 
    }else{
      setValidation(false); 
    }
  }

  useEffect(() => {
    confirmValidation()
  }, [nameState, emailState, phoneNumberState, addressState, zipState, cityState, countryState, eMoneyNumberState, eMoneyPinState]); 


  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.name, setNameState);
    dispatch({ type: "NAME", payload: event.target.value });
  }

  function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.email, setEmailState);
    dispatch({ type: "EMAIL", payload: event.target.value });
  }

  function phoneNumberHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.phoneNumber, setPhoneNumberState);
    dispatch({ type: "PHONE_NUMBER", payload: event.target.value });
  }

  function addressHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.address, setAddressState);
    dispatch({ type: "ADDRESS", payload: event.target.value });
  }

  function zipHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.zip, setZipState);
    dispatch({ type: "ZIP", payload: event.target.value });
  }

  function cityHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.name, setCityState);
    dispatch({ type: "CITY", payload: event.target.value });
  }

  function countryHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.email, setCountryState);
    dispatch({ type: "COUNTRY", payload: event.target.value });
  }

  function eMoneyHandler() {
    setEMoneyCheck(true);
    setCashCheck(false);
  }

  function cashHandler() {
    setCashCheck(true);
    setEMoneyCheck(false);
  }

  function eMoneyNumberHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(
      event.target.value,
      conditions.eMoneyNumber,
      setEMoneyNrState
    );
    dispatch({ type: "E_MONEY_NUMBER", payload: event.target.value });
  }

  function eMoneyPinHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(
      event.target.value,
      conditions.eMoneyPin,
      setEMoneyPinState
    );
    dispatch({ type: "E_MONEY_PIN", payload: event.target.value });
  }

  return (
    <form className="checkout-form-container">
      <h1>CHECKOUT</h1>
      <section className="checkout-form-section">
        <h5 className="checkout-form-section-title">BILLING DETAILS</h5>
        <div className="billing-details-container">
          <CheckoutInput
            className={`checkout-input-container ${!nameState ? `input-error` : ''}`}
            errorMessage={!nameState ? 'show-error' : ''}
            inputLabel="Name"
            inputPlaceholder="Alexei Ward"
            inputId="name"
            inputType="text"
            onChange={nameHandler}
            maxLength={50}
          />
          <CheckoutInput
            className={`checkout-input-container ${!emailState ? `input-error` : ''}`}
            errorMessage={!emailState ? 'show-error' : ''}
            inputLabel="Email Address"
            inputPlaceholder="alexei@gmail.com"
            inputId="email"
            inputType="text"
            onChange={emailHandler}
            maxLength={50}
          />
          <CheckoutInput
            className={`checkout-input-container ${!phoneNumberState ? `input-error` : ''}`}
            errorMessage={!phoneNumberState ? 'show-error' : ''}
            inputLabel="Phone Number"
            inputPlaceholder="+1 202-555-0136"
            inputId="phone-number"
            inputType="text"
            onChange={phoneNumberHandler}
            maxLength={10}
          />
        </div>
      </section>
      <section className="checkout-form-section">
        <h5 className="checkout-form-section-title">SHIPPING INFO</h5>
        <div className="shipping-info-container">
          <CheckoutInput
            className={`checkout-input-container ${!addressState ? `input-error` : ''}`}
            errorMessage={!addressState ? 'show-error' : ''}
            inputLabel="Address"
            inputPlaceholder="1137 Williams Avenue"
            inputId="address"
            inputType="text"
            onChange={addressHandler}
            maxLength={70}
          />
          <CheckoutInput
            className={`checkout-input-container ${!zipState ? `input-error` : ''}`}
            errorMessage={!zipState ? 'show-error' : ''}
            inputLabel="ZIP Code"
            inputPlaceholder="10001"
            inputId="zip-code"
            inputType="text"
            onChange={zipHandler}
            maxLength={5}
          />
          <CheckoutInput
            className={`checkout-input-container ${!cityState ? `input-error` : ''}`}
            errorMessage={!cityState ? 'show-error' : ''}
            inputLabel="City"
            inputPlaceholder="Ney York"
            inputId="city"
            inputType="text"
            onChange={cityHandler}
            maxLength={40}
          />
          <CheckoutInput
            className={`checkout-input-container ${!countryState ? `input-error` : ''}`}
            errorMessage={!countryState ? 'show-error' : ''}
            inputLabel="Country"
            inputPlaceholder="United States"
            inputId="country"
            inputType="text"
            onChange={countryHandler}
            maxLength={40}
          />
        </div>
      </section>
      <section className="checkout-form-section">
        <h5 className="checkout-form-section-title">PAYMENT DETAILS</h5>
        <div className="payment-details-container">
          <RadioInput
            radioInputId="e-money"
            radioInputLabel="e-Money"
            isChecked={isEMoneyChecked}
            onChange={eMoneyHandler}
          />
          <RadioInput
            radioInputId="cash-on-delivery"
            radioInputLabel="Cash on Delivery"
            isChecked={isCashChecked}
            onChange={cashHandler}
          />
          {isEMoneyChecked && (
            <>
              <CheckoutInput
                className={`checkout-input-container ${!eMoneyNumberState ? `input-error` : ''}`}
                errorMessage={!eMoneyNumberState ? 'show-error' : ''}
                inputLabel="e-Money Number"
                inputPlaceholder="2385219934"
                inputId="e-money-number"
                inputType="text"
                onChange={eMoneyNumberHandler}
                maxLength={10}
              />
              <CheckoutInput
                className={`checkout-input-container ${!eMoneyPinState ? `input-error` : ''}`}
                errorMessage={!eMoneyPinState ? 'show-error' : ''}
                inputLabel="e-Money PIN"
                inputPlaceholder="6891"
                inputId="e-money-pin"
                inputType="text"
                onChange={eMoneyPinHandler}
                maxLength={4}
              />
            </>
          )}
        </div>
      </section>
      {isCashChecked && <CashPaymentInfo />}
    </form>
  );
};

export default CheckoutForm;
