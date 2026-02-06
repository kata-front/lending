import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as sass from "sass";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const assetsDir = path.join(distDir, "assets");

const cleanDir = (dir) => {
  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch (error) {
    if (error && error.code !== "EPERM") {
      throw error;
    }
  }
};

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));

const rewriteImportSpec = (specifier) => {
  if (!specifier.startsWith(".")) return specifier;
  const clean = specifier.split(/[?#]/)[0];
  const ext = path.posix.extname(clean);
  if (ext) return specifier;
  return `${specifier}.js`;
};

const rewriteJsImports = (filePath) => {
  let code = fs.readFileSync(filePath, "utf8");

  code = code.replace(/^\s*import\s+['"][^'"]+\.scss['"];\s*$/gm, "");

  code = code.replace(
    /(from\s+['"])(\.[^'"]+)(['"])/g,
    (_match, start, spec, end) => `${start}${rewriteImportSpec(spec)}${end}`
  );

  code = code.replace(
    /(import\(\s*['"])(\.[^'"]+)(['"]\s*\))/g,
    (_match, start, spec, end) => `${start}${rewriteImportSpec(spec)}${end}`
  );

  fs.writeFileSync(filePath, code);
};

const walkFiles = (dir, ext, acc = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, ext, acc);
    } else if (entry.isFile() && fullPath.endsWith(ext)) {
      acc.push(fullPath);
    }
  }
  return acc;
};

cleanDir(distDir);
ensureDir(distDir);

const tscPath = path.join(rootDir, "node_modules", "typescript", "bin", "tsc");
execFileSync(process.execPath, [tscPath, "-p", path.join(rootDir, "tsconfig.build.json")], {
  stdio: "inherit"
});

ensureDir(assetsDir);
const cssResult = sass.compile(path.join(rootDir, "src", "styles", "bundle.scss"), {
  style: "expanded"
});
fs.writeFileSync(path.join(assetsDir, "app.css"), cssResult.css);

for (const filePath of walkFiles(distDir, ".js")) {
  rewriteJsImports(filePath);
}

const htmlTemplate = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");
const reactVersion = readJson(path.join(rootDir, "node_modules", "react", "package.json")).version;
const reactDomVersion = readJson(path.join(rootDir, "node_modules", "react-dom", "package.json")).version;

const importMap = `<script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@${reactVersion}",
      "react-dom/client": "https://esm.sh/react-dom@${reactDomVersion}/client",
      "react/jsx-runtime": "https://esm.sh/react@${reactVersion}/jsx-runtime"
    }
  }
</script>`;

const scriptTag = `<script type="module" src="/main.js"></script>`;
const cssTag = `<link rel="stylesheet" href="/assets/app.css" />`;

let htmlOutput = htmlTemplate.replace(
  /<script\s+type="module"\s+src="\/src\/main\.tsx"><\/script>/,
  scriptTag
);

if (!htmlOutput.includes("/assets/app.css")) {
  htmlOutput = htmlOutput.replace("</head>", `  ${cssTag}\n  </head>`);
}

if (!htmlOutput.includes('type="importmap"')) {
  htmlOutput = htmlOutput.replace("</head>", `  ${importMap}\n  </head>`);
}

fs.writeFileSync(path.join(distDir, "index.html"), htmlOutput);
