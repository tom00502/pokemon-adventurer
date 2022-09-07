import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import myRoute from './src/router/config'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Sitemap({
            hostname: 'https://pokemon-adventurer.parsons125.in/',
            dynamicRoutes: myRoute.map((route) => route.path),
        }),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: [
                'favicon.ico',
                'apple-touch-icon.png',
                'masked-icon.svg',
            ],
            manifest: {
                name: '寵物冒險助理',
                short_name: '寵物冒險助理',
                description: '玩寵物冒險家的好幫手',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
