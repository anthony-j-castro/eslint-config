module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:perfectionist/recommended-natural-legacy",
    "plugin:@stylistic/disable-legacy",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
    {
      files: ["*.json"],
      rules: {
        "@typescript-eslint/no-unused-expressions": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@stylistic", "@typescript-eslint", "prettier", "perfectionist"],
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
      { blankLine: "always", next: "*", prev: ["case", "default"] },
      { blankLine: "always", next: "break", prev: "*" },
      { blankLine: "always", next: "return", prev: "*" },
    ],
    "@stylistic/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: false, avoidEscape: true },
    ],
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/no-empty-object-type": [
      "error",
      { allowInterfaces: "with-single-extends" },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "none" }],
    "arrow-body-style": ["error", "as-needed"],
    curly: ["error", "all"],
    "import/newline-after-import": "error",
    "import/no-named-as-default": "off",
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
    "perfectionist/sort-interfaces": ["error", { groupKind: "required-first" }],
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
      { groupKind: "required-first" },
    ],
    "perfectionist/sort-objects": "off",
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
    },
    perfectionist: {
      ignoreCase: false,
      type: "natural",
    },
    react: {
      version: "detect",
    },
  },
};
