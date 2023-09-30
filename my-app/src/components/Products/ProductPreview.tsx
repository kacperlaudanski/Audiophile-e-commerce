import React from "react";
import { useNavigate } from "react-router-dom";
import "../../dist-styles/products.css";
import { scrollPageToTop } from "../../utilities/pageScrolling";

type ProductLayout = string | null;

interface Product {
  productImage: string;
  productName: string;
  productDescription: string;
  productPageLink: string;
  layout: ProductLayout;
}

const ProductPreview: React.FC<Product> = (props) => {
  const navigate = useNavigate();
  return (
    <div className={`product-preview-container ${props.layout}`}>
      <img src={props.productImage} alt="device-image"></img>
      <div className="product-details">
        <h2>{props.productName}</h2>
        <p>{props.productDescription}</p>
        <button
          className="product-link-btn"
          onClick={() => {
            navigate(props.productPageLink);
            scrollPageToTop();
          }}
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default ProductPreview;
