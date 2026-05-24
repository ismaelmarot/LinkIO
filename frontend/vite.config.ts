import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  name: "GoTrack",
  short_name: "GoTrack",
  description: "Sports activity tracker",
  theme_color: "#121212",
  background_color: "#121212",
  display: "standalone" as const,
  orientation: "portrait" as const,
  start_url: "/",
  icons: [
    {
      src: "icons/icon-192x192.png",
      sizes: "192x192" as const,
      type: "image/png" as const,
    },
    {
      src: "icons/icon-512x512.png",
      sizes: "512x512" as const,
      type: "image/png" as const,
    },
  ],
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icons/*.png"],
      manifest,
      workbox: {
        globPatterns: ["**/*.{js,css,html,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/[abc]\.basemaps\.cartocdn\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "map-tiles",
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
          {
            urlPattern: /^https?:\/\/.*\/api\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
      },
    }),
    {
      name: "manifest-middleware",
      configureServer(server: any) {
        server.middlewares.use("/manifest.webmanifest", (_req: any, res: any) => {
          res.setHeader("Content-Type", "application/manifest+json");
          res.end(JSON.stringify(manifest));
        });
      },
    },
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
