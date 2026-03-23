import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
  splitting: false,
  target: "es2019",
  minify: true,

  esbuildOptions: (options) => {
    options.loader = {
      ...(options.loader ?? {}),
      ".css": "css",
    };
  },
});
