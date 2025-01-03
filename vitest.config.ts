/// <reference types="vitest" />

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./test/config/setup.ts"],
        include: [
            "src/**/*.spec.tsx",
            "src/**/*.spec.ts",
            "src/__tests__/**/spec.ts",
        ],
        coverage: {
            ...configDefaults.coverage,
            provider: "v8",
            reportsDirectory: "./test/coverage",
            reporter: ["text", "html", "json"],
            include: ["src/**/*.tsx", "src/**/*.ts", "test/unit/**/*.ts"],
            exclude: [
                ...configDefaults.coverage.exclude!,
                "src/app/*.ts", // Exclude manifest.ts, robots.ts, sitemap.ts, etc.
            ],
        },
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    },
});
