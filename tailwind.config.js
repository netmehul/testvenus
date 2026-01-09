/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'system-ui', 'sans-serif'],
        display: ['"SF Pro Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
