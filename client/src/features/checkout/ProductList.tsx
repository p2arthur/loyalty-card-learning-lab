import { useState } from "react";
import useCounter from "../../counter";
import type { ProductList } from "./interfaces";
import ProductCard from "./ProductCard";

type ProductListProps = { productList: ProductList };

export default function ProductsList({ productList }: ProductListProps) {
  const { count, addCount } = useCounter();
  const [modalTarget, setModalTarget] = useState<HTMLDivElement | null>(null);

  return (
    <>
      <section>filters</section>
      <section>
        {count}
        <button onClick={addCount}>list counter</button>
        <ul>
          {productList.map((product, i) => (
            <ProductCard
              key={i}
              cardTitle={product.productTitle}
              cardDescription={product.productDescription}
              modalTarget={modalTarget}
            />
          ))}
        </ul>
        <div id="rewards-help-target" ref={setModalTarget} />
      </section>
    </>
  );
}
