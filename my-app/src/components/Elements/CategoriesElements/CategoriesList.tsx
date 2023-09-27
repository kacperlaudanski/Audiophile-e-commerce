import React from "react";
import "../../../dist-styles/navbar.css";
import CategoriesListElement from "./CategoriesListElement";

const categoriesList = [
  {
    name:'HOME', 
    link: '/'
  }, 
  {
    name: 'HEADPHONES',
    link: '/headphones'
  },
  {
    name: 'SPEAKERS', 
    link: '/speakers'
  },
  {
    name: 'EARPHONES', 
    link: '/earphones'
  }
]

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
