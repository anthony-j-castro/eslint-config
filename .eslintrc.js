module.exports = {
  env: { node: true },
  extends: "./index.js",
  ignorePatterns: ["**/*.json"],
  root: true,
  rules: {
    "perfectionist/sort-objects": ["error", { destructureOnly: false }],
  },
};
