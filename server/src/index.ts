import express from "express";
import cors from "cors";
import { productsRouter } from "./modules/products/products.routes.ts";
import { loginRouter } from "./modules/login/login.routes.ts";

const serverPort = Number(process.env.SERVER_PORT);

if (!Number.isInteger(serverPort)) {
  throw new Error(`Server Port ${serverPort} is not valid`);
}

const app = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173", "http://127.0.0.1/5173"] }));
app.use("/products", productsRouter);
app.use("/login", loginRouter);

app.listen(serverPort, () => console.log(`Listening on port ${serverPort}`));
