import React from "react";
import HeaderSection from "../Header/HeaderSection";
import MainSection from "../../Home/MainSection";
import Navbar from "../Navbar/Navbar";
import ProductDetails from "./ProductCard";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../Footer/Footer";
import BoxContentItem from "./BoxContentItem";
import { headphonesList } from "./ProductLists";
import { speakersList } from "./ProductLists";
import { earphonesList } from "./ProductLists";
import { useParams } from "react-router-dom";

const ProductPage: React.FC = (props) => {
  const { category, product } = useParams();

  const selectedProduct = selectProduct(category);

  function selectProduct(category: string | undefined) {
    if (category === "headphones")
      return headphonesList.filter((item) => item.id === product);
    if (category === "speakers")
      return speakersList.filter((item) => item.id === product);
    if (category === "earphones")
      return earphonesList.filter((item) => item.id === product);
  }

  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
      </HeaderSection>
      <MainSection>
        {selectedProduct?.map((product) => {
          return (
            <ProductDetails
              productImage={product.image}
              productName={product.name}
              productDescription={product.description}
              productPrice={product.price}
              productFeaturesI={product.featuresParagraphI}
              productFeaturesII={product.featuresParagraphII}
              productBoxContent={product.boxContent.map((item) => {
                return (
                  <BoxContentItem pieces={item.pieces} boxItem={item.boxItem} />
                );
              })}
            />
          );
        })}
        <CategorySelectionPanel />
        <AboutCompany />
      </MainSection>
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;
