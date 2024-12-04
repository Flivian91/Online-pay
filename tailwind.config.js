/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-center": "radial-gradient(circle, #009cde, #003087)",
      },
      colors: {
        headingPrimary: "#4a4a4a",
        buttonTextColor: "#0070ba",
        primaryOrange: "#fd9502",
        primaryPink: "#dd0060",
        topBackground: "#009cde",
        bottomBackground: "#003087",
        customGray: "#f5f7fa",
      },
    },
  },
  plugins: [],
};
