import React, { useReducer, useState } from "react";
import "../../dist-styles/checkout.css";
import CheckoutInput from "../Elements/Input/CheckoutInput";
import RadioInput from "../Elements/Input/RadioCheckoutInput";
import { checkValidation, conditions } from "../../utilities/validation";
import CashPaymentInfo from "./CashPaymentInfo";

type DEFAULT_VALUES_TYPE = {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  address: string | null;
  zip: string | null;
  city: string | null;
  country: string | null;
  eMoneyNumber: string | null;
  eMoneyPin: string | null;
};

type Action = {
  type:
    | "NAME"
    | "EMAIL"
    | "PHONE_NUMBER"
    | "ADDRESS"
    | "ZIP"
    | "CITY"
    | "COUNTRY"
    | "E_MONEY_NUMBER"
    | "E_MONEY_PIN";
  payload: string;
};

const CheckoutReducer = (
  state: DEFAULT_VALUES_TYPE,
  action: Action
): DEFAULT_VALUES_TYPE => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };
    case "ADDRESS":
      return { ...state, address: action.payload };
    case "ZIP":
      return { ...state, zip: action.payload };
    case "CITY":
      return { ...state, city: action.payload };
    case "COUNTRY":
      return { ...state, country: action.payload };
    case "E_MONEY_NUMBER":
      return { ...state, eMoneyNumber: action.payload };
    case "E_MONEY_PIN":
      return { ...state, eMoneyPin: action.payload };
    default:
      return state;
  }
};

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

const CheckoutForm = () => {
  const [state, dispatch] = useReducer(CheckoutReducer, DEFAULT_VALUES);

  const [nameState, setNameState] = useState(true);
  const [emailState, setEmailState] = useState(true);
  const [addressState, setAddressState] = useState(true);
  const [zipState, setZipState] = useState(true);
  const [cityState, setCityState] = useState(true);
  const [countryState, setCountryState] = useState(true);
  const [eMoneyNumberState, setEMoneyNrState] = useState(true);
  const [eMoneyPinState, setEMoneyPinState] = useState(true);

  const [isEMoneyChecked, setEMoneyCheck] = useState(false);
  const [isCashChecked, setCashCheck] = useState(false);

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.name, setNameState);
    dispatch({ type: "NAME", payload: event.target.value });
  }

  function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.email, setEmailState);
    dispatch({ type: "EMAIL", payload: event.target.value });
  }

  function phoneNumberHandler(event: React.ChangeEvent<HTMLInputElement>) {
    checkValidation(event.target.value, conditions.phoneNumber, setEmailState);
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
          {isEMoneyChecked && <><CheckoutInput
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
          /></>}
        </div>
      </section>
      {isCashChecked && <CashPaymentInfo />}
    </form>
  );
};

export default CheckoutForm;
