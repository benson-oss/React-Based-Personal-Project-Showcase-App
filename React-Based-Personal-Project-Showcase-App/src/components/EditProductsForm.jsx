import { useState } from "react";

export default function EditProductsForm({ product, onSubmit }) {
  const [formData, setFormData] = useState(product);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} />
      <input name="description" value={formData.description} onChange={handleChange} />
      <input name="image" value={formData.image} onChange={handleChange} />
      <input name="category" value={formData.category} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}