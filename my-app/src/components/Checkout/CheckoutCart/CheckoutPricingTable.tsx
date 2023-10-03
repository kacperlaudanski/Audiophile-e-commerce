import { useShoppingCart } from "../../../context/CartContext";
import { vatCounter } from "../../../utilities/vatCounter";
import { calculateGrandTotal } from "../../../utilities/grandTotalCounter";
import '../../../dist-styles/checkout-cart.css'

const PricingTable = () => {

    const {totalPrice} = useShoppingCart();
    const vat = vatCounter(totalPrice); 
    const grandTotal = calculateGrandTotal(totalPrice)

    return (
        <div className="checkout-costs-container">
        <div className="checkout-cost">
            <span className="cost-title">TOTAL</span>
            <span className="cost-value">$ {totalPrice}</span>
        </div>
        <div className="checkout-cost">
            <span className="cost-title">SHIPPING</span>
            <span className="cost-value">$ 50</span>
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