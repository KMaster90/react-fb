import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import postcss from "./postcss.config.js";

// https://vitejs.dev/config/
export default defineConfig({
    envDir:path.resolve(__dirname, 'src/environments'),
    resolve: {
        alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
    },
    plugins: [react()],
    css: {
        postcss
    }
})
