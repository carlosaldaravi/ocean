module.exports = {
  theme: {
    fontSize: {
      xxs: ".695rem",
      xs: ".75rem",
      s: ".825rem",
      sm: ".875rem",
      tiny: ".925rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    inset: {
      "1/2": "50%",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "-1": "-0.25rem",
      "-2": "-0.5rem",
      "-3": "-0.75rem",
      "-4": "-1rem",
      "-5": "-1.25rem",
      "-6": "-1.5rem",
      "-8": "-2rem",
      "-10": "-2.5rem",
      "-12": "-3rem",
      "-14": "-3.5rem",
      "-16": "-4rem",
    },
    extend: {
      colors: {
        primary: {
          "100": "#222831",
          "200": "#393e46",
          "300": "#00adb5",
          "400": "#eeeeee",
        },
        secondary: {
          "100": "#e4f9f5",
          "200": "#30e3ca",
          "300": "#11999e",
          "400": "#40514e",
        },
        // primary: {
        //   "100": "#f9f7f7",
        //   "200": "#dbe2ef",
        //   "300": "#3f72af",
        //   "400": "#112d4e",
        // },
        // secondary: {
        //   "100": "#e4f9f5",
        //   "200": "#30e3ca",
        //   "300": "#11999e",
        //   "400": "#40514e",
        // },
      },
      opacity: {
        "10": "0.1",
        "20": "0.2",
        "95": "0.95",
      },
    },
  },
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
  ],
};
