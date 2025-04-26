import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    base: "/myCv/",
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            // @ts-ignore
            "@entities" : path.resolve(__dirname, "./src/shared"),
            "@features" : path.resolve(__dirname, "./src/features"),
            "@shared": path.resolve(__dirname, "./src/shared"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
    },
});
