import { useState, useEffect } from "react";
import { getProducts } from "../API/Products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />

      <div className="products-list">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}