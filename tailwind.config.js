/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: "#dcca87",
        dimBlack: "#0c0c0c",
        crimson: "#f5efdb",
        dimWhite: "#545454",
        grayLight: "#aaaaaa",
        darkGrey: "#222121",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cormorant: ["Cormorant Upright", "sans-serif"],
        great: ["Great Vibes", "sans-serif"],
      },
    },
    screens: {
      xs: "280px",
      ss: "425px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "2000px",
    },
  },
  plugins: [],
};
