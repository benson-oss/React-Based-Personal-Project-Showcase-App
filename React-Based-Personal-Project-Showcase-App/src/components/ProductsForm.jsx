import { useState } from "react";

export default function ProductsForm({ onSubmit }) {
  const [formData, setFormData] = useState({ title: "", description: "", image: "", category: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", description: "", image: "", category: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <button type="submit">Save</button>
    </form>
  );
}