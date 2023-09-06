import React from "react";
import "../../../dist-styles/products.css";
import Image1 from "../../../images/product-xx59-headphones/desktop/image-gallery-1.jpg";
import Image2 from "../../../images/product-xx59-headphones/desktop/image-gallery-2.jpg";
import Image3 from "../../../images/product-xx59-headphones/desktop/image-gallery-3.jpg";

interface GalleryImages {
    galleryImage1: string; 
    galleryImage2: string; 
    galleryImage3: string; 
}

const ImageGallery: React.FC<GalleryImages> = (props) => {

  return (
    <div className="image-gallery-container">
        <div className="small-images-container">
            <img className="small-image" src={props.galleryImage1}></img>
            <img className="small-image" src={props.galleryImage2}></img>
        </div>
        <div className="big-image-container">
            <img className="big-image" src={props.galleryImage3}></img>
        </div>
    </div>
  );
};

export default ImageGallery;
