import { useState } from "react";
import { createProduct } from "./API/Products";

function ProductsForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await createProduct({ title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductsForm;