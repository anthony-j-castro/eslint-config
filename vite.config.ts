import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      fileName: (_format, entryName) => `${entryName}.js`,
      formats: ["es"],
    },
    rolldownOptions: {
      output: {
        preserveModules: true,
        exports: "auto",
      },
      external: (id: string) => !id.startsWith(".") && !path.isAbsolute(id),
      experimental: {
        attachDebugInfo: "none",
      },
    },
    minify: false,
  },
  plugins: [dts()],
});
