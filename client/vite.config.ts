import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_API_ORIGIN } = loadEnv(mode, process.cwd());

  if (!VITE_API_ORIGIN?.trim()) {
    throw new Error("VITE_API_ORIGIN is required - set it in .env");
  }

  return { plugins: [react()] };
});
