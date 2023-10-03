import HeadphonesCategoryIMG from "../images/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersCategoryIMG from "../images/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesCategoryIMG from "../images/shared/desktop/image-category-thumbnail-earphones.png";
import { v4 as uuidv4 } from "uuid";

export const panelCategoriesData = [
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