/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalBlue: {
          300: "#a6a4ea",
          400: "#5046e4",
        },
        purple: {
          100: "#f9fbfc",
          200: "#edf2fc"
        }
      },
    },
  },
  plugins: [],
};
