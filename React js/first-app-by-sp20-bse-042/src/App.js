import Products from './components/Products';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json";



 function App() {
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
     </div>
   );
 }

export default App;