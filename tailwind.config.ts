import {Config} from "tailwindcss";
import forms from "@tailwindcss/forms";
import daisyui from "daisyui"

export default {
    content: ["index.html", "./src/**/*.{ts,tsx,html}"],
    theme: {
        extend: {
            fontFamily: {
                "bangers": "Bangers",
            }
        },
    },
    plugins: [forms, daisyui],
} satisfies Config;
