// astro.config.ts
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkToc from "remark-toc";
import { remarkContainerDirectives } from './src/plugins/remark-container-directives.mjs'
import { remarkLeafDirectives } from './src/plugins/remark-leaf-directives.mjs'
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import remarkDirective from "remark-directive";
import { transformerFileName } from "./src/utils/transformers/fileName";
import { SITE } from "./src/config";
import react from "@astrojs/react";

import compress from "astro-compress";

import umami from "@yeskunall/astro-umami";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: SITE.website,
  integrations: [react(), compress({
    CSS: false,
    JavaScript: false,
    HTML: true,
    SVG: true,
    JSON: true,
    Logger: 1,
  }), umami({ id: "ac84cf86-b673-49a0-8579-c61b3c5f2dc4" }), icon({
    include: {
      mdi: ["*"],
      'simple-icons': ['*'],
    }
  }), mdx()],
  markdown: {
    remarkPlugins: [
      remarkDirective,
      remarkContainerDirectives,
      remarkLeafDirectives,
      remarkToc,
    ],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/js/[name].[hash].js",
          chunkFileNames: "assets/js/[name].[hash].js",
          assetFileNames: (assetInfo) => {
            // Use names array (new API) or fallback to name (old API)
            const fileName =
              assetInfo.names?.[0] ||
              (assetInfo as unknown as { name: string }).name;

            if (!fileName) {
              return `assets/[name].[hash][extname]`;
            }

            const info = fileName.split(".");
            const ext = info[info.length - 1];

            if (/css/i.test(ext)) {
              return `assets/css/[name].[hash][extname]`;
            }
            if (/svg/i.test(ext)) {
              return `assets/svg/[name].[hash][extname]`;
            }
            if (/png|jpe?g|gif|webp|avif|ico|bmp|tiff?/i.test(ext)) {
              return `assets/img/[name].[hash][extname]`;
            }
            if (/woff2?|eot|ttf|otf/i.test(ext)) {
              return `assets/fonts/[name].[hash][extname]`;
            }

            return `assets/[name].[hash][extname]`;
          },
        },
      },
    },
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    preserveScriptOrder: true,
  },
});