export default {
  "perfectionist/sort-imports": [
    "error",
    {
      customGroups: {
        value: {
          fontsource: ["@fontsource-variable/*"],
        },
      },
      groups: [
        "builtin",
        "external",
        "internal",
        "sibling",
        "unknown",
        "index",
        "fontsource",
        "style",
      ],
      newlinesBetween: "never",
    },
  ],
  "perfectionist/sort-interfaces": [
    "error",
    {
      groupKind: "required-first",
    },
  ],
  "perfectionist/sort-intersection-types": [
    "error",
    {
      groups: ["unknown", "object"],
    },
  ],
  "perfectionist/sort-jsx-props": [
    "error",
    {
      groups: ["unknown", "shorthand"],
    },
  ],
  "perfectionist/sort-named-imports": [
    "error",
    {
      groupKind: "values-first",
    },
  ],
  "perfectionist/sort-object-types": [
    "error",
    {
      groupKind: "required-first",
    },
  ],
  "perfectionist/sort-objects": [
    "error",
    {
      destructureOnly: true,
    },
  ],
  "perfectionist/sort-union-types": [
    "error",
    {
      groups: ["unknown", "nullish"],
    },
  ],
};
