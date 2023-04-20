import type { Config } from 'tailwindcss'
import TailwindForm from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {},
  },
  plugins: [TailwindForm],
} as Config;
