import {
  headphonesList,
  speakersList,
  earphonesList,
} from "../../data/ProductData";
import "../../dist-styles/related-products.css";
import { useParams } from "react-router-dom";
import RelatedProductItem from "../../components/Products/RelatedProduct";
import { v4 as uuidv4 } from "uuid";

interface RelatedProduct {
  mainImage: string;
  shortName: string;
  link: string;
  mainImageMobile: string;
}

const RelatedProductsPanel = () => {
  const { product } = useParams();
  const allProducts = [...headphonesList, ...earphonesList, ...speakersList];

  function randomRelatedProducts() {
    if (allProducts.length < 3) return;
    const selectedRelatedProducts: RelatedProduct[] = [];
    const productsWithoutCurrent = allProducts.filter(
      (item) => item.product !== product
    );
    while (
      selectedRelatedProducts.length < 3 &&
      productsWithoutCurrent.length > 0
    ) {
      let randomIndex = Math.floor(
        Math.random() * productsWithoutCurrent.length
      );
      selectedRelatedProducts.push(
        productsWithoutCurrent.splice(randomIndex, 1)[0]
      );
    }
    return selectedRelatedProducts;
  }

  return (
    <>
      <h2>YOU MAY ALSO LIKE</h2>
      <div className="related-panel-container">
        {randomRelatedProducts()?.map((product) => {
          return (
            <RelatedProductItem
              key={uuidv4()}
              relatedProductImage={product.mainImage}
              relatedProductName={product.shortName}
              relatedProductLink={product.link}
              relatedProductImageMobile={product.mainImageMobile}
            />
          );
        })}
      </div>
    </>
  );
};

export default RelatedProductsPanel;
