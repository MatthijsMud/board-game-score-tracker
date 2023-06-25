import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ssl from "@vitejs/plugin-basic-ssl";
import { z } from "zod";
import { execSync } from 'child_process';


// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const dev = mode === "development";
  const environmentVariables=  z.object({
    REPOSITORY_NAME: z.string().optional(),
  });

  const {
    REPOSITORY_NAME
  } = environmentVariables.parse(process.env);

  return {
    plugins: [
      react(),
      dev && ssl(),
    ],
    base: dev ? "./" : `/${REPOSITORY_NAME}/`,
    define: {
      __COMMIT_HASH__: JSON.stringify(execSync("git rev-parse --short HEAD").toString())
    }
  }
});
