import { useNavigate } from "react-router-dom";
import { scrollPageToTop } from "../../utilities/pageScrolling";

interface RelatedProductType {
  relatedProductImage: string;
  relatedProductName: string;
  relatedProductLink: string;
}

const RelatedProduct: React.FC<RelatedProductType> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="related-product-container">
      <img src={props.relatedProductImage} alt="related-product-image"></img>
      <h3 className="related-product-name">{props.relatedProductName}</h3>
      <button
        className="see-related-product-btn"
        onClick={() => {
          navigate(props.relatedProductLink);
          scrollPageToTop();
        }}
      >
        SEE PRODUCT
      </button>
    </div>
  );
};

export default RelatedProduct;
