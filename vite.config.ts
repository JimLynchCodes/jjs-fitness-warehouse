import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Must come before react(): regenerates src/routeTree.gen.ts from src/routes.
    tanstackRouter({ target: "react" }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
