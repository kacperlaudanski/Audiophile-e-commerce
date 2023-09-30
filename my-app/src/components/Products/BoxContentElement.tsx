const BoxContentItem: React.FC<{ pieces: number; boxItem: string }> = (props) => {
  return (
    <li>
      <span className="product-box-pieces">{props.pieces}x</span>
      <span className="product-box-item">{props.boxItem}</span>
    </li>
  );
};

export default BoxContentItem; 