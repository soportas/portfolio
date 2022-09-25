/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Crimson Pro", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at left top, var(--tw-gradient-stops))",
      },
      colors: {
        sacramento: {
          DEFAULT: "#1C3738",
          dark: "#15292A",
        },
        parchment: "#FFFBEE",
        gold: "#A48058",
      },
    },
  },
  plugins: [],
};
