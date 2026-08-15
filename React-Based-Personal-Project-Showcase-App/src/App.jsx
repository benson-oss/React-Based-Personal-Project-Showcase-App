import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Landing from "./pages/Landing.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Search from "./pages/Search.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProductsList from "./components/ProductsList.jsx";
import EditProductForm from "./components/EditProductsForm.jsx";

// API functions
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from "./API/Products.js";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProductForm />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;