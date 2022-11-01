import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Products from "./Components/Products";

function App() {
  return (
    <div className="container">
      <h1> MATI UL REHMAN </h1> <Alert variant="success"> Pakistan won </Alert>
      <Products title="Banana" price="10 Rs" />
      <Products title="Apple" price="20 Rs" />
    </div>
  );
}

export default App;