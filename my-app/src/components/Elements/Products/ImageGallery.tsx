import React from "react";
import "../../../dist-styles/products.css";
import Image1 from "../../../images/product-xx59-headphones/desktop/image-gallery-1.jpg";
import Image2 from "../../../images/product-xx59-headphones/desktop/image-gallery-2.jpg";
import Image3 from "../../../images/product-xx59-headphones/desktop/image-gallery-3.jpg";

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      <div className="smaller-images">
        <img src={Image1} className="image-1"></img>
        <img src={Image2} className="image-2"></img>
      </div>
      <div className="big-image">
      <img src={Image3} className="image-3"></img>
      </div>
    </div>
  );
};

export default ImageGallery;
