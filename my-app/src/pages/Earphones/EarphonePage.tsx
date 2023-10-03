import '../../dist-styles/categories.css'
import Navbar from '../../components/Elements/Navbar/Navbar';
import HeaderSection from "../../components/Elements/Header/HeaderSection";
import CategoryBanner from "../../components/Elements/CategoriesElements/CategoryBanner";
import MainSection from "../Home/MainSection";
import ProductPreview from "../../components/Products/ProductPreview";
import CategoryPanel from "../../components/Elements/CategoriesElements/CategoryPanel";
import AboutCompany from "../../components/Elements/AboutCompany/AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";
import { earphonesList } from '../../data/ProductData';
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
              productImage={earphones.mainImage}
              productName={earphones.name}
              productDescription={earphones.description}
              productPageLink={earphones.shortLink}
              layout={earphones.productPreviewReverse}
            /> 
          )
        })}
        <CategoryPanel /> 
        <AboutCompany /> 
      </MainSection>
      <Footer /> 
    </React.Fragment>
  )
};

export default EarphonesPage;