import React from "react";
import "./Products.css";
const Products = (props) => {
  var title = props.title;
  var price = props.price;
  return (
    <div>
      <h2 className="title_styling">Product: {title}</h2>
      <h6 className="price_styling">Price: {price}</h6>
    </div>
  );
};

export default Products;
