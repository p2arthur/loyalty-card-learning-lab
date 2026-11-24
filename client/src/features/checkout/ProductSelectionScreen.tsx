import { useState } from "react";
import { products } from "../../data/products";
import ProductsList from "./ProductList";
import ScreenSection from "./ScreenSection";
import SearchInput from "./SearchInput";

type ProductTab = "regular" | "rewards" | undefined;

export default function ProductSelectionScreen() {
  const [productTab, setProductTab] = useState<ProductTab>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const setTab = (tab: ProductTab) => setProductTab(tab);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchTerm(text);
  };
  return (
    <>
      <section>
        <h1>Products page</h1>
        <SearchInput onChange={onChange} searchTerm={searchTerm} />
      </section>
      <div>
        <button onClick={() => setTab(undefined)}>Instructions</button>
        <button onClick={() => setTab("regular")}>Regular</button>
        <div>
          <button onClick={() => setTab("rewards")}>Rewards</button>
        </div>
      </div>
      {productTab === undefined ? (
        <p>Instructions</p>
      ) : (
        <ScreenSection title={productTab}>
          <ProductsList productList={products} />
        </ScreenSection>
      )}
    </>
  );
}
