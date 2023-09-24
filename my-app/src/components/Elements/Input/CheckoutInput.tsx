import React from "react";
import '../../../dist-styles/variables.css'

interface Input {
  className: string;
  errorMessage: string; 
  inputLabel: string | null;
  inputType: string;
  inputId: string;
  inputPlaceholder: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckoutInput: React.FC<Input> = (props) => {
  return (
    <div className={props.className}>
      <div className="checkout-input-info">
        <label htmlFor={props.inputId} className='label-error'>{props.inputLabel}</label>
        <small className={`input-error-message ${props.errorMessage}`}>Invalid value</small>
      </div>
      <input
        type={props.inputType}
        id={props.inputId}
        className="checkout-input"
        placeholder={props.inputPlaceholder}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default CheckoutInput;
//checkout-input-container