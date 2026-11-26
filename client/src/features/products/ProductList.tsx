import { useEffect, useState } from "react";
import useCounter from "../../counter";
import ProductCard from "./ProductCard";
import type { ProductSummary } from "@badge/contracts";
import { fetchProducts } from "./products.api";

export default function ProductsList() {
  const { count, addCount } = useCounter();
  const [productsList, setProductsList] = useState<ProductSummary[]>([]);

  useEffect(() => {
    void fetchProducts().then((products) => setProductsList(products));
  }, []);

  return (
    <>
      <section>filters</section>
      <section>
        {count}
        <button onClick={addCount}>list counter</button>
        <ul>
          {productsList.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.productName}
              productQuantity={product.productQuantity}
              id={product.id}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
