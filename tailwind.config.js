/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myRosa1: "rgba(196, 0, 0, 0.03)",
        myRosa2: "rgba(196, 0, 0, 0.06)",
        myRosa3: "rgba(196, 0, 0, 0.09)",
        myRed: "#C40000",
        myBlue: "#48BBFC",
        myLinkColor: "#5F27BD",
        myLightGray: "#F5F5F5",
        myGray8: "rgba(0, 0, 0, 0.8)",
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
