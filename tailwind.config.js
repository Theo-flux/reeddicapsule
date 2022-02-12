const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      reeddigrey: "#5C5757",
      reedditeal: "#128324",
      reeddiblue: "#051d29",
      reeddilemon: "#04d419",
      reeddibrown: "#8e8635",
      "cstm-grey": "var(--color-cstm-grey)",
      "cstm-green": "var(--color-cstm-green)",
      "cstm-black": "var(--color-cstm-black)",
      "cstm-lime": "var(--color-cstm-lime)",
      "cstm-olive": "var(--color-cstm-olive)",
    },

    extend: {
      fontFamily: {
        matter: ["Matter", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        "cstm-2xl": "0 5px 15px -4px rgba(8,160,92,0.95)",
      },
    },
  },
  plugins: [],
};
