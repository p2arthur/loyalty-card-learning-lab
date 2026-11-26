export interface ApiResponse<T> {
  status: number;
  body: T;
}

export interface ProductSummary {
  id: number;
  productName: string;
  productQuantity: number;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
}

export type ProductResponse = ProductSummary[];
