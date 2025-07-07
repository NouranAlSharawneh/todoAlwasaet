import { defineConfig } from "jest";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
});
