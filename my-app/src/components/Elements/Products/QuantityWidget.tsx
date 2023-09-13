import React, {useState} from "react";

interface ClassNames {
    containerClass: string; 
    inputClass: string; 
    amountBtnClass: string; 
}

const QuantityWidget: React.FC<ClassNames> = (props) => {
  const [inputValue, setInputValue] = useState<number | undefined>(1); 

  function increaseInputValue(){
      setInputValue(prevValue => {
        if(prevValue !== undefined){
          return prevValue + 1
        }
      })
  }

  function decreaseInputValue(){
    if(inputValue === 1)return;  
    setInputValue(prevValue => {
      if(prevValue !== undefined && prevValue > 1){
        return prevValue - 1; 
      }
    })
  }

  return (
    <div className={props.containerClass}>
      <button className={props.amountBtnClass} onClick={decreaseInputValue}>-</button>
      <input className={props.inputClass} value={inputValue}></input>
      <button className={props.amountBtnClass} onClick={increaseInputValue}>+</button>
    </div>
  );
};

export default QuantityWidget; 