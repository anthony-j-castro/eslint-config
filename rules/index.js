const stylisticPlugin = require("@stylistic/eslint-plugin");
const unicornPlugin = require("eslint-plugin-unicorn");
const eslintRules = require("./eslint");
const importRules = require("./import");
const perfectionistRules = require("./perfectionist");
const stylisticRules = require("./stylistic");
const typescriptEslintRules = require("./typescript-eslint");
const unicornRules = require("./unicorn");

module.exports = [
  {
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
  },
];
