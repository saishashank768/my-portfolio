// vite.config.mjs — ESM format
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // map "@" to the src folder
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    hmr: { overlay: true }
  }
});
