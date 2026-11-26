import express, { type Response } from "express";
import type { ProductResponse, ProductSummary } from "@badge/contracts";
import products from "../../../mock-data/products.json" with { type: "json" };

export const productsRouter = express.Router();

const catalog: ProductSummary[] = products;

productsRouter.get("/", (req, res: Response<ProductResponse>) => {
  const { id } = req.query;

  if (id === undefined) {
    res.json(catalog);
    return;
  }

  const productId: number = Number(id);

  const products = catalog.filter((product) => product.id == productId);

  res.json(products);
});
