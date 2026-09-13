import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import stylistic from "./stylistic";

export default defineConfig([
  {
    extends: [js.configs.recommended, stylistic],
  },
]);
