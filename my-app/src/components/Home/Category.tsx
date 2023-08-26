import React from "react";
import { NavLink } from "react-router-dom";

const Category: React.FC<{categoryImage:string, categoryName:string, categoryLink:string}> = (props) => {
    return (
        <div className="category-container">
          <img src={props.categoryImage} className='category-image' alt='category-image'></img>
          <h4 className="category-name">{props.categoryName}</h4>
          <NavLink to={props.categoryLink} className='category-link'></NavLink>
        </div>
    )
}

export default Category;