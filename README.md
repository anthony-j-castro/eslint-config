# @anthony-j-castro/eslint-config

Reusable ESLint config for React & TypeScript projects by @anthony-j-castro.

## Installation

To install the latest version as a dependency of a project:

```bash
npm install --save-dev "https://github.com/anthony-j-castro/eslint-config.git#semver:1.2.0"
```

Then, copy and paste this starter config in a new `eslintrc.js` file:

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
