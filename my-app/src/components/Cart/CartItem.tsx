import '../../dist-styles/cart.css';
import QuantityWidget from "../Elements/Products/QuantityWidget";

interface CartItem {
    name: string; 
    id: number; 
    price: number; 
    image: string; 
}

const CartItem = ({name, id, price, image}: CartItem) => {
    return (
        <div className="cart-item-container">
          <div className="cart-item-image">
            <img src={image} alt='cart-item-image'></img>
          </div>
          <div className="cart-item-info">
            <h5>{name}</h5>
            <span className="cart-price">{price}</span>
          </div>
          <div className='cart-quantity-widget'>
            <QuantityWidget 
              containerClass="cart-amount-container"
              inputClass="cart-amount-input"
              amountBtnClass="cart-amount-btn"
            /> 
          </div>
        </div>
    )
}

export default CartItem; 