import React from "react";
import "./Products.css"
const Products = (props) => {
    var title=props.title;
    var price=props.price;
    var info=props.type;
    return (
    <div className="product">
    <h1>Name:{title}</h1>
    <p><b>Product Price:{price}</b></p>
    <h5>Type:{info}</h5>  
    <img src={props.img} alt="pic" className="img"/> <hr/>
    </div>
    );
}                                                                                                  
 
export default Products;