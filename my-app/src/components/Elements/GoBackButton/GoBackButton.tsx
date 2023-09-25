import '../../../dist-styles/smallElements.css'; 
const GoBackButton = () => {
  return (
    <div className="go-back-container">
      <button onClick={() => window.history.back()} className="go-back-btn">
        Go Back
      </button>
    </div>
  );
};

export default GoBackButton;
