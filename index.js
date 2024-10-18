import path from "node:path";
import { fileURLToPath } from "node:url";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  ...fixupConfigRules(compat.extends("plugin:react-hooks/recommended")),
  perfectionist.configs["recommended-natural"],
  stylistic.configs["disable-legacy"],
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser,
      sourceType: "module",
    },
    plugins: {
      "@stylistic": stylistic,
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
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "array-simple",
        },
      ],
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "with-single-extends",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          caughtErrors: "none",
        },
      ],
      "arrow-body-style": ["error", "as-needed"],
      curly: ["error", "all"],
      "import/newline-after-import": "error",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-relative-packages": "error",
      "import/no-unresolved": "error",
      "no-console": "error",
      "no-restricted-imports": [
        "warn",
        {
          patterns: [
            {
              group: ["../*"],
              message: "Prefer aliased imports over relative parent imports.",
            },
          ],
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: {
            value: {
              fontsource: ["@fontsource-variable/*"],
            },
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "sibling",
            "unknown",
            "index",
            "fontsource",
            "style",
          ],
          newlinesBetween: "never",
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          groupKind: "required-first",
        },
      ],
      "perfectionist/sort-intersection-types": [
        "error",
        {
          groups: ["unknown", "object"],
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          groups: ["unknown", "shorthand"],
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          groupKind: "values-first",
        },
      ],
      "perfectionist/sort-object-types": [
        "error",
        {
          groupKind: "required-first",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          destructureOnly: true,
        },
      ],
      "perfectionist/sort-union-types": [
        "error",
        {
          groups: ["unknown", "nullish"],
        },
      ],
      "prettier/prettier": "error",
      radix: ["error", "always"],
      "react/jsx-no-useless-fragment": "error",
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: true,
      },
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);
