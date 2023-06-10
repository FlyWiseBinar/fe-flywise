/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "main-purple": "#7126B5",
        "main-cream": "#FFE9CA",
        "main-orange": "#f8945c",
        "third-purple": "#B48DF1",
        "main-green": "#73CA5C",
      }
    },
  },
  plugins: [],
}
