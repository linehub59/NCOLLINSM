
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "icon-192.svg",
        "icon-512.svg"
      ],

      manifest: {
        id: "/",
        name: "NCOLLINSM - Personal Portfolio",
        short_name: "NCOLLINSM",
        description: "My personal portfolio, projects, skills and services.",

        theme_color: "#1769E0",
        background_color: "#FFFFFF",

        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        scope: "/",

        icons: [
          {
            src: "/icon-192.svg",
            sizes: "192x192",
            type: "image/svg+xml",
            purpose: "any"
          },
          {
            src: "/icon-512.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any"
          }
        ]
      },

      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,svg,png,ico,woff2}"]
      }
    })
  ]
});
