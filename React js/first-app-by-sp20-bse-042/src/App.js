import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function App() {
  return (
    <div className="container">
      <h1> MATI UL REHMAN </h1>
      <button className="btn btn-primary">Check</button>
      <Button variant="danger">Hello</Button>
      <Alert variant="success">Pakistan won</Alert>
    </div>
  );
}

export default App;