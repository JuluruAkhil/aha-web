module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-1": "#1d1e20",
        "background-page": "#232326",
        boring: "#96969D",
      },
      screens: {
        laptop: "900px",
      },
    },
  },
  plugins: [],
}
