/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "hsl( 0, 100%, 74% )",
        green: "hsl( 154, 59%, 51% )",
        blue: "hsl( 248, 32%, 49% )",
        darkBlue: "hsl( 249, 10%, 26% )",
        grayishBlue: "hsl( 246, 25%, 77% )"

      },
      fontFamily: {
        poppins: [ 'Poppins', 'sans-serif']
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}

