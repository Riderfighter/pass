/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      },
      colors: {
        "passe-darkest": "#101011",
        "passe-dark": "#18181B",
        "passe-white": "#DCDCDC",
        "passe-unfocused": "#777885",
        "passe-focused": "#A1A2A9",
        "passe-selected": "#FCFBFC",
        "passe-separator": "#19191E",
        "passe-border": "#26262B"
      }
    }
  },
  plugins: []
};
