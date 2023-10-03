import { panelCategoriesData } from "../../../data/CategoriesPanelList";
import Category from "./CategoryPanelElement";
import '../../../dist-styles/categories-panel.css';

const CategoryPanel = () => {
  return (
    <div className="categories-panel-container">
      {panelCategoriesData.map((category) => {
        return (
          <Category
            key={category.uuid}
            categoryImage={category.image}
            categoryLink={category.link}
            categoryName={category.name}
          />
        );
      })}
    </div>
  );
};

export default CategoryPanel;