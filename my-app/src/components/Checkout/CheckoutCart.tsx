import React from "react";
import '../../dist-styles/checkout.css'
import CheckoutCartItem from "./CheckoutCartItem";
import { useShoppingCart } from "../../context/CartContext";

const CheckoutCart: React.FC = (props) => {

    const {cartItems, totalPrice, renderCheckoutItems} = useShoppingCart(); 
    return (
        <div className="checkout-cart-container">
           <h4>SUMMARY</h4>
           <div className="checkout-items-container">
             {renderCheckoutItems()}
           </div>
        </div>
    )
}

export default CheckoutCart; 