import { products } from "../../data/products";
import ProductsList from "./ProductList";

export default function ProductSelectionScreen() {
  return (
    <section>
      <h1>Products page</h1>
      <ProductsList productList={products} />
    </section>
  );
}
