/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["bumblebee", "dark"],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

