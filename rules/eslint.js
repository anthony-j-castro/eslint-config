module.exports = {
  "array-callback-return": [
    "error",
    {
      allowImplicit: true,
    },
  ],
  "arrow-body-style": ["error", "as-needed"],
  curly: ["error", "all"],
  "func-style": ["error", "expression"],
  "no-console": "error",
  "no-lonely-if": "error",
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
  "object-shorthand": "error",
  radix: ["error", "always"],
};
