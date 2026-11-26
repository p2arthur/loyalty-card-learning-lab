import useCounter from "../../counter";
import type { ProductSummary } from "@badge/contracts";
import { fetchProduct } from "./products.api";

export default function ProductCard({
  productName,
  productQuantity,
  id,
}: ProductSummary) {
  const { count } = useCounter();

  function onClick() {
    fetchProduct(id);
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <div>
          <h1>{productName}</h1>
        </div>
        <div>
          <h3>{productQuantity}</h3>
          <button onClick={onClick}>View id</button>
        </div>
      </div>
    </>
  );
}
