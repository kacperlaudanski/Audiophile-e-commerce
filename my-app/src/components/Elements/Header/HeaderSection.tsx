import { ReactNode } from "react";
import "../../../dist-styles/header.css";

const HeaderSection: React.FC<{ children: ReactNode }> = (props) => {
  return <header className="header-section-container">{props.children}</header>;
};

export default HeaderSection;
