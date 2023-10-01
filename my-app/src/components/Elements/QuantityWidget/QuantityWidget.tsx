interface QuantityWidgetType {
  containerClass: string;
  inputClass: string;
  amountBtnClass: string;
  inputValue: number | undefined;
  decreaseInputBtn: () => void;
  increaseInputBtn: () => void;
}

const QuantityWidget: React.FC<QuantityWidgetType> = (props) => {
  return (
    <div className={props.containerClass}>
      <button className={props.amountBtnClass} onClick={props.decreaseInputBtn}>
        -
      </button>
      <input className={props.inputClass} value={props.inputValue}></input>
      <button className={props.amountBtnClass} onClick={props.increaseInputBtn}>
        +
      </button>
    </div>
  );
};

export default QuantityWidget;
