import HeaderSection from "../../components/Elements/Header/HeaderSection";
import Navbar from "../../components/Elements/Navbar/Navbar";
import HeaderProduct from "../../components/Elements/Header/HeaderProduct";
import MainSection from "../../components/Elements/MainSection/MainSection";
import CategoryPanel from "../../components/Elements/CategoriesElements/CategoryPanel";
import ProductsBanner from "../../components/Elements/Home/ProductBanners";
import AboutCompany from "../../components/Elements/AboutCompany/AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeaderSection>
        <Navbar />
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
