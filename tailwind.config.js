module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#bababa", 600: "#808080", 900: "#222222", "600_01": "#7a7a7a" },
        white: { A700_7f: "#ffffff7f", A700: "#ffffff", A700_33: "#ffffff33" },
        black: { 900: "#0d0d0d", "900_01": "#000000" },
      },
      boxShadow: {},
      fontFamily: { dmsans: "DM Sans" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #feecff,#fecaff,#feb5ff,#ffdbe7,#fff4d6,#f3fcd7,#d2f5ee,#c3efff,#fbefff)",
        gradient1: "linear-gradient(180deg, #000000,#200d42,#4f21a1,#a46edb)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
