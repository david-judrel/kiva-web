// Copies the shared design tokens (../design-tokens/kiva.css, monorepo source of truth)
// into src/styles/kiva-tokens.css. In the standalone kiva-web repo (e.g. on Netlify) the
// parent folder does not exist: the committed copy is used as-is.
import { copyFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../../design-tokens/kiva.css", import.meta.url));
const target = fileURLToPath(new URL("../src/styles/kiva-tokens.css", import.meta.url));

if (existsSync(source)) {
  copyFileSync(source, target);
  console.log("design tokens synced from ../design-tokens/kiva.css");
} else {
  console.log("standalone build: using committed src/styles/kiva-tokens.css");
}
