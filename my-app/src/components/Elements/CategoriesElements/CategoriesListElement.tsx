import { NavLink } from "react-router-dom";
import { scrollPageToTop } from "../../../utilities/pageScrolling";
import '../../../dist-styles/categories.css'; 

interface CategoryLink {
    name: string;
    link: string; 
}

const CategoryListElement: React.FC<CategoryLink> = (props) => {
  return (
    <>
      <li>
        <NavLink
          to={props.link}
          className='category-list-element'
          onClick={() => scrollPageToTop()}
        >
          {props.name}
        </NavLink>
      </li>
    </>
  );
};

export default CategoryListElement;
