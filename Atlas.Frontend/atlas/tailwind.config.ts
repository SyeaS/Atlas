import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/@spartan-ng/**/*.{html,ts}",
    ],
    plugins: [
        require("tw-animate-css"),
    ],
};

export default config;