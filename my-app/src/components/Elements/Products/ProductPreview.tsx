import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../dist-styles/products.css";

const ProductPreview: React.FC<{
  productImage: string;
  productName: string;
  productDescription: string;
  productPageLink: string;
}> = ({ productImage, productName, productDescription, productPageLink}) => {
  const navigate = useNavigate();

  return (
    <div className="product-preview-container">
      <img src={productImage} alt="device-image"></img>
      <div className="product-details">
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <button className="product-link-btn" onClick={() => {navigate(productPageLink)}}>SEE PRODUCT</button>
      </div>
    </div>
  );
};

export default ProductPreview;