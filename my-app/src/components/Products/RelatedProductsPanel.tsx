import "../../dist-styles/products.css";
import { useParams } from "react-router-dom";
import RelatedProductItem from "../../components/Products/RelatedProduct";
import { v4 as uuidv4 } from "uuid";

interface RelatedProduct {
  mainImage: string;
  shortName: string;
  link: string;
}

const RelatedProductsPanel = () => {
  const { product } = useParams();
  const allProducts = [...headphonesList, ...earphonesList, ...speakersList];

  function randomRelatedProducts() {
    if(allProducts.length < 3) return; 
    const selectedRelatedProducts: RelatedProduct[] = [];
    const productsWithoutCurrent = allProducts.filter(
      (item) => item.product !== product
    );
    while (selectedRelatedProducts.length < 3 && productsWithoutCurrent.length > 0) {
      let randomIndex = Math.floor(
        Math.random() * productsWithoutCurrent.length
      );
      //selectedRelatedProducts.push(productsWithoutCurrent.splice(randomIndex,1))
      if (selectedRelatedProducts.includes(productsWithoutCurrent[randomIndex]))
        continue;
      selectedRelatedProducts.push(productsWithoutCurrent[randomIndex]);
    }
    return selectedRelatedProducts;
  }

  return (
    <div className="related-panel-container">
      {randomRelatedProducts()?.map((product) => {
        return (
          <RelatedProductItem
            key={uuidv4()}
            relatedProductImage={product.mainImage}
            relatedProductName={product.shortName}
            relatedProductLink={product.link}
          />
        );
      })}
    </div>
  );
};

export default RelatedProductsPanel;
