import HeaderSection from "../../components/Elements/Header/HeaderSection";
import MainSection from "../Home/MainSection";
import Navbar from "../../components/Elements/Navbar/Navbar";
import ProductDetails from "../../components/Products/ProductCard";
import CategorySelectionPanel from "../Home/CategorySelectionPanel";
import AboutCompany from "../Home/AboutCompany";
import Footer from "../../components/Elements/Footer/Footer";
import BoxContentItem from "../../components/Products/BoxContentElement";
import ImageGallery from "../../components/Products/ImageGallery";
import RelatedProductsPanel from "../../components/Products/RelatedProductsPanel";
import RelatedProductItem from "../../components/Products/RelatedProduct";
import { headphonesList } from "../../data/ProductData";
import { speakersList } from "../../data/ProductData";
import { earphonesList } from "../../data/ProductData";
import { useParams } from "react-router-dom";
import GoBackButton from "../../components/Elements/GoBackButton/GoBackButton";
import { v4 as uuidv4 } from "uuid";

interface RelatedProduct {
  mainImage: string;
  shortName: string;
  link: string;
}

const ProductPage: React.FC = (props) => {
  const allProducts = [...headphonesList, ...earphonesList, ...speakersList];
  const { product } = useParams();

  function selectProduct(){
    return allProducts.find((item) => item.product === product); 
  }
  const selectedProduct = selectProduct();

  function randomRelatedProducts() {
    const selectedRelatedProducts: RelatedProduct[] = [];
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
    return selectedRelatedProducts; 
  }

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
        <RelatedProductsPanel>
          {randomRelatedProducts().map((product) => {
            return (
              <RelatedProductItem
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
    </>
  );
};

export default ProductPage;