import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { getProduct, deleteProduct } from "../API/Products.js";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  async function handleDelete() {
    try {
      await deleteProduct(id);
      navigate("/products");
    } catch (err) {
      setError(err.message || "Failed to delete product");
    }
  }

  return (
    <div className="product-details">
      <button onClick={() => navigate("/products")}>← Back</button>

      {/* Reuse ProductCard for consistent styling */}
      <ProductCard product={product} />

      <div className="actions">
        <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ProductDetails;
