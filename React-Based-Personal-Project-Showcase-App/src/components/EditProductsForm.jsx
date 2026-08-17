import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, updateProduct } from "../API/Products.js";

function EditProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    origin: "",
    price: "",
    image: "",
    date: ""
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product", err);
      }
    }
    fetchProduct();
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateProduct(id, product);
    navigate(`/products/${id}`); // go back to product details after editing
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input
        type="text"
        name="title"
        value={product.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="text"
        name="origin"
        value={product.origin}
        onChange={handleChange}
        placeholder="Origin"
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        type="date"
        name="date"
        value={product.date}
        onChange={handleChange}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditProductForm;