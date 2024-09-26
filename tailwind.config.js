module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      xxl: { max: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        yekan: ["W_yekan"],
      },
      colors: {
        customColor: {
          100: "#e25252",
          200: "#e25253",
          300: "#707070",
          400: "purple",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
