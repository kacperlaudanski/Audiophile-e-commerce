import "../../dist-styles/categories.css";
import HeaderSection from "../../components/Elements/Header/HeaderSection";
import Navbar from "../../components/Elements/Navbar/Navbar";
import CategoryBanner from "../../components/Elements/CategoriesElements/CategoryBanner";
import MainSection from "../Home/MainSection";
import ProductPreview from "../../components/Elements/Products/ProductPreview";
import CategorySelectionPanel from "../Home/CategorySelectionPanel";
import AboutCompany from "../Home/AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";
import React from "react";
import { headphonesList } from "../../data/ProductData";

const HeadphonesPage: React.FC = (props) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <CategoryBanner>HEADPHONES</CategoryBanner>
      </HeaderSection>
      <MainSection>
        {headphonesList.map((headphones) => {
          return (
            <ProductPreview
              productImage={headphones.mainImage}
              productName={headphones.name}
              productDescription={headphones.description}
              productPageLink={headphones.shortLink}
              reverseClass={headphones.productPreviewReverse}
            />
          );
        })}
        <CategorySelectionPanel />
        <AboutCompany />
      </MainSection>
      <Footer />
    </React.Fragment>
  );
};

export default HeadphonesPage;