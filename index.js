module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@stylistic/disable-legacy",
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
  plugins: [
    "@stylistic",
    "@typescript-eslint",
    "prettier",
    "sort-destructure-keys",
    "typescript-sort-keys",
  ],
  rules: {
    "@stylistic/jsx-self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "@stylistic/jsx-sort-props": ["error", { shorthandLast: true }],
    "@stylistic/padding-line-between-statements": [
      "error",
      { blankLine: "always", next: "break", prev: "*" },
      { blankLine: "always", next: "return", prev: "*" },
    ],
    "@stylistic/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: false, avoidEscape: true },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "arrow-body-style": ["error", "as-needed"],
    curly: ["error", "all"],
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
    "prettier/prettier": "error",
    "react/jsx-no-useless-fragment": "error",
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      { caseSensitive: true },
    ],
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "typescript-sort-keys/interface": [
      "error",
      "asc",
      { caseSensitive: true, natural: true, requiredFirst: true },
    ],
    "typescript-sort-keys/string-enum": [
      "error",
      "asc",
      { caseSensitive: true, natural: true },
    ],
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
