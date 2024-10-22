const tsParser = require("@typescript-eslint/parser");
const eslintRules = require("./eslint");
const importRules = require("./import");
const perfectionistRules = require("./perfectionist");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser,
      sourceType: "module",
    },
    rules: {
      ...eslintRules,
      ...importRules,
      ...perfectionistRules,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: true,
      },
      react: {
        version: "detect",
      },
    },
  },
];
