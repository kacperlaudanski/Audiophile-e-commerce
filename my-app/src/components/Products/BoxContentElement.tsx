interface BoxContentType {
  pieces: number; 
  boxItem: string; 
}

const BoxContentItem: React.FC<BoxContentType> = (props) => {
  return (
    <li>
      <span className="product-box-pieces">{props.pieces}x</span>
      <span className="product-box-item">{props.boxItem}</span>
    </li>
  );
};

export default BoxContentItem; 