import { defineConfig } from "vite";

export default defineConfig({
  base: "/example/",
  define: {
    __VERSION__: JSON.stringify("1.0.0"),
  },
});
