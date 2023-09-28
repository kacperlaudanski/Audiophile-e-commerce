import React from "react";
import "../../../dist-styles/products.css";

interface GalleryImages {
    galleryImage1: string | undefined; 
    galleryImage2: string | undefined; 
    galleryImage3: string | undefined; 
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
