# @anthony-j-castro/eslint-config

Reusable ESLint config for React & TypeScript projects by @anthony-j-castro.

## Installation

To install the latest version as a dependency of a project:

```bash
npm install --save-dev "https://github.com/anthony-j-castro/eslint-config.git#semver:1.1.0"
```

Since this config uses various other configs and plugins as peer dependencies,
we also need to install them:

```bash
npm install --save-dev --save-exact @stylistic/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sort-destructure-keys eslint-plugin-typescript-sort-keys prettier typescript
```

Finally, copy and paste this starter config in a new `eslintrc.js` file:

```javascript
module.exports = {
  env: { browser: true, node: true },
  extends: ["@anthony-j-castro/eslint-config"],
};
```

## Releasing a new version

This repo uses
[`semantic-release`](https://github.com/semantic-release/semantic-release) to
automatically create and tag new versions.

To release a new version:

1. Navigate to the
   ["Create release" workflow](https://github.com/anthony-j-castro/eslint-config/actions/workflows/release.yml).
2. Click on the "Run workflow" dropdown, ensure the "Run with dry-run flag"
   option is checked, and click "Run workflow".
3. Review the proposed version number and release notes in the workflow logs.
4. If everything is correct, repeat steps 1 and 2 but uncheck the "Run with
   dry-run flag" option.
