/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-grayish-blue": "hsl(236, 13%, 42%)",
      "grayish-blue": "hsl(233, 8%, 79%)",
      "off-white": "hsl(36, 100%, 99%)",
      "soft-orange": "hsl(35, 77%, 62%)",
      "soft-red": "hsl(5, 85%, 63%)",
      "very-dark-blue": "hsl(240, 100%, 5%)",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
    letterSpacing: {
      "supa-wide": "0.35em",
      ...defaultTheme.letterSpacing,
    },
  },
  plugins: [],
}
