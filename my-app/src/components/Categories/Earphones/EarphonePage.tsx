import '../../../dist-styles/categories.css'
import Navbar from '../../Elements/Navbar/Navbar';
import HeaderSection from "../../Elements/Header/HeaderSection";
import CategoryBanner from "../../Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../Home/MainSection";
import ProductPreview from "../../Elements/Products/ProductPreview";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../../Elements/Footer/Footer";
import { earphonesList } from '../../Elements/Products/ProductLists'; 
import React from 'react';

const EarphonesPage: React.FC = (props) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <CategoryBanner>EARPHONES</CategoryBanner>
      </HeaderSection>
      <MainSection>
        {earphonesList.map((earphones) => {
          return (
            <ProductPreview 
              productImage={earphones.image}
              productName={earphones.name}
              productDescription={earphones.description}
              productPageLink={earphones.link}
              reverseClass={earphones.productPreviewReverse}
            /> 
          )
        })}
        <CategorySelectionPanel /> 
        <AboutCompany /> 
      </MainSection>
      <Footer /> 
    </React.Fragment>
  )
};

export default EarphonesPage;
