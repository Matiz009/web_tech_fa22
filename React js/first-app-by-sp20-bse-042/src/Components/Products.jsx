import React, { useState } from "react";
import "./Products.css";

const Products = (props) => {
  var title = props.title;
  var price = props.price;
  var info = props.type;
  var priceClass = parseInt(price) <= 10 ? "red" : "green";
  const [count, setCount] = useState(0);
  const addToCard = () => {
    alert(title + " added to cart");
    setCount(count + 1);
  };

  return (
    <div className="product">
      <h1>Name:{title}</h1>
      <p className={priceClass}>
        <b>Product Price:{price}</b>
      </p>
      <img src={props.img} alt="pic" className="img" />
      <h5>Type:{info}</h5>
      <button className="btn btn-success" id="btn" onClick={addToCard}>
        {" "}
        Add to Cart
      </button>
      <br />
      <h4>Total Items Added:</h4>
      <h5>{count}</h5> <hr />
    </div>
  );
};

export default Products;
