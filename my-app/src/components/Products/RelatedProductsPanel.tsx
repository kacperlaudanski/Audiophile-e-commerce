import { ReactNode } from "react";
import "../../dist-styles/products.css";

const relatedProductsPanel: React.FC<{ children: ReactNode }> = (props) => {
  return <div className="related-panel-container">{props.children}</div>;
};

export default relatedProductsPanel;
