import { panelCategoriesData } from "../../../data/CategoriesPanelList";
import Category from "./CategoryPanelElement";

const HomeCategories = () => {

  return (
   <div className="home-categories-container">
     {panelCategoriesData.map(category => {
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
