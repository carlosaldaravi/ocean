module.exports = {
  theme: {
    inset: {
      "1/2": "50%",
    },
    extend: {
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
