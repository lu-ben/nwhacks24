/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#D9D9D9',
        'dark-gray': '#9F9AA4',
      }
    },
  },
  plugins: [],
}
