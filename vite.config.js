import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserPage = repository?.endsWith(".github.io");

export default defineConfig({
  base: repository && !isUserPage ? `/${repository}/` : "/",
  plugins: [react()],
});
