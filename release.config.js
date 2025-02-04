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
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { section: "Dependencies", type: "build" },
            { section: "Features", type: "feat" },
            { section: "Features", type: "feature" },
            { section: "Bug Fixes", type: "fix" },
            { section: "Performance Improvements", type: "perf" },
            { section: "Reverts", type: "revert" },
            { hidden: true, section: "Documentation", type: "docs" },
            { hidden: true, section: "Styles", type: "style" },
            { hidden: true, section: "Miscellaneous Chores", type: "chore" },
            { hidden: true, section: "Code Refactoring", type: "refactor" },
            { hidden: true, section: "Tests", type: "test" },
            { hidden: true, section: "Continuous Integration", type: "ci" },
          ],
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
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
        assets: [
          "CHANGELOG.md",
          "README.md",
          "package.json",
          "package-lock.json",
        ],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

module.exports = config;
