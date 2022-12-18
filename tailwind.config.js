module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    fontFamily: {
      title: ["Bree Serif", "serif"],
      text: ["DM Sans", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      bold: 700,
    },
    lineHeight: {
      text: "185%",
    },
    extend: {},
  },
  plugins: [],
};
