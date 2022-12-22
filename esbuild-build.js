const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");

esbuild
  .build({
    entryPoints: ["./src/index.js"],
    outfile: "./public/dist/app.js",
    minify: true,
    bundle: true,
    loader: {
      ".js": "jsx",
    },
    plugins: [inlineImage()],
  })
  .catch(() => process.exit(1));
