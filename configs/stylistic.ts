import js from "@eslint/js";
import stylisticPlugin from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    extends: [js.configs.recommended],
    plugins: {
      "@stylistic": stylisticPlugin,
    },
    rules: {
      "@stylistic/jsx-self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "@stylistic/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          next: "*",
          prev: ["case", "default"],
        },
        {
          blankLine: "always",
          next: "break",
          prev: "*",
        },
        {
          blankLine: "always",
          next: "return",
          prev: "*",
        },
      ],
      "@stylistic/quotes": [
        "error",
        "double",
        {
          allowTemplateLiterals: false,
          avoidEscape: true,
        },
      ],
    },
  },
]);
