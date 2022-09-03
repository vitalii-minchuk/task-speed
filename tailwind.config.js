/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myRed: "#C40000",
        myGray7: "rgba(0, 0, 0, 0.7)",
        myGray5: "rgba(0, 0, 0, 0.5)"
      },
      fontFamily: {
        body: ["Poppins"],
      },
      screens: {
        desktop: "1440px",
        phone: "460px",
      },
    },
  },
  plugins: [],
};
