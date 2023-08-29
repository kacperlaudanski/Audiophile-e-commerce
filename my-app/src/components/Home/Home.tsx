import React from "react";
import "../../dist-styles/home.css";
import HeaderSection from "./HeaderSection";
import Navbar from "../Elements/Navbar/Navbar";
import HeaderProduct from "./HeaderProduct";
import MainSection from "./MainSection";
import HomeCategories from "./HomeCategories";
import ProductsBanner from "./ProductBanners";
import AboutCompany from "./AboutCompany";
import Footer from "../Elements/Footer/Footer";

const Home: React.FC = (props) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <HeaderProduct />
      </HeaderSection>
      <MainSection>
        <HomeCategories />
        <ProductsBanner />
        <AboutCompany />
      </MainSection>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
