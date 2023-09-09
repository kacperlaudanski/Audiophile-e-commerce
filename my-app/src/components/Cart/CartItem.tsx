import React from "react";
import '../../dist-styles/cart.css';
import QuantityWidget from "../Elements/Products/QuantityWidget";
import Image from '../../images/product-xx59-headphones/desktop/image-product.jpg'

const CartItem = () => {
    return (
        <div className="cart-item-container">
          <div className="cart-item-image">
            <img src={Image} alt='cart-item-image'></img>
          </div>
          <div className="cart-item-info">
            <h5>XX99 MK II</h5>
            <span className="cart-price">$2.999</span>
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