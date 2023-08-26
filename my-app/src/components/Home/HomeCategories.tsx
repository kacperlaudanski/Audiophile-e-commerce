import React from "react";
import HeadphonesCategoryIMG from "../../images/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersCategoryIMG from "../../images/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesCategoryIMG from "../../images/shared/desktop/image-category-thumbnail-earphones.png";
import Category from "./Category";

const HomeCategories: React.FC = () => {
  const categories = [
    {
      name: "HEADPHONES",
      image: HeadphonesCategoryIMG,
      link: "/headphones",
    },
    {
      name: "SPEAKERS",
      image: SpeakersCategoryIMG,
      link: "/speakers",
    },
    {
      name: "EARPHONES",
      image: EarphonesCategoryIMG,
      link: "/earphones",
    },
  ];

  return (
   <div className="home-categories-container">
     {categories.map(category => {
        return (
            <Category 
               categoryImage={category.image}
               categoryLink = {category.link}
               categoryName = {category.name}
            />
        )
     })}
   </div>
  );
};

export default HomeCategories;
