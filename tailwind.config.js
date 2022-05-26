const defaulTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Helveticabold: ["Helveticabold"],
        Helvetica: ["Helvetica"],
      },
      colors: {
        greenit: "rgb(20, 241, 149)",
        violetit: "rgb(153, 69, 255)",
        bgcolor: "rgb(35, 35, 37)",
        pinkshade: "rgb(235, 84, 188)",
        whiteshade: "rgb(183, 183, 183)",
      },
      screens: {
        ...defaulTheme.screens,
        nw: "1200px",
        xmax: "990px",
      },
    },
  },
  plugins: [],
};
