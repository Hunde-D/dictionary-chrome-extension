import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        background: fileURLToPath(
          new URL("./src/background.js", import.meta.url)
        ),
        content: fileURLToPath(new URL("./src/content.js", import.meta.url)),
        popup: fileURLToPath(new URL("./src/app.jsx", import.meta.url)),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
