import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Header";
import FormGroupExample from "./form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <FormGroupExample> </FormGroupExample>{" "}
  </React.StrictMode>
);