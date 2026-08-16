import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Origin:</strong> {product.origin}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><small>{product.date}</small></p>

      <div className="actions">
        <button onClick={() => navigate(`/edit/${product.id}`)}>Edit</button>
        <button onClick={() => navigate(`/products/${product.id}`)}>View</button>
      </div>
    </div>
  );
}
