import React, { Dispatch, useEffect, useReducer, useState } from "react";
import "../../dist-styles/checkout-form.css";
import CheckoutInput from "../../components/Elements/Input/CheckoutInput";
import RadioInput from "../../components/Elements/Input/RadioCheckoutInput";
import { checkValidation, conditions } from "../../utilities/validation";
import CashPaymentInfo from "./CashPaymentInfo";
import { CheckoutReducer, DEFAULT_VALUES_TYPE } from "./checkout-reducer";
import { Action } from "./checkout-reducer";

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

type FormState = boolean | null;

const CheckoutForm: React.FC<{
  setValidation: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setValidation }) => {
  const [state, dispatch] = useReducer(CheckoutReducer, DEFAULT_VALUES);

  const [nameState, setNameState] = useState<FormState>(null);
  const [emailState, setEmailState] = useState<FormState>(null);
  const [phoneNumberState, setPhoneNumberState] = useState<FormState>(null);
  const [addressState, setAddressState] = useState<FormState>(null);
  const [zipState, setZipState] = useState<FormState>(null);
  const [cityState, setCityState] = useState<FormState>(null);
  const [countryState, setCountryState] = useState<FormState>(null);
  const [eMoneyNumberState, setEMoneyNrState] = useState<FormState>(null);
  const [eMoneyPinState, setEMoneyPinState] = useState<FormState>(null);

  const [isEMoneyChecked, setEMoneyCheck] = useState(false);
  const [isCashChecked, setCashCheck] = useState(false);

  function confirmValidation() {
    if (
      nameState &&
      emailState &&
      phoneNumberState &&
      addressState &&
      zipState &&
      cityState &&
      countryState &&
      eMoneyNumberState &&
      eMoneyPinState
    ) {
      return setValidation(true);
    } else {
      return setValidation(false);
    }
  }

  useEffect(() => {
    confirmValidation();
  }, [
    nameState,
    emailState,
    phoneNumberState,
    addressState,
    zipState,
    cityState,
    countryState,
    eMoneyNumberState,
    eMoneyPinState,
  ]);

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    fieldAction: string,
    condition: RegExp,
    setState: React.Dispatch<React.SetStateAction<boolean | null>>,
    dispatch: (value: Action) => void
  ) {
    checkValidation(event.target.value, condition, setState);
    dispatch({ type: fieldAction, payload: event.target.value });
  }

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(event, "NAME", conditions.name, setNameState, dispatch);
  }

  function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(
      event,
      "EMAIL",
      conditions.email,
      setEmailState,
      dispatch
    );
  }

  function phoneNumberHandler(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(
      event,
      "PHONE_NUMBER",
      conditions.phoneNumber,
      setPhoneNumberState,
      dispatch
    );
  }

  function addressHandler(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(
      event,
      "ADDRESS",
      conditions.address,
      setAddressState,
      dispatch
    );
  }

  function zipHandler(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(event, "ZIP", conditions.zip, setZipState, dispatch);
  }

  function cityHandler(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(event, "CITY", conditions.name, setCityState, dispatch);
  }

  function countryHandler(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(
      event,
      "COUNTRY",
      conditions.name,
      setCountryState,
      dispatch
    );
  }

  function eMoneyNumberHandler(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(
      event,
      "E_MONEY_NUMBER",
      conditions.eMoneyNumber,
      setEMoneyNrState,
      dispatch
    );
  }

  function eMoneyPinHandler(event: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(
      event,
      "E_MONEY_PIN",
      conditions.eMoneyPin,
      setEMoneyPinState,
      dispatch
    );
  }

  function eMoneyHandler() {
    setEMoneyCheck(true);
    setCashCheck(false);
    setEMoneyNrState(null);
    setEMoneyPinState(null);
  }

  function cashHandler() {
    setCashCheck(true);
    setEMoneyCheck(false);
    setEMoneyNrState(true);
    setEMoneyPinState(true);
  }

  return (
    <form className="checkout-form-container">
      <h1>CHECKOUT</h1>
      <section className="checkout-form-section">
        <h5 className="checkout-form-section-title">BILLING DETAILS</h5>
        <div className="billing-details-container">
          <CheckoutInput
            className={`checkout-input-container ${
              nameState === false ? `input-error` : ""
            }`}
            errorMessage={nameState === false ? "show-error" : ""}
            inputLabel="Name"
            inputPlaceholder="Alexei Ward"
            inputId="name"
            inputType="text"
            onChange={nameHandler}
            maxLength={50}
          />
          <CheckoutInput
            className={`checkout-input-container ${
              emailState === false ? `input-error` : ""
            }`}
            errorMessage={emailState === false ? "show-error" : ""}
            inputLabel="Email Address"
            inputPlaceholder="alexei@gmail.com"
            inputId="email"
            inputType="text"
            onChange={emailHandler}
            maxLength={50}
          />
          <CheckoutInput
            className={`checkout-input-container ${
              phoneNumberState === false ? `input-error` : ""
            }`}
            errorMessage={phoneNumberState === false ? "show-error" : ""}
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
            className={`checkout-input-container ${
              addressState === false ? `input-error` : ""
            }`}
            errorMessage={addressState === false ? "show-error" : ""}
            inputLabel="Address"
            inputPlaceholder="1137 Williams Avenue"
            inputId="address"
            inputType="text"
            onChange={addressHandler}
            maxLength={70}
          />
          <CheckoutInput
            className={`checkout-input-container ${
              zipState === false ? `input-error` : ""
            }`}
            errorMessage={zipState === false ? "show-error" : ""}
            inputLabel="ZIP Code"
            inputPlaceholder="10001"
            inputId="zip-code"
            inputType="text"
            onChange={zipHandler}
            maxLength={5}
          />
          <CheckoutInput
            className={`checkout-input-container ${
              cityState === false ? `input-error` : ""
            }`}
            errorMessage={cityState === false ? "show-error" : ""}
            inputLabel="City"
            inputPlaceholder="Ney York"
            inputId="city"
            inputType="text"
            onChange={cityHandler}
            maxLength={40}
          />
          <CheckoutInput
            className={`checkout-input-container ${
              countryState === false ? `input-error` : ""
            }`}
            errorMessage={countryState === false ? "show-error" : ""}
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
                className={`checkout-input-container ${
                  eMoneyNumberState === false ? `input-error` : ""
                }`}
                errorMessage={eMoneyNumberState === false ? "show-error" : ""}
                inputLabel="e-Money Number"
                inputPlaceholder="2385219934"
                inputId="e-money-number"
                inputType="text"
                onChange={eMoneyNumberHandler}
                maxLength={10}
              />
              <CheckoutInput
                className={`checkout-input-container ${
                  eMoneyPinState === false ? `input-error` : ""
                }`}
                errorMessage={eMoneyPinState === false ? "show-error" : ""}
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
