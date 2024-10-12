module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:perfectionist/recommended-alphabetical-legacy",
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
        groups: [
          "builtin",
          "external",
          "internal",
          "sibling",
          "index",
          "unknown",
          "side-effect-style",
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
      order: "asc",
      type: "alphabetical",
    },
    react: {
      version: "detect",
    },
  },
};
