const config = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [{ release: "patch", type: "build" }],
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/exec",
      {
        prepareCmd:
          "npm run update-readme -- --next-version=${nextRelease.version}",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["README.md", "package.json", "package-lock.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

module.exports = config;
