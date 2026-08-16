import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>Product Admin</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}