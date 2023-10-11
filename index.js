module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "import/newline-after-import": "error",
    "import/no-named-as-default": "off",
    "import/no-relative-packages": "error",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: ["builtin", "external", "internal", "sibling", "index"],
        "newlines-between": "never",
      },
    ],
    "no-console": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", next: "return", prev: "*" },
    ],
    "prettier/prettier": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-sort-props": ["error", { shorthandLast: true }],
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
