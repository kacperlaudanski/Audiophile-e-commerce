import React from "react";
import HeaderSection from "../Header/HeaderSection";
import MainSection from "../../Home/MainSection";
import Navbar from "../Navbar/Navbar";
import ProductDetails from "./ProductCard";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../Footer/Footer";
import BoxContentItem from "./BoxContentItem";
import ImageGallery from "./ImageGallery";
import RelatedProductsPanel from "./RelatedProductsPanel";
import RelatedProduct from "./RelatedProduct";
import { headphonesList } from "./ProductLists";
import { speakersList } from "./ProductLists";
import { earphonesList } from "./ProductLists";
import { NavLink, useParams } from "react-router-dom";

import Image from "../../../images/product-xx59-headphones/desktop/image-product.jpg";

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
        <div className="go-back-container">
          <NavLink to={`/${category}`} className="go-back-btn">
            Go Back
          </NavLink>
        </div>
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
        <ImageGallery />
        <RelatedProductsPanel>
          <RelatedProduct
            relatedProductImage={Image}
            relatedProductName="XX59"
            relatedProductLink={`/${category}/xx59`}
          />
          <RelatedProduct
            relatedProductImage={Image}
            relatedProductName="XX59"
            relatedProductLink={`/${category}/xx59`}
          />
          <RelatedProduct
            relatedProductImage={Image}
            relatedProductName="XX59"
            relatedProductLink={`/${category}/xx59`}
          />
        </RelatedProductsPanel>
        <CategorySelectionPanel />
        <AboutCompany />
      </MainSection>
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;
