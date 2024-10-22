module.exports = {
  "@stylistic/jsx-self-closing-comp": [
    "error",
    {
      component: true,
      html: true,
    },
  ],
  "@stylistic/padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      next: "*",
      prev: ["case", "default"],
    },
    {
      blankLine: "always",
      next: "break",
      prev: "*",
    },
    {
      blankLine: "always",
      next: "return",
      prev: "*",
    },
  ],
  "@stylistic/quotes": [
    "error",
    "double",
    {
      allowTemplateLiterals: false,
      avoidEscape: true,
    },
  ],
};
