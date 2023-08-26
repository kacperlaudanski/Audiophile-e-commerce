import React from "react";

const HeaderProduct: React.FC = (props) => {
  return (
    <div className="header-product-container">
      <div className="header-product-description">
        <h6 className="new-product-sign">NEW PRODUCT</h6>
        <h1 className="header-product-name">
          <span>XX99 MARK II</span>
          <br></br>
          <span>HEADPHONES</span>
        </h1>
        <h6 className="header-product-note">
          <span>Experience natural, lifelike audio and exceptional</span>{" "}<br></br>
          <span>build quality made for the passionate music</span>{" "}<br></br>
          <span>enthusiast.</span>
        </h6>
        <button className="header-cta-button">SEE PRODUCT</button>
      </div>
    </div>
  );
};

export default HeaderProduct;
