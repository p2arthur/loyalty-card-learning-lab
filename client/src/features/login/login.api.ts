import type { ApiResponse, LoginData, LoginResponse } from "@badge/contracts";

export async function submitLogin(
  credentials: LoginData,
): Promise<ApiResponse<LoginResponse>> {
  const email = credentials.email;
  const password = credentials.password;

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`Login failed (HTTP ${response.status})`);
  }

  const responseData: LoginResponse = await response.json();

  console.log(`Server response: ${responseData.message}`);

  return { status: response.status, body: responseData };
}
