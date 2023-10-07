const NavbarCartButton: React.FC<{setModal: React.Dispatch<React.SetStateAction<boolean>>}> = (props) => {
  return (
    <div className="cart-button-container">
      <button
        type="button"
        className="cart-button"
        onClick={() => props.setModal(true)}
      ></button>
    </div>
  );
};

export default NavbarCartButton;
