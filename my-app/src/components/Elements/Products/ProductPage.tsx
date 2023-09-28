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
import { headphonesList } from "./ProductData";
import { speakersList } from "./ProductData";
import { earphonesList } from "./ProductData";
import { useParams } from "react-router-dom";
import GoBackButton from "../GoBackButton/GoBackButton";
import { v4 as uuidv4 } from "uuid";

const ProductPage: React.FC = (props) => {
  const allProducts = [...headphonesList, ...earphonesList, ...speakersList];
  const { product } = useParams();

  const selectedProduct = selectProduct();

  function selectProduct(){
    return allProducts.find((item) => item.product === product); 
  }

  interface RelatedProduct {
    mainImage: string;
    shortName: string;
    link: string;
  }

  const selectedRelatedProducts: RelatedProduct[] = [];

  function randomRelatedProducts() {
    const productsWithoutCurrent = allProducts.filter(
      (item) => item.product !== product
    );
    while (selectedRelatedProducts.length < 3) {
      let randomIndex = Math.floor(
        Math.random() * productsWithoutCurrent.length
      );
      if (selectedRelatedProducts.includes(productsWithoutCurrent[randomIndex]))
        continue;
      selectedRelatedProducts.push(productsWithoutCurrent[randomIndex]);
    }
  }
  randomRelatedProducts();

  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
      </HeaderSection>
      <MainSection>
        <GoBackButton /> 
              <ProductDetails
                productImage={selectedProduct?.mainImage}
                productName={selectedProduct?.name}
                productDescription={selectedProduct?.description}
                productPrice={selectedProduct?.price}
                productFeaturesI={selectedProduct?.featuresParagraphI}
                productFeaturesII={selectedProduct?.featuresParagraphII}
                productBoxContent={selectedProduct?.boxContent.map((item) => {
                  return (
                    <BoxContentItem
                      key={uuidv4()}
                      pieces={item.pieces}
                      boxItem={item.boxItem}
                    />
                  );
                })}
              />
              <ImageGallery
                galleryImage1={selectedProduct?.galleryImage1}
                galleryImage2={selectedProduct?.galleryImage2}
                galleryImage3={selectedProduct?.galleryImage3}
              />
        <RelatedProductsPanel>
          {selectedRelatedProducts.map((product) => {
            return (
              <RelatedProduct
                key={uuidv4()}
                relatedProductImage={product.mainImage}
                relatedProductName={product.shortName}
                relatedProductLink={product.link}
              />
            );
          })}
        </RelatedProductsPanel>
        <CategorySelectionPanel />
        <AboutCompany />
      </MainSection>
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;