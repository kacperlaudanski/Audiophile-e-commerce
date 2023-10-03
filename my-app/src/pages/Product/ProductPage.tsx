import HeaderSection from "../../components/Elements/Header/HeaderSection";
import MainSection from "../Home/MainSection";
import Navbar from "../../components/Elements/Navbar/Navbar";
import ProductDetails from "../../components/Products/ProductCard";
import CategoryPanel from "../../components/Elements/CategoriesElements/CategoryPanel";
import AboutCompany from "../../components/Elements/AboutCompany/AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";
import BoxContentItem from "../../components/Products/BoxContentElement";
import ImageGallery from "../../components/Products/ImageGallery";
import RelatedProductsPanel from "../../components/Products/RelatedProductsPanel";
import {
  headphonesList,
  speakersList,
  earphonesList,
} from "../../data/ProductData";
import { useParams } from "react-router-dom";
import GoBackButton from "../../components/Elements/GoBackButton/GoBackButton";
import { v4 as uuidv4 } from "uuid";

const ProductPage: React.FC = (props) => {
  const allProducts = [...headphonesList, ...earphonesList, ...speakersList];
  const { product } = useParams();

  function selectProduct() {
    return allProducts.find((item) => item.product === product);
  }
  const selectedProduct = selectProduct();

  return (
    <>
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
        <RelatedProductsPanel />
        <CategoryPanel />
        <AboutCompany />
      </MainSection>
      <Footer />
    </>
  );
};

export default ProductPage;
