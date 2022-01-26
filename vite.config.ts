import { defineConfig } from "vite";

export default defineConfig({
  base: "/example/",
  define: {
    __VERSION__: JSON.stringify("1.0.0"),
  },
  clearScreen: false,
  envPrefix: "V_",
  json: {
    // stringify: true,
  },
  build: {
    target: "esnext",
    assetsDir: "static",
  },
  server: {
    host: "0.0.0.0",
    port: 8000,
  },
});
