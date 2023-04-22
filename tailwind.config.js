/** @type {import('tailwindcss').Config} */
import * as TailwindForm from "@tailwindcss/forms";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [TailwindForm],
    theme: {
        extend: {},
    },
    // safelist: [
    //     {pattern: /.*/}
    // ]
};
