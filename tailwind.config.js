module.exports = {
  theme: {
    inset: {
      "1/2": "50%",
    },
  },
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
  ],
};
