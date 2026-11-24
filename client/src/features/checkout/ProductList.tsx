import type { ProductList } from "./interfaces";
import ProductCard from "./ProductCard";

type ProductListProps = { productList: ProductList };

export default function ProductsList({ productList }: ProductListProps) {
  return (
    <>
      <section>filters</section>
      <section>
        <ul>
          {productList.map((product, i) => (
            <ProductCard
              key={i}
              cardTitle={product.productTitle}
              cardDescription={product.productDescription}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
