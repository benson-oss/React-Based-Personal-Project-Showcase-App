import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
//import Landing from "./pages/Landing.jsx";
//import AddProduct from "./pages/AddProduct.jsx";
//import ProductDetail from "./pages/ProductDetail.jsx";
//import Search from "./pages/Search.jsx";

// Components
//import Navbar from "./components/Navbar.jsx";
//import Footer from "./components/Footer.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ProductsList from "./components/ProductsList.jsx";
//import ProductsForm from "./components/ProductsForm.jsx";
//import SearchBar from "./components/SearchBar.jsx";
//import EditProductForm from "./components/EditProductsForm.jsx";
//import Loader from "./components/Loader.jsx";
//import ErrorMessage from "./components/ErrorMessage.jsx";

// API functions
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "./API/Products.js";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>My Product Showcase</h1>
        <Routes>
          <Route path="/" element={<ProductsList getProducts={getProducts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
