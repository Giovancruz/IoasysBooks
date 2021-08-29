module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: "#AB2680",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
