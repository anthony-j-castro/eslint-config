import globals from "globals";
import config from "./index.js";

export default [
  ...config,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "perfectionist/sort-objects": [
        "error",
        {
          destructureOnly: false,
        },
      ],
    },
  },
];
