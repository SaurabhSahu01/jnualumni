/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'blueaccent': '#0c437b',
     'bgoffwhite': '#e8ebdb',
    })
  },
  plugins: [],
}
