import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
    outDir:"dist",
    outDir: 'your-desired-output-directory',
    base: '/your/deployment/base/path/', 
  
    outDir: 'custom-output-directory', // Change to your desired name
  },
 
  plugins: [tsconfigPaths(), react()],
});
