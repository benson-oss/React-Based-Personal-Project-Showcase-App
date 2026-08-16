import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/add" element={<Add />} />
    <Route path="/search" element={<Search />} />
    <Route path="/product/:id" element={<ProductDetail />} />
  </Routes>
</Router>
  );
}

export default App;