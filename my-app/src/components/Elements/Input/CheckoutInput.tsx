import React from "react";

interface Input {
    inputLabel: string | null; 
    inputType: string; 
    inputId: string; 
    inputPlaceholder: string | undefined; 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const CheckoutInput: React.FC<Input> = (props) => {
   return (
    <div className='checkout-input-container'>
        <label htmlFor={props.inputId}>{props.inputLabel}</label>
        <input type = {props.inputType} id={props.inputId} className='checkout-input' placeholder={props.inputPlaceholder} onChange = {props.onChange}></input>
    </div>
   )
}

export default CheckoutInput; 