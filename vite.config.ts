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
            "@styles": path.resolve(__dirname, "./src/shared/styles"),
            "@entities": path.resolve(__dirname, "./src/entities"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
    },
});
