import React from "react";

interface ClassNames {
    containerClass: string; 
    inputClass: string; 
    amountBtnClass: string; 
}

const QuantityWidget: React.FC<ClassNames> = (props) => {
  return (
    <div className={props.containerClass}>
      <button className={props.amountBtnClass}>-</button>
      <input className={props.inputClass} value={1}></input>
      <button className={props.amountBtnClass}>+</button>
    </div>
  );
};

export default QuantityWidget; 