// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        //nested pages
        about: resolve(__dirname, "pages/about.html"),

        //nested component
        nested: resolve(__dirname, "nested/index.html"),
        cameraShare: resolve(__dirname, "/components/camera-share/index.html"),
        screenShare: resolve(__dirname, "/components/screen-share/index.html"),
      },
    },
  },
});
