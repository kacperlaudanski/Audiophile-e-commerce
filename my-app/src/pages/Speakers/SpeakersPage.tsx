import HeaderSection from "../../components/Elements/Header/HeaderSection";
import Navbar from "../../components/Elements/Navbar/Navbar";
import CategoryBanner from "../../components/Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../components/Elements/MainSection/MainSection";
import ProductPreview from "../../components/Products/ProductPreview";
import CategoryPanel from "../../components/Elements/CategoriesElements/CategoryPanel";
import AboutCompany from "../../components/Elements/AboutCompany/AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";
import { speakersList } from "../../data/ProductData";
import "../../dist-styles/categories.css";

const SpeakersPage = () => {
  return (
    <>
      <HeaderSection>
        <Navbar />
        <CategoryBanner>SPEAKERS</CategoryBanner>
      </HeaderSection>
      <MainSection>
        {speakersList.map((speaker) => {
          return (
            <ProductPreview 
              productImage={speaker.mainImage}
              productName={speaker.name}
              productDescription={speaker.description}
              productPageLink={speaker.shortLink}
              layout={speaker.productPreviewReverse}
            />
          )
        })}
        <CategoryPanel /> 
        <AboutCompany />
      </MainSection>
      <Footer /> 
    </>
  );
};

export default SpeakersPage;
