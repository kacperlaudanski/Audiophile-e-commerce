import "../../../dist-styles/categories.css";
import HeaderSection from "../../Elements/Header/HeaderSection";
import Navbar from "../../Elements/Navbar/Navbar";
import CategoryBanner from "../../Elements/CategoriesElements/CategoryBanner";
import MainSection from "../../Home/MainSection";
import ProductPreview from "../../Elements/Products/ProductPreview";
import XXMarkTwoImage from "../../../images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XXMarkOneImage from "../../../images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59Image from "../../../images/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import CategorySelectionPanel from "../../Home/CategorySelectionPanel";
import AboutCompany from "../../Home/AboutCompany";
import Footer from "../../Elements/Footer/Footer";
import React from "react";
import { useParams } from "react-router-dom";

const HeadphonesPage: React.FC = (props) => {
  return (
    <React.Fragment>
      <HeaderSection>
        <Navbar />
        <CategoryBanner>Headphones</CategoryBanner>
      </HeaderSection>
      <MainSection>
        <ProductPreview
          productImage={XXMarkTwoImage}
          productName="XX99 MARK II HEADPHONES"
          productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          productPageLink='./xx99markII'
          reverseClass={null}
        />
        <ProductPreview
          productImage={XXMarkOneImage}
          productName="XX99 MARK I HEADPHONES"
          productDescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          productPageLink="./xx99markI"
          reverseClass='reverse'
        />
        <ProductPreview
          productImage={XX59Image}
          productName="XX59 HEADPHONES"
          productDescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          productPageLink="./xx59"
          reverseClass={null}
        />
        <CategorySelectionPanel />
        <AboutCompany />
      </MainSection>
      <Footer />
    </React.Fragment>
  );
};

export default HeadphonesPage;
