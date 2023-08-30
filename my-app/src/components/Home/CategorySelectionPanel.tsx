import React from "react";
import { v4 as uuidv4 } from "uuid";
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
      uuid: uuidv4(), 
    },
    {
      name: "SPEAKERS",
      image: SpeakersCategoryIMG,
      link: "/speakers",
      uuid: uuidv4(), 
    },
    {
      name: "EARPHONES",
      image: EarphonesCategoryIMG,
      link: "/earphones",
      uuid: uuidv4(),
    },
  ];

  return (
   <div className="home-categories-container">
     {categories.map(category => {
        return (
            <Category 
               key={category.uuid}
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
