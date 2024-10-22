const { fixupConfigRules } = require("@eslint/compat");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const stylistic = require("@stylistic/eslint-plugin");
const importPlugin = require("eslint-plugin-import");
const perfectionist = require("eslint-plugin-perfectionist");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const reactPlugin = require("eslint-plugin-react");
const tseslint = require("typescript-eslint");
const rules = require("./rules");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  ...fixupConfigRules(compat.extends("plugin:react-hooks/recommended")),
  perfectionist.configs["recommended-natural"],
  stylistic.configs["disable-legacy"],
  eslintPluginPrettierRecommended,
  ...rules,
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);
