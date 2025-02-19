import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import minimist from "minimist";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const README_PATH = path.join(__dirname, "../README.md");
const INSTALL_SNIPPET_REGEX =
  /(?<=npm install --save-dev "https:\/\/github.com\/anthony-j-castro\/eslint-config\.git#semver:)\d+\.\d+\.\d+(?=")/g;

const args = minimist(process.argv.slice(2));

const nextVersion = args["next-version"];

if (!nextVersion) {
  throw new Error("The --next-version argument is required.");
}

const content = fs.readFileSync(README_PATH, "utf8");

const updatedContent = content.replaceAll(INSTALL_SNIPPET_REGEX, nextVersion);

fs.writeFileSync(README_PATH, updatedContent);
