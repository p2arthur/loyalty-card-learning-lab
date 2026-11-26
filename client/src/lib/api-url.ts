const apiOrigin = import.meta.env.VITE_API_ORIGIN;

if (!apiOrigin) {
  throw new Error("VITE_API_ORIGIN is required");
}
export function apiUrl(path: string): URL {
  return new URL(path, apiOrigin);
}
