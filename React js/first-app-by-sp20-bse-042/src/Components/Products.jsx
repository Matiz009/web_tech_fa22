import React from "react";
const Products = (props) => {
  var title = props.title;
  var price = props.price;
  return (
    <div>
      <h2>Product: {title}</h2>
      <h6>Price: {price}</h6>
    </div>
  );
};

export default Products;
