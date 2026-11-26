import express, { type Response, type Request } from "express";
import type { ApiResponse, LoginData, LoginResponse } from "@badge/contracts";
import { loginSuccess, missingCredentials } from "./login.responses.ts";
import { logRequest } from "../../middleware/request-logger.ts";

export const loginRouter = express.Router();

loginRouter.use(logRequest);

loginRouter.post("/", (req, res: Response<LoginResponse>) => {
  const email: unknown = req.body?.email;
  const password: unknown = req.body?.password;

  if (
    typeof email !== "string" ||
    email.trim() === "" ||
    typeof password !== "string" ||
    password.trim() === ""
  ) {
    res.status(missingCredentials.status).json(missingCredentials.body);
    return;
  }

  const payload: LoginResponse = { message: "Thanks for login" };
  res.status(loginSuccess.status).json(loginSuccess.body);
});
