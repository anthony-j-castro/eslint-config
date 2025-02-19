import globals from "globals";
import config from "./index.js";

export default [
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
    files: [
      "index.js",
      "eslint.config.js",
      "release.config.js",
      "rules/**/*.js",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
