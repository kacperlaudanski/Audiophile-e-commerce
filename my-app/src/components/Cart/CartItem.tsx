import { useShoppingCart } from '../../context/CartContext';
import '../../dist-styles/cart.css';
import QuantityWidget from "../Elements/QuantityWidget/QuantityWidget";

interface CartItem {
    name: string | undefined; 
    id: number | undefined; 
    price: number | undefined; 
    image: string | undefined; 
}

const CartItem = ({name, id, price, image}: CartItem) => {

  const {increaseItemAmount, decreaseItemAmount, getItemAmount} = useShoppingCart();

    return (
        <div className="cart-item-container">
          <div className="cart-item-image">
            <img src={image} alt='cart-item-image'></img>
          </div>
          <div className="cart-item-info">
            <h5>{name}</h5>
            <span className="cart-price">{price} $</span>
          </div>
          <div className='cart-quantity-widget'>
            <QuantityWidget 
              containerClass="cart-amount-container"
              inputClass="cart-amount-input"
              amountBtnClass="cart-amount-btn"
              inputValue={getItemAmount(id)}
              increaseInputBtn={() => {increaseItemAmount(id)}}
              decreaseInputBtn={() => {decreaseItemAmount(id)}}
            /> 
          </div>
        </div>
    )
}

export default CartItem; 