/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#1C1C1C",
        tert: "#312EB5",
      },
      fontFamily: {},
      content: {},
    },
    screens: {
      xs: "480px",
      xsm: "600px",
      sm: "768px",
      md: "1060px",
      lg: "1300px",
    },
  },
  plugins: [],
};
