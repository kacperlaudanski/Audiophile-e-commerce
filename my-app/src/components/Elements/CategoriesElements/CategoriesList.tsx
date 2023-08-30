import React from "react";
import { NavLink } from "react-router-dom";
import "../../../dist-styles/navbar.css";

const CategoriesList: React.FC<{listClass: string, linkClass: string}>= (props) => {
  return (
    <ul className={props.listClass}>
      <li>
        <NavLink to={"/"} className={props.linkClass}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to={"/headphones"} className={props.linkClass}>
          HEADPHONES
        </NavLink>
      </li>
      <li>
        <NavLink to={"/speakers"} className={props.linkClass}>
          SPEAKERS
        </NavLink>
      </li>
      <li>
        <NavLink to={"/earphones"} className={props.linkClass}>
          EARPHONES
        </NavLink>
      </li>
    </ul>
  );
};

export default CategoriesList;
