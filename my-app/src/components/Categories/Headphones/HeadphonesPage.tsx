import "../../../dist-styles/categories.css";
import HeaderSection from "../../Elements/Header/HeaderSection";
import Navbar from "../../Elements/Navbar/Navbar";
import CategoryBanner from "../../Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../Home/MainSection";
import ProductPreview from "../../Elements/Products/ProductPreview";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../../Elements/Footer/Footer";
import React from "react";
import { headphonesList } from "../../Elements/Products/ProductLists";

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
              productImage={headphones.image}
              productName={headphones.name}
              productDescription={headphones.description}
              productPageLink={headphones.link}
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
