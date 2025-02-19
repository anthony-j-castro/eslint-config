import stylisticPlugin from "@stylistic/eslint-plugin";
import unicornPlugin from "eslint-plugin-unicorn";
import eslintRules from "./eslint.js";
import importRules from "./import.js";
import perfectionistRules from "./perfectionist.js";
import stylisticRules from "./stylistic.js";
import typescriptEslintRules from "./typescript-eslint.js";
import unicornRules from "./unicorn.js";

export default [
  {
    plugins: {
      "@stylistic": stylisticPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      ...eslintRules,
      ...importRules,
      ...perfectionistRules,
      ...stylisticRules,
      ...unicornRules,
      ...typescriptEslintRules,
      "prettier/prettier": "error",
      "react/jsx-no-useless-fragment": "error",
    },
  },
];
