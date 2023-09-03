import React from "react";
import { useNavigate } from "react-router-dom";

const RelatedProduct: React.FC<{
  relatedProductImage: string;
  relatedProductName: string;
  relatedProductLink: string;
}> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="related-product-container">
      <img src={props.relatedProductImage} alt="related-product"></img>
      <h3 className="related-product-name">{props.relatedProductName}</h3>
      <button
        className="see-related-product-btn"
        onClick={() => {
          navigate(props.relatedProductLink);
        }}
      >SEE PRODUCT</button>
    </div>
  );
};

export default RelatedProduct;
