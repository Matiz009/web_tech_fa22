import Products from './components/Products';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increaseLikes = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      {" "}
      {data.map((record) => {
        return (
          <div className="col md-4">
            <Products
              title={record.title}
              price={record.price}
              type={record.type}
              img={record.img}
            />{" "}
          </div>
        );
      })}{" "}
      <button onClick={increaseLikes} className="btn btn-dark">
        Give us 👍
      </button>
      <br />
      Total Likes:<h1>{count}</h1>
    </div>
  );
}

export default App;