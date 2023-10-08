import "../../dist-styles/categories.css";
import HeaderSection from "../../components/Elements/Header/HeaderSection";
import Navbar from "../../components/Elements/Navbar/DesktopNavbar";
import MobileNavbar from "../../components/Elements/Navbar/MobileNavbar";
import CategoryBanner from "../../components/Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../components/Elements/MainSection/MainSection";
import ProductPreview from "../../components/Products/ProductPreview";
import CategoryPanel from "../../components/Elements/CategoriesElements/CategoryPanel";
import AboutCompany from "../../components/Elements/AboutCompany/AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";
import { headphonesList } from "../../data/ProductData";
import { useResponsiveNavbar } from "../../hooks/useResponsiveNavbar";

const HeadphonesPage = () => {

  const {onDesktop} = useResponsiveNavbar()
  return (
    <>
      <HeaderSection>
        {onDesktop ? <Navbar /> : <MobileNavbar />}
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
              layout={headphones.productPreviewReverse}
            />
          );
        })}
        <CategoryPanel />
        <AboutCompany />
      </MainSection>
      <Footer />
    </>
  );
};

export default HeadphonesPage;
