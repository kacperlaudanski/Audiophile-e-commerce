import "../../../dist-styles/navbar.css";
import CategoryListElement from "./CategoriesListElement";
import { categoriesList } from "../../../data/CategoriesList";

interface ListClass {
  listClass: string; 
}; 

const CategoriesNavList: React.FC<ListClass> = ({listClass}) => {
  return (
    <ul className={listClass}>
      {categoriesList.map((categoryListItem, index) => {
         return (
          <CategoryListElement 
            key={index}
            name = {categoryListItem.name}
            link = {categoryListItem.link}
          />
         )
      })}
    </ul>
  );
};

export default CategoriesNavList;
