import { ReactNode, useEffect, useState } from "react";
import { useShoppingCart } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import {
  earphonesList,
  headphonesList,
  speakersList,
} from "../../data/ProductData";
import ConfirmationModal from "../Elements/ConfirmationModal/ConfirmationModal";
import "../../dist-styles/products.css";

interface CurrentProduct {
  id: number;
}

interface ProductCardType {
  productImage: string | undefined;
  productImageMobile: string | undefined;
  productName: string | undefined;
  productDescription: string | undefined;
  productPrice: number | undefined;
  productFeaturesI: string | undefined;
  productFeaturesII: string | undefined;
  productBoxContent: ReactNode | undefined;
}

const ProductCard: React.FC<ProductCardType> = (props) => {
  const [currentProduct, setCurrentProduct] = useState<CurrentProduct[]>([]);
  const allProducts = [...headphonesList, ...earphonesList, ...speakersList];

  const { product } = useParams();
  function takeCurrentProduct() {
    setCurrentProduct(allProducts.filter((item) => item.product === product));
  }
  useEffect(() => {
    takeCurrentProduct();
  }, [product]);

  const [isModalOpen, setModalState] = useState(false);

  function closeModal() {
    setModalState(false);
  }

  const { increaseItemAmount } = useShoppingCart();

  function addToCart() {
    setModalState(true);
    increaseItemAmount(currentProduct[0].id);
  }

  return (
    <div className="product-card-container">
      <div className="product-presentation">
        <img
          src={props.productImage}
          sizes="(max-width:767px) 654px, 1080px"
          srcSet={`${props.productImage} 1100w, ${props.productImageMobile}, 700w`}
          alt="product-image"
        ></img>
        <div className="product-description">
          <h1>{props.productName}</h1>
          <p>{props.productDescription}</p>
          <small className="product-price">$ {props.productPrice}</small>
          <div className="add-to-cart-section">
            <button className="add-to-cart-btn" onClick={addToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ConfirmationModal openModal={isModalOpen} closeModal={closeModal} />
      )}
      <div className="product-spec">
        <div className="product-features">
          <h3>FEATURES</h3>
          <p>{props.productFeaturesI}</p>
          <br></br>
          <p>{props.productFeaturesII}</p>
        </div>
        <div className="product-in-the-box">
          <h3>IN THE BOX</h3>
          <ul>{props.productBoxContent}</ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
