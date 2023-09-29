import React from "react";
import HeaderSection from "../../components/Elements/Header/HeaderSection";
import Navbar from "../../components/Elements/Navbar/Navbar";
import HeaderProduct from "./HeaderProduct";
import MainSection from "./MainSection";
import CategorySelectionPanel from "./CategorySelectionPanel";
import ProductsBanner from "./ProductBanners";
import AboutCompany from "./AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <HeaderProduct />
      </HeaderSection>
      <MainSection>
        <CategorySelectionPanel />
        <ProductsBanner />
        <AboutCompany />
      </MainSection>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
