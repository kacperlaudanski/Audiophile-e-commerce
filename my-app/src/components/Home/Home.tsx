import React from "react";
import "../../dist-styles/home.css";
import HeaderSection from "./HeaderSection";
import Navbar from "../Elements/Navbar/Navbar";

const Home: React.FC = (props) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
      </HeaderSection>
      <main></main>
    </React.Fragment>
  );
};

export default Home;
