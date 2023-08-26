import React from "react";
import "../../dist-styles/home.css";
import HeaderSection from "./HeaderSection";
import Navbar from "../Elements/Navbar/Navbar";
import HeaderProduct from "./HeaderProduct";
import MainSection from "./MainSection";
import HomeCategories from "./HomeCategories";


const Home: React.FC = (props) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <HeaderProduct />
      </HeaderSection>
      <MainSection>
        <HomeCategories />
      </MainSection>
    </React.Fragment>
  );
};

export default Home;
