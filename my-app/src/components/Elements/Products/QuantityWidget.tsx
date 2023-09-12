import React from "react";
import {useShoppingCart} from '../../../context/CartContext'


interface ClassNames {
    containerClass: string; 
    inputClass: string; 
    amountBtnClass: string; 
}

const QuantityWidget: React.FC<ClassNames> = (props) => {
  const {increaseItemAmount, decreaseItemAmount} = useShoppingCart(); 
  return (
    <div className={props.containerClass}>
      <button className={props.amountBtnClass} onClick={() => decreaseItemAmount}>-</button>
      <input className={props.inputClass} value={1}></input>
      <button className={props.amountBtnClass} onClick={() => increaseItemAmount}>+</button>
    </div>
  );
};

export default QuantityWidget; 