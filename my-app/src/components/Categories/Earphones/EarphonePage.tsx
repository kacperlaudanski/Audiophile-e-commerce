import '../../../dist-styles/categories.css'
import Navbar from '../../Elements/Navbar/Navbar';
import HeaderSection from "../../Elements/Header/HeaderSection";
import CategoryBanner from "../../Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../Home/MainSection";
import ProductPreview from "../../Elements/Products/ProductPreview";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../../Elements/Footer/Footer";
import YX1EarphonesImage from '../../../images/product-yx1-earphones/desktop/image-category-page-preview.jpg'; 
import React from 'react';

const EarphonesPage: React.FC = (props) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <CategoryBanner>EARPHONES</CategoryBanner>
      </HeaderSection>
      <MainSection>
        <ProductPreview 
          productImage={YX1EarphonesImage}
          productName = 'YX1 WIRELESS EARPHONES'
          productDescription='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
          productPageLink='#'
          reverseClass={null}
        />
        <CategorySelectionPanel /> 
        <AboutCompany /> 
      </MainSection>
      <Footer /> 
    </React.Fragment>
  )
};

export default EarphonesPage;
