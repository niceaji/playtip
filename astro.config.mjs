import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://playtip.kr",

  integrations: [mdx(), tailwind(), sitemap()],
  markdown: {
    // extendDefaultPlugins: true,
    // syntaxHighlight: "prism",
  },
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
