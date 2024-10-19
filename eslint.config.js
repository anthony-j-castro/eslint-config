const globals = require("globals");
const config = require("./index.js");

module.exports = [
  ...config,
  {
    rules: {
      "perfectionist/sort-objects": [
        "error",
        {
          destructureOnly: false,
        },
      ],
    },
  },
  {
    files: ["index.js", "eslint.config.js", "release.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
