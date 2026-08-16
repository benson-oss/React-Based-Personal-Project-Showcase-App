import { useNavigate } from "react-router-dom";
import ProductsForm from "../components/ProductsForm";
import { createProduct } from "../API/Products";

export default function Add() {
  const navigate = useNavigate();

  async function handleAdd(product) {
    await createProduct(product);
    navigate("/");
  }

  return <ProductsForm onSubmit={handleAdd} />;
}