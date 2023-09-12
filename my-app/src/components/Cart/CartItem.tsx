import '../../dist-styles/cart.css';
import QuantityWidget from "../Elements/Products/QuantityWidget";

interface CartItem {
    itemName: string; 
    itemId: string; 
    itemPrice: number; 
    itemImage: string; 
}

const CartItem = ({itemName, itemId, itemPrice, itemImage}: CartItem) => {
    return (
        <div className="cart-item-container">
          <div className="cart-item-image">
            <img src={itemImage} alt='cart-item-image'></img>
          </div>
          <div className="cart-item-info">
            <h5>{itemName}</h5>
            <span className="cart-price">{itemPrice}</span>
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