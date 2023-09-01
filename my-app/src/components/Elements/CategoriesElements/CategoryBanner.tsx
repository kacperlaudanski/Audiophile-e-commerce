import React, { ReactNode } from "react";
import '../../../dist-styles/categories.css'; 

const CategoryBanner: React.FC<{children: string}> = (props) => {
    return (
        <div className="category-banner">
          <h1>{props.children}</h1>
        </div>
    )
}

export default CategoryBanner; 