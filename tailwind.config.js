/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myGreen: "blue",
      },
      fontFamily: {
        body: ['Poppins'],
      },
      screens: {
        desktop: "1440px",
        phone: "460px"
      }
    },
  },
  plugins: [],
}
