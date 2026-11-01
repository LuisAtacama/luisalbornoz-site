import { readFileSync, writeFileSync } from "node:fs";

// Apply a narrowly scoped addition to the exact production source snapshot.
// Both the existing dialog and standalone ficha consume the same project links.
const dataPath = new URL("../data/portfolio.ts", import.meta.url);
const cssPath = new URL("../app/globals.css", import.meta.url);
const data = readFileSync(dataPath, "utf8");
const css = readFileSync(cssPath, "utf8");
const marker = "// BootLab Santa Cruz: ficha resource button";

if (!data.includes("alrededor-del-fuego") || !/\bprojects\b/.test(data)) {
  throw new Error("Expected original portfolio project data was not found; no files changed.");
}

if (!data.includes(marker)) {
  writeFileSync(dataPath, data + `\n${marker}
const bootlabFicha = projects.find((project) => project.id === "alrededor-del-fuego");
if (!bootlabFicha) throw new Error("Alrededor del fuego project not found");
if (!bootlabFicha.links.some((link) => link.url === "/bootlab-santacruz")) {
  bootlabFicha.links.unshift({ label: "BootLab Santa Cruz", url: "/bootlab-santacruz" });
}
`);
}

const cssMarker = "/* BootLab Santa Cruz: existing ficha button only */";
if (!css.includes(cssMarker)) {
  writeFileSync(cssPath, css + `\n${cssMarker}
:is(.detail-resources, .standalone-project__resource-links) a[href^="/bootlab-santacruz"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .65rem;
  min-height: 44px;
  padding: .9rem 1.25rem;
  border: 1px solid #11110f;
  background: #11110f;
  color: #f7f6f2;
  text-decoration: none;
  line-height: 1.3;
}
:is(.detail-resources, .standalone-project__resource-links) a[href^="/bootlab-santacruz"]:hover {
  background: #373732;
  color: #fff;
}
:is(.detail-resources, .standalone-project__resource-links) a[href^="/bootlab-santacruz"]:focus-visible {
  outline: 2px solid #9d402c;
  outline-offset: 4px;
}
`);
}
