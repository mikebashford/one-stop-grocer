import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      assetFileNames: (file) => {
        return "assets/css/index.min.css";
      },
      entryFileNames: (file) => {
        return "assets/js/[name].min.js";
      },
    },
  },
});
