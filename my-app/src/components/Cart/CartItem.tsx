import { useShoppingCart } from '../../context/CartContext';
import '../../dist-styles/cart.css';
import QuantityWidget from "../Elements/QuantityWidget/QuantityWidget";

interface CartItemType {
    name: string; 
    id: number; 
    price: number; 
    image: string; 
}

const CartItem: React.FC<CartItemType> = ({name, id, price, image}) => {

  const {increaseItemAmount, decreaseItemAmount, getItemAmount} = useShoppingCart();

    return (
        <div className="cart-item-container">
          <div className="cart-item-image">
            <img src={image} alt={`product-${name}-image`}></img>
          </div>
          <div className="cart-item-info">
            <h5>{name}</h5>
            <span className="cart-price">{price} $</span>
          </div>
          <div className='cart-quantity-widget'>
            <QuantityWidget 
              containerClass="cart-quantity-container"
              inputClass="cart-quantity-input"
              amountBtnClass="cart-quantity-btn"
              inputValue={getItemAmount(id!)}
              increaseInputBtn={() => {increaseItemAmount(id!)}}
              decreaseInputBtn={() => {decreaseItemAmount(id!)}}
            /> 
          </div>
        </div>
    )
}

export default CartItem; 