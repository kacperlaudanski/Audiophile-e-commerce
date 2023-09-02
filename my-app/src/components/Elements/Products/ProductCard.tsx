import React, { ReactNode } from "react";
import "../../../dist-styles/products.css";

const ProductDetails: React.FC<{
  productImage: string;
  productName: string;
  productDescription: string;
  productFeaturesI: string;
  productFeaturesII: string;
  productBoxContent: ReactNode;
}> = (props) => {
  return (
    <div className="product-details-container">
      <div className="product-presentation">
        <img src={props.productImage} alt="product-image"></img>
        <div className="product-description">
          <h1>{props.productName}</h1>
          <p>{props.productDescription}</p>
          <small className="product-price">$ 899</small>
          <div className="product-input-section">
            <div className="product-amount-container">
              <button className="change-amount-btn">-</button>
              <input className="product-amount-input" value={1}></input>
              <button className="change-amount-btn">+</button>
            </div>
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
            <li><span>1x </span>Headphone Unit</li>
            <li><span>2x </span>Replacement Earcups</li>
            <li><span>1x </span>User Manual</li>
            <li><span>1x </span>3.5mm 5m Audio Cable</li>
            <li><span>1x </span>Travel Bag</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
