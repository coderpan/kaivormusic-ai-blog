import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const languages = JSON.parse(await readFile(path.join(root, "data/languages.json"), "utf8"));
const languageCodes = languages.map((language) => language.code);
const postFiles = (await readdir(path.join(root, "content/posts"))).filter((file) => file.endsWith(".json"));

let hasError = false;

for (const file of postFiles) {
  const post = JSON.parse(await readFile(path.join(root, "content/posts", file), "utf8"));
  const missing = languageCodes.filter((code) => !post.translations?.[code]);
  if (missing.length > 0) {
    console.error(`${file} is missing translations: ${missing.join(", ")}`);
    hasError = true;
  }

  for (const code of languageCodes) {
    const translation = post.translations?.[code];
    if (!translation) continue;
    for (const field of ["title", "description", "summary"]) {
      if (!translation[field] || translation[field].length < 20) {
        console.error(`${file}/${code} has a weak ${field}`);
        hasError = true;
      }
    }
    if (!Array.isArray(translation.body) || translation.body.length < 4) {
      console.error(`${file}/${code} needs at least 4 body paragraphs`);
      hasError = true;
    }
  }
}

if (hasError) {
  process.exit(1);
}

console.log(`Checked ${postFiles.length} post file(s) across ${languageCodes.length} locales.`);
