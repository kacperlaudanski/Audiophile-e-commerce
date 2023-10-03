import "../../../dist-styles/checkout-cart-item.css";

interface CheckoutCartItemType {
  name: string | undefined;
  image: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
}

const CheckoutCartItem: React.FC<CheckoutCartItemType> = ({
  name,
  image,
  price,
  quantity,
}) => {
  return (
    <div className="checkout-item-container">
      <div className="checkout-item-info-container">
        <img src={image} alt="checkout-item-image"></img>
        <div className="checkout-item-info">
          <h5>{name}</h5>
          <span className="checkout-price">$ {price}</span>
        </div>
      </div>
      <div className="checkout-item-quantity">x {quantity}</div>
    </div>
  );
};

export default CheckoutCartItem;
