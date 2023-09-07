import React from "react";

interface Input {
    inputLabel: string | null; 
    inputType: string; 
    inputId: string; 
    inputPlaceholder: string | undefined; 
}

const CheckoutInput: React.FC<Input> = (props) => {
   return (
    <div className='checkout-input-container'>
        <label htmlFor={props.inputId}>{props.inputLabel}</label>
        <input type = {props.inputType} id={props.inputId} className='checkout-input' placeholder={props.inputPlaceholder}></input>
    </div>
   )
}

export default CheckoutInput; 