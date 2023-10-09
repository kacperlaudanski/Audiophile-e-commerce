import { useNavigate } from "react-router-dom";
import { scrollPageToTop } from "../../utilities/pageScrolling";

interface RelatedProductType {
  relatedProductImage: string;
  relatedProductName: string;
  relatedProductLink: string;
  relatedProductImageMobile: string; 
}

const RelatedProduct: React.FC<RelatedProductType> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="related-product-container">
      <img
        src={props.relatedProductImage}
        alt="related-product-image"
        srcSet={`${props.relatedProductImage} 800w, ${props.relatedProductImageMobile} 400w`}
        sizes="(max-width:767px) 350px, 650px"
      ></img>
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
