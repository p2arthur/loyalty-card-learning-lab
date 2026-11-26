import type { ApiResponse, LoginResponse } from "@badge/contracts";

type LoginReply = ApiResponse<LoginResponse>;

export const missingCredentials: LoginReply = {
  status: 400,
  body: { message: "Email and password required" },
};

export const loginSuccess: LoginReply = {
  status: 200,
  body: { message: "Login success" },
};
