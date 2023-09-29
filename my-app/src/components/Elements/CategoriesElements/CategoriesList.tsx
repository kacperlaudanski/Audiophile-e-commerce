import React from "react";
import "../../../dist-styles/navbar.css";
import CategoriesListElement from "./CategoriesListElement";
import { categoriesList } from "../../../data/CategoriesList";

const CategoriesList: React.FC<{listClass: string}>= (props) => {
  return (
    <ul className={props.listClass}>
      {categoriesList.map((categoryListItem, index) => {
         return (
          <CategoriesListElement 
            key={index}
            name = {categoryListItem.name}
            link = {categoryListItem.link}
          />
         )
      })}
    </ul>
  );
};

export default CategoriesList;
