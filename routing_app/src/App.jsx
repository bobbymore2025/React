import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { Products } from './components/products';
import { ProductDetail } from './components/productdetail';
import {Home} from "./components/home";

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="*" element={<div>Page not found</div>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;