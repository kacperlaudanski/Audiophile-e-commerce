import React from "react";
import HeaderSection from "../../Elements/Header/HeaderSection";
import Navbar from "../../Elements/Navbar/Navbar";
import CategoryBanner from "../../Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../Home/MainSection";
import ProductPreview from "../../Elements/Products/ProductPreview";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../../Elements/Footer/Footer";
import ZX9SpeakerImage from "../../../images/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX7SpeakerImage from '../../../images/product-zx7-speaker/desktop/image-category-page-preview.jpg'; 
import "../../../dist-styles/categories.css";

const SpeakersPage: React.FC = (props) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <CategoryBanner>SPEAKERS</CategoryBanner>
      </HeaderSection>
      <MainSection>
        <ProductPreview
          productImage={ZX9SpeakerImage}
          productName="ZX9 SPEAKER"
          productDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          productPageLink="#"
          reverseClass={null}
        />
        <ProductPreview
          productImage={ZX7SpeakerImage}
          productName="ZX7 SPEAKER"
          productDescription="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          productPageLink="#"
          reverseClass='reverse'
        />
        <CategorySelectionPanel /> 
        <AboutCompany />
      </MainSection>
      <Footer /> 
    </React.Fragment>
  );
};

export default SpeakersPage;
