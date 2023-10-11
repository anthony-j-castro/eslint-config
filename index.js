module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
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
  root: true,
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "import/newline-after-import": "error",
    "import/no-named-as-default": "off",
    "import/no-relative-packages": "error",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: ["builtin", "external", "internal", "sibling", "index"],
        "newlines-between": "never",
      },
    ],
    "no-console": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["../*"],
            message: "Usage of relative parent imports is not allowed.",
          },
        ],
      },
    ],
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
    react: {
      version: "detect",
    },
  },
};
