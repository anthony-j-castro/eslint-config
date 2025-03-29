# @anthony-j-castro/eslint-config

Reusable ESLint config for React & TypeScript projects by @anthony-j-castro.

## Installation

To install the latest version as a dependency of a project:

```bash
npm install --save-dev "https://github.com/anthony-j-castro/eslint-config.git#semver:4.0.6"
```

Then, copy and paste this starter config in a new `eslint.config.mjs` file:

```javascript
import config from "@anthony-j-castro/eslint-config";

export default [...config];
```

## Releasing a new version

This repo uses
[`semantic-release`](https://github.com/semantic-release/semantic-release) to
automatically create and tag new versions on every merge to `main`.
