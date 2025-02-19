export default {
  "@typescript-eslint/array-type": [
    "error",
    {
      default: "array-simple",
    },
  ],
  "@typescript-eslint/no-empty-object-type": [
    "error",
    {
      allowInterfaces: "with-single-extends",
    },
  ],
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      caughtErrors: "none",
    },
  ],
};
