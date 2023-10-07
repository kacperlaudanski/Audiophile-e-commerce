import '../../dist-styles/categories.css'
import Navbar from '../../components/Elements/Navbar/DesktopNavbar';
import HeaderSection from "../../components/Elements/Header/HeaderSection";
import CategoryBanner from "../../components/Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../components/Elements/MainSection/MainSection";
import ProductPreview from "../../components/Products/ProductPreview";
import CategoryPanel from "../../components/Elements/CategoriesElements/CategoryPanel";
import AboutCompany from "../../components/Elements/AboutCompany/AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";
import { earphonesList } from '../../data/ProductData';

const EarphonesPage = () => {
  return (
    <>
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
    </>
  )
};

export default EarphonesPage;