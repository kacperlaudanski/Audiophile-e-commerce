import HeaderSection from "../../components/Elements/Header/HeaderSection";
import DesktopNavbar from "../../components/Elements/Navbar/DesktopNavbar";
import HeaderProduct from "../../components/Elements/Header/HeaderProduct";
import MainSection from "../../components/Elements/MainSection/MainSection";
import CategoryPanel from "../../components/Elements/CategoriesElements/CategoryPanel";
import ProductsBanner from "../../components/Elements/Home/ProductBanners";
import AboutCompany from "../../components/Elements/AboutCompany/AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";
import MobileNavbar from "../../components/Elements/Navbar/MobileNavbar";
import { useResponsiveNavbar } from "../../hooks/useResponsiveNavbar";

const Home = () => {

  const {onDesktop} = useResponsiveNavbar()

  return (
    <>
      <HeaderSection>
        {onDesktop ? <DesktopNavbar /> : <MobileNavbar />}
        <HeaderProduct />
      </HeaderSection>
      <MainSection>
        <CategoryPanel />
        <ProductsBanner />
        <AboutCompany />
      </MainSection>
      <Footer />
    </>
  );
};

export default Home;
