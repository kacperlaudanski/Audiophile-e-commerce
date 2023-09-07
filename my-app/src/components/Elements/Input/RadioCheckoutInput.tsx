import React from "react";
import '../../../dist-styles/checkout.css'

interface RadioInput {
    radioInputId: string; 
    radioInputLabel: string; 
}

const RadioInput: React.FC<RadioInput> = (props) => {
    return (
        <div className="radio-input-container">
           <input type='radio' id={props.radioInputId} className='radio-input'></input>
           <label htmlFor={props.radioInputId}>{props.radioInputLabel}</label>
        </div>
    )
}

export default RadioInput; 