import React from "react";
import "../../dist-styles/home.css";
import SpeakerImage from "../../images/home/desktop/image-speaker-zx9.png";
import PatternCircles from "../../images/home/desktop/pattern-circles.svg";
import { useNavigate } from "react-router-dom";

const ProductsBanner: React.FC = () => {

  const navigate = useNavigate(); 

  return (
    <div className="home-product-banners">
      <div className="product-banner-1">
        <div className="pr-banner-1-image">
          <img src={SpeakerImage} alt="speaker-image"></img>
          <img
            src={PatternCircles}
            alt="circle-pattern"
            className="circle-pattern"
          ></img>
        </div>
        <div className="pr-banner-1-description">
          <h2>
            <span>ZX9</span>
            <br></br>
            <span>SPEAKER</span>
          </h2>
          <p>
            <span>Upgrade to premium speakers that are</span>
            <br></br>
            <span>phenomenallu built to deliver truly remarkable</span>
            <br></br>
            <span>sound.</span>
          </p>
          <button className="cta-button banner1-cta-button" onClick={() => navigate('./speakers/zx9')}>SEE PRODUCT</button>
        </div>
      </div>
      <div className="product-banner-2">
        <div className="pr-banner-2-description">
          <h3>ZX7 SPEAKER</h3>
          <button className="cta-button banner2-cta-button" onClick={() => navigate('./speakers/zx7')}>SEE PRODUCT</button>
        </div>
      </div>
      <div className="product-banner-3-left"></div>
      <div className="product-banner-3-right">
        <h3>YX1 EARPHONES</h3>
        <button className="cta-button banner3-cta-button" onClick={() => navigate('./earphones/yx1')}>SEE PRODUCT</button>
      </div>
    </div>
  );
};

export default ProductsBanner;
