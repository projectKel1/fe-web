/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        bgBtn: '#4DAC98',
        bgCard: '#DCFCE7',
        bgMain: '#FAFBFC',
        hoverBtn: '#3C8273'
      },
    },
  },
  plugins: [],
}