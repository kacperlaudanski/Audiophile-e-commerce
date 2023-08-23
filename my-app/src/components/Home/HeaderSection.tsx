import React from "react";
import '../../dist-styles/home.css';


const HeaderSection: React.FC<{children:any}> = (props) => {
   return (
    <header className="header-section-container">
      {props.children}
    </header>
   )
}

export default HeaderSection; 