import React from "react";
import HeaderSection from "../../Elements/Header/HeaderSection";
import Navbar from "../../Elements/Navbar/Navbar";
import CategoryBanner from "../../Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../Home/MainSection";
import ProductPreview from "../../Elements/Products/ProductPreview";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../../Elements/Footer/Footer";
import { speakersList } from "../../Elements/Products/ProductLists";
import "../../../dist-styles/categories.css";

const SpeakersPage: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <CategoryBanner>SPEAKERS</CategoryBanner>
      </HeaderSection>
      <MainSection>
        {speakersList.map((speaker) => {
          return (
            <ProductPreview 
              productImage={speaker.image}
              productName={speaker.name}
              productDescription={speaker.description}
              productPageLink={speaker.link}
              reverseClass={speaker.productPreviewReverse}
            />
          )
        })}
        <CategorySelectionPanel /> 
        <AboutCompany />
      </MainSection>
      <Footer /> 
    </React.Fragment>
  );
};

export default SpeakersPage;
