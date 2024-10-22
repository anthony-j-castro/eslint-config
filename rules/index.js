const stylisticPlugin = require("@stylistic/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const eslintRules = require("./eslint");
const importRules = require("./import");
const perfectionistRules = require("./perfectionist");
const stylisticRules = require("./stylistic");
const typescriptEslintRules = require("./typescript-eslint");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsParser,
      sourceType: "module",
    },
    plugins: {
      "@stylistic": stylisticPlugin,
    },
    rules: {
      ...eslintRules,
      ...importRules,
      ...perfectionistRules,
      ...stylisticRules,
      ...typescriptEslintRules,
      "prettier/prettier": "error",
      "react/jsx-no-useless-fragment": "error",
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
