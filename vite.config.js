import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import myRoute from './src/router/config'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Sitemap({
            hostname: 'https://pokemon-adventurer.parsons125.in/',
            dynamicRoutes: myRoute.map((route) => route.path),
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
