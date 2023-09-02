import React from "react";
import HeaderSection from "../Header/HeaderSection";
import MainSection from "../../Home/MainSection";
import Navbar from "../Navbar/Navbar";
import ProductDetails from "./ProductCard";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../Footer/Footer";
import Image from '../../../images/product-xx59-headphones/desktop/image-product.jpg'; 
import { useParams } from "react-router-dom";

const ProductPage: React.FC = (props) => {
  const { category, product } = useParams();
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
      </HeaderSection>
      <MainSection>
        <ProductDetails
          productImage={Image}
          productName="XX59 HEADPHONES"
          productDescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          productFeaturesI="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
          productFeaturesII = "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
          productBoxContent=""
        />
      </MainSection>
    </React.Fragment>
  );
};

export default ProductPage;
