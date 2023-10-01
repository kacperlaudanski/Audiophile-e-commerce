import "../../../dist-styles/radioInput.css";

interface RadioInputType {
  radioInputId: string;
  radioInputLabel: string;
  isChecked: boolean;
  onChange: () => void;
}

const RadioInput: React.FC<RadioInputType> = (props) => {
  return (
    <div className="radio-input-container">
      <input
        type="radio"
        id={props.radioInputId}
        className="radio-input"
        checked={props.isChecked}
        onChange={props.onChange}
      ></input>
      <label htmlFor={props.radioInputId}>{props.radioInputLabel}</label>
    </div>
  );
};

export default RadioInput;
