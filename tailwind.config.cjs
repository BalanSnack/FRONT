/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: "#7B81BE",
      back: "#ECF0F3",
      pink: {
        100: "#F4E2E9",
        500: "#EECFDA",
        900: "#DF5184",
      },
      sky: {
        100: "#CADAF0",
        500: "#AEC4E3",
        900: "#3E6FB7",
      },
      selected: "#D7E1F1",
      font1: "#333333",
      font2: "#B7BBCB",
    },
    fontFamily: {
      suitRegular: ["SUIT-Regular", "sans-serif"],
      suitMedium: ["SUIT-Medium", "sans-serif"],
      suitSemiBold: ["SUIT-SemiBold", "sans-serif"],
      suitBold: ["SUIT-Bold", "sans-serif"],
      gmarketBold: ["GmarketSans-Bold", "sans-serif"],
    },
    borderRadius: {
      none: "0",
      sm: "5px",
      md: "10px",
      lg: "20px",
    },
    extend: {
      boxShadow: {
        card: "-4px -4px 6px rgba(255, 255, 255, 0.8), 3px 3px 8px rgba(166, 180, 200, 0.7)",
        main: "-2px 2px 4px rgba(195, 195, 195, 0.2), 2px -2px 4px rgba(195, 195, 195, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.9), 2px 2px 5px rgba(195, 195, 195, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(195, 195, 195, 0.5)",
        square: "-2.18px -2.18px 6.54px #FFFFFF, 2.18px 2.18px 6.54px rgba(174, 174, 192, 0.4)",
        selectedSquare:
          "inset -2.18px -2.18px 6.54px #FFFFFF, inset 2.18px 2.18px 6.54px rgba(174, 174, 192, 0.4)",
        round:
          "-2px 2px 4px rgba(208, 208, 208, 0.2), 2px -2px 4px rgba(208, 208, 208, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.9), 2px 2px 5px rgba(208, 208, 208, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(208, 208, 208, 0.5)",
        miniSquare: "1.5px 1.5px 3px rgba(174, 174, 192, 0.4), -1px -1px 3px #FFFFFF ",
        activeNavBtn:
          "-2px 2px 4px rgba(208, 208, 208, 0.2), 2px -2px 4px rgba(208, 208, 208, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.9), 2px 2px 5px rgba(208, 208, 208, 0.9)",
        comment: "-2.18px -2.18px 6.54px #FFFFFF, 2.18px 2.18px 6.54px rgba(174, 174, 192, 0.4)",
        selectedComment:
          "inset -2.18px -2.18px 6.54px #FFFFFF, inset 2.18px 2.18px 6.54px rgba(174, 174, 192, 0.4)",
        input:
          "inset -2px 2px 4px rgba(204, 204, 204, 0.2), inset 2px -2px 4px rgba(204, 204, 204, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(204, 204, 204, 0.9)",
        selectedInput:
          "inset -1px 1px 2px rgba(204, 204, 204, 0.2), inset 1px -1px 2px rgba(204, 204, 204, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.9), inset 1px 1px 2px rgba(204, 204, 204, 0.9)",
        inputPink:
          "1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(212, 212, 212, 0.5), inset -1px 1px 2px rgba(212, 212, 212, 0.2), inset 1px -1px 2px rgba(212, 212, 212, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.9), inset 1px 1px 3px rgba(212, 212, 212, 0.9)",
        selectedInputPink:
          "0.5px 0.5px 1px rgba(255, 255, 255, 0.3), -0.5px -0.5px 1px rgba(212, 212, 212, 0.5), inset -0.5px 0.5px 1px rgba(212, 212, 212, 0.2), inset 0.5px -0.5px 1px rgba(212, 212, 212, 0.2), inset -0.5px -0.5px 1px rgba(255, 255, 255, 0.9), inset 0.5px 0.5px 1px rgba(212, 212, 212, 0.9)",
        inputBlue:
          "inset -1px 1px 2px rgba(174, 187, 206, 0.2), inset 1px -1px 2px rgba(174, 187, 206, 0.2), inset -1px -1px 2px rgba(230, 249, 255, 0.9), inset 1px 1px 3px rgba(174, 187, 206, 0.9)",
        selectedInputBlue:
          "inset -0.5px 0.5px 1px rgba(174, 187, 206, 0.2), inset 0.5px -0.5px 1px rgba(174, 187, 206, 0.2), inset -0.5px -0.5px 1px rgba(230, 249, 255, 0.9), inset 0.5px 0.5px 1px rgba(174, 187, 206, 0.9)",
        pagination:
          "-1px 1px 2px rgba(197, 197, 199, 0.2), 1px -1px 2px rgba(197, 197, 199, 0.2), -1px -1px 2px rgba(255, 255, 255, 0.9), 1px 1px 3px rgba(197, 197, 199, 0.9)",
      },
    },
  },
  plugins: [],
};
