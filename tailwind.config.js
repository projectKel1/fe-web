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
        bgBtnRed: '#A30D11',
        bgCard: '#DCFCE7',
        bgMain: '#FAFBFC',
        hoverBtn: '#3C8273',
        subTitle: '#737791'
      },
      borderRadius: {
        cardBase: '20px',
        btn: '16px'
      }
    },
  },
  plugins: [],
}