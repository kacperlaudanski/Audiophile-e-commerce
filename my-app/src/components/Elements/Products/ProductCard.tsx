import React, { ReactNode } from "react";
import QuantityWidget from "./QuantityWidget";
import "../../../dist-styles/products.css";
import formatCurrency from "../../../utilities/currencyFormatter";
import { useShoppingCart } from "../../../context/CartContext";

const ProductDetails: React.FC<{
  productImage: string;
  productName: string;
  productDescription: string;
  productPrice: number; 
  productFeaturesI: string;
  productFeaturesII: string;
  productBoxContent: ReactNode;
}> = (props) => {

  const {increaseItemAmount} = useShoppingCart(); 

  return (
    <div className="product-card-container">
      <div className="product-presentation">
        <img src={props.productImage} alt="product-image"></img>
        <div className="product-description">
          <h1>{props.productName}</h1>
          <p>{props.productDescription}</p>
          <small className="product-price">{formatCurrency(props.productPrice)}</small>
          <div className="product-input-section">
            <QuantityWidget 
              containerClass = 'product-amount-container'
              inputClass = 'product-amount-input'
              amountBtnClass = 'change-amount-btn'
            /> 
            <button className="add-to-cart-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="product-spec">
        <div className="product-features">
          <h3>FEATURES</h3>
          <p>{props.productFeaturesI}</p>
          <br></br>
          <p>{props.productFeaturesII}</p>
        </div>
        <div className="product-in-the-box">
          <h3>IN THE BOX</h3>
          <ul>
            {props.productBoxContent}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
