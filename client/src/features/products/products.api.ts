import type { ProductResponse, ProductSummary } from "@badge/contracts";
import { apiUrl } from "../../lib/api-url";

function productsUrl(productId?: ProductSummary["id"]) {
  const url = apiUrl("/products");

  if (productId !== undefined) {
    url.searchParams.set("id", String(productId));
  }

  return url;
}

export async function fetchProducts(): Promise<ProductResponse> {
  const response = await fetch(productsUrl());

  if (!response.ok) {
    throw new Error(`Could not load products (HTTP ${response.status})`);
  }

  const products: ProductSummary[] = await response.json();

  return products;
}

export async function fetchProduct(
  productId: ProductSummary["id"],
): Promise<ProductSummary | null> {
  const response = await fetch(productsUrl(productId));

  if (!response.ok) {
    throw new Error(
      `Could not load product with id ${productId} (HTTP ${response.status})`,
    );
  }

  const products: ProductSummary[] = await response.json();

  console.log(products[0]);

  return products[0] || null;
}
