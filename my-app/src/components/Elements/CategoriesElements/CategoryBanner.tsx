import React, { ReactNode } from "react";

const CategoryBanner: React.FC<{children: ReactNode}> = (props) => {
    return (
        <div className="category-banner">
          {props.children}
        </div>
    )
}

export default CategoryBanner; 