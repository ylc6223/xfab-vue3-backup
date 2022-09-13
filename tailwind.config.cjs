/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-gray": "#fbfbfb",
        "body-color": "var(--body-color)",
        "nav-color": "var(--nav-color)",
        "side-bar": "var(--side-nav)",
        "text-color": "var(--text-color)",
        "search-bar": "var(--search-bar)",
        "search-text": "var(--search-text)",
        "caption-color": "var(--caption-color)"
      },
      boxShadow: {
        "bottom": "0 0 18px rgba(0,0,0,0.2)"
      },
      height: {
        "120": "30rem"
      }
    }
  },
  plugins: []
};
