import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/", // Use "/" for local development, "/anuroop-port/" for GitHub Pages
  build: {
    outDir: "dist",
  },
});
