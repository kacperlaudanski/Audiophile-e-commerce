import { useShoppingCart } from "../../context/CartContext";
import { vatCounter } from "../../utilities/vatCounter";
import '../../dist-styles/checkout.css'

const PricingTable = () => {

    const {totalPrice} = useShoppingCart();

    const shippingCost = 50; 
    const vat = vatCounter(totalPrice); 
    const grandTotal = totalPrice + shippingCost; 

    return (
        <div className="checkout-costs-container">
        <div className="checkout-cost">
            <span className="cost-title">TOTAL</span>
            <span className="cost-value">$ {totalPrice}</span>
        </div>
        <div className="checkout-cost">
            <span className="cost-title">SHIPPING</span>
            <span className="cost-value">$ {shippingCost}</span>
        </div>
        <div className="checkout-cost">
            <span className="cost-title">VAT (INCLUDED)</span>
            <span className="cost-value">$ {vat}</span>
        </div>
        <div className="checkout-grand-total">
            <span className="cost-title">GRAND TOTAL</span>
            <span className="grand-total-value">$ {grandTotal}</span>
        </div>
       </div>
    )
}

export default PricingTable; 