/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-purple": "#7126B5",
        "main-cream": "#FFE9CA",
        "main-orange": "#f8945c",
        "main-green": "#73CA5C",
        "second-purple": "#893FFC",
        "third-purple": "#B48DF1",
      },
      spacing: {
        100: "600px",
      },
    },
  },
  darkMode: false,
  plugins: [],
}
