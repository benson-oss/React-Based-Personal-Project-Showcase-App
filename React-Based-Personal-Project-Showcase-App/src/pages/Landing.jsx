import ProductsList from "../components/ProductsList";
import { getProducts } from "../API/Products";

export default function Landing() {
  return <ProductsList getProducts={getProducts} />;
}
