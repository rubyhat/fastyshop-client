import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        icon: true,
      },
    }),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@mui")) return "vendor-mui";
            if (id.includes("date-fns")) return "vendor-date";
            if (id.includes("axios")) return "vendor-axios";
            if (id.includes("zod")) return "vendor-zod";
            if (id.includes("react-hook-form") || id.includes("@hookform"))
              return "vendor-hookform";
            if (id.includes("zustand")) return "vendor-zustand";
            if (id.includes("js-cookie")) return "vendor-cookie";
            if (id.includes("jwt-decode")) return "vendor-jwt";
            if (id.includes("react-icons")) return "vendor-icons";
            if (id.includes("@tanstack/react-query"))
              return "vendor-react-query";
            if (id.includes("react")) return "vendor-react";
          }
        },
      },
    },
  },
});
