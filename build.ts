import "./src/env";

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist/",
});
