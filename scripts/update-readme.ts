import fs from "node:fs";
import path from "node:path";
import minimist from "minimist";

const README_PATH = path.join(__dirname, "../README.md");
const INSTALL_SNIPPET_REGEX =
  /(?<=npm install --save-dev "https:\/\/github.com\/anthony-j-castro\/eslint-config\.git#semver:)\d+\.\d+\.\d+(?=")/g;

const args = minimist(process.argv.slice(2));

const nextVersion = args["next-version"];

if (!nextVersion) {
  throw new Error("Missing --next-version flag.");
}

const content = fs.readFileSync(README_PATH, "utf8");

const updatedContent = content.replace(INSTALL_SNIPPET_REGEX, "5.6.7.8");

fs.writeFileSync(README_PATH, updatedContent);
