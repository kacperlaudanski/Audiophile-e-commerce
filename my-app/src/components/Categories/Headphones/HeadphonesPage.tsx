import "../../../dist-styles/categories.css";
import HeaderSection from "../../Elements/Header/HeaderSection";
import Navbar from "../../Elements/Navbar/Navbar";
import CategoryBanner from "../../Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../Home/MainSection";
import ProductPreview from "../../Elements/Products/ProductPreview";
import XXMarkIIImage from "../../../images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../../Elements/Footer/Footer";
import React from "react";

const HeadphonesPage: React.FC = (props) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <CategoryBanner>Headphones</CategoryBanner>
      </HeaderSection>
      <MainSection>
        <ProductPreview
          productImage={XXMarkIIImage}
          productName="XX99 MARK II HEADPHONES"
          productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          productPageLink="/"
        />
      </MainSection>
    </React.Fragment>
  );
};

export default HeadphonesPage;
