const stylisticPlugin = require("@stylistic/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const unicornPlugin = require("eslint-plugin-unicorn");
const eslintRules = require("./eslint");
const importRules = require("./import");
const perfectionistRules = require("./perfectionist");
const stylisticRules = require("./stylistic");
const typescriptEslintRules = require("./typescript-eslint");
const unicornRules = require("./unicorn");

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
      unicorn: unicornPlugin,
    },
    rules: {
      ...eslintRules,
      ...importRules,
      ...perfectionistRules,
      ...stylisticRules,
      ...unicornRules,
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
