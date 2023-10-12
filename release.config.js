const config = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/release-notes-generator",
  ],
};

module.exports = config;
